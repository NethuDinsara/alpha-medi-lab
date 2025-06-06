import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Branches = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  })
  
  const [activeBranch, setActiveBranch] = useState('main')
  
    const phoneNumber = '+94718227704'; // Replace with the actual phone number, including country code

  const handleBookCall = () => {
    // This will attempt to open the phone dialer on mobile devices,
    // or a relevant application on desktops.
    window.location.href = `tel:${phoneNumber}`;
  };

  const branches = {
    main: {
      name: 'Main Branch',
      address: '222/B, Kandy Road, Dalugama,Kelaniya',
      phone: '0112919169',
      hours: 'Mon-Sat: 7:00 AM - 9:00 PM, Sun: 6:00 AM - 8.00PM',
      services: ['Full Laboratory Services', 'Doctor Consultations', 'Sample Collection', '24/7 Emergency Testing'],
      image: '/api/placeholder/600/400'
    },
    north: {
      name: 'Kiribathgoda Branch',
      address: 'Kiribathgoda',
      phone: '0112919169',
      hours: 'Mon-Sat: 8:00 AM - 8:00 PM, Sun: 9:00 AM - 5:00 PM',
      services: ['Laboratory Services', 'Sample Collection', 'Home Collection Service','Dr Channeling'],
      image: '/api/placeholder/600/400'
    },
    east: {
      name: 'Makola Branch',
      address: 'Makola',
      phone: '0713263104',
      hours: 'Mon-Sat: 8:00 AM - 8:00 PM, Sun: Closed',
      services: ['Laboratory Services', 'Sample Collection', 'Specialized Hormone Testing'],
      image: '/api/placeholder/600/400'
    },
    kohalwila:{
      name: 'Kohalwila Branch',
      address: 'Kohalwila',
      phone: '0112919169',
      hours: 'Mon-Sat: 8:00 AM - 8:00 PM, Sun: Closed',
      services: ['Laboratory Services', 'Sample Collection', 'Specialized Hormone Testing'],
      image: '/api/placeholder/600/400'
    }
  }
  
  return (
    <section id="branches" className="branches">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          Our Branches
        </motion.h2>
        
        <motion.div 
          className="branch-tabs"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {Object.keys(branches).map((branch) => (
            <motion.button 
              key={branch}
              className={`branch-tab ${activeBranch === branch ? 'active' : ''}`}
              onClick={() => setActiveBranch(branch)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {branches[branch].name}
            </motion.button>
          ))}
        </motion.div>
        
        <div className="branch-content">
          {Object.keys(branches).map((branch) => (
            <motion.div 
              key={branch}
              className="branch-details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: activeBranch === branch ? 1 : 0,
                x: activeBranch === branch ? 0 : 20,
                display: activeBranch === branch ? 'grid' : 'none'
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="branch-info">
                <h3>{branches[branch].name}</h3>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <p>{branches[branch].address}</p>
                </div>
                <div className="info-item">
                  <span className="info-icon">📱</span>
                  <p>{branches[branch].phone}</p>
                </div>
                <div className="info-item">
                  <span className="info-icon">⏰</span>
                  <p>{branches[branch].hours}</p>
                </div>
                
                <div className="branch-services">
                  <h4>Available Services</h4>
                  <ul>
                    {branches[branch].services.map((service, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {service}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <motion.button
      className="btn package-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleBookCall} // Add this line!
    >
      Book An Appointment
    </motion.button>
              </div>
              
              <motion.div 
                className="branch-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img src={branches[branch].image} alt={branches[branch].name} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      
      
    </section>
  )
}

export default Branches