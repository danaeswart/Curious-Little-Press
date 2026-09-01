import Reveal from '../Reveal'
import img1Group from '../../assets/about/img1group.JPG'
import img2Group from '../../assets/about/img2group.JPG'
import instagramIcon from '../../assets/icons/instagram.png'
import facebookIcon from '../../assets/icons/facebook.png'
import './AboutIntro.css'

export default function AboutIntro() {
  return (
    <section className="about-intro">
      <div className="container about-intro__row">
        <Reveal as="div" className="about-intro__col">
          <h2 className="about-intro__heading">Curious Little Press Studio</h2>

          <p>
            Curious Little Press (CLP) is an environment dedicated to the practice of fine
            art printmaking.
          </p>

          <p>
            We offer workshops, host community related events and exhibitions and provide
            an opportunity to join a vital collective of artists by offering studio rental.
            Through this program studio artists have access to a professional printmaking
            studio, and a chance to interact with other fine artists and printmakers.
          </p>

          <p>
            Studio artists work on an independent basis to produce their own prints. CLP
            studio rental is designed specifically for individuals who have demonstrated an
            appropriate level of experience in printmaking and are granted access to work in
            one or more printmaking techniques, including relief-, linocut, lithography,
            intaglio, monotype and screen printing.
          </p>

          <a href="/#studio" className="btn about-intro__btn about-intro__btn--services">
            View our Services
          </a>
        </Reveal>

        <div className="about-intro__media">
          <img
            src={img1Group}
            alt="Studio artists gathered around a printing press"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="container about-intro__row about-intro__row--reverse">
        <div className="about-intro__media">
          <img
            src={img2Group}
            alt="Studio artists relaxing together"
            loading="lazy"
            decoding="async"
          />
        </div>

        <Reveal as="div" className="about-intro__col">
          <p>
            While all studio artists are not required to have extensive experience in their
            chosen medium, we do require that they may use the facilities correctly,
            independently, safely, and with consideration for other studio artists. In the
            case that the artist does not carry the knowledge base to operate the presses,
            equipment or understand the techniques specific to the medium process required,
            CLP studio offer the artist a trained printer to guide the artist.
          </p>

          <a href="/contact" className="btn about-intro__btn">
            Get in Touch
          </a>

          <h3 className="about-intro__flight-title">Follow Our Flight</h3>

          <div className="about-intro__socials">
            <span
              aria-label="Instagram"
              aria-disabled="true"
              className="about-intro__social"
            >
              <img src={instagramIcon} alt="" />
              <span>Instagram</span>
            </span>
            <span
              aria-label="Facebook"
              aria-disabled="true"
              className="about-intro__social"
            >
              <img src={facebookIcon} alt="" />
              <span>Facebook</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
