import { useEffect, useRef, useCallback } from 'react'

export function useEmojiCurtain() {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const bubblesRef = useRef([])

  useEffect(() => {
    const canvas = document.getElementById('confetti-canvas')
    if (canvas) canvasRef.current = canvas
  }, [])

  const launch = useCallback((emoji, count = 125) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.opacity = 1

    bubblesRef.current = []
    const W = canvas.width, H = canvas.height

    for (let i = 0; i < count; i++) {
      const col = (i / count) * W
      bubblesRef.current.push({
        emoji,
        x: col + (Math.random() - 0.5) * (W / count) * 2.5,
        y: H + 10 + Math.random() * H * 0.4,
        vy: -(6 + Math.random() * 5),
        vx: (Math.random() - 0.5) * 1.2,
        wx: Math.random() * Math.PI * 2,
        wv: 0.03 + Math.random() * 0.03,
        size: 10 + Math.random() * 6,
        alpha: 1,
      })
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let alive = false
      bubblesRef.current.forEach(b => {
        if (b.y < -30) { b.alpha = 0; return }
        if (b.alpha <= 0) return
        alive = true
        b.y += b.vy; b.x += b.vx
        b.wx += b.wv; b.x += Math.sin(b.wx) * 0.4
        if (b.y < canvas.height * 0.2) b.alpha = Math.max(0, b.y / (canvas.height * 0.2))
        ctx.save()
        ctx.globalAlpha = b.alpha
        ctx.font = `${b.size}px serif`
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
        ctx.fillText(b.emoji, b.x, b.y)
        ctx.restore()
      })
      if (alive) rafRef.current = requestAnimationFrame(draw)
      else { ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.style.opacity = 0 }
    }
    draw()
  }, [])

  return launch
}
