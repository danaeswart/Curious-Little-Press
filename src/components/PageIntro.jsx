import Reveal from './Reveal'
import './PageIntro.css'

export default function PageIntro({ eyebrow, title, desc, className = '' }) {
  return (
    <section className={`page-intro ${className}`.trim()}>
      <Reveal as="div" className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="page-intro__title">{title}</h1>
        {desc && <p className="page-intro__desc">{desc}</p>}
      </Reveal>
    </section>
  )
}
