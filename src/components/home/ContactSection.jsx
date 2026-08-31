import Reveal from '../Reveal'
import ImagePlaceholder from '../ImagePlaceholder'
import './ContactSection.css'

const PHONES = [
  { number: '+27 12 803 2369', name: 'Marlene Salisbury', role: 'Liaison Officer' },
  { number: '+27 79 447 9310', name: 'Barry van der Westhuizen', role: 'Printer' },
  { number: '+27 12 803 2369', name: 'Rina Stutzer', role: 'Artist' },
]

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <Reveal as="div" className="container contact-section__row">
        <div className="contact-section__col">
          <h2 className="contact-section__title">
            We&apos;d Love To
            <br />
            Hear From You
          </h2>
          <p className="contact-section__lead">
            For enquiries, bookings, or more information, email us at:
          </p>

          <a href="mailto:studio@curiouslittlepress.com" className="btn contact-section__email">
            studio@curiouslittlepress.com
          </a>

          <p className="contact-section__label">Or call us on :</p>

          <ul className="contact-section__phones">
            {PHONES.map((phone) => (
              <li key={phone.number + phone.name}>
                <a href={`tel:${phone.number.replace(/\s/g, '')}`} className="contact-section__phone">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M6 3h3l1.6 4.5-2 1.6a13 13 0 0 0 6.3 6.3l1.6-2L21 15v3a2 2 0 0 1-2 2C11.8 20 4 12.2 4 5a2 2 0 0 1 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {phone.number}
                </a>
                <div className="contact-section__phone-meta">
                  <span>{phone.name}</span>
                  <span>{phone.role}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="contact-section__label contact-section__label--flight">Follow Our Flight</p>
          <div className="contact-section__socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="contact-section__social"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="contact-section__social"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M14 9h-1.5a1 1 0 0 0-1 1v2H14l-.4 2H11.5v5H9v-5H7.5v-2H9v-1.8C9 8.5 10.2 7 12.3 7H14v2Z" fill="currentColor" />
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div className="contact-section__divider" aria-hidden="true" />

        <div className="contact-section__col contact-section__map-col">
          <div className="contact-section__map-wrap">
            <span className="contact-section__map-caption">Click here to find us</span>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="contact-section__map">
              <ImagePlaceholder name="map.jpg" label="Map" ratio="1 / 1" rounded />
              <span className="contact-section__pin" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
                    fill="var(--color-accent)"
                    stroke="var(--color-ink)"
                    strokeWidth="1"
                  />
                  <circle cx="12" cy="9.5" r="2.4" fill="var(--color-ink)" />
                </svg>
              </span>
            </a>
          </div>

          <p className="contact-section__address">
            219 Vonkrprop road, Samcor Park,
            <br />
            Waltloo, Pretoria
          </p>
          <p className="contact-section__directions">
            Enter gate to Dionysus Sculpture Works (DSW), on arrival, walk to the large
            building and turn right, to the French door studios to the right and front of
            the building, look out for the CLP sign above the printing studio door.
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="btn contact-section__map-btn"
          >
            View on Google Maps
          </a>
        </div>
      </Reveal>
    </section>
  )
}
