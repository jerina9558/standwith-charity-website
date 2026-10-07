export default function SponsorshipCard({ amount, text, selected, onSelect, frequency }) {
  return (
    <button type="button" className={`plan ${selected ? 'selected' : ''}`} onClick={onSelect} aria-pressed={selected}>
      <span className="plan-amount">₹{amount.toLocaleString('en-IN')}<small>{frequency === 'monthly' ? ' / month' : ' one-time'}</small></span>
      <span className="plan-text">{text}</span>
    </button>
  )
}
