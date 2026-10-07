import { Link } from 'react-router-dom'
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone } from 'lucide-react'
import Logo from './Logo.jsx'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-tag">Together, We Can Change a Child's Tomorrow.</p>
          <div className="social">
            {[[Instagram, 'Instagram'], [Facebook, 'Facebook'], [Linkedin, 'LinkedIn'], [Youtube, 'YouTube']].map(([I, n]) => <a key={n} href="#top" onClick={e => e.preventDefault()} aria-label={n}><I size={18} /></a>)}
          </div>
        </div>
        <div><h3>Quick Links</h3><ul><li><Link to="/">Home</Link></li><li><Link to="/impact">Our Impact</Link></li><li><Link to="/sponsor">Sponsor a Child</Link></li></ul></div>
        <div><h3>Programs</h3><ul><li><Link to="/impact#programs">Education</Link></li><li><Link to="/impact#programs">Healthcare</Link></li><li><Link to="/impact#programs">Nutrition</Link></li><li><Link to="/impact#programs">Emergency Support</Link></li></ul></div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li><strong>Jerina Gnana Pushpa R</strong></li>
            <li><a href="mailto:hello@standwith.org"><Mail size={15} /> jerinaraja69@gmail.com</a></li>
            <li><a href="tel:+919677683342"><Phone size={15} /> +91 9677683342</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom"><p>© 2026 Stand With Foundation. All rights reserved.</p><p>Prototype website. All profiles and figures are fictional demo data.</p></div>
    </footer>
  )
}