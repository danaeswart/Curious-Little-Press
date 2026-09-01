import { NavLink } from 'react-router-dom'
import './Footer.css'
import locationIcon from '../assets/icons/location.png'
import phoneIcon from '../assets/icons/phone.png'

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
            <img src={locationIcon} alt="" aria-hidden="true" />
            <span>
              <strong>219 Vonkrprop road</strong>, Samcor Park,
              <br />
              Waltloo, Pretoria
            </span>
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <ul>
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  data-label={link.label}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <p className="site-footer__label">For enquiries email us at:</p>
          <span className="btn btn--pill" aria-disabled="true">
            studio@curiouslittlepress.com
          </span>
          <p className="site-footer__label site-footer__label--spaced">Or call us on:</p>
          <span className="site-footer__phone" aria-disabled="true">
            <img src={phoneIcon} alt="" aria-hidden="true" className="site-footer__phone-icon" />
            <div className="site-footer__phone-content">
              <span className="site-footer__phone-number">+27 79 447 9310</span>
              <div className="site-footer__phone-divider" aria-hidden="true" />
              <span className="site-footer__phone-name">Marlene Salisbury</span>
            </div>
          </span>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} Curious Little Press. All rights reserved.
        </p>
        <p className="site-footer__terms">Ts &amp; Cs Apply</p>
      </div>
    </footer>
  )
}
