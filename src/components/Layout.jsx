import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import './Layout.css'

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollToTop />
      <Header />
      <main key={pathname} className="page-fade">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
