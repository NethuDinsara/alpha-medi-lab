import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  const calculateMovement = (axis) => {
    const movement = axis === 'x' 
      ? (mousePosition.x / window.innerWidth - 0.5) * 20
      : (mousePosition.y / window.innerHeight - 0.5) * 20
    return movement
  }
  
  return (
    <section id="home" className="hero">
      <div className="hero-bubbles">
        {[...Array(10)].map((_, i) => (
          <motion.div 
            key={i}
            className="bubble"
            initial={{ 
              x: Math.random() * 100 - 50, 
              y: Math.random() * 100 - 50,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            transition={{ 
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'var(--primary-blue)' : 'var(--primary-green)',
              opacity: Math.random() * 0.2 + 0.1
            }}
          />
        ))}
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            style={{ 
              x: calculateMovement('x') * -0.5,
              y: calculateMovement('y') * -0.5
            }}
          >
            Welcome to <span>Alpha Medi Lab</span>
          </motion.h1>
          
          <motion.p
            style={{ 
              x: calculateMovement('x') * -0.3,
              y: calculateMovement('y') * -0.3
            }}
          >
            Your Trusted Partner in Medical Diagnostics
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#services" className="btn">Explore Our Services</a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          style={{ 
            x: calculateMovement('x'),
            y: calculateMovement('y')
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/api/placeholder/500/500" alt="Lab equipment illustration" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero