import React from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Visit Us</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <h3>Location</h3>
                <p>Jl. Sunter Indah Raya No.9 Blok L2, Sunter Jaya, Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14360</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-text">
                <h3>Opening Hours</h3>
                <p>Monday - Sunday: 9:00 AM - 23:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="map-container">
            <iframe 
              title="Kapur Coffee Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1539493!2d106.8769705!3d-6.1539493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5e655a7fbbf%3A0x20ccd68e0e3d2a3f!2sKAPUR%20Coffee!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%"
              style={{border:0, borderRadius: "10px"}}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;