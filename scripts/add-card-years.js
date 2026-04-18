#!/usr/bin/env node
/* One-shot: add `· YYYY` to each card-venue badge in _pages/Research.md.
   Looks up year per card by extracting an identifier from the card-link href
   and matching against OpenAlex works for the user. */
const fs = require('fs');
const path = require('path');

const ORCID = '0000-0002-0731-3080';
const FILE = path.resolve(__dirname, '..', '_pages', 'Research.md');

/* Manual overrides: URL substring → year. Used when OpenAlex lookup fails. */
const OVERRIDES = {
  'S0968090X20308524': 2020,
  'S1361920920308397': 2021,
  'S0966692321000508': 2021,
  '10.1098/rsif.2020.0344': 2020,
  '10.1016/j.jtrangeo.2025.104423': 2025,
  '10.1016/j.compenvurbsys.2025.102333': 2025,
  'S1366554525006568': 2025,
  '8569639': 2018,
  'S2212420924005168': 2024,
  'S2210670721007721': 2022,
  'S0264410X22009471': 2022,
  'S0264410X23006175': 2023,
  'S0968090X21002382': 2021,
  'S0968090X25001895': 2025,
  'S0264275126000983': 2026,
  'S0198971525000821': 2025,
  'S0966692321003240': 2022,
  'S1361920918306448': 2019,
  'S0965856424001939': 2024,
  'S0968090X22003758': 2022,
  'S0965856423001635': 2023,
  'S1361920919311058': 2019,
  'S0968090X2300459X': 2023,
  '0739456X241256041': 2024,
  '9034087': 2020,
  'S0965856425003386': 2025,
  'JICV.2026.9210079': 2026,
  'rs-7256883': 2025,
  'pnas.2010836117': 2020,
  '0259803': 2021,
};

/* Venues whose year is fixed by hand (no DOI to look up). */
const VENUE_YEARS = {
  'Ongoing': 2026,
  'Under Review': 2026,
  'PhD Dissertation': 2023,
};

