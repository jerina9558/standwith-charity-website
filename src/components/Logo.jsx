import { Link } from 'react-router-dom'
export default function Logo({ light }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="Stand With Foundation home">
      <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="7" fill={light ? '#fff' : '#14284b'} /><path d="M5 22c4-9 18-9 22 0" fill="none" stroke="#e8a33d" strokeWidth="3" strokeLinecap="round" /><path d="M10 22v-5M16 22v-7M22 22v-5" stroke={light ? '#14284b' : '#fff'} strokeWidth="2" strokeLinecap="round" /></svg>
      <span>Stand With<small>Foundation</small></span>
    </Link>
  )
}
