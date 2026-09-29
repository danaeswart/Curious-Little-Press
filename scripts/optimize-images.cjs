// Maintenance script: shrinks oversized camera-original JPEGs in src/assets
// down to web-appropriate dimensions/quality, and builds small WebP grid
// thumbnails for the "From The Press" gallery in src/assets/press-thumbs.
// Originals are backed up (untouched) to ./image-backup-original before
// anything is overwritten. Safe to re-run after adding new photos: images
// that are already web-sized are left alone.
// Run with: node scripts/optimize-images.cjs
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const ROOT = path.join(__dirname, '..')
const TARGET_DIRS = ['src/assets/press', 'src/assets/about', 'src/assets/home', 'src/assets/services']
const BACKUP_DIR = path.join(ROOT, 'image-backup-original')
const MAX_DIMENSION = 2000
const JPEG_QUALITY = 80

const PRESS_DIR = path.join(ROOT, 'src/assets/press')
const THUMB_DIR = path.join(ROOT, 'src/assets/press-thumbs')
const THUMB_WIDTH = 720
const THUMB_QUALITY = 72

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return /\.(jpe?g)$/i.test(entry.name) ? [full] : []
  })
}

async function processFile(file) {
  const relPath = path.relative(ROOT, file)
  const meta = await sharp(file).metadata()
  if (meta.width <= MAX_DIMENSION && meta.height <= MAX_DIMENSION) return

  // Anything still over the limit is a fresh camera original (possibly
  // replacing an older photo with the same name), so refresh its backup.
  const backupPath = path.join(BACKUP_DIR, relPath)
  fs.mkdirSync(path.dirname(backupPath), { recursive: true })
  fs.copyFileSync(file, backupPath)

  const before = fs.statSync(file).size
  const buffer = await sharp(backupPath)
    .rotate()
    .resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toBuffer()
  fs.writeFileSync(file, buffer)
  const after = fs.statSync(file).size

  console.log(
    `${relPath}: ${meta.width}x${meta.height} ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(1)}MB`
  )
}

async function buildThumbs() {
  fs.mkdirSync(THUMB_DIR, { recursive: true })
  const sources = fs.readdirSync(PRESS_DIR).filter((name) => /\.(jpe?g|png)$/i.test(name))
  const expected = new Set()

  for (const name of sources) {
    const src = path.join(PRESS_DIR, name)
    const thumbName = name.replace(/\.[^.]+$/, '.webp')
    const thumb = path.join(THUMB_DIR, thumbName)
    expected.add(thumbName)
    if (fs.existsSync(thumb) && fs.statSync(thumb).mtimeMs >= fs.statSync(src).mtimeMs) continue

    await sharp(src)
      .rotate()
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .webp({ quality: THUMB_QUALITY })
      .toFile(thumb)
    console.log(`thumb: ${thumbName} (${(fs.statSync(thumb).size / 1024).toFixed(0)}KB)`)
  }

  // Drop thumbnails whose source photo has been removed.
  for (const name of fs.readdirSync(THUMB_DIR)) {
    if (!expected.has(name)) fs.unlinkSync(path.join(THUMB_DIR, name))
  }
}

async function main() {
  const files = TARGET_DIRS.flatMap((dir) => walk(path.join(ROOT, dir)))
  console.log(`Checking ${files.length} JPEGs.\n`)
  for (const file of files) {
    await processFile(file)
  }
  await buildThumbs()
}

main()
