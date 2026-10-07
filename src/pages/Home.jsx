import { GraduationCap, HeartPulse, Apple, Droplets, Search, CalendarHeart, BookHeart } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Counter from '../components/Counter.jsx'
import Img from '../components/Img.jsx'
import { stats } from '../data/impact.js'
import { IMG } from '../data/images.js'

const strip = [[GraduationCap, 'Education'], [HeartPulse, 'Healthcare'], [Apple, 'Nutrition'], [Droplets, 'Clean Water']]
const steps = [
  { icon: Search, title: 'Choose a Child', text: 'Explore children waiting for educational and developmental support.' },
  { icon: CalendarHeart, title: 'Start Sponsoring', text: 'Choose a monthly sponsorship amount that works for you.' },
  { icon: BookHeart, title: 'Follow Their Journey', text: 'Receive updates showing how your support contributes to their growth.' },
]

export default function Home() {
  return (
    <>
      <Hero label="EVERY CHILD DESERVES A CHANCE" title={<>Give a Child More Than Hope.<br />Give Them a Future.</>}
        text="Your support can help children access education, healthcare, nutrition and the opportunity to build a brighter future."
        image={IMG.hero} alt="A smiling child learning in a classroom">
        <Button to="/sponsor" size="lg">Sponsor a Child</Button>
        <Button to="/impact" variant="outline" size="lg">See Our Impact</Button>
      </Hero>

      <section className="strip" aria-label="What your support provides">
        <div className="container strip-inner">
          <p>Your support helps provide</p>
          <ul>{strip.map(([I, t]) => <li key={t}><I size={22} aria-hidden="true" />{t}</li>)}</ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle title="Small Contributions. Lasting Change." text="Sample figures shown for this prototype." />
          <div className="stats">
            {stats.map(s => <div key={s.label} className="stat reveal"><strong><Counter value={s.value} suffix={s.suffix} /></strong><span>{s.label}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionTitle title="Your Support. Their Future." center />
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title} className="step reveal">
                <span className="step-num">0{i + 1}</span>
                <s.icon size={28} className="step-icon" aria-hidden="true" />
                <h3>{s.title}</h3><p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container feature reveal">
          <div className="feature-media zoom"><Img src={IMG.girl} alt="Aanya, a nine-year-old girl who dreams of becoming a teacher" /></div>
          <div className="feature-copy">
            <p className="kicker">Featured story</p>
            <h2>Meet Aanya</h2>
            <p>Aanya dreams of becoming a teacher. With access to school supplies, regular meals and educational support, she is getting closer to that dream every day.</p>
            <p className="muted">Aanya is a fictional demo profile used for this prototype.</p>
            <Button to="/sponsor">Sponsor a Child</Button>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>One decision can change a future.</h2>
          <p>Become a sponsor today and help a child move closer to a life filled with opportunity.</p>
          <Button to="/sponsor" variant="accent" size="lg">Become a Sponsor</Button>
        </div>
      </section>
    </>
  )
}
