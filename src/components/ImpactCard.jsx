import { ArrowRight } from 'lucide-react'
export default function ImpactCard({ icon: Icon, title, text, onOpen }) {
  return (
    <article className="impact-card reveal">
      <span className="icon-badge"><Icon size={24} aria-hidden="true" /></span>
      <h3>{title}</h3><p>{text}</p>
      <button type="button" className="text-link" onClick={onOpen} aria-label={`Learn more about ${title}`}>Learn More <ArrowRight size={16} /></button>
    </article>
  )
}
