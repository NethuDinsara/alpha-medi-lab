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
      id: 'blood1',
      title: 'Hematology',
      icon: '🩸',
      shortDesc: 'Checks your blood for signs of infections, anemia, and other conditions.',
      fullDesc: 'We analyze your blood to detect issues like low hemoglobin, infections, and clotting problems. It’s a key test to understand your overall health and immune system.',
      tests: ['Full Blood Count', 'WBC/DC', 'Haemoglobin(Hb)','PCV','Platelet Count','ESR','Malaria Parasite (MP)ASIRI','Blood Grouping','HbA1c','Blood Picture+FBC','PT/INR']
    },
    {
      id: 'blood2',
      title: 'Chemical Pathology - 1',
      icon: '🌡️',
      shortDesc: 'Measures your blood sugar levels for diabetes and glucose control.',
      fullDesc: 'This set of tests tracks how your body handles sugar — helpful for diagnosing and managing diabetes or blood sugar-related concerns.',
      tests: ['Fasting Blood Sugar(FBS)','Post Prandial Blood Sugar(PPBS)','Random Blood Sugar(RBS)','Random Blood Sugar(capillary)','OGTT','Blood Sugar Series(BSS)','Glucose challenge test(GCT)']
    },
    {
      id: 'blood3',
      title: 'Chemical Pathology - 2',
      icon: '💉',
      shortDesc: 'Tests your cholesterol, kidney health, and basic body chemistry.',
      fullDesc: 'We check fat levels, kidney function, and essential minerals to assess heart health and body balance. Great for routine checkups and chronic condition monitoring.',
      tests: ['S.Cholesterole','Lipid Profile','Blood Urea with BUN','S.Creatinine & E GFR','S.Electrolytes','Reanal Profile(RFT)','Total Calcium(Ca2+)','Ionized Calcium','Corrected Calcium','Uric Acid','Inorganic Phosphorus(PO4-)','CPK']
    },
    {
      id: 'blood4',
      title: 'Chemical Pathology - 3',
      icon: '🩹',
      shortDesc: 'Evaluates your liver function and checks vital body enzymes.',
      fullDesc: 'Helps diagnose liver issues, digestive health, and enzyme imbalances. It gives a clearer picture of how your organs are working.',
      tests: ['TIBC(UIBC)','S.Iron','LDH','Amylase','Liver Profile (LFT)','AST(SGOT)','ALT (SGPT)','Alkaline Phosphatase(ALP)','Gama GT (YGT)','S.Albumin','S.Protein(Albumin/Globulin)','Bilirubin Total','Bilirubin Total/Direct']
    },
    {
      id: 'blood5',
      title: 'Chemical Pathology - 4',
      icon: '🧪',
      shortDesc: 'Detects infections like dengue, HIV, and autoimmune issues.',
      fullDesc: 'This panel screens for viruses, bacterial infections, and immune responses. Crucial for detecting illnesses early and managing chronic conditions.',
      tests: ['ANA','Leptospira AB','Influanza Ag(H1N1)','Dengue NS1 Ag','Dengue Ab Igg/Ige','FAT','CRP','Rhematoid factor','HIV','SAT','ASOT','VDRL','HepBSAg','Hep A Ab','Hep C Ab']
    },
    {
      id: 'urine & Stool',
      title: 'Urine & Stool Analysis',
      icon: '🧫',
      shortDesc: 'Detects infections and tracks kidney and gut health.',
      fullDesc: 'Through urine and stool tests, we check for signs of infections, diabetes, kidney issues, and digestive disorders — a full-body check from the inside out.',
      tests: ['Urine Full Report(UFR)','Pregnancy Test (URINE)','Urine Micro Albumin(UMA)','Urine Protein Creatinine Ratio(UPCR)','Stool Full Report (SFR)','Stool Occult Blood']
    },
    {
      id: 'hormone',
      title: 'Hormone Tests',
      icon: '⚗️',
      shortDesc: 'Advanced hormone level testing for various conditions.',
      fullDesc: 'We measure hormones like thyroid, reproductive, and stress-related hormones to find imbalances and guide treatment for conditions like infertility or fatigue.',
      tests: ['Troponin I - Titre','Ferritin','T3','T4','TSH','FSH','LH','Prolactin','Testosterone','Progesterone','Vitamin D','Serum beta HCG','Total PSA','CA 125','CEA']
    },
    {
      id: 'doctor',
      title: 'Doctor Channeling',
      icon: '👨‍⚕️',
      shortDesc: 'Connect with specialized healthcare professionals.',
      fullDesc: 'Get expert medical advice and treatment by connecting with our panel of specialized doctors — from general health to complex care.',
      specialties: ['General Physician', 'Demartologist','Paediatrition','Chest Physician','Hemartologist','Psychatrist','Cardiologist','Councillar' ]
    }
    ,
    {
      id: 'animal',
      title: 'Animal Testing',
      icon: '🐶',
      shortDesc: 'Lab tests to monitor your pet’s health accurately.',
      fullDesc: 'Just like humans, pets need medical checkups too! We provide reliable lab testing for animals to detect and monitor various health conditions.',
      specialties: ['FBC', 'SGPT', 'SGOT', 'Creatinine', 'And Many More']
    },
    {
      id: 'other',
      title: 'Other Services',
      icon: '🩺',
      shortDesc: 'Extra care services like ECG and home visits made easy.',
      fullDesc: 'We offer convenient services such as ECGs, home doctor visits, and blood pressure checks — bringing healthcare right to your doorstep.',
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