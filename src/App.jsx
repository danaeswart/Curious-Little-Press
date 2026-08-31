import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import PrintingWorkshops from './pages/services/PrintingWorkshops'
import AssistedPrinting from './pages/services/AssistedPrinting'
import EditionYourWork from './pages/services/EditionYourWork'
import IndependentStudioRental from './pages/services/IndependentStudioRental'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/join-a-workshop" element={<PrintingWorkshops />} />
        <Route path="services/work-with-guidance" element={<AssistedPrinting />} />
        <Route path="services/edition-your-work" element={<EditionYourWork />} />
        <Route path="services/work-independently" element={<IndependentStudioRental />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
