import { useState } from 'react'
import Reveal from '../Reveal'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    name: 'Johann Oppermann',
    role: 'Linocut workshop participant',
    date: '22 May 2026',
    excerpt:
      'Attending the practical two-day linocut printing workshop at Curious Little Press, led by master printmaker Barry van der Westhuizen, was a meaningful and enriching experience.',
    full: [
      'Attending the practical two-day linocut printing workshop at Curious Little Press, led by master printmaker Barry van der Westhuizen, was a meaningful and enriching experience. Barry is an exceptional craftsman who shares his skills, experience and expertise with both beginners and experienced printmakers. He effectively teaches and demonstrates various techniques until one understands how to complete the required tasks.',
      'The workshop provided all the necessary materials, including lino and high-quality etching paper, with guidance on how to carve, tear and bathe the paper and ultimately create professional prints. One of the most valuable lessons I learned was how to observe more intentionally. Barry skilfully shared different lino techniques and texture possibilities, giving me the confidence to experiment with various tools, materials, surfaces and techniques.',
      'The class encouraged me to take creative risks, embrace mistakes and learn from them. These enhanced printing skills have influenced not only my artwork but also my everyday thinking, while deepening my appreciation for the creative process and expressing creative ideas visually.',
    ],
  },
  {
    name: 'Zainab Choonara',
    role: 'CLP Independent Printing',
    excerpt:
      'My experience of the printing process at the studio has been incredibly positive. The space is well-equipped, spacious and thoughtfully set up to support the practical demands of printmaking.',
    full: [
      'My experience of the printing process at the studio has been incredibly positive. The space is well-equipped, spacious and thoughtfully set up to support the practical demands of printmaking. There is ample room to work comfortably, dry prints and continue with other processes simultaneously. The facilities, from the paper-soaking bath to the press size, accommodate my practice exceptionally well.',
      'The studio environment itself is also a major strength. Being situated within the sculpture park creates a secure and peaceful atmosphere where I can focus fully on my work. The technical support and overall setup make it a space I genuinely enjoy returning to.',
      'If I could suggest one addition, it would perhaps be having basic relief printing ink available in the studio, if feasible, as this could create even more opportunities for experimentation and accessibility. Overall, I’ve been extremely happy with both the process and the outcomes of the work produced there.',
    ],
  },
]

const BASE_DELAY = 150

function TestimonialCard({ item, delay }) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal as="div" delay={delay} mobileRootMargin="0px 0px 25% 0px">
      <article className={`testimonial-card ${open ? 'is-open' : ''}`.trim()}>
        <span className="testimonial-card__mark" aria-hidden="true">
          &ldquo;
        </span>

        <p className="testimonial-card__excerpt">{item.excerpt}</p>

        <div className="testimonial-card__full-wrap">
          <div className="testimonial-card__full-inner">
            {item.full.map((para, i) => (
              <p className="testimonial-card__full-para" key={i}>
                {para}
              </p>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="testimonial-card__toggle link-arrow"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Show less' : 'Read full testimonial'}
          <svg
            className="testimonial-card__toggle-icon"
            viewBox="0 0 16 16"
            width="14"
            height="14"
            fill="none"
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <footer className="testimonial-card__footer">
          <span className="testimonial-card__name">{item.name}</span>
          <span className="testimonial-card__meta">
            {item.role}
            {item.date ? ` — ${item.date}` : ''}
          </span>
        </footer>
      </article>
    </Reveal>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <Reveal as="div" delay={BASE_DELAY}>
          <span className="eyebrow">Testimonials</span>
          <h2 className="testimonials__title">
            In Their
            <br />
            <span className="text-accent">Own Words</span>
          </h2>
        </Reveal>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((item, i) => (
            <TestimonialCard key={item.name} item={item} delay={BASE_DELAY + (i + 1) * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
