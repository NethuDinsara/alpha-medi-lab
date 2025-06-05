import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const PackagePopup = ({ showPopup, setShowPopup }) => {
  const packages = [
    {
      name: "Rose Package",
      originalPrice: "5,000/-",
      offerPrice: "3,500/-",
      discountText: "30% OFF", // Manually specified discount
      includes: [
        "Fasting Blood Sugar",
        "Lipid Profile",
        "SGOT/SGPT",
        "S Creatinine - eGFR",
      ]
    },
    {
      name: "Comprehensive Package",
      originalPrice: "9,900/-",
      offerPrice: "7,000/-",
      discountText: "30% OFF",
      includes: [
        "All Basic Package Tests",
        "Lipid Profile",
        "Liver Function Tests",
        "Thyroid Function Tests"
      ]
    },
    {
      name: "Premium Wellness",
      originalPrice: "11,850/-",
      offerPrice: "8,500/-",
      discountText: "30% OFF",
      includes: [
        "All Comprehensive Tests",
        "Vitamin D Levels",
        "Diabetes Screening",
        "Cardiac Risk Markers"
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setShowPopup]);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div 
          className="package-popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowPopup(false)}
        >
          <motion.div 
            className="package-popup-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="close-popup" 
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            
            <h2>Our Current Health Packages</h2>
            <p className="popup-subtitle">Special limited-time offers</p>
            
            <div className="package-grid">
              {packages.map((pkg, index) => (
                <motion.div 
                  key={index}
                  className="package-card"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3>{pkg.name}</h3>
                  <div className="package-prices">
                    <span className="original-price">{pkg.originalPrice}</span>
                    <span className="offer-price">{pkg.offerPrice}</span>
                    <span className="discount-badge">{pkg.discountText}</span>
                  </div>
                  <ul>
                    {pkg.includes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <button 
              className="btn popup-btn"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PackagePopup;