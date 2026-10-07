import { useState } from 'react'
import Hero from '../components/Hero.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ImpactCard from '../components/ImpactCard.jsx'
import StoryCard from '../components/StoryCard.jsx'
import Button from '../components/Button.jsx'
import Modal from '../components/Modal.jsx'
import Img from '../components/Img.jsx'
import { programs, breakdown, programDetails } from '../data/impact.js'
import { stories, storyDetails } from '../data/stories.js'
import { IMG } from '../data/images.js'

export default function Impact() {
  const [detail, setDetail] = useState(null)
  const close = () => setDetail(null)
  const pd = detail?.type === 'program' ? programDetails[detail.item.id] : null
  const sd = detail?.type === 'story' ? storyDetails[detail.item.id] : null
  const PIcon = detail?.type === 'program' ? detail.item.icon : null
  return (
    <>
      <Hero compact title="Creating Change Where It Matters Most"
        text="Stand With works alongside communities to improve children's access to education, healthcare, nutrition and essential resources, so every child has a fair start."
        image={IMG.community} alt="Volunteers and community members working together" />

      <section className="section" id="programs">
        <div className="container">
          <SectionTitle title="Where your support goes" text="Four focus areas, shaped with local partners." />
          <div className="grid-4">{programs.map(p => <ImpactCard key={p.id} {...p} onOpen={() => setDetail({ type: 'program', item: p })} />)}</div>
        </div>
      </section>

      <section className="section section-tint" id="stories">
        <div className="container">
          <SectionTitle title="Stories of change" />
          <div className="grid-3">{stories.map(s => <StoryCard key={s.id} story={s} onOpen={() => setDetail({ type: 'story', item: s })} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container trust reveal">
          <div>
            <SectionTitle title="Your Trust Matters." text="We believe donors deserve to understand how their support is used. Our goal is to communicate openly about the programs we fund and the communities we serve." />
            <p className="muted">Sample data for this fictional prototype.</p>
            <Button to="/sponsor">Start Sponsoring</Button>
          </div>
          <div className="breakdown">
            <div className="bar" role="img" aria-label="92% programs, 5% operations, 3% fundraising">
              {breakdown.map(b => <span key={b.label} style={{ width: `${b.pct}%`, background: b.color }} />)}
            </div>
            <ul>{breakdown.map(b => <li key={b.label}><i style={{ background: b.color }} /><strong>{b.pct}%</strong><span>{b.label}</span></li>)}</ul>
          </div>
        </div>
      </section>

      <Modal open={!!detail} onClose={close} title={detail?.item.title || 'Details'}>
        {pd && (
          <div className="detail">
            <span className="icon-badge"><PIcon size={24} aria-hidden="true" /></span>
            <h2>{detail.item.title}</h2>
            <p>{pd.intro}</p>
            <h3>How your support helps</h3>
            <ul className="detail-list">{pd.points.map(x => <li key={x}>{x}</li>)}</ul>
            <Button to="/sponsor">Sponsor a Child</Button>
          </div>
        )}
        {sd && (
          <div className="detail">
            <div className="detail-img"><Img src={detail.item.image} alt={detail.item.title} /></div>
            <span className="tag">{detail.item.category}</span>
            <h2>{detail.item.title}</h2>
            {sd.body.map(t => <p key={t}>{t}</p>)}
            <p className="muted small">{sd.note}</p>
            <Button to="/sponsor">Sponsor a Child</Button>
          </div>
        )}
      </Modal>
    </>
  )
}
