import Reveal from '../Reveal'
import location1 from '../../assets/home/location1.png'
import location2 from '../../assets/home/location2.png'
import instagramIcon from '../../assets/icons/instagram.png'
import facebookIcon from '../../assets/icons/facebook.png'
import phoneIcon from '../../assets/icons/phone.png'
import './HomeContactSection.css'

const PHONES = [
  { number: '+27 12 803 2369', name: 'Marlene Salisbury', role: 'Liaison Officer' },
  { number: '+27 79 447 9310', name: 'Barry van der Westhuizen', role: 'Printer' },
  { number: '+27 12 803 2369', name: 'Rina Stutzer', role: 'Artist' },
]

export default function HomeContactSection() {
  return (
    <section className="home-contact" id="contact">
      <Reveal as="div" className="container home-contact__row">
        <div className="home-contact__col">
          <h2 className="home-contact__title">
            We&apos;d Love To
            <br />
            Hear From You
          </h2>
          <p className="home-contact__lead">
            For enquiries, bookings, or more information, email us at:
          </p>

          <a href="mailto:studio@curiouslittlepress.com" className="btn home-contact__email">
            studio@curiouslittlepress.com
          </a>

          <p className="home-contact__label">Or call us on:</p>

          <ul className="home-contact__phones">
            {PHONES.map((phone) => (
              <li key={phone.number + phone.name}>
                <a href={`tel:${phone.number.replace(/\s/g, '')}`} className="home-contact__phone-link">
                  <img src={phoneIcon} alt="" className="home-contact__phone-icon" />
                  <div className="home-contact__phone-content">
                    <span className="home-contact__phone-number">{phone.number}</span>
                    <div className="home-contact__phone-divider" aria-hidden="true" />
                    <div className="home-contact__phone-meta">
                      <span>{phone.name}</span>
                      <span>{phone.role}</span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <p className="home-contact__label home-contact__label--flight">Follow our flight</p>
          <div className="home-contact__socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="home-contact__social"
            >
              <img src={instagramIcon} alt="" className="home-contact__social-icon" />
              <span>Instagram</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="home-contact__social"
            >
              <img src={facebookIcon} alt="" className="home-contact__social-icon" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div className="home-contact__divider" aria-hidden="true" />

        <div className="home-contact__col home-contact__map-col">
          <div className="home-contact__map-wrap">
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="home-contact__map">
              <img className="home-contact__map-img home-contact__map-img--default" src={location1} alt="Map to Curious Little Press" />
              <img className="home-contact__map-img home-contact__map-img--hover" src={location2} alt="" aria-hidden="true" />
            </a>
          </div>

          <p className="home-contact__address">
            219 Vonkrprop road, Samcor Park,
            <br />
            Waltloo, Pretoria
          </p>
          <p className="home-contact__directions">
            Enter gate to Dionysus Sculpture Works (DSW), on arrival, walk to the large
            building and turn right, to the French door studios to the right and front of
            the building, look out for the CLP sign above the printing studio door.
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="btn home-contact__map-btn"
          >
            View on Google Maps
          </a>
        </div>
      </Reveal>
    </section>
  )
}
