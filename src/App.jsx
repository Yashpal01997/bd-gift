import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import Splash from './components/Splash'
import ProgressDots from './components/ProgressDots'
import { useEmojiCurtain } from './components/EmojiCurtain'
import {
  SectionCounter, SectionStart, SectionFriends, SectionMarch,
  SectionHome, SectionHard, SectionLulu, SectionTravel,
  SectionKashmir, SectionPingu, SectionClosing
} from './sections/Sections'

const TOTAL = 11
const CURTAIN_MAP = { 3: '❤️', 8: '❄️', 10: '🎉' }

export default function App() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const scrollerRef = useRef(null)
  const launch = useEmojiCurtain()

  useEffect(() => {
    if (!open) return
    const scroller = scrollerRef.current
    if (!scroller) return
    const sections = scroller.querySelectorAll('[data-idx]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(+e.target.dataset.idx) })
    }, { root: scroller, threshold: 0.55 })
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [open])

  const handleSectionView = (idx) => {
    const emoji = CURTAIN_MAP[idx]
    if (emoji) setTimeout(() => launch(emoji, 125), 400)
  }

  return (
    <>
      <canvas id="confetti-canvas" />
      <AnimatePresence>
        {!open && <Splash key="splash" onOpen={() => setOpen(true)} />}
      </AnimatePresence>
      {open && <ProgressDots total={TOTAL} active={active} />}
      <div className="scroller" ref={scrollerRef} style={{ opacity: open ? 1 : 0, transition: 'opacity .8s' }}>
        <SectionCounter />
        <SectionStart />
        <SectionFriends />
        <SectionMarch onView={() => handleSectionView(3)} />
        <SectionHome />
        <SectionHard />
        <SectionLulu />
        <SectionTravel />
        <SectionKashmir onView={() => handleSectionView(8)} />
        <SectionPingu />
        <SectionClosing onView={() => handleSectionView(10)} />
      </div>
    </>
  )
}
