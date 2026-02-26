import './Experience.css'

const Experience = ({ isVisible }) => {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'SmartED Innovations',
      period: 'Recent',
      type: 'Internship',
      achievements: [
        'Improved API response time by 25% through optimization techniques',
        'Built secure multi-user systems using JWT authentication',
        'Developed REST APIs using Spring Boot and MVC architecture',
        'Collaborated with cross-functional teams on full-stack features'
      ]
    },
    {
      role: 'Java Full Stack Developer',
      company: 'Infosys Springboard',
      period: 'Virtual Internship',
      type: 'Training',
      achievements: [
        'Completed comprehensive Java Full Stack Developer program',
        'Gained hands-on experience with Spring Boot and React.js',
        'Built multiple full-stack applications from scratch',
        'Learned industry best practices and design patterns'
      ]
    }
  ]

  return (
    <section id="experience" className={`experience fade-in ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content glass-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-type">{exp.type}</span>
                </div>
              </div>
              <ul className="exp-achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
