import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import ServiceCard from '../ServiceCard'
import { SERVICES } from '../../data/services'
import './HowToUse.css'

const BASE_DELAY = 150

export default function HowToUse() {
  return (
    <section className="how-to-use">
      <div className="container" id="studio">
        <Reveal as="div" delay={BASE_DELAY}>
          <h2 className="how-to-use__title">
            How To Use
            <br />
            The Studio
          </h2>
        </Reveal>

        <div className="how-to-use__grid">
          {SERVICES.map((service, i) => (
            <Reveal
              as="div"
              key={service.slug}
              delay={BASE_DELAY + i * 120}
              mobileRootMargin="0px 0px 25% 0px"
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal
          as="div"
          delay={BASE_DELAY + SERVICES.length * 120 + 100}
          className="how-to-use__cta"
          rootMargin="0px 0px 15% 0px"
          mobileRootMargin="0px 0px 25% 0px"
        >
          <Link to="/gallery" className="btn">
            View our Gallery
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
