#!/usr/bin/env node
/*
 * Build co-authorship graph data (JSON) from OpenAlex.
 *
 * Usage:   node scripts/build-coauthor-network.js
 * Output:  assets/coauthor_network.json
 *
 * Browser renders the interactive force graph from this JSON.
 */
const fs = require('fs');
const path = require('path');

const ORCID = '0000-0002-0731-3080';
const SELF_NAME = 'Songhua Hu';
const OUT_PATH = path.resolve(__dirname, '..', 'assets', 'coauthor_network.json');
const CITATIONS_PATH = path.resolve(__dirname, '..', 'assets', 'citations_by_year.json');
const TOPICS_PATH = path.resolve(__dirname, '..', 'assets', 'topic_evolution.json');
const TOP_N_TOPICS = 6;

/* Disambiguation filters — OpenAlex sometimes attributes works to the wrong person. */
const MIN_YEAR = 2017;                   /* user's first transportation paper era */
const BLOCKLIST = new Set([              /* explicit OpenAlex IDs known not to be the user */
  'https://openalex.org/W4383197404',    /* "Review of Contentious Biometric Voters Registration..." (politics) */
]);

async function fetchAuthor() {
  const url = `https://api.openalex.org/authors/orcid:${ORCID}`;
  const r = await fetch(url, { headers: { 'User-Agent': 'mailto:Songhua.Hu@cityu.edu.hk' } });
  if (!r.ok) throw new Error('OpenAlex author fetch failed: ' + r.status);
  return await r.json();
}

async function fetchAllWorks() {
  const works = [];
  let cursor = '*';
  while (cursor) {
    const url = `https://api.openalex.org/works?filter=author.orcid:${ORCID}&per-page=200&cursor=${encodeURIComponent(cursor)}&select=id,title,type,publication_year,authorships,cited_by_count,counts_by_year,primary_topic,concepts,abstract_inverted_index`;
    const r = await fetch(url, { headers: { 'User-Agent': 'mailto:Songhua.Hu@cityu.edu.hk' } });
    if (!r.ok) throw new Error('OpenAlex fetch failed: ' + r.status);
    const j = await r.json();
    works.push(...j.results);
    cursor = j.meta.next_cursor;
  }
  return works;
}

function buildGraph(works) {
  const norm = s => s.trim().toLowerCase().replace(/\s+/g, ' ');
  const nodeMap = new Map();
  const edgeMap = new Map();

  for (const w of works) {
    const seen = new Set();
    const authors = [];
    for (const a of (w.authorships || [])) {
      const name = a.author && a.author.display_name;
      if (!name) continue;
      const id = norm(name);
      if (seen.has(id)) continue;
      seen.add(id);
      authors.push({ id, name });
    }

    for (const a of authors) {
      if (!nodeMap.has(a.id)) nodeMap.set(a.id, { id: a.id, name: a.name, count: 0 });
      nodeMap.get(a.id).count++;
    }
    for (let i = 0; i < authors.length; i++) {
      for (let j = i + 1; j < authors.length; j++) {
        const [a, b] = [authors[i].id, authors[j].id].sort();
        const key = a + '|' + b;
        edgeMap.set(key, (edgeMap.get(key) || 0) + 1);
      }
    }
  }

  const nodes = [...nodeMap.values()].map(n => ({
    id: n.id,
    name: n.name,
    count: n.count,
    isSelf: norm(n.name) === norm(SELF_NAME),
  }));
  const links = [...edgeMap.entries()].map(([k, w]) => {
    const [source, target] = k.split('|');
    return { source, target, weight: w };
  });
  return { nodes, links };
}

