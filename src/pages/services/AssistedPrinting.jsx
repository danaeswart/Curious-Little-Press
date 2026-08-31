import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import guidance1 from '../../assets/services/guidance1.png'
import guidance2 from '../../assets/services/guidance2.JPG'
import './ServicePage.css'

export default function AssistedPrinting() {
  return (
    <article className="service-page service-page--guidance">
      <div className="container service-page__grid">
        <Reveal as="div" className="service-page__col">
          <div className="service-page__img-wrap">
            <Link to="/services" className="btn service-page__back service-page__back--overlay">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
                <path d="M13 8H3M7 4 3 8l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Services
            </Link>

            <img
              className="service-page__img service-page__img--tall"
              src={guidance1}
              alt="A print technician guiding an artist through the printing process at CLP"
            />
          </div>

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

          <Link to="/services" className="btn service-page__cta--wide">
            View more Services
          </Link>
        </Reveal>

        <Reveal as="div" className="service-page__col" delay={150}>
          <h1 className="service-page__title">Assisted Printing/Technical Guidance</h1>

          <p>
            For artists who require technical support, CLP offers assisted printing sessions with
            guidance from an experienced practising print technician.
          </p>

          <p>
            This service is suited to artists who may not have extensive technical experience in
            specific printmaking processes or who would like support during the setup and printing
            of a project.
          </p>

          <p>
            Assistance may include press setup, technical troubleshooting, process guidance, paper
            preparation, registration, inking methods and general workshop support.
          </p>

          <p>
            Artists may work alongside the technician to develop a body of prints and produce
            their own editions. The level of assistance can vary depending on the project and
            artist&apos;s needs.
          </p>

          <Link to="/contact" className="btn service-page__cta--wide">
            Get in Touch
          </Link>

          <img
            className="service-page__img service-page__img--wide service-page__img--push-down"
            src={guidance2}
            alt="A print technician showing finished prints to visiting artists at CLP"
          />
        </Reveal>
      </div>
    </article>
  )
}
