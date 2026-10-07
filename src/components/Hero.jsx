import Img from './Img.jsx'
export default function Hero({ label, title, text, children, image, alt, compact }) {
  return (
    <section className={`hero ${compact ? 'hero-compact' : ''}`}>
      <div className="container hero-grid">
        <div className="hero-copy">
          {label && <p className="hero-label">{label}</p>}
          <h1>{title}</h1>
          <p className="lead">{text}</p>
          {children && <div className="hero-actions">{children}</div>}
        </div>
        {image && <div className="hero-media"><Img src={image} alt={alt} fetchpriority="high" loading="eager" /></div>}
      </div>
    </section>
  )
}
