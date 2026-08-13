#!/usr/bin/env node
/*
 * Build data for the self-hosted visitor map (replaces the dead ClustrMaps widget).
 *
 * Usage:
 *   node scripts/build-visitor-map.js --geometry     # (re)build the vendored world outline
 *   node scripts/build-visitor-map.js                # refresh visitor counts from analytics
 *   node scripts/build-visitor-map.js --geometry --force
 *
 * Outputs:
 *   assets/world_land.json    vendored land outline + country centroids (committed, rarely changes)
 *   assets/visitor_map.json   per-country visitor counts (refreshed periodically)
 *
 * Why vendored: ClustrMaps died because the site depended on a third-party host at runtime
 * (cdn.clustrmaps.com is now NXDOMAIN and clustrmaps.com is a parked domain with no HTTPS).
 * Everything the browser needs here ships from our own origin; the network is touched only
 * at build time, on this machine.
 *
 * Analytics source: GoatCounter (free for non-commercial use, country-level stats, no cookies).
 * Configure via environment before running:
 *   GOATCOUNTER_SITE=yourcode           # the <code> in https://<code>.goatcounter.com
 *   GOATCOUNTER_TOKEN=xxxxxxxx          # API token from Settings -> API
 * Without them the script leaves visitor_map.json untouched and explains what is missing.
 */
const fs = require('fs');
const path = require('path');

const ASSETS = path.resolve(__dirname, '..', 'assets');
const LAND_PATH = path.join(ASSETS, 'world_land.json');
const VISITORS_PATH = path.join(ASSETS, 'visitor_map.json');

const LAND_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json';
const COUNTRIES_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

/* The sidebar map renders ~200px wide, so one pixel spans ~1.8deg of longitude.
   Rounding coordinates to 1 decimal (~11km) is far below what that can resolve
   and roughly halves the payload. */
const COORD_PRECISION = 1;

const argv = process.argv.slice(2);
const wantGeometry = argv.includes('--geometry');
const force = argv.includes('--force');

/* ---------------------------------------------------------------- TopoJSON --
 * Minimal decoder. world-atlas ships quantized, delta-encoded TopoJSON; pulling in
 * topojson-client just to read two files would add a dependency for ~40 lines of math.
 */
function decodeArcs(topology) {
  const { scale: [sx, sy], translate: [tx, ty] } = topology.transform;
  return topology.arcs.map((arc) => {
    let x = 0;
    let y = 0;
    return arc.map(([dx, dy]) => {
      x += dx;
      y += dy;
      return [x * sx + tx, y * sy + ty];
    });
  });
}

/* A ring is a list of arc indices; a negative index ~i means arc (-i-1) reversed.
   Consecutive arcs share an endpoint, so drop the duplicate when stitching. */
function stitchRing(ring, arcs) {
  const points = [];
  for (const idx of ring) {
    const arc = idx < 0 ? arcs[~idx].slice().reverse() : arcs[idx];
    points.push(...(points.length ? arc.slice(1) : arc));
  }
  return points;
}

/* Yields every ring of a geometry as an array of [lon, lat]. world-atlas wraps the
   land outline in a GeometryCollection, so recurse rather than assuming a bare polygon. */
function geometryRings(geom, arcs) {
  if (!geom) return [];
  if (geom.type === 'GeometryCollection') return geom.geometries.flatMap((g) => geometryRings(g, arcs));
  if (geom.type === 'Polygon') return geom.arcs.map((r) => stitchRing(r, arcs));
  if (geom.type === 'MultiPolygon') return geom.arcs.flat().map((r) => stitchRing(r, arcs));
  return [];
}

/* ---------------------------------------------------------------- geometry -- */
const round = (n) => Number(n.toFixed(COORD_PRECISION));

/* Shoelace area on raw lon/lat. Only used to rank a country's rings by size, so
   the lack of an equal-area projection does not matter here. */
function ringArea(ring) {
  let a = 0;
  for (let i = 0, n = ring.length - 1; i < n; i++) {
    a += ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1];
  }
  return Math.abs(a / 2);
}

