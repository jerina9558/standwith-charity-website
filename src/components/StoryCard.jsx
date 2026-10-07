import { ArrowRight } from 'lucide-react'
import Img from './Img.jsx'
export default function StoryCard({ story, onOpen }) {
  return (
    <article className="story-card reveal">
      <div className="zoom"><Img src={story.image} alt={`${story.category} programme: ${story.title}`} /></div>
      <div className="story-body">
        <span className="tag">{story.category}</span>
        <h3>{story.title}</h3><p>{story.text}</p>
        <button type="button" className="text-link" onClick={onOpen} aria-label={`Read story: ${story.title}`}>Read Story <ArrowRight size={16} /></button>
      </div>
    </article>
  )
}
