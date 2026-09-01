import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import heroImg from '../../assets/home/img1.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <Reveal as="div" className="container hero__row">
        <div className="hero__copy">
          <h1 className="hero__title">
            <span className="hero__title-line">Curious</span>
            <span className="hero__title-line">Little</span>
            <span className="hero__title-line">Press</span>
          </h1>

          <p className="hero__desc">
            Curious Little Press is an open printmaking studio in Pretoria offering
            professional facilities, workshops, and collaborative opportunities.
          </p>
        </div>

        <div className="hero__art">
          <img className="hero__art-img" src={heroImg} alt="Illustration of a crow perched on a printing press" />
        </div>

        <div className="hero__actions">
          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
          <a href="#studio" className="link-arrow">
            Explore the Studio
            <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </Reveal>
    </section>
  )
}
