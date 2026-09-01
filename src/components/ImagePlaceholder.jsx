import { useState } from 'react'
import './ImagePlaceholder.css'

/**
 * Drop-in image slot for content that isn't final yet.
 *
 * Pass `name` to look for a real file at /assets/images/<name>. If it loads,
 * it's shown as a normal <img>. Until then (or if it 404s) a styled
 * placeholder with a label is rendered instead — so adding the real photo
 * later is just a matter of dropping a matching filename into
 * public/assets/images/, no code changes required.
 */
export default function ImagePlaceholder({
  name,
  label,
  ratio = '4 / 3',
  className = '',
  rounded = false,
}) {
  const [failed, setFailed] = useState(!name)

  return (
    <div
      className={`img-placeholder ${rounded ? 'img-placeholder--round' : ''} ${className}`.trim()}
      style={{ aspectRatio: ratio }}
    >
      {!failed && (
        <img
          src={`${import.meta.env.BASE_URL}assets/images/${name}`}
          alt={label || ''}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <div className="img-placeholder__fallback">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="8" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.3" />
            <path d="M3 16.5 8.5 12 13 15.5l3-2.5 5 4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          </svg>
          {label && <span>{label}</span>}
        </div>
      )}
    </div>
  )
}
