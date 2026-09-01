import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import cplImg from '../../assets/home/wiCPL.JPG'
import './AboutClp.css'

const POINTS = [
  { n: '01', text: 'Open-access printmaking studio' },
  { n: '02', text: 'Space for emerging and professional artists' },
  { n: '03', text: 'Community-driven creative environment' },
  { n: '04', text: 'Focus on traditional handmade techniques' },
]

// Extra head start before the title/list animate in — the "Get to Know Us"
// button keeps its own timing below and isn't affected by this.
const BASE_DELAY = 220

export default function AboutClp() {
  return (
    <section className="about-clp">
      <div className="about-clp__row">
        <div className="about-clp__media">
          <img
            className="about-clp__media-img"
            src={cplImg}
            alt="Curious Little Press studio entrance with hanging shop sign"
          />
        </div>

        <div className="about-clp__content">
          <Reveal as="div" delay={BASE_DELAY}>
            <span className="eyebrow">About Us</span>
            <h2 className="about-clp__title">
              What is
              <br />
              <span className="text-accent">CLP?</span>
            </h2>
          </Reveal>

          <ul className="about-clp__list">
            {POINTS.map((point) => (
              <li key={point.n}>
                <span className="about-clp__num">{point.n}</span>
                <span>{point.text}</span>
              </li>
            ))}
          </ul>

          <Reveal
            as="div"
            delay={200}
            rootMargin="0px 0px 20% 0px"
            mobileRootMargin="0px 0px 25% 0px"
          >
            <Link to="/about" className="link-arrow about-clp__link">
              Get to Know Us
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
