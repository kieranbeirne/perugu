// src/pages/HomePage.js

import React from 'react';
import Header from '../components/Header';
import './HomePage.css'; // Ensure the HomePage.css file exists for styling


const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="main-image">
        <img src="/index-photo-3.jpg" alt="Main" />
      </div>
      <div className="overlay-text">
          <h1 className="overlay-title">Perugu</h1>
          <h2 className="overlay-subtitle">The <u>Gut</u> it Takes to Run</h2>
        </div>
        <section id="about-us" className="section about-us">
        <div className="about-container">
          <img src="/kieran-pfp.jpeg" alt="Your Name" className="about-image" />
          <h3 className="about-name">Kieran Beirne</h3>
          <p className="about-bio">
            Here is my bio. I've done this and that and am passionate about running.
            {/* Your actual bio goes here */}
          </p>
        </div>
      </section>
      <section id="how-it-works" className="section how-it-works">
        <h2>How It Works</h2>
        {/* Content for How It Works */}
      </section>
      <section id="background" className="section background">
        <h2>Background</h2>
        {/* Content for Background */}
      </section>
      <section id="future-plans" className="section future-plans">
        <h2>Future Plans</h2>
        {/* Content for Future Plans */}
      </section>
      <section id="contact-us" className="section contact-us">
        <h2>Contact Us</h2>
        {/* Content for Contact Us */}
      </section>
    </div>
  );
};

export default HomePage;
