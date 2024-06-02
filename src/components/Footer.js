import React from 'react'
import './footer.css'
import { Link } from 'react-scroll'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>We are committed to providing the best service possible. Contact us for more information.</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="verification"smooth={true} duration={500}> Verify Card</Link></li>
          <li><Link to="service" smooth={true} duration={500}>Services</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2017 Cardlidity. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer