import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Packages from './components/Packages'
import Contact from './components/Contact'
import Branches from './components/Branches'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  }
  
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'packages', 'contact', 'branches']
    
    const observers = sectionIds.map(id => {
      const element = document.getElementById(id)
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        })
      }, observerOptions)
      
      if (element) observer.observe(element)
      
      return { id, observer }
    })
    
    return () => {
      observers.forEach(({ id, observer }) => {
        const element = document.getElementById(id)
        if (element) observer.disconnect()
      })
    }
  }, [])

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Contact />
        <Branches />
      </main>
    </div>
  )
}

export default App

// index.css
