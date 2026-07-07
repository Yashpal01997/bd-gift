import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Photo from '../components/Photo'
import Counter from '../components/Counter'
import { Eyebrow, Headline, Rule, BodyText, FadeUp } from '../components/Reveal'

export function SectionCounter() {
  return (
    <div className="section section-b" id="s-counter" data-idx="0" 
    style={{
        position: 'fixed', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '3rem 2rem',
      }}>
      <div className="section-inner" style={{ textAlign: 'center', paddingTop: '1rem' }}>
        <motion.p
          style={{ fontFamily: 'var(--ff-h)', fontWeight: 500, fontSize: 'clamp(1.1rem,4.5vw,1.4rem)', color: 'var(--body)', lineHeight: 1.85, marginBottom: '2.5rem' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        >
          March 3, 2016.<br />That's when it became official.<br />But honestly — it started long before that.
        </motion.p>
        <Counter />
        <motion.p
          style={{ marginTop: '1.8rem', fontFamily: 'var(--ff-h)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--muted)' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.4 }}
        >and every second, still counting.</motion.p>
      </div>
      <div className="scroll-hint"><span>scroll</span><div className="sh-arrow" /></div>
    </div>
  )
}

export function SectionStart() {
  return (
    <div className="section section-b" id="s-start" data-idx="1">
      <div className="section-inner">
        <Eyebrow>2015</Eyebrow>
        <Headline>It started with a physics lab and <em>bad jokes.</em></Headline>
        <Rule />
        <Photo src="/bd-gift/photos/s3-lab-group.jpeg" alt="Physics lab" className="r43" icon="📷" label="Physics lab · 2015" />
        <BodyText>
          <p>July 2015. First year of college. Someone put us in the same lab group — and honestly, thank god they did.</p>
          <p>You laughed at my jokes.<br />That was enough.<br />I was done for.</p>
        </BodyText>
      </div>
    </div>
  )
}

export function SectionFriends() {
  return (
    <div className="section section-a" id="s-friends" data-idx="2">
      <div className="section-inner">
        <Eyebrow>2015 — 2016</Eyebrow>
        <Headline><em>"Just friends"</em> (Sure)</Headline>
        <Rule />
        <BodyText>
          <p>We'd chat every single day. No topic too small, no hour too late. 4 AM. 5 AM. It didn't matter.</p>
          <p>Neither of us said it out loud yet. But we both knew.</p>
        </BodyText>
        <div className="grid2" style={{ marginTop: '1.6rem' }}>
          <Photo src="/bd-gift/photos/s4-friends-1.jpeg" alt="College" icon="📷" />
          <Photo src="/bd-gift/photos/s4-friends-2.jpeg" alt="College" icon="📷" />
        </div>
      </div>
    </div>
  )
}

export function SectionMarch({ onView }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) onView?.() }, { threshold: 0.5 })
    obs.observe(el); return () => obs.disconnect()
  }, [onView])
  return (
    <div className="section section-b" id="s-march" data-idx="3" ref={ref} style={{ textAlign: 'center' }}>
      <div className="section-inner">
        <Eyebrow>the day</Eyebrow>
        <Headline className="march-headline">March 3,<br />2016.</Headline>
        <Rule />
        <Photo src="/bd-gift/photos/s5-march3.jpeg" alt="March 2016" className="r11 circle-photo" icon="📷" label="March 2016" />
        <BodyText style={{ textAlign: 'left' }}>
          <p>The day we stopped pretending we were just friends.</p>
          <p>Best decision I ever made.</p>
        </BodyText>
      </div>
    </div>
  )
}

export function SectionHome() {
  return (
    <div className="section section-a" id="s-home" data-idx="4">
      <div className="section-inner">
        <Eyebrow>2017 — 2019</Eyebrow>
        <Headline>Home was wherever you were. <em>Even if tiny.</em></Headline>
        <Rule />
        <BodyText>
          <p>Third year. Fourth year. A room probably too small for two people and all our stuff.</p>
          <p>We didn't care. We were happy.</p>
        </BodyText>
        <Photo src="/bd-gift/photos/s6-room-1.jpeg" alt="College flat" className="r43" icon="🏠" label="College flat" />
        <div className="grid2">
          <Photo src="/bd-gift/photos/s6-room-2.jpeg" alt="Flat" icon="📷" />
          <Photo src="/bd-gift/photos/s6-room-3.jpeg" alt="Flat" icon="📷" />
        </div>
      </div>
    </div>
  )
}

