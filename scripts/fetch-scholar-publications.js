#!/usr/bin/env node
/*
 * Recount the Publications paragraph from the Google Scholar profile.
 *
 * Usage:   node scripts/fetch-scholar-publications.js
 * Output:  _data/scholar_publications.json
 * Rules:   scripts/publication-rules.js  (what counts as a journal, venue display names,
 *                                         which markers mean what, per-paper overrides)
 *
 * The paragraph on the home page used to be typed out by hand, so it drifted: at the time
 * this script was written it claimed five TR Part C papers against a profile that listed
 * six. It is now recounted monthly from the profile and rendered by Liquid from _data.
 *
 * The profile is the single source, including for the two credits Scholar has no field for.
 * Those are typed into the author line by hand -- "L Li†*, S Hu†*, L Dinh, L Hemphill", a
 * dagger for shared first authorship and a star for corresponding -- and read back off it
 * here. That beats inferring them: OpenAlex carries an is_corresponding flag but nothing
 * about equal contribution, and its flags disagree with the author's own; Crossref has
 * neither, returning every author with a bare sequence and a CRediT role of "author".
 * The profile list truncates a long author line with ", ...", sometimes before his own name.
 * That is not a gap: the paper's own record on the profile carries the line whole, and the
 * few papers that need it are reopened there. publication-rules.js is left for the cases
 * neither can settle.
 *
 * _data rather than assets, for the same reason as the metrics: Jekyll exposes _data as
 * site.data, so about.md renders these numbers server-side -- no client fetch, no empty
 * strip while JS runs, and they survive JS being off.
 *
 * Two ways in, picked by whether SERPAPI_KEY is set, matching fetch-scholar-metrics.js:
 *
 *   with the key     SerpAPI's google_scholar_author engine. This is what CI uses, because
 *                    Google Scholar answers a GitHub runner with a flat HTTP 403.
 *   without the key  the profile page directly, which works from a residential IP and keeps
 *                    `npm run build:scholar-pubs` usable locally with nothing to configure.
 *
 * On robots.txt. The publication list needs the whole profile, not just the summary table,
 * and scholar.google.com/robots.txt is specific about how much of it may be asked for:
 *
 *     Allow:    /citations?user=
 *     Disallow: /citations?*cstart=
 *
 * So `pagesize=100` -- which is Scholar's own maximum and still an `Allow`ed URL -- is used
 * to take the list in a single permitted request, and the disallowed `cstart=` pagination is
 * never issued. That ceiling is real: if the profile ever passes 100 records the direct
 * route will say so and stop rather than quietly undercount, and CI (which goes through
 * SerpAPI, not through this URL) will keep counting correctly.
 *
 * A failed run never corrupts anything. The script refuses to write unless the profile
 * parsed into a plausible number of records, so the worst case is "this month's counts are
 * still last month's" and the site keeps serving the last good paragraph.
 */
const fs = require('fs');
const path = require('path');
const RULES = require('./publication-rules.js');

const PROFILE_ID = 'uVIbQyAAAAAJ';
const OUT_PATH = path.resolve(__dirname, '..', '_data', 'scholar_publications.json');

/* Scholar's own ceiling on one page. Asking for more is not refused, it is silently capped,
   which is why the direct route checks the "Show more" button rather than trusting the count. */
const PAGE_SIZE = 100;

/* hl=en is load-bearing rather than cosmetic: venue names are matched against English
   spellings, and Scholar otherwise localises the page to whatever the caller's IP suggests. */
const PROFILE_URL = `https://scholar.google.com/citations?user=${PROFILE_ID}&hl=en`;
const LIST_URL = `${PROFILE_URL}&pagesize=${PAGE_SIZE}&sortby=pubdate`;

/* A request with default client headers has its connection reset before any HTTP response
   arrives: Scholar fingerprints callers, and undici's bare header set is not a browser's. */
const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
};