/* Extract a normalized identifier (DOI or PII) from various publisher URLs. */
function extractIdent(href) {
  if (!href) return null;
  let m;
  /* Direct DOI URL */
  if ((m = href.match(/doi\.org\/(10\.[^\s?#]+)/i))) return { type: 'doi', val: m[1].toLowerCase() };
  /* Nature .../articles/sXXXXX */
  if ((m = href.match(/nature\.com\/articles\/([\w.-]+)/i))) return { type: 'doi', val: ('10.1038/' + m[1]).toLowerCase() };
  /* PNAS .../doi/abs/10.1073/X */
  if ((m = href.match(/pnas\.org\/doi\/(?:abs\/)?(10\.[^\s?#]+)/i))) return { type: 'doi', val: m[1].toLowerCase() };
  /* PLOS journals.plos.org/plosone/article?id=10.1371/X */
  if ((m = href.match(/plos[^/]*\/article\?id=(10\.[^\s&]+)/i))) return { type: 'doi', val: m[1].toLowerCase() };
  /* RoyalSoc /doi/full/10.1098/X */
  if ((m = href.match(/royalsocietypublishing\.org\/doi\/(?:full\/|abs\/)?(10\.[^\s?#]+)/i))) return { type: 'doi', val: m[1].toLowerCase() };
  /* SAGE journals.sagepub.com/doi/abs/10.1177/X */
  if ((m = href.match(/sagepub\.com\/doi\/(?:abs\/|full\/)?(10\.[^\s?#]+)/i))) return { type: 'doi', val: m[1].toLowerCase() };
  /* SciOpen /article/10.X/Y */
  if ((m = href.match(/sciopen\.com\/article\/(10\.[^\s?#]+)/i))) return { type: 'doi', val: m[1].toLowerCase() };
  /* ScienceDirect PII */
  if ((m = href.match(/sciencedirect\.com\/science\/article\/(?:abs\/|pii\/)?pii\/([A-Z0-9]+)/i))) return { type: 'pii', val: m[1].toUpperCase() };
  /* IEEE Xplore doc id */
  if ((m = href.match(/ieeexplore\.ieee\.org\/(?:abstract\/)?document\/(\d+)/i))) return { type: 'ieee', val: m[1] };
  /* Research Square preprint id → DOI */
  if ((m = href.match(/researchsquare\.com\/article\/(rs-[\w-]+)/i))) return { type: 'doi', val: ('10.21203/rs.3.' + m[1]).toLowerCase() };
  return null;
}

async function fetchAllWorks() {
  const out = [];
  let cursor = '*';
  while (cursor) {
    const url = `https://api.openalex.org/works?filter=author.orcid:${ORCID}&per-page=200&cursor=${encodeURIComponent(cursor)}&select=id,doi,publication_year,locations,primary_location`;
    const r = await fetch(url, { headers: { 'User-Agent': 'mailto:Songhua.Hu@cityu.edu.hk' } });
    if (!r.ok) throw new Error('OpenAlex: ' + r.status);
    const j = await r.json();
    out.push(...j.results);
    cursor = j.meta.next_cursor;
  }
  return out;
}

function buildIndex(works) {
  const byDoi = new Map();
  const byPii = new Map();
  const byIeee = new Map();
  for (const w of works) {
    const yr = w.publication_year;
    if (w.doi) byDoi.set(w.doi.replace(/^https?:\/\/doi\.org\//, '').toLowerCase(), yr);
    /* Walk landing page urls in `locations` to find ScienceDirect PII / IEEE id */
    for (const loc of (w.locations || [])) {
      const u = loc.landing_page_url || '';
      const pii = u.match(/pii\/([A-Z0-9]+)/i);
      if (pii) byPii.set(pii[1].toUpperCase(), yr);
      const ie = u.match(/document\/(\d+)/);
      if (ie) byIeee.set(ie[1], yr);
    }
  }
  return { byDoi, byPii, byIeee };
}

async function fetchYearByUrl(url) {
  /* OpenAlex supports filter by a snippet of landing_page_url. Strip query string. */
  const clean = url.split('?')[0].replace(/^https?:\/\//, '');
  try {
    const r = await fetch(`https://api.openalex.org/works?filter=locations.landing_page_url:${encodeURIComponent('https://' + clean)},author.orcid:${ORCID}&per-page=1&select=publication_year`);
    if (!r.ok) return null;
    const j = await r.json();
    return j.results[0] && j.results[0].publication_year;
  } catch (e) { return null; }
}

(async () => {
  const works = await fetchAllWorks();
  const { byDoi, byPii, byIeee } = buildIndex(works);
  console.log('Indexed: ' + byDoi.size + ' DOIs, ' + byPii.size + ' PIIs, ' + byIeee.size + ' IEEE');

  let src = fs.readFileSync(FILE, 'utf8');
  /* First strip any prior `· YYYY` so we can reapply cleanly. */
  src = src.replace(/(<span class="card-venue">[^<]+?)\s*·\s*\d{4}(<\/span>)/g, '$1$2');
  let updated = 0, missed = 0;
  /* Collect href->venue patterns so we can do async fallbacks. */
  const cardRegex = /(<a class="card-link" href="([^"]+)"[^>]*><\/a>[\s\S]*?<span class="card-venue">)([^<]+)(<\/span>)/g;
  const replacements = [];
  let m;
  while ((m = cardRegex.exec(src)) !== null) {
    replacements.push({ start: m.index, end: m.index + m[0].length, full: m[0], prefix: m[1], href: m[2], venue: m[3], suffix: m[4] });
  }

  for (const r of replacements) {
    const venueClean = r.venue.trim();
    if (/\b\d{4}\b/.test(venueClean)) { r.year = null; continue; }   /* venue text already has a year */
    if (VENUE_YEARS[venueClean]) { r.year = VENUE_YEARS[venueClean]; continue; }
    /* Manual override by URL substring match. */
    let year = null;
    for (const [key, yr] of Object.entries(OVERRIDES)) {
      if (r.href.includes(key)) { year = yr; break; }
    }
    if (!year) {
      const id = extractIdent(r.href);
      if (id) {
        if (id.type === 'doi') year = byDoi.get(id.val);
        else if (id.type === 'pii') year = byPii.get(id.val);
        else if (id.type === 'ieee') year = byIeee.get(id.val);
      }
    }
    r.year = year;
  }

  /* Apply in reverse order to keep indices stable. */
  for (const r of [...replacements].reverse()) {
    if (r.year) {
      const newText = r.prefix + r.venue.trim() + ' · ' + r.year + r.suffix;
      src = src.slice(0, r.start) + newText + src.slice(r.end);
      updated++;
    } else {
      console.log('  no year for: ' + r.venue.trim() + ' | ' + r.href);
      missed++;
    }
  }
  /* Now sort cards within each card-grid block by extracted year, newest first. */
  const cardBlockRE = /^    <div class="card">[\s\S]*?^    <\/div>$/gm;
  const yearOf = (cardText) => {
    /* prefer the `· YYYY` suffix; otherwise any 4-digit year in the venue */
    const m1 = cardText.match(/<span class="card-venue">[^<]*·\s*(\d{4})<\/span>/);
    if (m1) return parseInt(m1[1], 10);
    const m2 = cardText.match(/<span class="card-venue">[^<]*\b(\d{4})\b[^<]*<\/span>/);
    return m2 ? parseInt(m2[1], 10) : 0;
  };
  src = src.replace(/(<div class="card-grid">\n\n)([\s\S]*?)(\n\n  <\/div>)/g, (full, open, body, close) => {
    const cards = body.match(cardBlockRE);
    if (!cards || cards.length < 2) return full;
    const sorted = cards.slice().sort((a, b) => yearOf(b) - yearOf(a));
    return open + sorted.join('\n\n') + close;
  });

  fs.writeFileSync(FILE, src);
  console.log('Updated ' + updated + ' venues; missed ' + missed);
  console.log('Cards within each grid sorted by year (newest first)');
})().catch(e => { console.error(e); process.exit(1); });
