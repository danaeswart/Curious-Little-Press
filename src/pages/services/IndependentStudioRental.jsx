import { Link } from 'react-router-dom'
import Reveal from '../../components/Reveal'
import depend1 from '../../assets/services/depend1.png'
import depend2 from '../../assets/services/depend2.png'
import './ServicePage.css'

export default function IndependentStudioRental() {
  return (
    <article className="service-page service-page--guidance">
      <div className="container service-page__grid">
        <Reveal as="div" className="service-page__col">
          <div className="service-page__img-wrap">
            <a href="/#studio" className="btn service-page__back service-page__back--overlay">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
                <path d="M13 8H3M7 4 3 8l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Services
            </a>

            <img
              className="service-page__img service-page__img--tall"
              src={depend1}
              alt="The CLP studio with a drying rack, worktables and an etching press"
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

          <a href="/#studio" className="btn service-page__cta--wide">
            View more Services
          </a>
        </Reveal>

        <Reveal as="div" className="service-page__col" delay={150}>
          <h1 className="service-page__title">Independent Studio Rental</h1>

          <p>
            Artists may rent the studio independently for print production and project
            development. This option is intended for artists with prior printmaking experience
            who are comfortable working independently within a shared professional studio
            environment.
          </p>

          <p>
            Basic studio materials and equipment are available for use, including press
            blankets, newsprint, rollers, solvents, cleaning materials and work surfaces. Artists
            are generally expected to supply their own paper, inks, plates, screens and
            specialised materials depending on their project requirements.
          </p>

          <p>Artists have access to printmaking facilities and equipment</p>

          <Link to="/contact" className="btn service-page__cta--wide">
            Get in Touch
          </Link>

          <img
            className="service-page__img service-page__img--wide service-page__img--push-down"
            src={depend2}
            alt="An artist working at a light table beside a press in the CLP studio"
          />
        </Reveal>
      </div>
    </article>
  )
}
