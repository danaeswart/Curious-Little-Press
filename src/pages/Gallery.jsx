import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
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

// Only the images visible without scrolling need to load immediately; the
// rest stay native-lazy so the browser fetches them just before they're
// needed instead of competing with the first paint.
const EAGER_COUNT = 8

// CSS multi-column ("balance" fill) badly miscalculates column height once a
// container gets this tall with this many break-inside:avoid children — it's
// a real Chromium/WebKit bug, not a timing issue, and produces huge blank
// gaps followed by stray scattered images. A CSS-grid-based masonry (fixed
// tiny row unit, each item spans however many rows its rendered image needs)
// sidesteps that entirely, at the cost of computing spans in JS.
const ROW_UNIT_PX = 8

function useMasonryLayout(gridRef, itemCount) {
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    let frame = null
    const relayout = () => {
      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const styles = getComputedStyle(grid)
        const rowGap = parseFloat(styles.rowGap) || 0
        grid.querySelectorAll('.press-gallery__item').forEach((item) => {
          const img = item.querySelector('img')
          if (!img || !img.complete || img.naturalWidth === 0) return
          const height = img.getBoundingClientRect().height
          const span = Math.ceil((height + rowGap) / (ROW_UNIT_PX + rowGap))
          item.style.gridRowEnd = `span ${span}`
        })
      })
    }

    const images = Array.from(grid.querySelectorAll('img'))
    images.forEach((img) => img.addEventListener('load', relayout))
    relayout()
    window.addEventListener('resize', relayout)

    return () => {
      images.forEach((img) => img.removeEventListener('load', relayout))
      window.removeEventListener('resize', relayout)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [gridRef, itemCount])
}

export default function Gallery() {
  const gridRef = useRef(null)
  useMasonryLayout(gridRef, GALLERY_ITEMS.length)

  return (
    <>
      <PageIntro
        title="From The Press"
        desc="A glimpse into the prints, processes, and moments created within the studio."
        className="page-intro--tight"
      />

      <section className="press-gallery">
        <Reveal as="div" className="container">
          <div className="press-gallery__grid" ref={gridRef}>
            {GALLERY_ITEMS.map((item, index) => {
              const isEager = index < EAGER_COUNT
              return (
                <figure className="press-gallery__item" key={item.filename}>
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading={isEager ? 'eager' : 'lazy'}
                    fetchPriority={isEager ? 'high' : 'auto'}
                    decoding="async"
                  />
                </figure>
              )
            })}
          </div>
        </Reveal>

        <Reveal as="div" className="container press-gallery__cta">
          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
          <Link to="/#studio" className="link-arrow">
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
          </Link>
        </Reveal>
      </section>
    </>
  )
}
