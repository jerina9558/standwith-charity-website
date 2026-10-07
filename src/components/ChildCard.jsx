import { Check, MapPin } from 'lucide-react'
import Img from './Img.jsx'
export default function ChildCard({ child, selected, onSelect }) {
  return (
    <article className={`child-card reveal ${selected ? 'selected' : ''}`}>
      <div className="zoom"><Img src={child.image} alt={`Portrait of ${child.name}, a child waiting for sponsorship`} />{selected && <span className="chosen"><Check size={14} /> Selected</span>}</div>
      <div className="child-body">
        <h3>{child.name}<span>Age {child.age}</span></h3>
        <p className="loc"><MapPin size={14} aria-hidden="true" /> {child.location}</p>
        <p>{child.bio}</p>
        <div className="tags">{child.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
        <button type="button" className={`btn ${selected ? 'btn-primary' : 'btn-outline'} btn-block`} onClick={() => onSelect(child)} aria-pressed={selected}>Sponsor {child.name}</button>
      </div>
    </article>
  )
}
