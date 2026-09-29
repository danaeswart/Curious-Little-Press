// Pulls every image out of src/assets/press automatically, so dropping a new
// file into that folder is enough to have it show up in the gallery — no
// manual list to keep in sync. Small WebP grid thumbnails live alongside in
// src/assets/press-thumbs (built by `node scripts/optimize-images.cjs`); the
// full-size files are only used in the lightbox.
export const PRESS_MODULES = import.meta.glob('../assets/press/*.{jpg,jpeg,png,JPG}', {
  eager: true,
  import: 'default',
})

const THUMB_MODULES = import.meta.glob('../assets/press-thumbs/*.webp', {
  eager: true,
  import: 'default',
})

const THUMBS_BY_NAME = Object.fromEntries(
  Object.entries(THUMB_MODULES).map(([path, src]) => [path.split('/').pop(), src])
)

export function thumbFor(filename) {
  return THUMBS_BY_NAME[filename.replace(/\.[^.]+$/, '.webp')]
}

// Warms the browser cache with the gallery thumbnails once the current page
// has finished loading, so "From The Press" shows its images straight away.
export function preloadPressThumbs() {
  const start = () => {
    Object.values(THUMB_MODULES).forEach((src) => {
      const img = new Image()
      img.decoding = 'async'
      img.src = src
    })
  }
  const idle = () =>
    'requestIdleCallback' in window ? window.requestIdleCallback(start) : setTimeout(start, 1500)

  if (document.readyState === 'complete') idle()
  else window.addEventListener('load', idle, { once: true })
}
