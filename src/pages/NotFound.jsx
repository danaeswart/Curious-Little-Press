import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <Reveal>
          <span className="eyebrow">404</span>
          <h1 className="not-found__title">Page Not Found</h1>
          <p className="not-found__desc">
            The page you&apos;re looking for doesn&apos;t exist, or has moved.
          </p>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
