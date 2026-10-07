import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2, HeartHandshake } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ChildCard from '../components/ChildCard.jsx'
import SponsorshipCard from '../components/SponsorshipCard.jsx'
import Modal from '../components/Modal.jsx'
import { children } from '../data/children.js'
import { plans } from '../data/impact.js'
import { IMG } from '../data/images.js'

const empty = { name: '', email: '', phone: '', city: '', country: '', support: 'Education', consent: false }

function validate(f) {
  const e = {}
  if (!f.name.trim()) e.name = 'Enter your full name.'
  if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email address.'
  if (f.phone.replace(/\D/g, '').length < 8) e.phone = 'Enter a phone number with at least 8 digits.'
  if (!f.city.trim()) e.city = 'Enter your city.'
  if (!f.country.trim()) e.country = 'Enter your country.'
  return e
}

export default function Sponsor() {
  const navigate = useNavigate()
  const [child, setChild] = useState(null)
  const [plan, setPlan] = useState(1000)
  const [custom, setCustom] = useState('')
  const [freq, setFreq] = useState('monthly')
  const [amountError, setAmountError] = useState('')
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})

  const amount = plan === 'custom' ? Number(custom) : plan
  const fmt = n => '₹' + Number(n).toLocaleString('en-IN')

  const pickChild = c => { setChild(c); document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' }) }
  const next = () => {
    if (!amount || amount < 100) { setAmountError('Enter a custom amount of ₹100 or more.'); return }
    setAmountError(''); setErrors({}); setDone(false); setOpen(true)
  }
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const submit = e => {
    e.preventDefault()
    const er = validate(form)
    if (!form.consent) er.consent = 'Please tick the box to receive updates.'
    setErrors(er)
    if (Object.keys(er).length === 0) setDone(true)
  }
  const close = () => { setOpen(false); if (done) { setForm(empty); setDone(false) } }

  const field = (id, label, type = 'text', auto) => (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} autoComplete={auto} value={form[id]} onChange={e => set(id, e.target.value)} aria-invalid={!!errors[id]} aria-describedby={errors[id] ? id + '-err' : undefined} />
      {errors[id] && <p className="err" id={id + '-err'}>{errors[id]}</p>}
    </div>
  )

  return (
    <>
      <Hero compact title="Become a Child Sponsor"
        text="Your monthly support can help provide a child with access to education, nutrition, healthcare and the confidence to dream bigger."
        image={IMG.books} alt="Children's school books and stationery on a desk">
        <Button size="lg" onClick={() => document.getElementById('children')?.scrollIntoView({ behavior: 'smooth' })}>Meet the Children</Button>
      </Hero>

      <section className="section" id="children">
        <div className="container">
          <SectionTitle title="Children Waiting for Support" text="Choose a child to sponsor, or continue with general support. These are fictional demo profiles." />
          <div className="grid-4">{children.map(c => <ChildCard key={c.id} child={c} selected={child?.id === c.id} onSelect={pickChild} />)}</div>
        </div>
      </section>

      <section className="section section-tint" id="support">
        <div className="container narrow">
          <SectionTitle title="Choose Your Monthly Support" center text={child ? `You are sponsoring ${child.name}, age ${child.age}, from ${child.location}.` : 'Select a child above, or give general support.'} />
          {child && <p className="center"><button className="text-btn" onClick={() => setChild(null)}>Clear selection</button></p>}

          <div className="toggle" role="radiogroup" aria-label="Giving frequency">
            {[['monthly', 'Monthly'], ['once', 'One-time']].map(([v, l]) => <button key={v} type="button" role="radio" aria-checked={freq === v} className={freq === v ? 'on' : ''} onClick={() => setFreq(v)}>{l}</button>)}
          </div>

          <div className="plans">
            {plans.map(p => <SponsorshipCard key={p.amount} {...p} frequency={freq} selected={plan === p.amount} onSelect={() => { setPlan(p.amount); setAmountError('') }} />)}
          </div>

          <div className={`custom ${plan === 'custom' ? 'selected' : ''}`}>
            <label htmlFor="custom">Custom Amount</label>
            <div className="money"><span aria-hidden="true">₹</span>
              <input id="custom" type="number" min="100" inputMode="numeric" placeholder="Enter amount" value={custom}
                onFocus={() => setPlan('custom')} onChange={e => { setCustom(e.target.value); setPlan('custom'); setAmountError('') }} aria-describedby="custom-err" />
            </div>
          </div>
          <p className="err center" id="custom-err" role="alert">{amountError}</p>

          <div className="summary">
            <p>Your gift: <strong>{amount ? fmt(amount) : '—'}</strong> {freq === 'monthly' ? 'every month' : 'one time'}{child ? <> for <strong>{child.name}</strong></> : null}</p>
            <Button size="lg" onClick={next}>Continue Sponsorship</Button>
            <p className="muted small"></p>
          </div>
        </div>
      </section>

      <Modal open={open} onClose={close} title="Sponsorship details">
        {done ? (
          <div className="success">
            <CheckCircle2 size={56} aria-hidden="true" />
            <h2>Thank You for Choosing to Make a Difference.</h2>
            <p>Your sponsorship request has been received. In a real production system, you would now continue to secure payment.</p>
            <Button onClick={() => navigate('/')}>Back to Home</Button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <div className="modal-head"><HeartHandshake size={28} aria-hidden="true" /><div><h2>Complete your sponsorship</h2>
              <p>{fmt(amount)} {freq === 'monthly' ? 'per month' : 'one-time'}{child ? ` · supporting ${child.name}` : ' · general support'}</p></div></div>
            <div className="form-grid">
              {field('name', 'Full Name', 'text', 'name')}
              {field('email', 'Email Address', 'email', 'email')}
              {field('phone', 'Phone Number', 'tel', 'tel')}
              {field('city', 'City', 'text', 'address-level2')}
              {field('country', 'Country', 'text', 'country-name')}
              <div className="field">
                <label htmlFor="support-select">Preferred Support</label>
                <select id="support-select" value={form.support} onChange={e => set('support', e.target.value)}>
                  {['Education', 'Healthcare', 'Nutrition', 'General Support'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <label className="check"><input type="checkbox" checked={form.consent} onChange={e => set('consent', e.target.checked)} /> I agree to receive updates about the impact of my support.</label>
            {errors.consent && <p className="err">{errors.consent}</p>}
            <Button type="submit" size="lg" className="btn-block" onClick={undefined}>Complete Sponsorship</Button>
          </form>
        )}
      </Modal>
    </>
  )
}