export function SectionHard() {
  return (
    <div className="section section-b" id="s-hard" data-idx="5">
      <div className="section-inner">
        <Eyebrow>2019 — 2022</Eyebrow>
        <Headline>It wasn't <em>always easy.</em></Headline>
        <Rule />
        <BodyText>
          <p>Graduation pulled us apart for a while. Different cities. The distance was hard — the kind that makes everything feel further than it is.</p>
          <p>Then a lockdown that sent us both home. Then years of figuring it all out.</p>
        </BodyText>
        <Photo src="/bd-gift/photos/s7-distance.jpeg" alt="Distance" className="r45" icon="📷" label="Distance era · optional" />
        <BodyText>
          <p>But every single time, we found our way back.</p>
          <p><em>That's the part I'm most proud of.</em></p>
        </BodyText>
      </div>
    </div>
  )
}

export function SectionLulu() {
  return (
    <div className="section section-a" id="s-lulu" data-idx="6">
      <div className="section-inner">
        <Eyebrow>January 5, 2023</Eyebrow>
        <Headline>Then came <em>Lulu.</em></Headline>
        <Rule />
        <BodyText><p>We needed her more than we knew. Life had gotten a little grey — work, routine, the same days on repeat.</p></BodyText>
        <Photo src="/bd-gift/photos/s8-lulu-1.jpeg" alt="Lulu" className="r45" icon="🐱" label="Lulu · our girl" />
        <BodyText>
          <p>And then this tiny, dramatic, loud little girl walked in and just… fixed it.</p>
          <p>Suddenly everything was about her. We took a hundred photos a week. We laughed every day.</p>
        </BodyText>
        <div className="grid2">
          <Photo src="/bd-gift/photos/s8-lulu-2.jpeg" alt="Lulu" icon="🐱" />
          <Photo src="/bd-gift/photos/s8-lulu-3.jpeg" alt="Lulu" icon="🐱" />
        </div>
        <BodyText><p>She didn't just join our home. She reminded us how to enjoy it.</p></BodyText>
        <FadeUp delay={0.1}>
          <div className="stat-card">
            <div className="stat-name">Lulu 🐾</div>
            <div className="stat-row"><strong>Arrived</strong> January 5, 2023</div>
            <div className="stat-row"><strong>Personality</strong> dramatic, queen energy, zero apologies</div>
          </div>
        </FadeUp>
      </div>
    </div>
  )
}

export function SectionTravel() {
  return (
    <div className="section section-b" id="s-travel" data-idx="7">
      <div className="section-inner">
        <Eyebrow>Kerala · Goa</Eyebrow>
        <Headline>We've seen some <em>beautiful places</em> together.</Headline>
        <Rule />
        <BodyText><p>Kerala — more than once, because once wasn't enough.</p></BodyText>
        <Photo src="/bd-gift/photos/s9-travel-1.jpeg" alt="Kerala" className="r43" icon="🌿" label="Kerala" />
        <BodyText><p>Goa — sun, sea, and us.</p></BodyText>
        <div className="grid2">
          <Photo src="/bd-gift/photos/s9-travel-2.jpeg" alt="Goa" icon="🌊" label="Goa" />
          <Photo src="/bd-gift/photos/s9-travel-3.jpeg" alt="Kerala" icon="🌴" label="Kerala" />
        </div>
        <BodyText><p>Every trip, a little more of the world. Every trip, a little more of each other.</p></BodyText>
      </div>
    </div>
  )
}

export function SectionKashmir({ onView }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) onView?.() }, { threshold: 0.3 })
    obs.observe(el); return () => obs.disconnect()
  }, [onView])
  return (
    <div className="section section-k" id="s-kashmir" data-idx="8" ref={ref}>
      <SnowWrap />
      <div className="section-inner" style={{ position: 'relative', zIndex: 2 }}>
        <Eyebrow>February 2025</Eyebrow>
        <Headline>Sonmarg, <em>Kashmir.</em></Headline>
        <Rule />
        <BodyText>
          <p>I had been carrying this for a long time.</p>
          <p>The mountains were quiet. The snow was everywhere. And you — you had no idea.</p>
        </BodyText>
        <div className="k-photos">
          <Photo src="/bd-gift/photos/s10-proposal-1.jpeg" alt="Sonmarg" className="r34" icon="❄️" label="Sonmarg" />
          <div className="row2">
            <Photo src="/bd-gift/photos/s10-proposal-2.jpeg" alt="The moment" icon="💍" />
            <Photo src="/bd-gift/photos/s10-proposal-3.jpeg" alt="The ring" icon="💍" />
          </div>
        </div>
        <BodyText>
          <p>Just before the moment, my hands were shaking. I had words ready. I don't think I said any of them properly.</p>
          <p>But I asked you to marry me in one of the most beautiful places I've ever seen in my life.</p>
          <p>You said yes.</p>
        </BodyText>
        <Photo src="/bd-gift/photos/s10-proposal-4.jpeg" alt="Together" className="r43" icon="🏔️" />
        <BodyText><p>I don't think I'll ever forget what your face looked like in that moment.</p></BodyText>
        <FadeUp><p className="chapter-note">The beginning of the next chapter.</p></FadeUp>
      </div>
    </div>
  )
}

