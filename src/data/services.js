import service1 from '../assets/home/service1.JPG'
import service2 from '../assets/home/service2.JPG'
import service3 from '../assets/home/service3.png'
import service4 from '../assets/home/service4.JPG'

export const SERVICES = [
  {
    slug: 'join-a-workshop',
    title: 'Join a Workshop',
    desc: 'Learn techniques through structured sessions.',
    detail:
      'Our workshops introduce printmaking techniques — from linocut to etching — in small, hands-on groups led by practising artists. No experience necessary, just curiosity.',
    image: service1,
  },
  {
    slug: 'work-with-guidance',
    title: 'Work With Guidance',
    desc: 'Print with assistance from an in-house printer.',
    detail:
      'Bring your own plates or blocks and print alongside one of our in-house printers, who can help troubleshoot technique, registration, and ink as you go.',
    image: service2,
  },
  {
    slug: 'edition-your-work',
    title: 'Edition Your Work',
    desc: 'Work with a master printer to produce editions.',
    detail:
      'Collaborate with a master printer to pull a consistent, numbered edition of your work — from proofing through to the final signed run.',
    image: service3,
  },
  {
    slug: 'work-independently',
    title: 'Work Independently',
    desc: 'Use the studio for your own projects.',
    detail:
      'Once inducted, rent bench time and use our presses, plates, and facilities independently, on your own schedule, for your own projects.',
    image: service4,
  },
]

export function getServiceBySlug(slug) {
  return SERVICES.find((service) => service.slug === slug)
}
