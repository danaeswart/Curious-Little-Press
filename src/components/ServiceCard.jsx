import { Link } from 'react-router-dom'
import './ServiceCard.css'

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <div className="service-card__img-wrap">
        <img className="service-card__img" src={service.image} alt={service.title} loading="lazy" />
      </div>
      <span className="service-card__title">
        {service.title}
        <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <p className="service-card__desc">{service.desc}</p>
    </Link>
  )
}
