import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import { SERVICES } from '../data/services'
import './Services.css'

const BASE_DELAY = 150

export default function Services() {
  return (
    <section className="services-page">
      <div className="container">
        <Reveal as="div" delay={BASE_DELAY}>
          <h1 className="services-page__title">How To Use The Studio</h1>
        </Reveal>

        <div className="services-page__grid">
          {SERVICES.map((service, i) => (
            <Reveal as="div" key={service.slug} delay={BASE_DELAY + i * 120}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal
          as="div"
          delay={BASE_DELAY + SERVICES.length * 120 + 100}
          className="services-page__cta"
          rootMargin="0px 0px 100% 0px"
          mobileRootMargin="0px 0px 100% 0px"
        >
          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
