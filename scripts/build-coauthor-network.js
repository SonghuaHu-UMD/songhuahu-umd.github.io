#!/usr/bin/env node
/*
 * Build a co-authorship network SVG from OpenAlex.
 *
 * Usage:
 *   node scripts/build-coauthor-network.js
 *
 * Output: images/coauthor_network.svg
 *
 * To regenerate after new publications: just rerun.
 */
const fs = require('fs');
const path = require('path');
const { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide } = require('d3-force');

const ORCID = '0000-0002-0731-3080';
const SELF_NAME = 'Songhua Hu';
const OUT_PATH = path.resolve(__dirname, '..', 'images', 'coauthor_network.svg');
const WIDTH = 1200;
const HEIGHT = 800;
const MIN_DEGREE_TO_LABEL = 3;          // only label collaborators with >= 3 joint papers

async function fetchAllWorks(authorId) {
  const works = [];
  let cursor = '*';
  while (cursor) {
    const url = `https://api.openalex.org/works?filter=author.orcid:${ORCID}&per-page=200&cursor=${encodeURIComponent(cursor)}&select=id,title,publication_year,authorships`;
    const r = await fetch(url, { headers: { 'User-Agent': 'mailto:Songhua.Hu@cityu.edu.hk' } });
    if (!r.ok) throw new Error('OpenAlex fetch failed: ' + r.status);
    const j = await r.json();
    works.push(...j.results);
    cursor = j.meta.next_cursor;
  }
  return works;
}

function buildGraph(works) {
  /* Key by normalized display_name to merge OpenAlex-split duplicates of the same person. */
  const norm = s => s.trim().toLowerCase().replace(/\s+/g, ' ');
  const nodeMap = new Map();   // normName -> { id, name, count }
  const edgeMap = new Map();   // "a|b" -> weight

  for (const w of works) {
    const seen = new Set();
    const authors = [];
    for (const a of (w.authorships || [])) {
      const name = a.author && a.author.display_name;
      if (!name) continue;
      const id = norm(name);
      if (seen.has(id)) continue;          /* dedupe within same paper */
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
  return { nodes: [...nodeMap.values()], edges: [...edgeMap.entries()].map(([k, w]) => {
    const [source, target] = k.split('|');
    return { source, target, weight: w };
  })};
}

function layout(nodes, edges, selfId) {
  const sim = forceSimulation(nodes)
    .force('charge', forceManyBody().strength(-180))
    .force('center', forceCenter(WIDTH / 2, HEIGHT / 2))
    .force('link', forceLink(edges).id(d => d.id).distance(d => 90 / Math.sqrt(d.weight)).strength(0.4))
    .force('collide', forceCollide().radius(d => Math.sqrt(d.count) * 5 + 6))
    .stop();
  for (let i = 0; i < 400; i++) sim.tick();

  // pin self to center
  const self = nodes.find(n => n.id === selfId);
  if (self) {
    const dx = WIDTH / 2 - self.x;
    const dy = HEIGHT / 2 - self.y;
    nodes.forEach(n => { n.x += dx; n.y += dy; });
  }
  return { nodes, edges };
}

function escapeXml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
}

function renderSVG(nodes, edges, selfId) {
  const maxCount = Math.max(...nodes.map(n => n.count));
  const maxW = Math.max(...edges.map(e => e.weight));
  const radius = n => 4 + Math.sqrt(n.count) * 4.5;
  const color = n => n.id === selfId ? '#c0392b' : (n.count >= 5 ? '#2980b9' : '#7a8e9e');

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif">\n`;
  svg += `  <rect width="${WIDTH}" height="${HEIGHT}" fill="#fafbfc"/>\n`;

  // edges
  svg += '  <g stroke="#cbd5dc" fill="none">\n';
  for (const e of edges) {
    const s = typeof e.source === 'object' ? e.source : nodes.find(n => n.id === e.source);
    const t = typeof e.target === 'object' ? e.target : nodes.find(n => n.id === e.target);
    if (!s || !t) continue;
    const sw = 0.4 + (e.weight / maxW) * 1.8;
    const op = 0.25 + (e.weight / maxW) * 0.5;
    svg += `    <line x1="${s.x.toFixed(1)}" y1="${s.y.toFixed(1)}" x2="${t.x.toFixed(1)}" y2="${t.y.toFixed(1)}" stroke-width="${sw.toFixed(2)}" stroke-opacity="${op.toFixed(2)}"/>\n`;
  }
  svg += '  </g>\n';

  // nodes
  svg += '  <g>\n';
  for (const n of nodes) {
    const r = radius(n);
    const c = color(n);
    svg += `    <circle cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${r.toFixed(1)}" fill="${c}" stroke="white" stroke-width="1.2" opacity="0.92"/>\n`;
  }
  svg += '  </g>\n';

  // labels for prominent nodes
  svg += '  <g font-size="11" fill="#2c3e50" text-anchor="middle">\n';
  for (const n of nodes) {
    if (n.id !== selfId && n.count < MIN_DEGREE_TO_LABEL) continue;
    const isSelf = n.id === selfId;
    const fs = isSelf ? 15 : 11;
    const fw = isSelf ? '700' : '500';
    const dy = radius(n) + fs + 1;
    svg += `    <text x="${n.x.toFixed(1)}" y="${(n.y + dy).toFixed(1)}" font-size="${fs}" font-weight="${fw}">${escapeXml(n.name)}</text>\n`;
  }
  svg += '  </g>\n';

  // legend
  svg += `  <g transform="translate(20, ${HEIGHT - 90})" font-size="11" fill="#555">\n`;
  svg += `    <text x="0" y="0" font-size="13" font-weight="700" fill="#2c3e50">Co-authorship Network</text>\n`;
  svg += `    <text x="0" y="20">${nodes.length} co-authors · ${edges.length} ties · derived from OpenAlex</text>\n`;
  svg += `    <circle cx="6" cy="38" r="6" fill="#c0392b"/><text x="20" y="42">Songhua Hu</text>\n`;
  svg += `    <circle cx="6" cy="56" r="5" fill="#2980b9"/><text x="20" y="60">Frequent collaborator (5+ papers)</text>\n`;
  svg += `    <circle cx="6" cy="74" r="4" fill="#7a8e9e"/><text x="20" y="78">Other co-author</text>\n`;
  svg += '  </g>\n';

  svg += '</svg>\n';
  return svg;
}

(async () => {
  console.log('Fetching works for ORCID ' + ORCID + ' ...');
  const works = await fetchAllWorks();
  console.log('  ' + works.length + ' works');

  const { nodes, edges } = buildGraph(works);
  const self = nodes.find(n => n.name === SELF_NAME) || nodes.find(n => n.count === Math.max(...nodes.map(x => x.count)));
  console.log('  ' + nodes.length + ' authors, ' + edges.length + ' edges');
  console.log('  self: ' + self.name + ' (' + self.count + ' papers)');

  const top = [...nodes].sort((a, b) => b.count - a.count).slice(0, 12);
  console.log('  top collaborators:');
  for (const n of top) console.log('    ' + n.count + '  ' + n.name);

  layout(nodes, edges, self.id);
  const svg = renderSVG(nodes, edges, self.id);
  fs.writeFileSync(OUT_PATH, svg);
  console.log('Wrote ' + OUT_PATH + ' (' + (svg.length / 1024).toFixed(1) + ' KB)');
})().catch(e => { console.error(e); process.exit(1); });
