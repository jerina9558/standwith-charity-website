import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
const links = [{ to: '/', label: 'Home' }, { to: '/impact', label: 'Our Impact' }, { to: '/sponsor', label: 'Sponsor a Child' }]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Logo />
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main navigation">
          {links.map(l => <NavLink key={l.to} to={l.to} end>{l.label}</NavLink>)}
          <Button to="/sponsor#support" className="nav-donate-m">Donate Now</Button>
        </nav>
        <Button to="/sponsor#support" className="nav-donate">Donate Now</Button>
        <button className="burger" onClick={() => setOpen(o => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
