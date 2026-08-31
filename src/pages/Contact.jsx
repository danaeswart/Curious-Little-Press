import PageIntro from '../components/PageIntro'
import ContactSection from '../components/home/ContactSection'

export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Get In Touch"
        desc="Whether it's a booking, a workshop enquiry, or just a question — we'd love to hear from you."
      />
      <ContactSection />
    </>
  )
}
