// One-off maintenance script: shrinks the oversized camera-original JPEGs in
// src/assets down to web-appropriate dimensions/quality. Originals are backed
// up (untouched) to ../image-backup-original before anything is overwritten.
// Run with: node scripts/optimize-images.cjs
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const ROOT = path.join(__dirname, '..')
const TARGET_DIRS = ['src/assets/press', 'src/assets/about', 'src/assets/home', 'src/assets/services']
const BACKUP_DIR = path.join(ROOT, 'image-backup-original')
const MAX_DIMENSION = 2000
const JPEG_QUALITY = 80

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return /\.(jpe?g)$/i.test(entry.name) ? [full] : []
  })
}

async function processFile(file) {
  const relPath = path.relative(ROOT, file)
  const backupPath = path.join(BACKUP_DIR, relPath)
  fs.mkdirSync(path.dirname(backupPath), { recursive: true })
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(file, backupPath)
  }

  const before = fs.statSync(file).size
  const image = sharp(backupPath).rotate()
  const meta = await image.metadata()

  const resized = image.resize({
    width: MAX_DIMENSION,
    height: MAX_DIMENSION,
    fit: 'inside',
    withoutEnlargement: true,
  })

  const buffer = await resized.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer()
  fs.writeFileSync(file, buffer)
  const after = fs.statSync(file).size

  console.log(
    `${relPath}: ${meta.width}x${meta.height} ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(1)}MB`
  )
}

async function main() {
  const files = TARGET_DIRS.flatMap((dir) => walk(path.join(ROOT, dir)))
  console.log(`Found ${files.length} JPEGs to optimize.\n`)
  for (const file of files) {
    await processFile(file)
  }
}

main()
