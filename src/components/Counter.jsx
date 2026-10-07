import { useEffect, useRef, useState } from 'react'
export default function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setN(value); return }
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const step = t => { const p = Math.min((t - t0) / 1400, 1); setN(Math.round(value * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(step) }
      raf = requestAnimationFrame(step)
    }, { threshold: 0.4 })
    io.observe(ref.current)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value])
  return <span ref={ref}>{n.toLocaleString('en-IN')}{suffix}</span>
}
