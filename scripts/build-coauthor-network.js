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
    const url = `https://api.openalex.org/works?filter=author.orcid:${ORCID}&per-page=200&cursor=${encodeURIComponent(cursor)}&select=id,title,type,publication_year,authorships`;
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

  console.log('Fetching author profile for citations...');
  const author = await fetchAuthor();
  const counts = (author.counts_by_year || [])
    .filter(c => c.year >= MIN_YEAR)
    .slice().sort((a, b) => a.year - b.year);
  let cumulative = 0;
  const byYear = counts.map(c => ({
    year: c.year,
    annual: c.cited_by_count || 0,
    cumulative: (cumulative += (c.cited_by_count || 0)),
  }));
  fs.writeFileSync(CITATIONS_PATH, JSON.stringify({
    generated: new Date().toISOString().slice(0, 10),
    total_citations: author.cited_by_count,
    total_works: author.works_count,
    h_index: author.summary_stats && author.summary_stats.h_index,
    i10_index: author.summary_stats && author.summary_stats.i10_index,
    by_year: byYear,
  }, null, 2));
  console.log('Wrote ' + CITATIONS_PATH + ' (total ' + author.cited_by_count + ' citations, h=' + (author.summary_stats && author.summary_stats.h_index) + ')');
})().catch(e => { console.error(e); process.exit(1); });