function ringCentroid(ring) {
  let x = 0;
  let y = 0;
  const n = ring.length - 1;
  for (let i = 0; i < n; i++) {
    x += ring[i][0];
    y += ring[i][1];
  }
  return [x / n, y / n];
}

/* Place a country's dot on its largest landmass, so e.g. France lands in Europe
   rather than in the Atlantic averaged against its overseas territories. */
function countryCentroid(rings) {
  const biggest = rings.reduce((best, r) => (ringArea(r) > ringArea(best) ? r : best), rings[0]);
  return ringCentroid(biggest).map(round);
}

async function getJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} -> HTTP ${res.status}`);
  return res.json();
}

async function buildGeometry() {
  if (fs.existsSync(LAND_PATH) && !force) {
    console.log(`geometry: ${path.relative(process.cwd(), LAND_PATH)} exists, skipping (--force to rebuild)`);
    return;
  }

  console.log('geometry: fetching world-atlas...');
  const [landTopo, countriesTopo] = await Promise.all([getJSON(LAND_URL), getJSON(COUNTRIES_URL)]);

  const landArcs = decodeArcs(landTopo);
  const land = geometryRings(landTopo.objects.land, landArcs)
    .map((ring) => ring.map(([lon, lat]) => [round(lon), round(lat)]))
    /* Drop specks that collapse to nothing at sidebar scale. */
    .filter((ring) => ring.length > 3);

  const countryArcs = decodeArcs(countriesTopo);
  const centroids = {};
  for (const geom of countriesTopo.objects.countries.geometries) {
    const name = geom.properties && geom.properties.name;
    if (!name) continue;
    const rings = geometryRings(geom, countryArcs);
    if (!rings.length) continue;
    centroids[name] = countryCentroid(rings);
  }

  const out = { land, centroids };
  fs.writeFileSync(LAND_PATH, JSON.stringify(out));
  const kb = (fs.statSync(LAND_PATH).size / 1024).toFixed(1);
  console.log(`geometry: wrote ${path.relative(process.cwd(), LAND_PATH)} (${land.length} rings, ${Object.keys(centroids).length} centroids, ${kb} KB)`);
}

/* ---------------------------------------------------------------- visitors --
 * GoatCounter names a few countries differently from Natural Earth. Only the
 * mismatches that actually occur need an entry.
 */
const NAME_ALIASES = {
  'United States': 'United States of America',
  'USA': 'United States of America',
  'Tanzania': 'United Republic of Tanzania',
  'Serbia': 'Republic of Serbia',
  'Congo, The Democratic Republic of the': 'Democratic Republic of the Congo',
  'Czechia': 'Czech Republic',
  'Bosnia and Herzegovina': 'Bosnia and Herz.',
  'North Macedonia': 'Macedonia',
  'Dominican Republic': 'Dominican Rep.',
  'South Sudan': 'S. Sudan',
  'Central African Republic': 'Central African Rep.',
  'Equatorial Guinea': 'Eq. Guinea',
  'Solomon Islands': 'Solomon Is.',
  'Falkland Islands': 'Falkland Is.',
  'French Southern Territories': 'Fr. S. Antarctic Lands',
  'Western Sahara': 'W. Sahara',
  "Côte d'Ivoire": 'Ivory Coast',
  'Korea, Republic of': 'South Korea',
  'Korea, Democratic People\'s Republic of': 'North Korea',
  'Russian Federation': 'Russia',
  'Viet Nam': 'Vietnam',
  'Iran, Islamic Republic of': 'Iran',
  'Syrian Arab Republic': 'Syria',
  'Lao People\'s Democratic Republic': 'Laos',
  'Moldova, Republic of': 'Moldova',
  'Bolivia, Plurinational State of': 'Bolivia',
  'Venezuela, Bolivarian Republic of': 'Venezuela',
  'Brunei Darussalam': 'Brunei',
};

/* City-states and small territories have no polygon in the 110m dataset; without
   these the map would silently drop some of the most frequent visitors. */
const EXTRA_CENTROIDS = {
  'Hong Kong': [114.1, 22.3],
  'Macao': [113.5, 22.2],
  'Singapore': [103.8, 1.4],
  'Bahrain': [50.6, 26.1],
  'Malta': [14.4, 35.9],
  'Maldives': [73.5, 3.2],
  'Mauritius': [57.6, -20.3],
  'Andorra': [1.5, 42.5],
  'Liechtenstein': [9.6, 47.2],
  'Monaco': [7.4, 43.7],
  'San Marino': [12.5, 43.9],
  'Cyprus': [33.2, 35.1],
  'Luxembourg': [6.1, 49.8],
};

/* GoatCounter's hosted instance intermittently answers a perfectly valid request
   with 404 {"error":"not found"} for a few seconds at a time -- seen twice, and both
   times the identical URL and token returned 200 minutes later. So 404 is retryable
   here even though it normally would not be; the cost of being wrong (a bad site code
   takes ~60s to report instead of ~1s) is far smaller than the cost of the status quo,
   where one upstream blip silently skips a whole day of a once-a-day refresh.
   401/403 are deliberately absent: a rejected token will still be rejected in 40s. */
const RETRY_STATUS = new Set([404, 408, 425, 429, 500, 502, 503, 504]);
const RETRY_DELAYS_MS = [2000, 5000, 15000, 40000];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/* start must be RFC 3339 and the API asks for it rounded to the hour; omitting `end`
   defaults to now. The date just needs to predate the site, so the map shows cumulative
   totals the way the old ClustrMaps widget did rather than a trailing window. */
const STATS_START = '2020-01-01T00:00:00Z';

/* One retrying GET, shared by the country list and the per-country region drill-down. */
async function apiGet(base, headers, endpoint, params) {
  const url = `${base}/${endpoint}?${new URLSearchParams(params)}`;

  for (let attempt = 0; ; attempt++) {
    let failure, retryable;
    try {
      const res = await fetch(url, { headers });
      if (res.ok) return await res.json();
      const body = await res.text().catch(() => '');
      failure = new Error(`GoatCounter API HTTP ${res.status}${body ? ` - ${body.slice(0, 200)}` : ''}`);
      retryable = RETRY_STATUS.has(res.status);
    } catch (err) {
      /* DNS, TLS and socket failures land here, as does a malformed JSON body.
         None of those say anything about the request itself, so all are worth retrying. */
      failure = err;
      retryable = true;
    }

    if (!retryable || attempt >= RETRY_DELAYS_MS.length) throw failure;
    const wait = RETRY_DELAYS_MS[attempt];
    console.warn(`visitors: ${failure.message}`);
    console.warn(`visitors: retrying in ${wait / 1000}s (attempt ${attempt + 2} of ${RETRY_DELAYS_MS.length + 1}).`);
    await sleep(wait);
  }
}

/* A country dot says "someone in France read this". A region line under it says which
   province -- harmless at 29 US hits spread over 7 states, but on a country with a
   single visit it pins one person to one province on a public page. Hence the floors:
   only break down countries with real traffic, and never surface a lone visitor. */
const REGION_MIN_COUNTRY_HITS = 5;
const REGION_MIN_HITS = 2;
const REGION_MAX = 4;

async function fetchGoatCounter(site, token) {
  const base = `https://${site}.goatcounter.com/api/v0`;
  const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };

  /* "locations" is a {page} value of GET /api/v0/stats/{page} (alongside browsers,
     systems, languages, sizes, campaigns, toprefs). There is no city-level page:
     GoatCounter does not collect one at all. */
  const data = await apiGet(base, headers, 'stats/locations', { start: STATS_START, limit: '250' });
  /* 250 rows comfortably exceeds the number of countries, but say so rather than
     silently truncating if that ever stops being true. */
  if (data.more) console.warn('visitors: API reported more rows than the limit returned; raise limit.');
  const countries = (data.stats || []).map((s) => ({ id: s.id, name: s.name, count: s.count }));

  /* GET /stats/locations/{country} drills down to region. GoatCounter only records a
     region for countries listed in the site's collect_regions setting (default
     "US,RU,CN"); everywhere else every hit comes back under an empty name. So most
     countries yielding nothing here is expected, not a failure. */
  for (const country of countries) {
    if (country.count < REGION_MIN_COUNTRY_HITS) continue;
    const detail = await apiGet(base, headers, `stats/locations/${encodeURIComponent(country.id)}`, {
      start: STATS_START,
      limit: '100',
    });
    const regions = (detail.stats || [])
      .filter((r) => r.name && r.count >= REGION_MIN_HITS)
      .sort((a, b) => b.count - a.count)
      .slice(0, REGION_MAX)
      .map((r) => ({ name: r.name, count: r.count }));
    if (regions.length) country.regions = regions;
  }

  const withRegions = countries.filter((c) => c.regions).length;
  console.log(`visitors: ${countries.length} countries, ${withRegions} with a region breakdown.`);
  return countries;
}

