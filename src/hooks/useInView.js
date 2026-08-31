import { useEffect, useRef, useState } from 'react'

export default function useInView({
  threshold = 0.2,
  rootMargin = '0px 0px -10% 0px',
  mobileRootMargin,
} = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const isMobile = mobileRootMargin && window.matchMedia('(max-width: 900px)').matches
    const effectiveRootMargin = isMobile ? mobileRootMargin : rootMargin

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin: effectiveRootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, mobileRootMargin])

  return [ref, isInView]
}
