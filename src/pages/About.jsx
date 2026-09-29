import AboutHeader from '../components/about/AboutHeader'
import AboutIntro from '../components/about/AboutIntro'
import FlightPath from '../components/about/FlightPath'
import usePageMeta from '../hooks/usePageMeta'

export default function About() {
  usePageMeta('about')
  return (
    <>
      <AboutHeader />
      <AboutIntro />
      <FlightPath />
    </>
  )
}
