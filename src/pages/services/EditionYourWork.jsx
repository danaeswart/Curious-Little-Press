import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import print1 from '../../assets/services/print1.png'
import print2 from '../../assets/services/print2.png'
import './ServicePage.css'

export default function EditionYourWork() {
  return (
    <article className="service-page">
      <div className="container service-page__grid">
        <Reveal as="div" className="service-page__col">
          <a href="/#studio" className="btn service-page__back">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
              <path d="M13 8H3M7 4 3 8l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Services
          </a>

          <h1 className="service-page__title">Professional Printing on Behalf of the Artist</h1>

          <p>
            The interested artist commissions the print technician at CLP to produce a series of
            editioned prints on behalf of the artist, with the intention of developing
            well-executed work for independent publishing and exhibiting. The artist provides the
            technician with the plates, positive films and print specifications, and may visit
            for consultation, but is not actively present during the final printing stages.
          </p>

          <p>
            Moreover, the technician will conduct paper testing, colour development, plate
            preparation and edition management to fulfil the requirements of professional
            editioned prints. The technician works through the CLP platform but is also able to
            work directly or independently with the artist.
          </p>

          <Link to="/contact" className="btn service-page__cta--wide">
            Get in Touch
          </Link>

          <img
            className="service-page__img service-page__img--tall"
            src={print2}
            alt="Gloved hands smoothing a print plate at the CLP studio"
          />
        </Reveal>

        <Reveal as="div" className="service-page__col" delay={150}>
          <img
            className="service-page__img service-page__img--wide"
            src={print1}
            alt="A printer rolling ink over a plate at the CLP studio"
          />

          <div className="service-page__facts">
            <h2>Studio Facilities</h2>
            <p>
              Printing artists may work across a range of printmaking techniques, including
              intaglio, mono, litho, relief/lino, screen, etching, embossing and hybrid printing.
              <br />
              Printing artists have access to the printmaking facilities and equipment, including
              the etching press, lithography presses, silkscreen station, drying rack, worktables
              and studio spaces.
            </p>

            <h2>Extended Facilities</h2>
            <p>
              A work paperwork desktop, Wi-Fi, in-house desktop printer, kitchenette with fridge
              and microwave, bathrooms, gated and fenced premises with secure parking.
            </p>

            <h2>Max/Min Print Scale</h2>
            <p>
              The studio accommodates both small-scale and larger-format print projects across
              various printmaking techniques. Suggested etching plate or matrix size is 120 × 80
              cm, the silkscreen size limit is 120 × 85 cm, and the largest lithography stone
              available measures 60 × 70 cm.
            </p>
          </div>

          <a href="/#studio" className="btn service-page__cta--wide">
            View more Services
          </a>
        </Reveal>
      </div>
    </article>
  )
}
