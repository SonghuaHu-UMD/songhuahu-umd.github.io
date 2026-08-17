#!/usr/bin/env node
/*
 * Fetch the three summary metrics from a Google Scholar profile.
 *
 * Usage:   node scripts/fetch-scholar-metrics.js
 * Output:  _data/scholar_metrics.json
 *
 * _data rather than assets: Jekyll exposes anything in _data as site.data, so about.md
 * renders these numbers server-side with Liquid -- no client fetch, no empty strip while
 * JS runs, and they survive JS being off. The refresh workflow asks for a Pages build
 * whenever it commits, which is what makes the rendered page follow the data.
 *
 * Google Scholar has no API, so this reads the profile page's own metrics table. That path
 * is explicitly permitted by scholar.google.com/robots.txt (`Allow: /citations?user=`); the
 * publication-list pagination robots.txt does disallow (`/citations?*cstart=`) is never
 * requested, because all three numbers live in the summary table on the first page.
 *
 * Why scrape at all when build-coauthor-network.js already derives citations, h-index and
 * i10-index from OpenAlex: the two disagree by a wide margin (OpenAlex saw 1910/19/27 where
 * Scholar reports 2543/22/33), because Scholar also counts theses, preprints, reports and
 * venues OpenAlex has not indexed. Scholar's numbers are the ones cited in CVs and grant
 * applications, so they are worth having verbatim rather than approximated.
 */
const fs = require('fs');
const path = require('path');

const PROFILE_ID = 'uVIbQyAAAAAJ';
const OUT_PATH = path.resolve(__dirname, '..', '_data', 'scholar_metrics.json');

/* hl=en is load-bearing rather than cosmetic: rows are matched on their English labels,
   and Scholar otherwise localises them to whatever the caller's IP suggests -- which for
   a GitHub runner is not predictable. */
const PROFILE_URL = `https://scholar.google.com/citations?user=${PROFILE_ID}&hl=en`;

/* A request with default client headers has its connection reset before any HTTP response
   arrives: Scholar fingerprints callers, and curl's or undici's bare header set is not a
   browser's. Sending what Chrome sends is enough to be served the page normally. Node's
   fetch adds Accept-Encoding and decompresses the reply on its own. */
const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
};

/* 429 is how Scholar says "you look like a robot", and datacenter egress -- every GitHub
   runner -- draws it far more readily than a laptop does. Retrying inside one run will not
   launder a blocked IP, but the block is often per-request rather than sticky, so a few
   spaced attempts convert a good share of misses into hits. 403 joins the retry set for the
   same reason; a genuine permanent 403 simply exhausts the attempts and fails loudly. */
const RETRY_STATUS = new Set([403, 408, 429, 500, 502, 503, 504]);
const RETRY_DELAYS_MS = [3000, 10000, 30000, 60000];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchHTML(url, label) {
  for (let attempt = 0; ; attempt++) {
    let failure, retryable, waitOverrideMs;
    try {
      const r = await fetch(url, { headers: HEADERS, redirect: 'follow' });
      if (r.ok) return await r.text();
      failure = new Error(`${label} failed: HTTP ${r.status}`);
      retryable = RETRY_STATUS.has(r.status);
      const after = Number(r.headers.get('retry-after'));
      if (Number.isFinite(after) && after > 0) waitOverrideMs = Math.min(after * 1000, 120000);
    } catch (err) {
      /* The reset connection described above lands here, as do DNS and TLS trouble. None
         of them say anything about the request being wrong, so all are worth another go. */
      failure = err;
      retryable = true;
    }
    if (!retryable || attempt >= RETRY_DELAYS_MS.length) throw failure;
    const wait = waitOverrideMs || RETRY_DELAYS_MS[attempt];
    console.warn(`  ${failure.message} - retrying in ${wait / 1000}s (attempt ${attempt + 2} of ${RETRY_DELAYS_MS.length + 1})`);
    await sleep(wait);
  }
}

/* The summary table is one row per metric:
     <td class="gsc_rsb_sc1"><a ...>Citations</a></td>
     <td class="gsc_rsb_std">2543</td>    <- all time
     <td class="gsc_rsb_std">2458</td>    <- last five years
   Rows are keyed by label instead of by position so that a metric Google adds, removes or
   reorders cannot silently shift which number lands in which field. Only the first value
   cell per row is read, which is the all-time column. */
const LABEL_TO_KEY = { 'citations': 'citations', 'h-index': 'h_index', 'i10-index': 'i10_index' };

