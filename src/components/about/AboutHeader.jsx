import Reveal from '../Reveal'
import headerImg from '../../assets/about/header.JPG'
import './AboutHeader.css'

export default function AboutHeader() {
  return (
    <section className="about-header">
      <img className="about-header__img" src={headerImg} alt="Curious Little Press studio interior with printing presses" />
      <div className="about-header__overlay" aria-hidden="true" />
      <Reveal as="div" variant="fade" className="about-header__content">
        <h1 className="about-header__title">
          <span className="about-header__title-line">The</span>
          <span className="about-header__title-line">Studio</span>
          <span className="about-header__title-line">Story</span>
        </h1>
      </Reveal>
    </section>
  )
}
