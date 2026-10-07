import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
export default function Modal({ open, onClose, title, children }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!open) return
    const prev = document.activeElement
    const onKey = e => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    ref.current?.focus()
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; prev?.focus?.() }
  }, [open, onClose])
  if (!open) return null
  return (
    <div className="overlay" onMouseDown={e => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={title} tabIndex={-1} ref={ref}>
        <button className="modal-x" onClick={onClose} aria-label="Close dialog"><X size={20} /></button>
        {children}
      </div>
    </div>
  )
}
