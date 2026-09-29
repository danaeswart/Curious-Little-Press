// Per-page search titles and descriptions. These are what Google shows as
// the blue link and the grey snippet under it, so each one leads with the
// phrases people actually search for (printmaking studio Pretoria, litho
// workshops, monotype printing, hand printing, open studio).
const SITE = 'Curious Little Press'

// Live address of the site. If a custom domain is added later, change it
// here, in index.html, and in public/robots.txt + public/sitemap.xml.
export const SITE_URL = 'https://curiouslittlepress.netlify.app'

export const PAGE_META = {
  home: {
    title: `${SITE} | Open Printmaking Studio in Pretoria`,
    description:
      'Curious Little Press is an open printmaking studio in Pretoria offering lithography, etching, linocut, silkscreen and monotype printing, hand printing workshops and studio hire.',
  },
  services: {
    title: `Printmaking Services in Pretoria | ${SITE}`,
    description:
      'Hire our open printmaking studio in Pretoria: work independently, print with guidance, edition your work with a master printer, or join a litho printmaking workshop.',
  },
  workshops: {
    title: `Litho Printmaking Workshops in Pretoria | ${SITE}`,
    description:
      'Join lithography, linocut, silkscreen and monotype printmaking workshops in Pretoria. Hands-on hand printing sessions for beginners and practising artists.',
  },
  guidance: {
    title: `Assisted Hand Printing in Pretoria | ${SITE}`,
    description:
      'Bring your own plates or blocks and hand print alongside an in-house printer at our Pretoria printmaking studio, with help on technique, registration and ink.',
  },
  edition: {
    title: `Fine Art Print Editions in Pretoria | ${SITE}`,
    description:
      'Work with a master printer in Pretoria to produce consistent, numbered editions of lithographs, etchings, linocuts, silkscreens and monotype prints.',
  },
  independent: {
    title: `Open Printmaking Studio Hire in Pretoria | ${SITE}`,
    description:
      'Rent bench time at an open printmaking studio in Pretoria. Use our lithography and etching presses, litho stones and silkscreen facilities on your own schedule.',
  },
  gallery: {
    title: `From The Press: Prints Made in Our Pretoria Studio | ${SITE}`,
    description:
      'Lithographs, linocuts, etchings, silkscreens and monotype prints hand printed at Curious Little Press, a printmaking studio in Pretoria.',
  },
  about: {
    title: `About Our Printmaking Studio in Pretoria | ${SITE}`,
    description:
      'The story of Curious Little Press, an open print-making studio in Pretoria dedicated to lithography, monotype printing and traditional hand printing.',
  },
  contact: {
    title: `Contact Our Pretoria Printmaking Studio | ${SITE}`,
    description:
      'Visit or contact Curious Little Press at 219 Vonkprop Road, Samcor Park, Waltloo, Pretoria, for printmaking workshops, studio hire and printing enquiries.',
  },
  notFound: {
    title: `Page Not Found | ${SITE}`,
    description: 'Curious Little Press is an open printmaking studio in Pretoria.',
  },
}
