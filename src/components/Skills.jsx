import './Skills.css'

const Skills = ({ isVisible }) => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'JavaScript', level: 80 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Spring Boot', level: 90 },
        { name: 'REST APIs', level: 88 },
        { name: 'JWT Authentication', level: 85 }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 82 },
        { name: 'HTML5/CSS3', level: 88 },
        { name: 'Bootstrap', level: 80 }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 85 }
      ]
    },
    {
      title: 'AI & External APIs',
      skills: [
        { name: 'Google Gemini AI', level: 80 },
        { name: 'Gmail API', level: 75 },
        { name: 'Google Maps API', level: 75 },
        { name: 'CoinGecko API', level: 70 }
      ]
    },
    {
      title: 'Tools & Concepts',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Postman', level: 80 },
        { name: 'OOP', level: 90 },
        { name: 'DSA', level: 85 },
        { name: 'MVC Architecture', level: 88 }
      ]
    }
  ]

  return (
    <section id="skills" className={`skills fade-in ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category glass-card">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${skillIdx * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
