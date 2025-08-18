import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">Our Story</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Welcome to Kapur Coffee</h3>
            <p>
              Founded in 2015, Kapur Coffee began as a small passion project between two friends 
              who shared a love for exceptional coffee and community Today, we've grown into a beloved local destination where coffee enthusiasts gather to experience the perfect brew.
            </p>
            <p>
              Our name "Kapur" comes from the Indonesian word for chalk, symbolizing the blank canvas we start with each day to create something beautiful and unique for our customers.
            </p>
            <p>
              We source only the finest specialty beans from sustainable farms around the world, roasting them in-house to unlock their full potential. Every cup is crafted with precision and care by our skilled baristas.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h4>8+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>15+</h4>
                <p>Expert Baristas</p>
              </div>
              <div className="stat-item">
                <h4>50+</h4>
                <p>Unique Blends</p>
              </div>
            </div>
          </div>
          
          <div className="about-image-container">
            <img src="/assets/about.jpg" alt="Kapur Coffee" className="image-full" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
