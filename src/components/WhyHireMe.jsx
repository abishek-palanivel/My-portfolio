import './WhyHireMe.css'

const WhyHireMe = ({ isVisible }) => {
  const reasons = [
    {
      icon: '🚀',
      title: 'Performance Focused',
      description: 'Proven track record of improving API response times by 25%. I optimize code for speed and efficiency.'
    },
    {
      icon: '🔒',
      title: 'Security First',
      description: 'Built secure multi-user systems with JWT authentication and implemented industry-standard security practices.'
    },
    {
      icon: '🤖',
      title: 'AI Integration Expert',
      description: 'Experience integrating Google Gemini AI and multiple external APIs to build intelligent applications.'
    },
    {
      icon: '💡',
      title: 'Problem Solver',
      description: 'Solved 100+ DSA problems on LeetCode, demonstrating strong algorithmic thinking and problem-solving skills.'
    },
    {
      icon: '⚡',
      title: 'Full Stack Proficiency',
      description: 'Comfortable with both backend (Spring Boot) and frontend (React.js), delivering end-to-end solutions.'
    },
    {
      icon: '📈',
      title: 'Quick Learner',
      description: 'Rapidly adapted to new technologies and frameworks during internships, delivering production-ready code.'
    }
  ]

  return (
    <section id="whyhire" className={`whyhire fade-in ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">Why Hire Me?</h2>
      <div className="reasons-grid">
        {reasons.map((reason, idx) => (
          <div key={idx} className="reason-card glass-card">
            <div className="reason-icon">{reason.icon}</div>
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-description">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyHireMe
