#!/usr/bin/env node
/*
 * Optimize PNG / JPG images in images/ that exceed SIZE_THRESHOLD.
 *
 * Usage:
 *   node scripts/optimize-images.js              # dry run, report only
 *   node scripts/optimize-images.js --apply      # write optimized files in place
 *                                                # (originals saved as <name>.bak.<ext>)
 *
 * GIFs are intentionally skipped: sharp does not re-encode animated GIFs well.
 * Convert large GIFs separately (recommended: ffmpeg → MP4/WebM, or gifsicle --lossy).
 *
 * Example for FF23.gif (12 MB → ~1 MB):
 *   ffmpeg -i images/FF23.gif -movflags +faststart -pix_fmt yuv420p -vf \
 *     "scale=trunc(iw/2)*2:trunc(ih/2)*2" images/FF23.mp4
 *   then update <img src="...gif"> tags to <video autoplay loop muted playsinline>
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMG_DIR = path.resolve(__dirname, '..', 'images');
const SIZE_THRESHOLD = 500 * 1024;          // 500 KB
const MAX_WIDTH = 1600;                     // resize anything wider
const APPLY = process.argv.includes('--apply');

const exts = new Set(['.png', '.jpg', '.jpeg']);

async function processOne(file) {
  const full = path.join(IMG_DIR, file);
  const ext = path.extname(file).toLowerCase();
  const stat = fs.statSync(full);
  if (stat.size < SIZE_THRESHOLD) return null;

  const meta = await sharp(full).metadata();
  let pipe = sharp(full).rotate();
  if (meta.width && meta.width > MAX_WIDTH) {
    pipe = pipe.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }
  if (ext === '.png') {
    pipe = pipe.png({ quality: 90, compressionLevel: 9, palette: true });
  } else {
    pipe = pipe.jpeg({ quality: 85, mozjpeg: true });
  }

  const buf = await pipe.toBuffer();
  const reduction = 1 - buf.length / stat.size;
  const status = APPLY ? 'WROTE' : 'DRY  ';
  console.log(
    `${status}  ${file.padEnd(32)} ` +
    `${(stat.size/1024).toFixed(0).padStart(6)} KB → ` +
    `${(buf.length/1024).toFixed(0).padStart(6)} KB ` +
    `(${(reduction*100).toFixed(1)}% smaller)`
  );

  if (APPLY && reduction > 0.05) {
    const bak = full.replace(ext, `.bak${ext}`);
    if (!fs.existsSync(bak)) fs.renameSync(full, bak);
    fs.writeFileSync(full, buf);
  }
  return { file, before: stat.size, after: buf.length };
}

(async () => {
  const files = fs.readdirSync(IMG_DIR)
    .filter(f => exts.has(path.extname(f).toLowerCase()))
    .filter(f => !f.includes('.bak.'));

  console.log(`Scanning ${files.length} PNG/JPG files in ${IMG_DIR}`);
  console.log(`Threshold: ${SIZE_THRESHOLD/1024} KB; mode: ${APPLY ? 'APPLY' : 'DRY RUN'}\n`);

  let totalBefore = 0, totalAfter = 0;
  for (const f of files) {
    const r = await processOne(f);
    if (r) { totalBefore += r.before; totalAfter += r.after; }
  }

  console.log(
    `\nTotal: ${(totalBefore/1024/1024).toFixed(1)} MB → ` +
    `${(totalAfter/1024/1024).toFixed(1)} MB ` +
    `(saved ${((totalBefore-totalAfter)/1024/1024).toFixed(1)} MB)`
  );
  if (!APPLY) console.log('\nRun again with --apply to write changes.');
})();
