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
    const url = `https://api.openalex.org/works?filter=author.orcid:${ORCID}&per-page=200&cursor=${encodeURIComponent(cursor)}&select=id,title,type,publication_year,authorships,cited_by_count,counts_by_year,primary_topic,concepts,keywords,abstract_inverted_index,doi`;
    const r = await fetch(url, { headers: { 'User-Agent': 'mailto:Songhua.Hu@cityu.edu.hk' } });
    if (!r.ok) throw new Error('OpenAlex fetch failed: ' + r.status);
    const j = await r.json();
    works.push(...j.results);
    cursor = j.meta.next_cursor;
  }
  return works;
}

const INST_ABBREV = {
  'University of Maryland, College Park': 'UMD',
  'University of Maryland': 'UMD',
  'Massachusetts Institute of Technology': 'MIT',
  'Beijing Jiaotong University': 'BJTU',
  'University of South Florida': 'USF',
  'Tongji University': 'Tongji',
  'Villanova University': 'Villanova',
  'Hefei University of Technology': 'Hefei UT',
  'City University of Hong Kong': 'CityUHK',
  'Huazhong University of Science and Technology': 'HUST',
};
const TOP_INST_GROUPS = ['UMD', 'MIT', 'BJTU', 'USF', 'Tongji', 'Villanova'];

