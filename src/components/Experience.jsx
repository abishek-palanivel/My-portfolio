import './Experience.css'

const Experience = ({ isVisible }) => {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'SmartED Innovations',
      period: 'Recent',
      type: 'Internship',
      achievements: [
        'Developed RESTful APIs using Spring Boot and integrated PostgreSQL database',
        'Built responsive React.js interfaces and optimized SQL queries improving response time by 25%'
      ]
    },
    {
      role: 'Java Full Stack Developer',
      company: 'Infosys Springboard',
      period: 'Virtual Internship',
      type: 'Training',
      achievements: [
        'Built full-stack applications using Java, JSP, Spring Boot, and MySQL following MVC architecture',
        'Implemented CRUD modules and backend validation with relational database integration'
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
