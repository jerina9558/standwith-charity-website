import { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Impact from './pages/Impact.jsx'
import Sponsor from './pages/Sponsor.jsx'

const titles = { '/': 'Stand With Foundation | Sponsor a Child', '/impact': 'Our Impact | Stand With Foundation', '/sponsor': 'Sponsor a Child | Stand With Foundation' }

function RouteEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    document.title = titles[pathname] || titles['/']
    if (hash) { setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 60) }
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.12 })
    const t = setTimeout(() => document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el)), 30)
    return () => { clearTimeout(t); io.disconnect() }
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <RouteEffects />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