function parseMetrics(html) {
  const out = {};
  for (const row of html.split(/<tr\b/i).slice(1)) {
    const label = (row.match(/class="gsc_rsb_sc1"[^>]*>\s*(?:<a[^>]*>)?\s*([^<]+)/i) || [])[1];
    const value = (row.match(/class="gsc_rsb_std"[^>]*>\s*(\d+)\s*</i) || [])[1];
    if (!label || value === undefined) continue;
    const key = LABEL_TO_KEY[label.trim().toLowerCase()];
    if (key && out[key] === undefined) out[key] = Number(value);
  }
  return out;
}

/* Same contract as the other builders: everything carries a `generated` date, so comparing
   raw bytes would report a change every run and the weekly job would commit noise forever.
   Compare everything but the date, and when only the date would move, leave the file alone. */
function writeIfChanged(file, data, indent) {
  const body = JSON.stringify(data, null, indent);
  const withoutDate = (text) => {
    try {
      const { generated, ...rest } = JSON.parse(text);
      return JSON.stringify(rest);
    } catch (e) { return null; }   /* missing or malformed: fall through and overwrite */
  };
  if (fs.existsSync(file) && withoutDate(fs.readFileSync(file, 'utf8')) === withoutDate(body)) {
    return false;
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, body);
  return true;
}

/* Scholar serves a blocked caller a CAPTCHA page that is still HTTP 200, so a clean status
   code proves nothing -- whether the three numbers parsed is the only honest test of having
   reached the real profile. Refusing to write beats overwriting a good file with zeros. */
const REQUIRED = ['citations', 'h_index', 'i10_index'];

/* Scholar's totals do drift downward a little when it merges duplicate records, so a small
   dip is real data, not a bug. A collapse is not: it means a partially rendered page parsed
   into plausible-looking but wrong numbers. Allow the former, refuse the latter. */
const DROP_TOLERANCE = 0.9;

function previous() {
  try { return JSON.parse(fs.readFileSync(OUT_PATH, 'utf8')); } catch (e) { return null; }
}

async function main() {
  const html = await fetchHTML(PROFILE_URL, 'Google Scholar profile fetch');
  const metrics = parseMetrics(html);

  const missing = REQUIRED.filter(k => !Number.isFinite(metrics[k]));
  if (missing.length) {
    /* Distinguish the two ways this happens, because the fixes are entirely different:
       a CAPTCHA/consent interstitial means try again later or from another IP, while a
       real profile page that no longer parses means Google changed its markup and the
       selectors above need updating. */
    const blocked = /captcha|unusual traffic|not a robot/i.test(html);
    console.error(`Google Scholar metrics missing: ${missing.join(', ')}`);
    console.error(blocked
      ? '  The response looks like a bot check rather than the profile page.'
      : `  The page parsed but the metrics table did not match (${html.length} bytes) - Scholar may have changed its markup.`);
    console.error(`  ${OUT_PATH} left untouched.`);
    process.exit(1);
  }
  if (metrics.citations < metrics.h_index) {
    console.error(`Implausible metrics (citations ${metrics.citations} < h-index ${metrics.h_index}); ${OUT_PATH} left untouched.`);
    process.exit(1);
  }

  const prev = previous();
  if (prev && Number.isFinite(prev.citations) && metrics.citations < prev.citations * DROP_TOLERANCE) {
    console.error(`Citations dropped from ${prev.citations} to ${metrics.citations}, more than the ${Math.round((1 - DROP_TOLERANCE) * 100)}% tolerance allows.`);
    console.error(`  Treating this as a bad read; ${OUT_PATH} left untouched.`);
    process.exit(1);
  }

  const written = writeIfChanged(OUT_PATH, {
    generated: new Date().toISOString().slice(0, 10),
    source: 'Google Scholar',
    profile_url: PROFILE_URL,
    citations: metrics.citations,
    /* Thousands separator done here rather than in the template: Liquid has no
       number-formatting filter, and faking one with divided_by/modulo is far more code
       than a toLocaleString call. The raw number stays alongside it for the guards. */
    citations_display: metrics.citations.toLocaleString('en-US'),
    h_index: metrics.h_index,
    i10_index: metrics.i10_index,
  }, 2);
  console.log((written ? 'Wrote ' : 'Unchanged ') + OUT_PATH
    + ` (${metrics.citations} citations, h=${metrics.h_index}, i10=${metrics.i10_index})`);
}

main().catch((err) => {
  console.error(err.message);
  console.error(`  ${OUT_PATH} left untouched.`);
  process.exit(1);
});
