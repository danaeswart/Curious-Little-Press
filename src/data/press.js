// Curatorial info for the "From The Press" gallery is mined straight out of
// each filename in src/assets/press, since every artwork photo is named
// "Artist. Title. Year. Medium. HH (h) x WW (w) cm" (an underscore in the
// title stands in for a colon, and a trailing "_" before the extension is
// just a naming artifact). Process/studio shots don't follow that pattern,
// so they simply fall back to showing their filename as a caption.
const SIZE_RE = /(\d+(?:\.\d+)?)\s*\(h\)\s*x\s*(\d+(?:\.\d+)?)\s*\(w\)\s*cm/i

export function parsePressFilename(filename) {
  const base = filename
    .replace(/\.[^.]+$/, '') // strip extension
    .replace(/_+$/, '') // strip trailing "_" artifact
    .replace(/\.+$/, '') // strip any trailing stray period

  const segments = base
    .split(/\.\s+/)
    .map((part) => part.trim())
    .filter(Boolean)

  if (segments.length < 3) return null

  const yearIndex = segments.findIndex((segment) => /^\d{4}$/.test(segment))
  if (yearIndex < 2) return null // need at least an artist and a title before the year

  const artist = segments[0]
  const title = segments.slice(1, yearIndex).join(', ').replace(/_\s*/g, ': ')
  const medium = segments[yearIndex + 1] ?? ''

  const rest = segments.slice(yearIndex + 2)
  const sizeIdx = rest.findIndex((segment) => SIZE_RE.test(segment))

  let size = null
  let note = null
  if (sizeIdx !== -1) {
    const [, h, w] = rest[sizeIdx].match(SIZE_RE)
    size = `${h} x ${w} cm`
    note = rest.filter((_, i) => i !== sizeIdx).join(', ') || null
  } else if (rest.length) {
    note = rest.join(', ')
  }

  return {
    artist,
    title: note ? `${title} (${note})` : title,
    year: segments[yearIndex],
    medium,
    size,
  }
}
