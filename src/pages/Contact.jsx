import HomeContactSection from '../components/home/HomeContactSection'
import usePageMeta from '../hooks/usePageMeta'

export default function Contact() {
  usePageMeta('contact')
  return <HomeContactSection />
}
