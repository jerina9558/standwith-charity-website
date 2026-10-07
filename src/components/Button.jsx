import { Link } from 'react-router-dom'
export default function Button({ to, variant = 'primary', size, children, className = '', ...rest }) {
  const cls = `btn btn-${variant} ${size === 'lg' ? 'btn-lg' : ''} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  return <button type="button" className={cls} {...rest}>{children}</button>
}
