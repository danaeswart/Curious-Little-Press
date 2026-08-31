import PageIntro from '../components/PageIntro'
import AboutClp from '../components/home/AboutClp'

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="About Us"
        title="About Curious Little Press"
        desc="The story of the studio, the people behind it, and what drives our approach to printmaking — full write-up coming soon."
      />
      <AboutClp />
    </>
  )
}
