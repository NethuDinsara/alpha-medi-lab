// import { useState, useEffect, useRef } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import About from './components/About'
// import Services from './components/Services'
// import Packages from './components/Packages'
// import Contact from './components/Contact'
// import Branches from './components/Branches'
// import Footer from './components/Footer'
// import './App.css'

// function App() {
//   const [activeSection, setActiveSection] = useState('home')
  
//   const observerOptions = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5,
//   }
  
//   useEffect(() => {
//     const sectionIds = ['home', 'about', 'services', 'packages', 'contact', 'branches']
    
//     const observers = sectionIds.map(id => {
//       const element = document.getElementById(id)
//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setActiveSection(id)
//           }
//         })
//       }, observerOptions)
      
//       if (element) observer.observe(element)
      
//       return { id, observer }
//     })
    
//     return () => {
//       observers.forEach(({ id, observer }) => {
//         const element = document.getElementById(id)
//         if (element) observer.disconnect()
//       })
//     }
//   }, [])

//   return (
//     <div className="App">
//       <Navbar activeSection={activeSection} />
//       <main>
//         <Hero />
//         <About />
//         <Services />
//         <Packages />
//         <Contact />
//         <Branches />
//         <Footer/>
//       </main>
//     </div>
//   )
// }

// export default App

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Packages from './components/Packages'
import Contact from './components/Contact'
import Branches from './components/Branches'
import Footer from './components/Footer'
import DarkModeToggle from './components/DarkModeToggle'
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import './App.css'

function AppContent() {
  const [activeSection, setActiveSection] = useState('home')
  const { isDarkMode } = useDarkMode()
  
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
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Contact />
        <Branches />
        <Footer/>
      </main>
      <DarkModeToggle />
    </div>
  )
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  )
}

export default App