import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  })
  
  const [activeService, setActiveService] = useState(null)
  
  const services = [
    {
      id: 'blood',
      title: 'Blood Tests',
      icon: '🧪',
      shortDesc: 'Comprehensive blood analysis for various health assessments.',
      fullDesc: 'Our advanced blood testing services include complete blood count (CBC), lipid profiles, glucose tests, liver function tests, kidney function tests, and specialized hormone panels. We use state-of-the-art equipment to ensure accurate results with quick turnaround times.',
      tests: ['Complete Blood Count', 'Lipid Profile', 'Fasting Blood Sugar Test', 'C-Reactive Protein (CRP)', 'Glucose Test', 'Thyroid Panel']
    },
    {
      id: 'urine',
      title: 'Urine Analysis',
      icon: '🧫',
      shortDesc: 'Detailed urinalysis for disease detection and monitoring.',
      fullDesc: 'Our urinalysis services provide valuable insights into kidney and urinary tract health, as well as indicators for diabetes, liver problems, and other metabolic disorders. We perform physical, chemical, and microscopic examinations of urine samples.',
      tests: ['Routine Urinalysis', 'Microscopic Examination', 'Culture & Sensitivity', 'Protein Analysis', '24-Hour Collection', 'Pregnancy Test']
    },
    {
      id: 'hormone',
      title: 'Hormone Tests',
      icon: '⚗️',
      shortDesc: 'Advanced hormone level testing for various conditions.',
      fullDesc: 'Our comprehensive hormone testing services help diagnose and monitor endocrine disorders, fertility issues, and hormonal imbalances. We offer specialized panels for thyroid function, reproductive hormones, stress hormones, and metabolic regulators.',
      tests: ['Thyroid Panel', 'Fertility Hormones', 'Cortisol Levels', 'Growth Hormone', 'Insulin Test', 'Testosterone Levels']
    },
    {
      id: 'doctor',
      title: 'Doctor Channeling',
      icon: '👨‍⚕️',
      shortDesc: 'Connect with specialized healthcare professionals.',
      fullDesc: 'Our doctor channeling service connects you with experienced specialists for consultations, follow-ups, and expert medical advice. We maintain a network of trusted healthcare professionals across various specialties to ensure comprehensive care.',
      specialties: ['General Medicine', 'Cardiology', 'Endocrinology', 'Nephrology', 'Gastroenterology', 'Gynecology']
    }
    ,
    {
      id: 'animal',
      title: 'Animal Testing',
      icon: '🐶',
      shortDesc: 'Comprehensive lab tests for accurate health diagnostics.',
      fullDesc: 'Our advanced laboratory services offer a wide range of tests, including FBC, SGPT, SGOT, Creatinine, and many more. We ensure precise results to help diagnose and monitor various health conditions effectively.',
      specialties: ['FBC', 'SGPT', 'SGOT', 'Creatinine', 'And Many More']
    },
    {
      id: 'other',
      title: 'Other Services',
      icon: '🩺',
      shortDesc: 'Convenient healthcare services at your doorstep.',
      fullDesc: 'We offer essential healthcare services, including ECG, blood pressure monitoring, and home visit consultations. Our team ensures accurate diagnostics and personalized care in the comfort of your home.',
      specialties: ['ECG', 'Home Visits' , 'Blood Pressure Monitoring']
    }
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <section id="services" className="services">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className={`service-card ${activeService === service.id ? 'active' : ''}`}
              variants={itemVariants}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
              <div className="service-expand">+</div>
              
              <AnimatePresence>
                {activeService === service.id && (
                  <motion.div 
                    className="service-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{service.fullDesc}</p>
                    <div className="service-tests">
                      <h4>{service.id === 'doctor' ? 'Specialties:' : 'Available Tests:'}</h4>
                      <ul>
                        {(service.tests || service.specialties).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <button className="btn service-btn">Learn More</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services