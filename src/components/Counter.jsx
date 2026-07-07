import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const START = new Date('2016-03-03T00:00:00')
const FONT = "'Roboto Mono', 'Courier New', monospace"

function getElapsed() {
  const now = new Date()
  let y = now.getFullYear() - START.getFullYear()
  let mo = now.getMonth() - START.getMonth()
  let d = now.getDate() - START.getDate()
  if (d < 0) { mo--; d += new Date(now.getFullYear(), now.getMonth(), 0).getDate() }
  if (mo < 0) { y--; mo += 12 }
  const totalSec = Math.floor((now - START) / 1000)
  return {
    y, mo, d,
    hrs: Math.floor(totalSec / 3600) % 24,
    min: Math.floor(totalSec / 60) % 60,
    sec: totalSec % 60,
  }
}

function pad(n) { return String(n).padStart(2, '0') }

function Num({ value, color }) {
  return (
    <span style={{
      fontFamily: FONT, fontSize: 'clamp(1.6rem,6vw,2.4rem)',
      fontWeight: 400, color: color || '#1A1025', lineHeight: 1,
      minWidth: '2.2ch', textAlign: 'center', display: 'inline-block',
    }}>
      {pad(value)}
    </span>
  )
}

const lbl = {
  display: 'block', fontFamily: "'Lato',sans-serif", fontSize: '.52rem',
  letterSpacing: '.15em', textTransform: 'uppercase', color: '#5A4468',
  marginTop: '.35rem', textAlign: 'center',
}

const sep = (color = 'rgba(155,100,180,.4)') => ({
  fontFamily: FONT, fontSize: 'clamp(1.4rem,5vw,2rem)',
  color, lineHeight: 1, padding: '0 2px',
  alignSelf: 'center', marginBottom: '1.4rem',
})

const tile = {
  background: 'white', borderRadius: '8px',
  border: '1px solid rgba(155,100,180,.2)',
  boxShadow: '0 2px 10px rgba(155,100,180,.14)',
  padding: '0.45rem 0.5rem',
  display: 'flex', flexDirection: 'column', alignItems: 'center',
}

export default function Counter() {
  const [e, setE] = useState(getElapsed)

  useEffect(() => {
    const id = setInterval(() => setE(getElapsed()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>

      {/* Row 1: Y · M · D */}
      <motion.div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '4px', marginBottom: '1rem' }}
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div style={tile}><Num value={e.y} /><span style={lbl}>years</span></div>
        <span style={sep()}>·</span>
        <div style={tile}><Num value={e.mo} /><span style={lbl}>months</span></div>
        <span style={sep()}>·</span>
        <div style={tile}><Num value={e.d} /><span style={lbl}>days</span></div>
      </motion.div>

      {/* Row 2: HH : MM : SS */}
      <motion.div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '4px' }}
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div style={tile}><Num value={e.hrs} /><span style={lbl}>hours</span></div>
        <span style={sep()}>:</span>
        <div style={tile}><Num value={e.min} /><span style={lbl}>minutes</span></div>
        <span style={sep()}>:</span>
        <div style={tile}><Num value={e.sec} color="#C4706A" /><span style={{ ...lbl, color: '#C4706A' }}>seconds</span></div>
      </motion.div>

    </div>
  )
}
