import { NavLink } from 'react-router-dom'
import './Footer.css'

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'From the Press', to: '/gallery' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <h3>
            Curious
            <br />
            Little
            <br />
            Press
          </h3>
          <p className="site-footer__address">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            <span>
              219 Vonkrprop road, Samcor Park,
              <br />
              Waltloo, Pretoria
            </span>
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <ul>
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <p className="site-footer__label">For enquiries email us at:</p>
          <a className="btn btn--pill" href="mailto:studio@curiouslittlepress.com">
            studio@curiouslittlepress.com
          </a>
          <p className="site-footer__label site-footer__label--spaced">Or call us on:</p>
          <a className="site-footer__phone" href="tel:+27128032369">
            +27 12 803 2369
          </a>
          <p className="site-footer__label">Marlene Salisbury</p>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Curious Little Press. All rights reserved.</p>
        <p>Ts &amp; Cs Apply</p>
      </div>
    </footer>
  )
}
