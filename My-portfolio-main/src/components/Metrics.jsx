import { useState, useEffect } from 'react'
import './Metrics.css'

const Metrics = ({ isVisible }) => {
  const [counts, setCounts] = useState({
    dsa: 0,
    projects: 0,
    internships: 0,
    performance: 0
  })

  const metrics = [
    { key: 'dsa', label: 'DSA Problems Solved', target: 100, suffix: '+' },
    { key: 'projects', label: 'Full Stack Projects', target: 4, suffix: '' },
    { key: 'internships', label: 'Internship Experience', target: 2, suffix: '' },
    { key: 'performance', label: 'Performance Boost', target: 25, suffix: '%' }
  ]

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60

    metrics.forEach(({ key, target }) => {
      let current = 0
      const increment = target / steps
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, duration / steps)
    })
  }, [isVisible])

  return (
    <section id="metrics" className={`metrics fade-in ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">Key Metrics</h2>
      <div className="metrics-grid">
        {metrics.map(({ key, label, suffix }) => (
          <div key={key} className="metric-card glass-card">
            <div className="metric-value">
              {counts[key]}{suffix}
            </div>
            <div className="metric-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Metrics
