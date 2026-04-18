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
    const url = `https://api.openalex.org/works?filter=author.orcid:${ORCID}&per-page=200&cursor=${encodeURIComponent(cursor)}&select=id,title,type,publication_year,authorships,cited_by_count,counts_by_year,primary_topic,concepts`;
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

  console.log('Building concept evolution...');
  /* Pick each paper's best concept. OpenAlex concepts are noisy: same word can match unrelated fields
     (e.g. "TRIPS architecture" for processor design matches "trips"; "Resilience (materials science)"
     matches general resilience). Drop disambiguated concepts that suffix a parenthetical context. */
  const looksWrongContext = name => /\((satellite|computing|materials science|linguistics|telecommunications|programming language|botany|geometry|psychology|chemistry|physics|biology|architecture|electronics|software)\)/i.test(name);
  const pickConcept = (w) => {
    const cs = (w.concepts || [])
      .filter(c => c.level >= 1 && c.level <= 2)
      .filter(c => c.score >= 0.4)
      .filter(c => !looksWrongContext(c.display_name))
      .sort((a, b) => {
        /* prefer level 1 (broader, more reliable) when score is close */
        if (Math.abs(a.score - b.score) < 0.1) return a.level - b.level;
        return b.score - a.score;
      });
    return cs.length ? cs[0].display_name : null;
  };

  const conceptCount = new Map();
  for (const w of filtered) {
    const c = pickConcept(w);
    if (c) conceptCount.set(c, (conceptCount.get(c) || 0) + 1);
  }
  const topConcepts = [...conceptCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, TOP_N_TOPICS).map(e => e[0]);
  const conceptSet = new Set(topConcepts);

  const yearMap2 = new Map();
  for (const w of filtered) {
    const year = w.publication_year;
    if (!year) continue;
    const c = pickConcept(w);
    const bucket = (c && conceptSet.has(c)) ? c : 'Other';
    if (!yearMap2.has(year)) yearMap2.set(year, new Map());
    const yt = yearMap2.get(year);
    yt.set(bucket, (yt.get(bucket) || 0) + 1);
  }

  const allBuckets = [...topConcepts, 'Other'];
  const sortedYrs = [...yearMap2.keys()].sort((a, b) => a - b);
  const series = sortedYrs.map(year => {
    const row = { year };
    for (const b of allBuckets) row[b] = (yearMap2.get(year).get(b) || 0);
    return row;
  });

  fs.writeFileSync(TOPICS_PATH, JSON.stringify({
    generated: new Date().toISOString().slice(0, 10),
    topics: allBuckets,
    series,
  }, null, 2));
  console.log('Wrote ' + TOPICS_PATH + ' (' + allBuckets.length + ' buckets, ' + series.length + ' years)');
  console.log('  top concepts: ' + topConcepts.join(' | '));
})().catch(e => { console.error(e); process.exit(1); });
