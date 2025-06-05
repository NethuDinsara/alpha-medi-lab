import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Packages = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  })
  
  const [selectedPackage, setSelectedPackage] = useState('basic')
  
  const packages = {
    basic: {
      name: "Rose Package",
      price: "3500LKR",
      features: [
        "Fasting Blood Sugar",
        "Lipid Profile",
        "SGOT/SGPT",
        "S Creatinine - eGFR",
        "Full Blood Count",
        "Urine Full Report(UFR)",
        "ECG"
      ],
      recommended: false
    },
    comprehensive: {
      name: "Lotus Package",
      price: "7000LKR",
      features: [
        "Fasting Blood Sugar",
        "Lipid Profile",
        "Liver Profile",
        "Reanal Profile",
        "FBC",
        "UFR",
        "ECG"
      ],
      recommended: true
    },
    executive: {
      name: "Orchid Package",
      price: "8500LKR",
      features: [
        "Fasting Blood Sugar",
        "HbA1C",
        "Lipid Profile",
        "Liver Profile",
        "Reanal Profile",
        "FBC",
        "UFR",
        "ECG"
      ],
      recommended: false
    }
  }
  
  const springVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
    exit: { scale: 0.9, opacity: 0 }
  }
  
  return (
    <section id="packages" className="packages">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          Health Packages & Offers
        </motion.h2>
        
        <motion.div 
          className="package-tabs"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {Object.keys(packages).map((pkg) => (
            <motion.button 
              key={pkg}
              className={`package-tab ${selectedPackage === pkg ? 'active' : ''}`}
              onClick={() => setSelectedPackage(pkg)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {packages[pkg].name}
              {packages[pkg].recommended && <span className="recommended-badge">Recommended</span>}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="package-details"
          key={selectedPackage}
          variants={springVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="package-header">
            <h3>{packages[selectedPackage].name}</h3>
            <div className="package-price">{packages[selectedPackage].price}</div>
          </div>
          
          <ul className="package-features">
            {packages[selectedPackage].features.map((feature, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="feature-check">✓</span> {feature}
              </motion.li>
            ))}
          </ul>
          
          <motion.button 
            className="btn package-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book This Package
          </motion.button>
          
          <div className="package-note">
            <p>Special offer: 10% discount for senior citizens and students</p>
          </div>
        </motion.div>
        
        {/* Industrial Packages Section */}
        <motion.div 
          className="industrial-packages"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Industrial Packages</h3>
          <p>We provide specialized health assessments for both Food Handler Companies and Non-Food Handler Companies. Our industrial packages ensure compliance with health regulations and promote workplace well-being.</p>
        </motion.div>
        
        {/* Special Promotions Section */}
        <motion.div 
          className="special-offers"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Special Promotions</h3>
          <div className="offers-grid">
            <div className="offer-card">
              <h4>Family Package</h4>
              <p>20% discount when 3 or more family members book together</p>
            </div>
            <div className="offer-card">
              <h4>Seasonal Offer</h4>
              <p>Free vitamin D test with any package booked this month</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Packages;
