import { useState } from 'react'
import { ImageOff } from 'lucide-react'
export default function Img({ src, alt, className = '', ...rest }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className={`img-fallback ${className}`} role="img" aria-label={alt}><ImageOff size={28} aria-hidden="true" /></div>
  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} {...rest} />
}
