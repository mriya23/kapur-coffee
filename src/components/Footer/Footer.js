import React from 'react';
import { FaInstagram, FaShoppingBag } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">
              <span className="logo-text">KAPUR</span>
              <span className="logo-subtext">COFFEE</span>
            </div>
            <p className="footer-description">
              Crafting exceptional coffee experiences since 2015. 
              We're passionate about quality, sustainability, and community.
            </p>
            <div className="social-icons">
              <a href="https://www.instagram.com/kapur.coffee/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.tokopedia.com/kapurcoffee" target="_blank" rel="noopener noreferrer" aria-label="Tokopedia">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Toped_2018-05.png" 
                  alt="Tokopedia" 
                  className="tokopedia-logo"
                />
              </a>
              <a href="https://food.grab.com/id/id/restaurant/online-delivery/6-C6EFDE3XRJKDJA?sourceID=20241014_195243_EFD309725A6849708F149D8BAC1E75EC_MEXMPS" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label="GrabFood"
                 className="grabfood-icon">
                <FaShoppingBag />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="https://www.tokopedia.com/kapurcoffee" target="_blank" rel="noopener noreferrer">Order Online</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Opening Hours</h3>
            <ul>
              <li>Monday - Sunday: 9:00 AM - 23:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {currentYear} Kapur Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;