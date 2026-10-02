/**
 * Build-time image optimizer. Generates AVIF, WebP, and JPEG variants at
 * display-appropriate sizes. Uses the sharp binary already present as a
 * transitive Next.js dependency — no extra npm install needed.
 *
 * Run automatically from build.mjs before `next build`.
 */

import { createRequire } from 'module'
import { existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const root  = join(__dir, '..')
const imgDir = join(root, 'public', 'images')

// createRequire lets ESM load a CJS package (sharp)
const require = createRequire(import.meta.url)
const sharp   = require(join(root, 'node_modules', 'sharp'))

/** @type {Array<{src:string, outputs:Array<{name:string,width:number,format:'avif'|'webp'|'jpeg',quality:number}>}>} */
const JOBS = [
  // ── Homepage hero ─────────────────────────────────────────────────────────
  // Display: mobile 100vw (~430px), desktop 45vw (~576px @ 1280px viewport).
  // 1152w is the full-source width — covers DPR-3 mobile (412px × 3 = 1236px
  // needed; 1152 is the closest available without upscaling).
  {
    src: 'hero-team-at-work.webp',
    outputs: [
      { name: 'hero-430w.avif',  width: 430,  format: 'avif',  quality: 62 },
      { name: 'hero-860w.avif',  width: 860,  format: 'avif',  quality: 62 },
      { name: 'hero-430w.webp',  width: 430,  format: 'webp',  quality: 82 },
      { name: 'hero-860w.webp',  width: 860,  format: 'webp',  quality: 82 },
      { name: 'hero-860w.jpg',   width: 860,  format: 'jpeg',  quality: 85 },
    ],
  },
  // ── Homepage "uppdrag" image ───────────────────────────────────────────────
  // Display: max-w-3xl (768px), aspect-video container.
  {
    src: 'uppdrag-dödsbo-göteborg.webp',
    outputs: [
      { name: 'uppdrag-768w.avif', width: 768, format: 'avif', quality: 62 },
      { name: 'uppdrag-768w.webp', width: 768, format: 'webp', quality: 82 },
      { name: 'uppdrag-768w.jpg',  width: 768, format: 'jpeg', quality: 85 },
    ],
  },
  // ── Service page hero images ───────────────────────────────────────────────
  // Each used at ~600px wide fill on mobile, up to ~768px on desktop.
  {
    src: 'tömma-dödsbo.webp',
    outputs: [
      { name: 'tomma-dodsbo-600w.avif', width: 600, format: 'avif', quality: 62 },
      { name: 'tomma-dodsbo-600w.webp', width: 600, format: 'webp', quality: 82 },
      { name: 'tomma-dodsbo-600w.jpg',  width: 600, format: 'jpeg', quality: 85 },
    ],
  },
  {
    src: 'vardering-uppkop.webp',
    outputs: [
      { name: 'vardering-600w.avif', width: 600, format: 'avif', quality: 62 },
      { name: 'vardering-600w.webp', width: 600, format: 'webp', quality: 82 },
      { name: 'vardering-600w.jpg',  width: 600, format: 'jpeg', quality: 85 },
    ],
  },
  {
    src: 'bortforsling-dodsbo.webp',
    outputs: [
      { name: 'bortforsling-600w.avif', width: 600, format: 'avif', quality: 62 },
      { name: 'bortforsling-600w.webp', width: 600, format: 'webp', quality: 82 },
      { name: 'bortforsling-600w.jpg',  width: 600, format: 'jpeg', quality: 85 },
    ],
  },
  {
    src: 'dödsbo-trygg.webp',
    outputs: [
      { name: 'dodsbo-trygg-600w.avif', width: 600, format: 'avif', quality: 62 },
      { name: 'dodsbo-trygg-600w.webp', width: 600, format: 'webp', quality: 82 },
      { name: 'dodsbo-trygg-600w.jpg',  width: 600, format: 'jpeg', quality: 85 },
    ],
  },
  // ── Before/after slider images ─────────────────────────────────────────────
  // Display: full-width container up to ~768px, aspect-[4/3] or aspect-video.
  {
    src: 'stadning-innan.webp',
    outputs: [
      { name: 'stadning-innan-768w.avif', width: 768, format: 'avif', quality: 62 },
      { name: 'stadning-innan-768w.webp', width: 768, format: 'webp', quality: 82 },
    ],
  },
  {
    src: 'stadning-efter.webp',
    outputs: [
      { name: 'stadning-efter-768w.avif', width: 768, format: 'avif', quality: 62 },
      { name: 'stadning-efter-768w.webp', width: 768, format: 'webp', quality: 82 },
    ],
  },
]

let generated = 0
let skipped   = 0

for (const job of JOBS) {
  const srcPath = join(imgDir, job.src)
  if (!existsSync(srcPath)) {
    console.warn(`optimize-images: source not found — ${job.src}`)
    continue
  }

  for (const out of job.outputs) {
    const destPath = join(imgDir, out.name)
    if (existsSync(destPath)) {
      skipped++
      continue
    }

    const img = sharp(srcPath).resize(out.width)

    let result
    if (out.format === 'avif') {
      result = img.avif({ quality: out.quality, effort: 6 })
    } else if (out.format === 'webp') {
      result = img.webp({ quality: out.quality })
    } else {
      result = img.jpeg({ quality: out.quality, mozjpeg: true })
    }

    const info = await result.toFile(destPath)
    const kb   = Math.round(info.size / 1024)
    console.log(`  ✓ ${out.name} (${out.width}px, ${kb} KiB)`)
    generated++
  }
}

console.log(`optimize-images: ${generated} generated, ${skipped} already up-to-date`)
