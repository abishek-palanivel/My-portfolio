import './About.css'

const About = ({ isVisible }) => {
  return (
    <section id="about" className={`about fade-in ${isVisible ? 'visible' : ''}`}>
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            I'm a passionate Java Full Stack Developer from Namakkal, Tamil Nadu, with a strong focus on building 
            scalable backend systems and modern web applications.
          </p>
          <p>
            Currently pursuing B.Tech in Computer Science and Business Systems, I've gained 
            hands-on experience through internships at SmartED Innovations and Infosys Springboard, where I improved 
            API response times by 25% and built secure multi-user systems.
          </p>
          <p>
            My expertise lies in Spring Boot, REST APIs, and React.js, with a growing specialization in AI integration 
            using Google Gemini and external APIs. I've solved 100+ DSA problems on LeetCode, demonstrating strong 
            problem-solving skills and algorithmic thinking.
          </p>
          <p>
            I'm passionate about creating efficient, user-centric applications that solve real-world problems. 
            Whether it's optimizing backend performance or crafting intuitive frontends, I bring dedication and 
            technical excellence to every project.
          </p>
        </div>
        <div className="about-info">
          <div className="info-card glass-card">
            <h3>Education</h3>
            <p className="degree">B.Tech – Computer Science and Business Systems</p>
            <p className="college">VSB Engineering College, Karur</p>
            <p className="duration">2023 – 2027</p>
            <p className="cgpa">CGPA: 7.88</p>
          </div>
          <div className="info-card glass-card">
            <h3>Location</h3>
            <p>Namakkal, Tamil Nadu, India</p>
          </div>
          <div className="info-card glass-card">
            <h3>Focus Areas</h3>
            <ul>
              <li>Backend Development</li>
              <li>REST API Design</li>
              <li>AI Integration</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