async function buildVisitors() {
  const site = process.env.GOATCOUNTER_SITE;
  const token = process.env.GOATCOUNTER_TOKEN;

  if (!site || !token) {
    console.log('visitors: GOATCOUNTER_SITE / GOATCOUNTER_TOKEN not set - skipping.');
    console.log('visitors: set them and re-run to populate ' + path.relative(process.cwd(), VISITORS_PATH) + '.');
    if (!fs.existsSync(VISITORS_PATH)) {
      /* Seed an empty but valid file so the widget has something well-formed to fetch. */
      fs.writeFileSync(VISITORS_PATH, JSON.stringify({ generated: null, source: null, total: 0, points: [] }, null, 2));
      console.log('visitors: seeded an empty ' + path.relative(process.cwd(), VISITORS_PATH) + '.');
    }
    return;
  }

  if (!fs.existsSync(LAND_PATH)) {
    throw new Error(`${path.relative(process.cwd(), LAND_PATH)} is missing - run with --geometry first.`);
  }
  const { centroids } = JSON.parse(fs.readFileSync(LAND_PATH, 'utf8'));
  const lookup = { ...centroids, ...EXTRA_CENTROIDS };

  console.log(`visitors: querying GoatCounter site "${site}"...`);
  const stats = await fetchGoatCounter(site, token);

  const points = [];
  const unmatched = [];
  let total = 0;
  for (const { name, count, regions } of stats) {
    total += count;
    const key = lookup[name] ? name : NAME_ALIASES[name];
    const at = key ? lookup[key] : undefined;
    if (!at) {
      if (name) unmatched.push(name);
      continue;
    }
    const point = { lon: at[0], lat: at[1], count, label: name };
    if (regions) point.regions = regions;
    points.push(point);
  }
  points.sort((a, b) => b.count - a.count);

  const rel = path.relative(process.cwd(), VISITORS_PATH);

  /* Rewriting `generated` on every run would make the scheduled refresh produce a
     commit a day even when nobody visited. Compare only the payload that matters. */
  const payload = JSON.stringify({ total, points });
  if (fs.existsSync(VISITORS_PATH)) {
    try {
      const prev = JSON.parse(fs.readFileSync(VISITORS_PATH, 'utf8'));
      if (JSON.stringify({ total: prev.total, points: prev.points }) === payload) {
        console.log(`visitors: ${rel} already up to date (${points.length} countries, ${total} visits) - not rewriting.`);
        return;
      }
    } catch { /* unreadable or malformed: fall through and overwrite */ }
  }

  const out = {
    generated: new Date().toISOString().slice(0, 10),
    source: 'goatcounter',
    total,
    points,
  };
  fs.writeFileSync(VISITORS_PATH, JSON.stringify(out));
  console.log(`visitors: wrote ${rel} (${points.length} countries, ${total} visits)`);
  if (unmatched.length) {
    console.warn(`visitors: no centroid for ${unmatched.length} location(s): ${unmatched.join(', ')}`);
    console.warn('visitors: add them to EXTRA_CENTROIDS or NAME_ALIASES in this script.');
  }
}

(async () => {
  try {
    if (wantGeometry) await buildGeometry();
    await buildVisitors();
  } catch (err) {
    console.error('build-visitor-map failed:', err.message);
    /* exitCode rather than exit(): calling exit() while fetch's handles are still
       closing trips a libuv assertion on Windows and reports 127 instead of 1. */
    process.exitCode = 1;
  }
})();
