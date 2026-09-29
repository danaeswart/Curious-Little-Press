import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { PAGE_META, SITE_URL } from '../data/seo'

function setMeta(selector, attr, value) {
  const tag = document.head.querySelector(selector)
  if (tag) tag.setAttribute(attr, value)
}

// Updates the browser/search title, description and canonical URL tags in
// index.html for the current page (this is a single-page app, so there is
// only one <head> to share between routes).
export default function usePageMeta(key) {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = PAGE_META[key]
    if (!meta) return
    const url = SITE_URL + (pathname.replace(/\/+$/, '') || '/')
    document.title = meta.title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('link[rel="canonical"]', 'href', url)
  }, [key, pathname])
}