const RETRY_STATUS = new Set([403, 408, 429, 500, 502, 503, 504]);
const RETRY_DELAYS_MS = [3000, 10000, 30000, 60000];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchText(url, label, headers) {
  for (let attempt = 0; ; attempt++) {
    let failure, retryable, waitOverrideMs;
    try {
      const r = await fetch(url, { headers: headers || HEADERS, redirect: 'follow' });
      if (r.ok) return await r.text();
      /* SerpAPI states the actual reason -- bad key, exhausted quota -- in a JSON body next
         to the status code, and a bare "HTTP 401" would send a reader hunting for it. */
      let detail = '';
      try {
        const errBody = JSON.parse(await r.text());
        if (errBody && errBody.error) detail = ` - ${errBody.error}`;
      } catch (e) { /* not JSON: the status code is all there is to report */ }
      failure = new Error(`${label} failed: HTTP ${r.status}${detail}`);
      retryable = RETRY_STATUS.has(r.status);
      const after = Number(r.headers.get('retry-after'));
      if (Number.isFinite(after) && after > 0) waitOverrideMs = Math.min(after * 1000, 120000);
    } catch (err) {
      failure = err;
      retryable = true;
    }
    if (!retryable || attempt >= RETRY_DELAYS_MS.length) throw failure;
    const wait = waitOverrideMs || RETRY_DELAYS_MS[attempt];
    console.warn(`  ${failure.message} - retrying in ${wait / 1000}s (attempt ${attempt + 2} of ${RETRY_DELAYS_MS.length + 1})`);
    await sleep(wait);
  }
}

/* ---------------------------------------------------------------- reading the profile -- */

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", nbsp: ' ' };
const decode = (s) => String(s || '')
  .replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (_, e) => ENTITIES[e])
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
  .replace(/\s+/g, ' ')
  .trim();

/* One <tr class="gsc_a_tr"> per record. Inside it the two <div class="gs_gray"> hold the
   author list and the venue, in that order -- the second also carries a <span> with the
   citation-count aria text, which is stripped before the venue is read. */
