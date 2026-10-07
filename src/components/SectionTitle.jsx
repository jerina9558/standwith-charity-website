export default function SectionTitle({ title, text, center, light }) {
  return (
    <div className={`section-title ${center ? 'center' : ''} ${light ? 'light' : ''}`}>
      <h2>{title}</h2>{text && <p>{text}</p>}
    </div>
  )
}
