
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const footer=()=>{
    return(
        <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>Alpha Medi Lab</h3>
              <p>Your Trusted Partner in Medical Diagnostics</p>
            </div>
            
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#packages">Packages</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-social">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">FB</a>
                <a href="#" className="social-icon">TW</a>
                <a href="#" className="social-icon">IG</a>
                <a href="#" className="social-icon">LI</a>
              </div>
            </div>
          </div>
          
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Alpha Medi Lab. All Rights Reserved.</p>
            <p>Made with Zeylentiq Solutions</p>
          </div>
        </div>
      </footer>
    )
}
export default footer
