import { motion } from 'framer-motion'

// Viewport uses 'div.scroller' as root so whileInView works correctly
const vp = { once: true, margin: '-30px' }
const ease = [0.25, 0.46, 0.45, 0.94]

export function Eyebrow({ children }) {
  return (
    <motion.span className="eyebrow"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.5, ease }}
    >{children}</motion.span>
  )
}

export function Headline({ children, className = '' }) {
  return (
    <motion.h2 className={`headline ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.65, ease }}
    >{children}</motion.h2>
  )
}

export function Rule() {
  return (
    <motion.div className="rule"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 0.4 }}
      viewport={vp}
      transition={{ duration: 0.5 }}
      style={{ transformOrigin: 'left' }}
    />
  )
}

export function BodyText({ children, style = {} }) {
  return (
    <motion.div className="body-text" style={style}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >{children}</motion.div>
  )
}

export function FadeUp({ children, delay = 0, style = {} }) {
  return (
    <motion.div style={style}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >{children}</motion.div>
  )
}
