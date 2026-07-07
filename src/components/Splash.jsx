import { motion, AnimatePresence } from 'framer-motion'

export default function Splash({ onOpen }) {
  return (
    <motion.div
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'linear-gradient(145deg, #F0E8FF 0%, #FFD6E8 50%, #E8D6FF 100%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '3rem 2rem',
        overflow: 'hidden',
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background orbs */}
      {[
        { w: '65vw', bg: 'radial-gradient(circle,#D4A0C0 0%,transparent 70%)', top: '-10%', left: '-15%', op: 0.6, dur: 10 },
        { w: '50vw', bg: 'radial-gradient(circle,#B090D8 0%,transparent 70%)', bottom: '5%', right: '-10%', op: 0.5, dur: 13 },
        { w: '38vw', bg: 'radial-gradient(circle,#E09090 0%,transparent 70%)', top: '45%', left: '45%', op: 0.4, dur: 9 },
      ].map((o, i) => (
        <motion.div key={i} style={{
          position: 'absolute', borderRadius: '50%', filter: 'blur(70px)',
          pointerEvents: 'none', width: o.w, height: o.w,
          maxWidth: 360, maxHeight: 360,
          background: o.bg, opacity: o.op,
          top: o.top, left: o.left, bottom: o.bottom, right: o.right,
        }}
          animate={{ x: [0, 12, 0], y: [0, 18, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: o.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.span
        style={{ fontFamily: 'var(--ff-b)', fontSize: '.63rem', letterSpacing: '.3em', textTransform: 'uppercase', color: '#7040A0' }}
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >July 9, 2026</motion.span>

      <motion.h1
        style={{ fontFamily: 'var(--ff-h)', fontSize: 'clamp(3.2rem,15vw,6rem)', fontWeight: 500, lineHeight: 1.05, color: '#1A1025', marginTop: '1rem' }}
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.9 }}
      >
        Happy 29th,<br />
        <em style={{ fontStyle: 'italic', color: '#C4706A' }}>Jaanu.</em>
      </motion.h1>

      <motion.p
        style={{ marginTop: '1.6rem', fontFamily: 'var(--ff-h)', fontWeight: 400, fontSize: 'clamp(1rem,4vw,1.3rem)', color: '#2A1A38', lineHeight: 1.8 }}
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.9 }}
      >
        Ten years of choosing you.<br />And I'd choose you every single time.
      </motion.p>

      <motion.p
        style={{ marginTop: '1.4rem', fontSize: '.6rem', letterSpacing: '.22em', textTransform: 'uppercase', color: '#5A4468' }}
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.7 }}
      >Born July 9, 1997 · Ours since March 3, 2016</motion.p>

      {/* Button wrapper fades in, inner button pulses independently */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 0.7 }}
        style={{ marginTop: '3rem' }}
      >
        <motion.button
          onClick={onOpen}
          style={{
            padding: '1.1rem 3rem', borderRadius: '100px',
            border: 'none', background: '#C4706A', color: '#ffffff',
            fontFamily: 'var(--ff-b)', fontSize: '.72rem', letterSpacing: '.2em',
            textTransform: 'uppercase', cursor: 'pointer', display: 'block',
            WebkitTapHighlightColor: 'transparent', fontWeight: 400,
          }}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 6px 20px rgba(196,112,106,.4)',
              '0 12px 36px rgba(196,112,106,.65)',
              '0 6px 20px rgba(196,112,106,.4)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          whileTap={{ scale: 0.96 }}
        >
          tap to open our story
        </motion.button>
      </motion.div>

    </motion.div>
  )
}
