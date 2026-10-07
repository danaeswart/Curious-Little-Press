import Hero from '../components/home/Hero'
import AboutClp from '../components/home/AboutClp'
import HowToUse from '../components/home/HowToUse'
import Testimonials from '../components/home/Testimonials'
import usePageMeta from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta('home')
  return (
    <>
      <Hero />
      <AboutClp />
      <HowToUse />
      <Testimonials />
    </>
  )
}
