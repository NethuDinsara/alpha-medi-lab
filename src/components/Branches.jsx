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
      phone: '0112 906 949 , 071 709 0884',
      hours: 'Mon-Sat: 6:00 AM - 8:00 PM, Sun/Poya: 6:30 AM - 6:00 PM',
      services: ['Full Laboratory Services', 'Doctor Channeling', 'Sample Collection', 'Emergency Testing','ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/Jqj9mYvkkERfGcZM6?g_st=ipc' // **Add your Google Maps link here**
    },
    north: {
      name: 'Kiribathgoda Branch',
      address: 'Kiribathgoda',
      phone: '0112 984 661 , 071 960 7974',
      hours: 'Mon-Sat: 6:30 AM - 7:00 PM, Sun/Poya: 6:30 AM - 6:00 PM',
      services: ['Sample Collection', 'Dr Channeling', 'OPD','ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/AgBphZidxNrHTmd9A?g_st=ipc' // **Add your Google Maps link here**
    },
    east: {
      name: 'Makola Branch',
      address: 'Makola',
      phone: '0112 269 949',
      hours: 'Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 12 Noon',
      services: ['Sample Collection','ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/U8c8rZAoJ4UUSLMr5?g_st=ipc' // **Add your Google Maps link here**
    },
    kohalwila:{
      name: 'Kohalwila Branch',
      address: 'Kohalwila',
      phone: '0112 269 858',
      hours: 'Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 12 Noon',
      services: ['Sample Collection', 'ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/qX325ZMtCAX84Ve7A?g_st=ipc' // **Add your Google Maps link here**
    },
    Mvm:{
      name: 'Mavaramandiya Branch',
      address: 'Kohalwila',
      phone: '0112 927 837',
      hours: 'Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 12 Noon',
      services: ['Sample Collection', 'ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/g3RCBb1GyGCWXsXT9?g_st=ipc' // **Add your Google Maps link here**
    },
    Kadawatha:{
      name: 'Kadawatha Branch',
      address: 'Kohalwila',
      phone: '0112 902 420',
      hours: 'Mon-Sat: 6:30 AM - 5:30 PM, Sun: 6:30 AM - 12 Noon',
      services: ['Sample Collection', 'ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/oQS1LJjkTg666nqS6?g_st=ipc' // **Add your Google Maps link here**
    },
    Hunupitiya:{
      name: 'Hunupitiya Branch',
      address: 'Kohalwila',
      phone: '0112 983 198',
      hours: 'Mon-Sat: 6:30 AM - 6:30 PM, Sun: 6:30 AM - 12 Noon',
      services: ['Sample Collection', 'ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/DWCx64NiXZN6d2EC6?g_st=ipc' // **Add your Google Maps link here**
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

                {branches[branch].locationLink && ( // Conditionally render the location link
                  <div className="info-item">
                    <span className="info-icon">🗺️</span>
                    <a href={branches[branch].locationLink} target="_blank" rel="noopener noreferrer">View on Map</a>
                  </div>
                )}
                
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
                  onClick={handleBookCall}
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
                {/* <img src={branches[branch].image} alt={branches[branch].name} /> */}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Branches;