function parseArticles(html) {
  const out = [];
  const rowRe = /<tr class="gsc_a_tr">([\s\S]*?)<\/tr>/g;
  let m;
  while ((m = rowRe.exec(html))) {
    const row = m[1];
    const grays = [...row.matchAll(/class="gs_gray">([\s\S]*?)<\/div>/g)].map((x) => x[1]);
    out.push({
      title: decode((row.match(/class="gsc_a_at"[^>]*>([\s\S]*?)<\/a>/) || [])[1]),
      authors: decode(grays[0]),
      venue: decode(String(grays[1] || '').replace(/<span[\s\S]*?<\/span>/g, '')),
      year: (row.match(/class="gsc_a_h[^"]*"[^>]*>(\d{4})/) || [])[1] || '',
      /* The per-article record, needed only when this row's author line was cut short. */
      citationId: decode((row.match(/citation_for_view=([^&"]+)/) || [])[1]),
    });
  }
  return out;
}

async function fromProfilePage() {
  const html = await fetchText(LIST_URL, 'Google Scholar profile fetch');
  const articles = parseArticles(html);
  if (!articles.length) {
    /* Separate the two causes, because the fixes are entirely different: a bot check means
       try again or come from another IP, while a real profile page that no longer parses
       means Google changed its markup and the selectors above need updating. */
    const blocked = /captcha|unusual traffic|not a robot/i.test(html);
    throw new Error('Google Scholar returned no publication rows.\n  ' + (blocked
      ? 'The response looks like a bot check rather than the profile page.'
      : `The page parsed but no gsc_a_tr rows matched (${html.length} bytes) - Scholar may have changed its markup.`));
  }
  /* Scholar disables "Show more" once the list is exhausted. An enabled button means there
     are records past pagesize=100, and reaching them needs the cstart= URL robots.txt
     disallows -- so this stops rather than committing an undercount as if it were the total. */
  if (/<button[^>]*id="gsc_bpf_more"(?![^>]*\bdisabled\b)/.test(html)) {
    throw new Error(`The profile has more than ${PAGE_SIZE} records, which is Scholar's per-page maximum.`
      + '\n  Reaching the rest needs the cstart= pagination that scholar.google.com/robots.txt disallows,'
      + '\n  so this route cannot count them. Run with SERPAPI_KEY set, which paginates through SerpAPI.');
  }
  return articles;
}

/* SerpAPI's google_scholar_author engine returns the same list as JSON:
     articles: [ {title, authors, publication, year, cited_by:{value}}, ... ]
   `num` maxes out at 100 like the HTML page, but `start` pagination is available here, so
   unlike the direct route this one keeps working past 100 records. */
async function fromSerpApi(key) {
  const articles = [];
  for (let start = 0; ; start += PAGE_SIZE) {
    const url = 'https://serpapi.com/search.json?engine=google_scholar_author'
      + `&author_id=${PROFILE_ID}&hl=en&sort=pubdate&num=${PAGE_SIZE}&start=${start}`
      + `&api_key=${encodeURIComponent(key)}`;
    const body = await fetchText(url, 'SerpAPI fetch', { 'User-Agent': 'songhuahu-umd.github.io' });
    let json;
    try { json = JSON.parse(body); } catch (e) { throw new Error('SerpAPI returned a non-JSON body'); }
    /* SerpAPI reports a bad key or an exhausted quota in the body with a 200, so this has to
       be checked explicitly -- it is not a transport error and retrying will not fix it. */
    if (json.error) throw new Error(`SerpAPI error: ${json.error}`);
    const page = json.articles || [];
    for (const a of page) {
      articles.push({
        title: decode(a.title),
        authors: decode(a.authors),
        venue: decode(a.publication),
        year: String(a.year || ''),
        citationId: decode(a.citation_id),
      });
    }
    /* A short page is the last page. The cap is a runaway guard, not an expected limit:
       each iteration costs a SerpAPI search, and nothing here should ever need three. */
    if (page.length < PAGE_SIZE || start >= PAGE_SIZE * 4) break;
  }
  if (!articles.length) {
    throw new Error('SerpAPI returned no articles - the response shape may have changed; inspect the raw JSON.');
  }
  return articles;
}

/* ---------------------------------------------------------------------- classifying it -- */

/* Scholar appends the locator to the venue: "TR Part C: Emerging Technologies 192, 105891",
   "Nature Sustainability, 1-12", "PloS one 16 (11), e0259803". Trailing comma-separated
   segments that look like a volume, an article number or a page range come off first, then
   a bare volume (with optional issue) left dangling on the end of the name. What survives is
   the venue, which is what the counts are keyed on. */
const LOCATOR_RE = /^[A-Za-z]?\d[\w–—-]*$/;

function venueName(venue) {
  const parts = String(venue).split(',');
  while (parts.length > 1 && LOCATOR_RE.test(parts[parts.length - 1].trim())) parts.pop();
  return parts.join(',')
    .replace(/\s+\d+\s*(\(\s*[\w-]+\s*\))?\s*$/, '')
    .replace(/[\s,;:]+$/, '')
    .trim();
}

const isJournal = (venue) => Boolean(venue) && !RULES.nonJournalPatterns.some((re) => re.test(venue));

/* The author line is where the credits live, because they are typed onto the profile by
   hand: "L Li†*, S Hu†*, L Dinh, L Hemphill" -- a dagger for shared first authorship, a star
   for corresponding. Scholar has no field for either, and neither does anything else free:
   OpenAlex records is_corresponding but nothing about equal contribution and disagrees with
   the author on who corresponded, and Crossref returns every author with a bare
   sequence first/additional and a CRediT role of "author" (checked against the real deposit).
   Marking the profile is the only source that is both complete and correct, so this reads
   the markers off it rather than asking a third party.

   Split on commas and match the name with its markers stripped, so a marker is only ever
   read off the token that is actually his -- "L Li†*" in the example above is somebody else's
   pair of credits and must not be counted. */
const MARKER_CLASS = '\\u2020\\u2021*#\\u00a7\\u00b6';
const stripMarkers = (token) => token.replace(new RegExp(`[${MARKER_CLASS}\\s]+$`), '').trim();

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const isSelfName = (name) =>
  RULES.selfPrefixes.some((p) => new RegExp('^' + escapeRe(p) + '$', 'i').test(name));

/* Scholar truncates a long author line on the profile list with a trailing ", ...", and it
   cuts on a character budget of roughly 75, so on a paper with many authors his own name can
   fall off the end -- leaving no marker to read. `found: false` says exactly that, and is
   never treated as "no credits": resolveTruncated below opens the per-article record, which
   carries the line in full. */
function selfCredits(authors) {
  const tokens = String(authors).split(',').map((t) => t.trim()).filter(Boolean);
  const idx = tokens.findIndex((t) => isSelfName(stripMarkers(t)));
  if (idx === -1) {
    return { found: false, truncated: /\.\.\.$|…$/.test(String(authors).trim()) };
  }
  const markers = tokens[idx].slice(stripMarkers(tokens[idx]).length);
  const has = (list) => list.some((m) => markers.includes(m));
  return {
    found: true,
    truncated: false,
    listedFirst: idx === 0,
    coFirst: has(RULES.coFirstMarkers),
    corresponding: has(RULES.correspondingMarkers),
  };
}

/* Title fragments from the rules file, matched case-insensitively against the journal
   papers. A fragment matching nothing is reported rather than ignored, so a typo or a title
   Scholar has since re-cased shows up as a warning instead of a quiet undercount. */
function matchFragments(fragments, papers, label, warnings) {
  const hit = new Set();
  for (const fragment of fragments) {
    const needle = fragment.toLowerCase();
    const found = papers.filter((p) => p.title.toLowerCase().includes(needle));
    if (!found.length) {
      warnings.push(`${label}: no journal paper matches "${fragment}" - check the title on Scholar.`);
      continue;
    }
    if (found.length > 1) {
      warnings.push(`${label}: "${fragment}" matches ${found.length} papers; counting all of them.`);
    }
    for (const p of found) hit.add(p);
  }
  return hit;
}

function classify(articles, warnings) {
  const journals = [];
  for (const a of articles) {
    const name = venueName(a.venue);
    if (!isJournal(name)) continue;
    journals.push({ ...a, venueName: name, key: name.toLowerCase() });
  }

  for (const j of journals) readCredits(j, j.authors);
  return journals;
}

function readCredits(paper, authorLine) {
  const c = selfCredits(authorLine);
  paper.untagged = !c.found;
  paper.first = Boolean(c.listedFirst || c.coFirst);
  paper.corresponding = Boolean(c.corresponding);
  return c.found;
}

/* Every article on a profile has its own record, and that record carries the author line
   whole -- full names, markers intact -- however long it runs. So a truncated line is a
   solved problem rather than a permanent gap: open the record for those papers only.
 *
 * Both routes can reach it. The direct URL is built by appending to the profile URL, which
 * keeps it starting with `/citations?user=` -- the prefix robots.txt Allows, and the longer
 * match beats the bare `Disallow: /citations?`. (That reading is what the file itself
 * implies: singling out `Disallow: /citations?*cstart=` only makes sense if extra parameters
 * on an Allowed profile URL are otherwise fair game.) SerpAPI exposes the same record as
 * view_op=view_citation on the author engine, returning it as `citation.authors`.
 *
 * Cost is one request per truncated paper, and only the profile list decides which those
 * are: currently two, so about four SerpAPI searches a month all told.
 */
const MAX_DETAIL_LOOKUPS = 12;

async function fullAuthorLine(citationId, key) {
  if (key) {
    const body = await fetchText('https://serpapi.com/search.json?engine=google_scholar_author'
      + `&author_id=${PROFILE_ID}&hl=en&view_op=view_citation`
      + `&citation_id=${encodeURIComponent(citationId)}&api_key=${encodeURIComponent(key)}`,
    'SerpAPI citation fetch', { 'User-Agent': 'songhuahu-umd.github.io' });
    let json;
    try { json = JSON.parse(body); } catch (e) { throw new Error('SerpAPI returned a non-JSON body'); }
    if (json.error) throw new Error(`SerpAPI error: ${json.error}`);
    return decode(json.citation && json.citation.authors);
  }
  const html = await fetchText(`${PROFILE_URL}&view_op=view_citation&citation_for_view=${encodeURIComponent(citationId)}`,
    'Google Scholar citation fetch');
  return decode((html.match(/gsc_oci_field">Authors<\/div><div class="gsc_oci_value">([\s\S]*?)<\/div>/) || [])[1]);
}

async function resolveTruncated(journals, key, warnings) {
  const pending = journals.filter((j) => j.untagged);
  for (const j of pending.slice(0, MAX_DETAIL_LOOKUPS)) {
    const label = `"${j.title.slice(0, 48)}"`;
    if (!j.citationId) {
      warnings.push(`truncated: ${label} carries no citation id, so its record cannot be opened.`);
      continue;
    }
    const full = await fullAuthorLine(j.citationId, key);
    if (!full) {
      warnings.push(`truncated: the record for ${label} did not yield an author line.`);
      continue;
    }
    /* The record spells names out in full -- "Songhua Hu", not "S Hu" -- which is why both
       forms are in selfPrefixes. A name still not found here is a real puzzle, not a
       truncation, so it is reported rather than absorbed. */
    if (!readCredits(j, full)) {
      warnings.push(`truncated: ${label} lists no recognised form of his name even in full:\n      ${full.slice(0, 160)}`);
      continue;
    }
    j.authors = full;
    j.resolved = true;
  }
  if (pending.length > MAX_DETAIL_LOOKUPS) {
    warnings.push(`truncated: ${pending.length - MAX_DETAIL_LOOKUPS} paper(s) past the`
      + ` ${MAX_DETAIL_LOOKUPS}-lookup cap were left unread this run.`);
  }
  return pending.filter((j) => j.resolved);
}

/* The rules file has the last word, for a marker that is wrong or a record that cannot be
   read at all. Objects rather than titles as the set members, so a credit lands on the exact
   record it matched. */
function applyOverrides(journals, warnings) {
  const forceFirst = matchFragments(RULES.coFirst, journals, 'coFirst', warnings);
  const forceCorr = matchFragments(RULES.corresponding, journals, 'corresponding', warnings);
  const forceNotCorr = matchFragments(RULES.notCorresponding, journals, 'notCorresponding', warnings);
  for (const j of journals) {
    if (forceFirst.has(j)) j.first = true;
    if (forceCorr.has(j)) j.corresponding = true;
    if (forceNotCorr.has(j)) j.corresponding = false;
  }
}

function summarise(journals, warnings) {
  /* Featured venues are claimed in the order the rules file lists them, and each paper is
     claimed once: without that, two prefixes that ever overlapped would both count the same
     paper and the venue counts would sum past the total. First match wins. */
  const claimed = new Set();
  const featured = [];
  for (const v of RULES.featuredVenues) {
    const rows = journals.filter((j) => !claimed.has(j) && j.key.startsWith(v.match));
    for (const r of rows) claimed.add(r);
    if (!rows.length) {
      warnings.push(`featuredVenues: "${v.display}" matched no paper this run.`);
      continue;
    }
    featured.push({
      display: v.display,
      count: rows.length,
      first: rows.filter((r) => r.first).length,
      corresponding: rows.filter((r) => r.corresponding).length,
    });
  }

  /* Grouped on the lowercased name, because Scholar stores the same journal in whatever case
     the record was filed in -- "PloS one" and "PLoS One", "Transportation research record"
     and "Transportation Research Record". Splitting those would understate exactly the venue
     this list exists to surface: one that has grown enough to deserve naming. The spelling
     shown is the most common one, breaking ties toward the more capitalised variant. */
  const others = new Map();
  for (const j of journals) {
    if (claimed.has(j)) continue;
    const g = others.get(j.key) || { count: 0, spellings: new Map() };
    g.count += 1;
    g.spellings.set(j.venueName, (g.spellings.get(j.venueName) || 0) + 1);
    others.set(j.key, g);
  }
  const caps = (s) => (s.match(/[A-Z]/g) || []).length;
  const best = (spellings) => [...spellings].sort((a, b) => b[1] - a[1] || caps(b[0]) - caps(a[0]))[0][0];

  return {
    featured,
    others: [...others.values()]
      .map((g) => [best(g.spellings), g.count])
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])),
  };
}

/* ------------------------------------------------------------------------- writing it -- */

/* Same contract as the other builders: everything carries a `generated` date, so comparing
   raw bytes would report a change every run and the scheduled job would commit noise forever.
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

function previous() {
  try { return JSON.parse(fs.readFileSync(OUT_PATH, 'utf8')); } catch (e) { return null; }
}

/* Scholar's list does shrink a little when it merges duplicate records, so a small dip is
   real data. A collapse is not: it means a partially rendered page parsed into a plausible
   but wrong list. Allow the former, refuse the latter. */
const DROP_TOLERANCE = 0.9;

/* "Over 40" has to stay true, so round down to the ten below -- 41 through 50 all read
   "Over 40", and only 51 promotes the claim. Computed here rather than in the template
   because Liquid has no floor division worth writing out. */
const roundDown = (n) => Math.max(0, Math.floor((n - 1) / 10) * 10);

function fail() {
  /* Set the code and let the event loop drain rather than calling process.exit(). Exiting
     hard while fetch still holds a socket trips a libuv assertion on Windows. */
  process.exitCode = 1;
}

async function main() {
  const key = process.env.SERPAPI_KEY;
  console.log(key ? 'Source: SerpAPI (SERPAPI_KEY set)' : 'Source: scholar.google.com directly (no SERPAPI_KEY)');
  const articles = key ? await fromSerpApi(key) : await fromProfilePage();

  const warnings = [];
  const journals = classify(articles, warnings);
  const reopened = await resolveTruncated(journals, key, warnings);
  applyOverrides(journals, warnings);
  const untagged = journals.filter((j) => j.untagged);
  const r = summarise(journals, warnings);
  const firstAuthor = journals.filter((j) => j.first).length;
  const corresponding = journals.filter((j) => j.corresponding).length;

  console.log(`Read ${articles.length} profile records -> ${journals.length} journal papers`
    + ` (${firstAuthor} first-author, ${corresponding} corresponding).`);
  /* Above the lists below, not among them: the workflow reads those by scanning from a
     "  -- " header to the next one, and a stray indented line inside a block joins it.
     Worth one line rather than a list of its own -- the extra requests are the only cost. */
  if (reopened.length) {
    console.log(`Reopened ${reopened.length} truncated author line(s) from the per-article record.`);
  }
  for (const f of r.featured) {
    console.log(`  ${String(f.count).padStart(2)}  ${f.display}`
      + (f.first ? ` ${f.first}F` : '') + (f.corresponding ? ` ${f.corresponding}C` : ''));
  }
  /* Reported, never committed: a venue that has quietly grown to three or four papers is a
     candidate for the named list, and nobody would notice it inside "among others". */
  if (r.others.length) {
    console.log('  -- not named in the paragraph ("among others"):');
    for (const [name, n] of r.others) console.log(`  ${String(n).padStart(2)}  ${name}`);
  }
  /* Papers still without credits after that -- a record that would not open, or a name in a
     spelling selfPrefixes does not cover. Listed rather than counted: each needs a decision. */
  if (untagged.length) {
    console.log(`  -- author line unreadable, so no credits counted (${untagged.length});`
      + ' add to `coFirst` / `corresponding` in scripts/publication-rules.js if either applies:');
    for (const j of untagged) {
      console.log(`      ${j.year}  ${j.venueName.slice(0, 34).padEnd(34)}  ${j.title.slice(0, 52)}`);
    }
  }
  /* stdout, not stderr: refresh-scholar-metrics.yml lifts these out of `node … | tee` into
     the run summary, and only stdout goes down that pipe. Redirecting stderr into it instead
     would not preserve the order that the workflow's awk relies on -- the two streams are
     buffered differently once piped. Printed last so the awk that reads the venue list above
     can stop on them. */
  for (const w of warnings) console.log(`  ! ${w}`);

  /* A profile that suddenly parses into a handful of rows is a bad read, not a career
     change. The floor is deliberately far below the real figure: it catches a truncated or
     half-rendered page without needing maintenance every time a paper appears. */
  if (journals.length < 20) {
    console.error(`Only ${journals.length} journal papers parsed out of ${articles.length} records,`
      + ` which is too few to be a real profile read; ${OUT_PATH} left untouched.`);
    return fail();
  }
  const prev = previous();
  if (prev && Number.isFinite(prev.journal_papers) && journals.length < prev.journal_papers * DROP_TOLERANCE) {
    console.error(`Journal papers dropped from ${prev.journal_papers} to ${journals.length},`
      + ` more than the ${Math.round((1 - DROP_TOLERANCE) * 100)}% tolerance allows.`);
    console.error(`  Treating this as a bad read; ${OUT_PATH} left untouched.`);
    return fail();
  }
  /* The credits ride on two characters in a text field, so they can vanish in ways nothing
     else here would notice: a profile edit that drops them, or a route that strips non-ASCII
     on the way through. Every one of them going missing at once is not a plausible month's
     news, so it is treated as a bad read rather than committed as a real collapse to zero.
     Losing them one at a time is a real edit and passes, as it should. */
  if (prev && prev.corresponding > 0 && corresponding === 0) {
    console.error(`Every corresponding-author marker disappeared (was ${prev.corresponding}).`);
    console.error('  Either the profile no longer carries them, or this route stripped them.');
    console.error(`  Treating this as a bad read; ${OUT_PATH} left untouched.`);
    return fail();
  }

  const written = writeIfChanged(OUT_PATH, {
    generated: new Date().toISOString().slice(0, 10),
    source: 'Google Scholar',
    profile_url: PROFILE_URL,
    journal_papers: journals.length,
    journal_papers_rounded: roundDown(journals.length),
    first_author: firstAuthor,
    corresponding: corresponding,
    presentations: RULES.presentations,
    featured: r.featured,
  }, 2);
  console.log((written ? 'Wrote ' : 'Unchanged ') + OUT_PATH);
}

main().catch((err) => {
  console.error(err.message);
  console.error(`  ${OUT_PATH} left untouched.`);
  fail();
});