(async () => {
  console.log('Fetching works for ORCID ' + ORCID + ' ...');
  const works = await fetchAllWorks();
  console.log('  ' + works.length + ' works');

  const dropped = { preprint: 0, oldYear: 0, blocked: 0 };
  const filtered = works.filter(w => {
    if (BLOCKLIST.has(w.id)) { dropped.blocked++; return false; }
    if (!w.publication_year || w.publication_year < MIN_YEAR) { dropped.oldYear++; return false; }
    if (w.type === 'preprint') { dropped.preprint++; return false; }
    return true;
  });
  console.log('  dropped: ' + dropped.preprint + ' preprints, ' + dropped.oldYear + ' pre-' + MIN_YEAR + ', ' + dropped.blocked + ' blocklisted');
  console.log('  kept: ' + filtered.length);

  const graph = buildGraph(filtered);
  console.log('  ' + graph.nodes.length + ' authors, ' + graph.links.length + ' edges');

  const top = [...graph.nodes].sort((a, b) => b.count - a.count).slice(0, 12);
  console.log('  top collaborators:');
  for (const n of top) console.log('    ' + n.count + '  ' + n.name);

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify({
    generated: new Date().toISOString().slice(0, 10),
    works: filtered.length,
    nodes: graph.nodes,
    links: graph.links,
  }));
  console.log('Wrote ' + OUT_PATH + ' (' + (fs.statSync(OUT_PATH).size / 1024).toFixed(1) + ' KB)');

  console.log('Computing citations from filtered works only...');
  /* Sum per-year citation counts across the kept works (so disambiguation flows through). */
  const yearMap = new Map();
  let totalCitations = 0;
  for (const w of filtered) {
    totalCitations += (w.cited_by_count || 0);
    for (const c of (w.counts_by_year || [])) {
      if (c.year < MIN_YEAR) continue;
      yearMap.set(c.year, (yearMap.get(c.year) || 0) + (c.cited_by_count || 0));
    }
  }
  /* Compute h-index from the filtered set: largest h such that h papers have >= h citations each. */
  const sortedCites = filtered.map(w => w.cited_by_count || 0).sort((a, b) => b - a);
  let h = 0;
  for (let i = 0; i < sortedCites.length; i++) if (sortedCites[i] >= i + 1) h = i + 1;
  const i10 = sortedCites.filter(c => c >= 10).length;

  const sortedYears = [...yearMap.keys()].sort((a, b) => a - b);
  let cumulative = 0;
  const byYear = sortedYears.map(year => {
    const annual = yearMap.get(year);
    cumulative += annual;
    return { year, annual, cumulative };
  });

  fs.writeFileSync(CITATIONS_PATH, JSON.stringify({
    generated: new Date().toISOString().slice(0, 10),
    total_citations: totalCitations,
    total_works: filtered.length,
    h_index: h,
    i10_index: i10,
    by_year: byYear,
  }, null, 2));
  console.log('Wrote ' + CITATIONS_PATH + ' (total ' + totalCitations + ' citations on ' + filtered.length + ' works, h=' + h + ', i10=' + i10 + ')');

  console.log('Building abstract word network...');
  /* Reconstruct abstract from OpenAlex inverted index. */
  const reconstruct = (inv) => {
    if (!inv) return '';
    const arr = [];
    for (const w in inv) for (const i of inv[w]) arr[i] = w;
    return arr.filter(Boolean).join(' ');
  };

  const STOP = new Set(('a about above after again against all also am an and any are as at be because been before being below between both but by could did do does doing down during each few for from further had has have having he her here hers herself him himself his how i if in into is it its itself just like me might more most must my myself no nor not now of off on once only or other our ours ourselves out over own same she should so some such than that the their theirs them themselves then there these they this those through to too under until up upon very via was way we were what when where whether which while who whom why will with would you your yours yourself yourselves '
    + 'study studies paper papers research works work model models method methods methodology approach approaches result results finding findings show shown showed reveal reveals revealed find found finds present presents presented propose proposed proposes use uses used using based data analysis analyses develop developed developing demonstrates demonstrate demonstrated apply applied applies application applications include including includes effect effects impact impacts identify identified observe observed observes observation across within among however thus therefore hence whereas although first second third specifically particularly overall additionally previous previously recent recently large small high low higher lower largest smallest highest lowest increase increased increases decrease decreased decreases novel new level levels rate rates one two three four five six seven eight nine ten various different difference differences associated relationship relationships factor factors significantly significant non significantly characteristic characteristics evaluate evaluated evaluation evaluations potential strong strongly important importantly key main major minor furthermore moreover example examples examined examining specific specifically generally analyzed analyzing analyse provide provides provided provided role roles considered considering consider given suggest suggests suggested support supports supported well year years time times provide make made makes due')
    .split(/\s+/));

  const wordPapers = new Map();   /* word -> Set(workId) */
  const wordYears = new Map();    /* word -> [years] */
  const pairWeight = new Map();   /* "a||b" -> count */

  const tokenize = (text) => {
    const set = new Set();
    for (const raw of text.toLowerCase().split(/[^a-z\u00C0-\u017F]+/)) {
      if (raw.length < 4 || raw.length > 22) continue;
      if (/^\d+$/.test(raw)) continue;
      if (STOP.has(raw)) continue;
      set.add(raw);
    }
    return [...set];
  };

  for (const w of filtered) {
    const text = reconstruct(w.abstract_inverted_index);
    if (!text) continue;
    const toks = tokenize(text);
    for (const t of toks) {
      if (!wordPapers.has(t)) { wordPapers.set(t, new Set()); wordYears.set(t, []); }
      wordPapers.get(t).add(w.id);
      wordYears.get(t).push(w.publication_year);
    }
    for (let i = 0; i < toks.length; i++) {
      for (let j = i + 1; j < toks.length; j++) {
        const [a, b] = [toks[i], toks[j]].sort();
        const k = a + '||' + b;
        pairWeight.set(k, (pairWeight.get(k) || 0) + 1);
      }
    }
  }

  /* Keep top-N words by paper frequency. */
  const TOP_WORDS = 90;
  const ranked = [...wordPapers.entries()]
    .map(([w, set]) => ({ word: w, count: set.size, years: wordYears.get(w) }))
    .filter(n => n.count >= 3)                       /* in >=3 papers */
    .sort((a, b) => b.count - a.count)
    .slice(0, TOP_WORDS);
  const keep = new Set(ranked.map(n => n.word));

  const nodes = ranked.map(n => ({
    id: n.word,
    count: n.count,
    avgYear: n.years.reduce((s, y) => s + y, 0) / n.years.length,
  }));

  const edges = [];
  for (const [k, w] of pairWeight.entries()) {
    if (w < 2) continue;
    const [a, b] = k.split('||');
    if (keep.has(a) && keep.has(b)) edges.push({ source: a, target: b, weight: w });
  }

  fs.writeFileSync(TOPICS_PATH, JSON.stringify({
    generated: new Date().toISOString().slice(0, 10),
    yearRange: [Math.min(...nodes.map(n => Math.floor(n.avgYear))), Math.max(...nodes.map(n => Math.ceil(n.avgYear)))],
    nodes,
    edges,
  }, null, 2));
  console.log('Wrote ' + TOPICS_PATH + ' (' + nodes.length + ' words, ' + edges.length + ' co-occurrence edges)');
  console.log('  top words:');
  for (const n of nodes.slice(0, 12)) {
    console.log('    ' + n.count + '  ' + n.id + '  (avg yr ' + n.avgYear.toFixed(1) + ')');
  }
})().catch(e => { console.error(e); process.exit(1); });
