import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { getServiceBySlug, SERVICES } from '../data/services'
import './ServiceDetail.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/services" replace />

  const otherServices = SERVICES.filter((s) => s.slug !== slug)

  return (
    <article className="service-detail">
      <Reveal as="div" className="container service-detail__row">
        <div className="service-detail__media">
          <img
            className="service-detail__media-img"
            src={service.image}
            alt={service.title}
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className="service-detail__content">
          <Link to="/services" className="link-arrow service-detail__back">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
              <path d="M13 8H3M7 4 3 8l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Services
          </Link>
          <span className="eyebrow">How To Use The Studio</span>
          <h1 className="service-detail__title">{service.title}</h1>
          <p className="service-detail__desc">{service.detail}</p>
          <Link to="/contact" className="btn">
            Enquire About This
          </Link>
        </div>
      </Reveal>

      <Reveal as="div" className="container service-detail__more">
        <h2 className="service-detail__more-title">Other Ways To Work With Us</h2>
        <div className="service-detail__more-grid">
          {otherServices.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="service-detail__more-link">
              {s.title}
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>
      </Reveal>
    </article>
  )
}
