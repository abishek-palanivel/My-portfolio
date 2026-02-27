import './Achievements.css'

const Achievements = ({ isVisible }) => {
  const achievements = [
    {
      icon: '🏆',
      title: 'LeetCode Problem Solver',
      description: 'Solved 100+ Data Structures and Algorithms problems on LeetCode',
      link: 'https://leetcode.com/u/AbishekPalanivel/'
    },
    {
      icon: '📜',
      title: 'Java Full Stack Developer Certification',
      description: 'Completed Java Full Stack Developer Certification from TechA',
      link: 'https://drive.google.com/file/d/1YHeEu0sY8eBlp7MXCndjE-62SyTzwY8J/view?usp=sharing'
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Achieved 25% improvement in API response time during internship',
      link: null
    },
    {
      icon: '💻',
      title: 'Full Stack Projects',
      description: 'Built 4 production-ready full-stack applications with AI integration',
      link: 'https://github.com/abishek-palanivel'
    }
  ]

  return (
    <section id="achievements" className={`achievements fade-in ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, idx) => (
          <div key={idx} className="achievement-card glass-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
            {achievement.link && (
              <a 
                href={achievement.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="achievement-link"
              >
                View →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
