import Reveal from '../components/Reveal'
import PageIntro from '../components/PageIntro'
import './Gallery.css'

// Pulls every image out of src/assets/press automatically, so dropping a new
// file into that folder is enough to have it show up here — no manual list
// to keep in sync (and no risk of a typo'd filename breaking the build).
const modules = import.meta.glob('../assets/press/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
})

const PROCESS_HINTS = ['workshop', 'studio', 'swatches', 'demonstration', 'detail']

function toCaption(filename) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/\.{2,}/g, '.')
    .split('.')
    .map((part) => part.trim())
    .filter(Boolean)
    .join(', ')
}

function buildGallery() {
  const items = Object.entries(modules)
    .map(([path, src]) => {
      const filename = path.split('/').pop()
      return { src, filename, caption: toCaption(filename) }
    })
    .sort((a, b) => a.filename.localeCompare(b.filename))

  const artworks = items.filter(
    (item) => !PROCESS_HINTS.some((hint) => item.filename.toLowerCase().includes(hint))
  )
  const process = items.filter((item) =>
    PROCESS_HINTS.some((hint) => item.filename.toLowerCase().includes(hint))
  )

  // Interleave the two groups (roughly two artworks per process/studio shot)
  // so the grid reads like a mix of finished prints and behind-the-scenes
  // moments, rather than clumping every workshop photo together.
  const ordered = []
  let a = 0
  let p = 0
  while (a < artworks.length || p < process.length) {
    if (a < artworks.length) ordered.push(artworks[a++])
    if (a < artworks.length) ordered.push(artworks[a++])
    if (p < process.length) ordered.push(process[p++])
  }
  return ordered
}

const GALLERY_ITEMS = buildGallery()

export default function Gallery() {
  return (
    <>
      <PageIntro
        title="From The Press"
        desc="A glimpse into the prints, processes, and moments created within the studio."
        className="page-intro--tight"
      />

      <section className="press-gallery">
        <Reveal as="div" className="container press-gallery__grid">
          {GALLERY_ITEMS.map((item) => (
            <figure className="press-gallery__item" key={item.filename}>
              <img src={item.src} alt={item.caption} loading="lazy" />
            </figure>
          ))}
        </Reveal>

        <Reveal as="div" className="container press-gallery__cta">
          <a href="/contact" className="btn">
            Get in Touch
          </a>
          <a href="/#studio" className="link-arrow">
            Explore the Studio
            <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Reveal>
      </section>
    </>
  )
}
