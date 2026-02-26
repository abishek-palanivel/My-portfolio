import './Projects.css'

const Projects = ({ isVisible }) => {
  const projects = [
    {
      title: 'Smart Booking & Establishment Management Platform',
      description: 'A comprehensive platform for managing bookings and establishments with real-time availability tracking, user authentication, and admin dashboard.',
      tech: ['Spring Boot', 'React.js', 'PostgreSQL', 'JWT', 'REST API'],
      github: 'https://github.com/abishek-palanivel/My-portfolio',
      highlights: ['Multi-user system', 'Real-time updates', 'Secure authentication']
    },
    {
      title: 'AI-Enhanced Career Guidance System',
      description: 'An intelligent career guidance platform powered by Google Gemini AI that provides personalized career recommendations and skill assessments.',
      tech: ['Spring Boot', 'React.js', 'Google Gemini AI', 'MySQL', 'Gmail API'],
      github: 'https://github.com/abishek-palanivel/skillnova',
      highlights: ['AI-powered recommendations', 'Email integration', 'Skill assessment']
    },
    {
      title: 'Carbon Personal Footprint App',
      description: 'Environmental tracking application that calculates and visualizes personal carbon footprint with actionable insights and reduction tips.',
      tech: ['Spring Boot', 'React.js', 'Google Maps API', 'PostgreSQL'],
      github: 'https://github.com/abishek-palanivel/CarbonPersonalFootprintApp',
      highlights: ['Location-based tracking', 'Data visualization', 'Environmental impact']
    },
    {
      title: 'Cryptocurrency Tracker Dashboard',
      description: 'Real-time cryptocurrency tracking dashboard with live price updates, market trends, and portfolio management using CoinGecko API.',
      tech: ['React.js', 'CoinGecko API', 'Chart.js', 'CSS3'],
      github: 'https://github.com/abishek-palanivel/cryptonova',
      highlights: ['Real-time data', 'Interactive charts', 'Portfolio tracking']
    }
  ]

  return (
    <section id="projects" className={`projects fade-in ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card glass-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
                aria-label="View on GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-highlights">
              {project.highlights.map((highlight, i) => (
                <span key={i} className="highlight-badge">{highlight}</span>
              ))}
            </div>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
