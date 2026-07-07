import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Photo({ src, alt, className = '', icon = '📷', label = '' }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <motion.div
      className={`photo ${className}`}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {!error && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          style={{ display: loaded ? 'block' : 'none' }}
        />
      )}
      {(!loaded || error) && (
        <div className="photo-ph">
          <span className="photo-ph-i">{icon}</span>
          {label && <span className="photo-ph-l">{label}</span>}
        </div>
      )}
    </motion.div>
  )
}
