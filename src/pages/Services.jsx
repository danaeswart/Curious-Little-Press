import Reveal from '../components/Reveal'
import PageIntro from '../components/PageIntro'
import ServiceCard from '../components/ServiceCard'
import { SERVICES } from '../data/services'
import './Services.css'

export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="How To Use The Studio"
        desc="Four ways to work with Curious Little Press, from guided workshops to fully independent studio time."
      />

      <section className="services-page">
        <Reveal as="div" className="container services-page__grid">
          {SERVICES.map((service) => (
            <ServiceCard service={service} key={service.slug} />
          ))}
        </Reveal>
      </section>
    </>
  )
}