function buildGraph(works) {
  const norm = s => s.trim().toLowerCase().replace(/\s+/g, ' ');
  const nodeMap = new Map();
  const edgeMap = new Map();
  const authorInst = new Map();   /* normName -> Map(inst -> count) */

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
    /* Track each author's institution(s) across all their joint papers. */
    for (const a of (w.authorships || [])) {
      const name = a.author && a.author.display_name;
      if (!name) continue;
      const id = norm(name);
      for (const inst of (a.institutions || [])) {
        if (!inst.display_name) continue;
        if (!authorInst.has(id)) authorInst.set(id, new Map());
        const m = authorInst.get(id);
        m.set(inst.display_name, (m.get(inst.display_name) || 0) + 1);
      }
    }
    for (let i = 0; i < authors.length; i++) {
      for (let j = i + 1; j < authors.length; j++) {
        const [a, b] = [authors[i].id, authors[j].id].sort();
        const key = a + '|' + b;
        edgeMap.set(key, (edgeMap.get(key) || 0) + 1);
      }
    }
  }

  const topInst = (authorId) => {
    const m = authorInst.get(authorId);
    if (!m || !m.size) return null;
    return [...m.entries()].sort((a, b) => b[1] - a[1])[0][0];
  };
  const groupFor = (instName) => {
    if (!instName) return 'Other';
    const ab = INST_ABBREV[instName];
    if (ab && TOP_INST_GROUPS.includes(ab)) return ab;
    return 'Other';
  };

  const nodes = [...nodeMap.values()].map(n => {
    const inst = topInst(n.id);
    return {
      id: n.id,
      name: n.name,
      count: n.count,
      isSelf: norm(n.name) === norm(SELF_NAME),
      institution: inst,
      instGroup: groupFor(inst),
    };
  });
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

  console.log('Filling missing abstracts from Semantic Scholar then Crossref via DOI...');
  /* When OpenAlex lacks an abstract, try Semantic Scholar; if that also fails, try Crossref. */
  const cleanDoi = (doi) => doi ? doi.replace(/^https?:\/\/doi\.org\//, '') : null;
  const stripJats = (s) => s
    .replace(/<jats:[^>]+>/g, '').replace(/<\/jats:[^>]+>/g, '')
    .replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

  const fetchSSAbstract = async (doi) => {
    const d = cleanDoi(doi);
    if (!d) return null;
    try {
      const url = `https://api.semanticscholar.org/graph/v1/paper/DOI:${encodeURIComponent(d)}?fields=abstract`;
      const r = await fetch(url, { headers: { 'User-Agent': 'mailto:Songhua.Hu@cityu.edu.hk' } });
      if (!r.ok) return null;
      const j = await r.json();
      return j.abstract || null;
    } catch (e) { return null; }
  };
  const fetchCrossrefAbstract = async (doi) => {
    const d = cleanDoi(doi);
    if (!d) return null;
    try {
      const url = `https://api.crossref.org/works/${encodeURIComponent(d)}`;
      const r = await fetch(url, { headers: { 'User-Agent': 'songhuahu-umd.github.io (mailto:Songhua.Hu@cityu.edu.hk)' } });
      if (!r.ok) return null;
      const j = await r.json();
      const raw = j.message && j.message.abstract;
      if (!raw) return null;
      const cleaned = stripJats(raw);
      return cleaned.length > 30 ? cleaned : null;
    } catch (e) { return null; }
  };

  const filledByWorkId = new Map();
  let filledSS = 0, filledCR = 0, attempted = 0;
  for (const w of works) {
    if (w.abstract_inverted_index) continue;
    if (!w.doi) continue;
    if (w.publication_year < MIN_YEAR) continue;
    if (BLOCKLIST.has(w.id)) continue;
    attempted++;
    let a = await fetchSSAbstract(w.doi);
    if (a) { filledByWorkId.set(w.id, a); filledSS++; }
    else {
      a = await fetchCrossrefAbstract(w.doi);
      if (a) { filledByWorkId.set(w.id, a); filledCR++; }
    }
    await new Promise(res => setTimeout(res, 350));   /* rate-limit politeness */
  }
  console.log('  filled ' + (filledSS + filledCR) + ' / ' + attempted + ' (SS=' + filledSS + ', Crossref=' + filledCR + ')');

  console.log('Building per-year phrase networks (unigrams + bigrams x2)...');
  const reconstruct = (inv) => {
    if (!inv) return '';
    const arr = [];
    for (const w in inv) for (const i of inv[w]) arr[i] = w;
    return arr.filter(Boolean).join(' ');
  };

  /* Aggressive stopwords: English + academic filler + generic nouns. */
  const STOP = new Set((
    'a about above across after against all almost along also although always am among an and another any anyone anything are around as at back be became because become becomes been before being below between both but by came can cannot come could currently did do does doing done down due during each either else even ever every everyone except few find first follow followed following for found from further get give given go got had has have having he her here hers herself him himself his how however if in indeed into is it its itself just keep kept last least less let like likely made make makes making many may me might more most much must my myself near need needs neither never new next no nor not now of off often on once one only onto or other others our ours ourselves out outside over own particular particularly past per perhaps put quite rather really see seeing seem seemed seems seen several shall she should show showed shown shows since so some someone something soon still such than that the their theirs them themselves then there these they thing things this those though three through throughout thus to today together too top toward under unless until up upon us use used using usually various very via was way ways we well went were what when where whether which while who whom whose why will with within without would yet you your yours yourself yourselves '
    + 'study studies paper papers research analyse analyses analysis analytical analyzed analyzing approach approaches application applications applied apply article articles assess assessment based comprehensive consider considered considering current data demonstrate demonstrated demonstrates develop developed developing development different differences difference effect effects evaluate evaluated evaluation example examples examine examined examining experiment experiments factor factors find finds finding findings further generally given help highly identification identified identify identifying impact impacts important importance importantly include included including increase increased increases indicate indicated indicates investigate investigated investigation issue issues key large larger largest level levels limited literature low lower mainly major method methodology methods minor model models name named names noted novel number numbers observation observations observe observed observes obtained one overall paper papers particularly performance perform performed performing population populations possible potential present presented presenting prior process processes propose proposed provide provided provides published purpose relate related relation relations relationship relationships report reported reports require required requires research result resulted results review reviewed role roles same scenario scenarios second section sections show showed shown small smaller specific specifically structure study subject suggest suggested suggests sum support supported supports system systems target task tasks term terms third though three thus together total towards type types underlying understanding unique used uses using value values various vary varying view well work works '
    + 'area areas case cases city common community condition conditions consider considered consist consists country countries county counties day daily date date dates effect effective effectiveness end fact factor field group groups hour hours hundred index information main month months number observed order overall pair part parts percent percentage period periods place places pattern patterns point points policy policies practice practices presence problem problems property properties question questions range rate rates ratio reason reasons region regions sample samples scale set sets share size sizes source sources standard state states step steps subject system test thousand thousands time times trend trends type unit units user users week weeks year years million millions billion '
    + /* Generic adverbs / adjectives that have no research-topic content */
      'significantly considerably substantially dramatically marginally slightly partially completely entirely fully primarily secondarily mostly mainly largely broadly narrowly specifically particularly especially notably remarkably surprisingly unexpectedly consistently persistently currently previously traditionally commonly frequently occasionally rarely simultaneously sequentially jointly separately independently collectively cumulatively gradually rapidly quickly slowly steadily equally similarly differently moderately severely heavily lightly strongly weakly monthly daily weekly annually yearly hourly simply easily hardly certainly presumably possibly probably definitely absolutely relatively comparatively accordingly consequently ultimately eventually briefly shortly automatically manually statistically computationally mathematically theoretically empirically experimentally qualitatively quantitatively moreover furthermore however nevertheless therefore otherwise basically essentially fundamentally typically usually normally always sometimes often almost nearly directly indirectly clearly obviously apparently truly really mostly entirely '
    + 'greater lesser higher lower smaller larger bigger longer shorter faster slower deeper shallower narrower wider broader stronger weaker harder softer easier better worse best worst fewer multiple double triple simple complex complicated basic advanced overall partial complete entire whole exact precise approximate roughly virtually essentially comprehensive extensive intensive recent current previous prior future present past traditional common frequent rare unusual normal typical unique distinct distinctive similar comparable equal unequal parallel consistent inconsistent gradual sudden abrupt smooth rough even uneven accurate inaccurate precise novel modern contemporary fresh massive huge tiny minor major various varied diverse general specific universal individual collective overall total significant insignificant relevant irrelevant useful useless effective ineffective efficient inefficient successful unsuccessful positive negative high low medium intermediate'
  ).split(/\s+/));

  const isMeaningful = (raw) => {
    if (raw.length < 4 || raw.length > 22) return false;
    if (/^\d+$/.test(raw)) return false;
    if (STOP.has(raw)) return false;
    return true;
  };
  /* Returns { unigrams, bigrams }. Bigrams come from strictly-adjacent original-position
     pairs (no jumping over stopwords) and skip identical-word repeats like "peak peak". */
  const extractTerms = (text) => {
    const allTokens = [];
    for (const raw of text.toLowerCase().split(/[^a-z\u00C0-\u017F]+/)) {
      if (raw) allTokens.push(raw);
    }
    const unigrams = allTokens.filter(isMeaningful);
    const bigrams = [];
    for (let i = 0; i < allTokens.length - 1; i++) {
      const a = allTokens[i], b = allTokens[i + 1];
      if (a === b) continue;
      if (!isMeaningful(a) || !isMeaningful(b)) continue;
      bigrams.push(a + ' ' + b);
    }
    return { unigrams, bigrams };
  };

  /* Per year, count bigram frequencies and within-paper co-occurrence between bigrams. */
  const yearPhraseFreq = new Map();   /* year -> Map(phrase -> paperCount) */
  const yearPhraseEdges = new Map();  /* year -> Map("a||b" -> coOccurrence) */
  const yearPaperCount = new Map();

  /* For abstracts only: include preprints to capture more recent papers (their journal versions
     often haven't been indexed yet). Citations/coauthor still use the strict `filtered` set. */
  const forAbstracts = works.filter(w => w.publication_year && w.publication_year >= MIN_YEAR && !BLOCKLIST.has(w.id));

  /* Group into 2-year periods so each panel has enough papers for meaningful phrases. */
  const BIN_SIZE = 2;
  const binStart = (year) => Math.floor((year - MIN_YEAR) / BIN_SIZE) * BIN_SIZE + MIN_YEAR;
  const maxYear = Math.max(...forAbstracts.map(w => w.publication_year));
  const binLabel = (s) => {
    const end = s + BIN_SIZE - 1;
    if (end > maxYear) return s === maxYear ? String(s) : s + '–' + maxYear;
    return s + '–' + end;
  };

  /* OpenAlex keywords/concepts are very noisy: parenthetical context disambiguators (Node (physics))
     and broad fields (Computer science, Engineering, Business) drown out real signal. Filter both. */
  const PAREN_CONTEXT = /\((satellite|computing|materials science|linguistics|telecommunications|programming language|botany|geometry|psychology|chemistry|physics|biology|architecture|electronics|software|production processes|electricity|mathematics|unit|time|theology|finance|literature|economics|computer science|engineering)\)/i;
  const BROAD_TERMS = new Set([
    'computer science', 'engineering', 'business', 'mathematics', 'physics', 'chemistry',
    'geography', 'biology', 'medicine', 'statistics', 'economics', 'environmental science',
    'theoretical computer science', 'artificial intelligence', 'algorithm', 'simulation',
    'electrical engineering', 'structural engineering', 'automotive engineering',
    'mechanical engineering', 'civil engineering', 'industrial engineering',
    'telecommunications', 'operations management', 'environmental resource management',
    'transport engineering', 'transportation', 'climate change', 'meteorology',
    'graph', 'transformer', 'wireless', 'tariff', 'storm', 'flow', 'physics',
    'natural science', 'health', 'social science', 'science',
  ].map(s => s.toLowerCase()));

  const cleanKw = (name) => {
    if (!name) return null;
    if (PAREN_CONTEXT.test(name)) return null;
    if (BROAD_TERMS.has(name.toLowerCase())) return null;
    return name;
  };

  /* Build text per work. Priority:
     1) OpenAlex abstract,
     2) Semantic Scholar abstract (fetched above by DOI),
     3) title (heavily weighted) + filtered keywords.   */
  const textForWork = (w) => {
    const parts = [];
    const ab = reconstruct(w.abstract_inverted_index);
    if (ab) {
      parts.push(ab);
      if (w.title) parts.push(w.title);
      return parts.join(' ');
    }
    const ext = filledByWorkId.get(w.id);
    if (ext) {
      parts.push(ext);
      if (w.title) parts.push(w.title);
      return parts.join(' ');
    }
    if (w.title) {
      parts.push(w.title); parts.push(w.title); parts.push(w.title);
    }
    for (const k of (w.keywords || [])) {
      const v = cleanKw(k.display_name);
      if (v) parts.push(v);
    }
    return parts.join(' ');
  };

  for (const w of forAbstracts) {
    const yr = binStart(w.publication_year);
    const text = textForWork(w);
    if (!text) continue;
    const { unigrams: ug, bigrams: bg } = extractTerms(text);
    if (!ug.length && !bg.length) continue;
    const unigrams = new Set(ug);
    const bigrams = new Set(bg);
    yearPaperCount.set(yr, (yearPaperCount.get(yr) || 0) + 1);
    if (!yearPhraseFreq.has(yr)) { yearPhraseFreq.set(yr, new Map()); yearPhraseEdges.set(yr, new Map()); }
    const fm = yearPhraseFreq.get(yr);
    const em = yearPhraseEdges.get(yr);
    /* Bigrams get weight x2 by default to compete with naturally more frequent unigrams. */
    for (const p of unigrams) fm.set(p, (fm.get(p) || 0) + 1);
    for (const p of bigrams) fm.set(p, (fm.get(p) || 0) + 2);
    const allPh = [...unigrams, ...bigrams];
    for (let i = 0; i < allPh.length; i++) {
      for (let j = i + 1; j < allPh.length; j++) {
        const [a, b] = [allPh[i], allPh[j]].sort();
        const key = a + '||' + b;
        em.set(key, (em.get(key) || 0) + 1);
      }
    }
  }

  /* Track primary affiliation per period: for each work, find the user's authorship and pick
     its first listed institution; then per period choose the most-common one. */
  const ORCID_URL = 'https://orcid.org/' + ORCID;
  const ABBREV = {
    'University of Maryland, College Park': 'UMD',
    'University of Maryland': 'UMD',
    'Tongji University': 'Tongji',
    'Massachusetts Institute of Technology': 'MIT',
    'City University of Hong Kong': 'CityUHK',
    'Huazhong University of Science and Technology': 'HUST',
  };
  const yearInst = new Map();
  for (const w of forAbstracts) {
    const yr = binStart(w.publication_year);
    const me = (w.authorships || []).find(a => a.author && a.author.orcid === ORCID_URL);
    if (!me || !me.institutions || !me.institutions.length) continue;
    const inst = me.institutions[0].display_name;
    if (!inst) continue;
    if (!yearInst.has(yr)) yearInst.set(yr, new Map());
    const m = yearInst.get(yr);
    m.set(inst, (m.get(inst) || 0) + 1);
  }
  const topInstitution = (yr) => {
    const m = yearInst.get(yr);
    if (!m || !m.size) return null;
    const top = [...m.entries()].sort((a, b) => b[1] - a[1])[0][0];
    return ABBREV[top] || top;
  };

  /* Pick top phrases per year, dedupe unigram if it's covered by a higher-ranked bigram. */
  const TOP_PER_YEAR = 6;
  const yearsOut = [];
  for (const yr of [...yearPhraseFreq.keys()].sort((a, b) => a - b)) {
    const fm = yearPhraseFreq.get(yr);
    const em = yearPhraseEdges.get(yr);
    const ranked = [...fm.entries()].sort((a, b) => b[1] - a[1]);
    const chosen = [];
    const usedTokens = new Set();
    for (const [phrase, count] of ranked) {
      if (chosen.length >= TOP_PER_YEAR) break;
      const tokens = phrase.split(' ');
      /* skip a unigram already covered by an earlier bigram */
      if (tokens.length === 1 && usedTokens.has(phrase)) continue;
      chosen.push([phrase, count]);
      for (const t of tokens) usedTokens.add(t);
    }
    const top = chosen;
    if (!top.length) continue;
    const keep = new Set(top.map(([p]) => p));
    const phrases = top.map(([phrase, count]) => ({ phrase, count }));
    const edges = [];
    for (const [k, c] of em.entries()) {
      const [a, b] = k.split('||');
      if (keep.has(a) && keep.has(b) && c >= 2) edges.push({ source: a, target: b, weight: c });
    }
    yearsOut.push({ year: yr, label: binLabel(yr), papers: yearPaperCount.get(yr), institution: topInstitution(yr), phrases, edges });
  }

  fs.writeFileSync(TOPICS_PATH, JSON.stringify({
    generated: new Date().toISOString().slice(0, 10),
    years: yearsOut,
  }, null, 2));
  console.log('Wrote ' + TOPICS_PATH + ' (' + yearsOut.length + ' periods)');
  for (const y of yearsOut) {
    console.log('  ' + y.label + ' @ ' + (y.institution || '?') + ' (' + y.papers + ' papers): ' + y.phrases.slice(0, 5).map(p => p.phrase + '×' + p.count).join(' | '));
  }
})().catch(e => { console.error(e); process.exit(1); });
