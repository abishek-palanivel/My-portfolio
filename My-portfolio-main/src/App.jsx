import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Metrics from './components/Metrics'
import Projects from './components/Projects'
import Experience from './components/Experience'
import WhyHireMe from './components/WhyHireMe'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About isVisible={isVisible.about} />
      <Skills isVisible={isVisible.skills} />
      <Metrics isVisible={isVisible.metrics} />
      <Projects isVisible={isVisible.projects} />
      <Experience isVisible={isVisible.experience} />
      <WhyHireMe isVisible={isVisible.whyhire} />
      <Achievements isVisible={isVisible.achievements} />
      <Contact isVisible={isVisible.contact} />
      <Footer />
    </div>
  )
}

export default App