function SnowWrap() {
  const ref = useRef(null)
  useEffect(() => {
    const wrap = ref.current
    if (!wrap || wrap.dataset.init) return
    wrap.dataset.init = '1'
    for (let i = 0; i < 12; i++) {
      const d = document.createElement('div')
      const sz = 3 + Math.random() * 4
      d.style.cssText = `position:absolute;border-radius:50%;background:rgba(130,80,160,.65);width:${sz}px;height:${sz}px;left:${5+Math.random()*90}%;top:${10+Math.random()*90}%;opacity:.65`
      wrap.appendChild(d)
      const dur = (4 + Math.random() * 4) * 1000
      const startDelay = Math.random() * 4000
      function animate(el) {
        const startTime = performance.now() + startDelay
        function frame(now) {
          const t = Math.max(0, (now - startTime) / dur)
          if (t >= 1) {
            el.style.opacity = 0
            el.style.left = (5 + Math.random() * 90) + '%'
            setTimeout(() => { el.style.opacity = '.65'; animate(el) }, Math.random() * 5000)
            return
          }
          el.style.opacity = 0.65 * (1 - t)
          el.style.transform = `translateY(${-80 * t}px) translateX(${Math.sin(t * 10) * 15}px)`
          requestAnimationFrame(frame)
        }
        requestAnimationFrame(frame)
      }
      animate(d)
    }
  }, [])
  return <div className="snow-wrap" ref={ref} />
}

export function SectionPingu() {
  return (
    <div className="section section-b" id="s-pingu" data-idx="9">
      <div className="section-inner">
        <Eyebrow>March 3, 2026</Eyebrow>
        <Headline>And then you <em>surprised me back.</em></Headline>
        <Rule />
        <BodyText>
          <p>Our ten year anniversary.</p>
          <p>You'd told me Pingu wasn't coming home. I believed you.</p>
        </BodyText>
        <Photo src="/bd-gift/photos/s11-pingu-1.jpeg" alt="Pingu" className="r45" icon="🐱" label="Pingu · our boy" />
        <BodyText>
          <p>And then you walked in with him anyway.</p>
          <p>I don't know if you planned it that way — to surprise me on the day we started, ten years later — but it was perfect.</p>
          <p>Completely, quietly perfect.</p>
        </BodyText>
        <div className="grid2">
          <Photo src="/bd-gift/photos/s11-pingu-2.jpeg" alt="Pingu" icon="🐱" />
          <Photo src="/bd-gift/photos/s11-pingu-3.jpeg" alt="Pingu & Lulu" icon="🐾" />
        </div>
        <FadeUp delay={0.1}>
          <div className="stat-card">
            <div className="stat-name">Pingu 🐾</div>
            <div className="stat-row"><strong>Arrived</strong> March 3, 2026</div>
            <div className="stat-row"><strong>Personality</strong> unconditional love, always hungry, Lulu's biggest fan (she disagrees)</div>
          </div>
        </FadeUp>
      </div>
    </div>
  )
}

export function SectionClosing({ onView }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) onView?.() }, { threshold: 0.5 })
    obs.observe(el); return () => obs.disconnect()
  }, [onView])
  return (
    <div className="section section-a" id="s-closing" data-idx="10" ref={ref} style={{ textAlign: 'center' }}>
      <div className="section-inner">
        <Headline>Happy 29th, <em>Jaanu.</em></Headline>
        <Rule />
        <Photo src="/bd-gift/photos/s12-us-now.jpeg" alt="Us now" className="r11"
          icon="🤍" label="Us · 2026"
          style={{ borderRadius: '20px', maxWidth: '280px', margin: '1.8rem auto', overflow: 'hidden' }} />
        <BodyText style={{ textAlign: 'left' }}>
          <p>Ten years ago, a physics lab assignment changed everything for me.</p>
          <p>I've watched you grow, change, laugh, push through hard things, take care of everything around you — including me, including two very demanding cats.</p>
          <p>You are the person I want next to me for every ordinary Tuesday and every extraordinary moment.</p>
          <p>Thank you for being exactly who you are. Thank you for saying yes in the snow. Thank you for bringing Pingu home when you said you wouldn't.</p>
          <p>Here's to 29. Here's to everything still coming.</p>
          <p>I love you.</p>
        </BodyText>
        <FadeUp delay={0.1}><p className="signoff">— always, your Jaanu</p></FadeUp>
        <FadeUp delay={0.2}>
          <motion.p className="heart"
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 200, damping: 12 }}
          >♡</motion.p>
        </FadeUp>
      </div>
    </div>
  )
}
