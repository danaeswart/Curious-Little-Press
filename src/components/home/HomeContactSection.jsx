import Reveal from '../Reveal'
import location1 from '../../assets/home/location1.png'
import instagramIcon from '../../assets/icons/instagram.png'
import facebookIcon from '../../assets/icons/facebook.png'
import phoneIcon from '../../assets/icons/phone.png'
import './HomeContactSection.css'

const PHONES = [
  { number: '+27 79 447 9310', name: 'Marlene Salisbury', role: 'CLP Liaison Officer' },
  { number: '+27 12 803 2369', name: 'Landline' },
  { number: '+27 72 699 8090', name: 'Barry van der Westhuizen', role: 'Printmaker' },
  { number: '+27 72 249 3931', name: 'Rina Stutzer', role: 'CLP Co-ordinator, Founder and Artist' },
]

function MapCircle({ className = '' }) {
  return (
    <div className={`home-contact__map-wrap ${className}`.trim()}>
      <a
        href="https://www.google.com/maps/place/219+Vonkprop+Rd,+Samcor+Park,+Pretoria,+0002/@-25.73551,28.3293274,17z/data=!3m1!4b1!4m6!3m5!1s0x1e955fbaf46df325:0x97604a1c047bad08!8m2!3d-25.73551!4d28.3319023!16s%2Fg%2F11jn1nfx9g"
        target="_blank"
        rel="noopener noreferrer"
        className="home-contact__map"
      >
        <img className="home-contact__map-img" src={location1} alt="Map to Curious Little Press" />
      </a>
    </div>
  )
}

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
            For enquiries, bookings, rates and more information, email us at:
          </p>

          <span className="btn home-contact__email" aria-disabled="true">
            studio@curiouslittlepress.com
          </span>

          <p className="home-contact__label">Or call us on:</p>

          <ul className="home-contact__phones">
            {PHONES.map((phone) => (
              <li key={phone.number + phone.name}>
                <a href={`tel:${phone.number.replace(/\s+/g, '')}`} className="home-contact__phone-link">
                  <img src={phoneIcon} alt="" className="home-contact__phone-icon" />
                  <div className="home-contact__phone-content">
                    <span className="home-contact__phone-number">{phone.number}</span>
                    <div className="home-contact__phone-divider" aria-hidden="true" />
                    <div className="home-contact__phone-meta">
                      <span>{phone.name}</span>
                      {phone.role && <span>{phone.role}</span>}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <p className="home-contact__label home-contact__label--flight">Follow our flight</p>
          <div className="home-contact__socials">
            <a
              href="https://www.instagram.com/curiouslittlepress"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="home-contact__social"
            >
              <img src={instagramIcon} alt="" className="home-contact__social-icon" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/CuriousLittlePressStudios"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="home-contact__social"
            >
              <img src={facebookIcon} alt="" className="home-contact__social-icon" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <MapCircle className="home-contact__map-wrap--mobile" />

        <div className="home-contact__divider" aria-hidden="true" />

        <div className="home-contact__col home-contact__map-col">
          <MapCircle className="home-contact__map-wrap--desktop" />

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
            href="https://www.google.com/maps/place/219+Vonkprop+Rd,+Samcor+Park,+Pretoria,+0002/@-25.73551,28.3293274,17z/data=!3m1!4b1!4m6!3m5!1s0x1e955fbaf46df325:0x97604a1c047bad08!8m2!3d-25.73551!4d28.3319023!16s%2Fg%2F11jn1nfx9g"
            target="_blank"
            rel="noopener noreferrer"
            className="btn home-contact__map-btn"
          >
            View on Google Maps
          </a>
        </div>
      </Reveal>
    </section>
  )
}
