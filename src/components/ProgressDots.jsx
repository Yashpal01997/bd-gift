export default function ProgressDots({ total, active }) {
  return (
    <nav className="dots">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className={`dot ${i === active ? 'active' : ''}`} />
      ))}
    </nav>
  )
}
