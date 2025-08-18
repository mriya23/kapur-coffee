import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h2 className="hero-pretitle">SERVING TOP</h2>
          <h1 className="hero-title">
            <span>INDONESIAN</span>
            <span>COFFEE BLEND & SINGLE ORIGIN</span>
          </h1>
          <p className="hero-subtitle">Premium coffee crafted with passion in the heart of the city</p>
          <div className="hero-buttons">
            <a href="#menu" className="btn">View Menu</a>
          </div>
        </div>
      </div>
      
      <div className="hero-overlay"></div>
      <div className="hero-image"></div>
      
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;