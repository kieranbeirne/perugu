// src/pages/HomePage.js

import React from 'react';
import Header from '../components/Header';
import './HomePage.css'; // Ensure the HomePage.css file exists for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



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
        <h2>About Us</h2>
        <div className="about-container">
          <img src="/kieran-pfp.jpeg" alt="Kieran Beirne" className="about-image" />
          <h3 className="about-name">Kieran Beirne&nbsp;
          <a href="https://www.linkedin.com/in/kieranbeirne/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
          <FontAwesomeIcon icon={faLinkedin} /> 
          </a>
          </h3>
          <p className="about-bio">
          Howdy, my name is Kieran Beirne, and I am a senior pursuing a major in Computer Science with an interest in the intersection of technology and wellness. As an avid runner, I have developed a passion for exploring how nutrition and technology can synergize to enhance athletic performance. Through our combined efforts, I believe we can unlock personalized solutions that empower athletes to achieve optimal health and performance.
          </p>
        </div>
        <br></br>
        <hr width="40%"></hr>
        <br></br>
        <br></br>
        <div className="about-container">
          <img src="/satwik-pfp.jpg" alt="Satwik Putluri" className="about-image" />
          <h3 className="about-name">Satwik Putluri&nbsp;
          <a href="https://www.linkedin.com/in/satwikreddy-putluri-500472190/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
          <FontAwesomeIcon icon={faLinkedin} /> 
          </a>
          </h3>
          <p className="about-bio">
            Howdy, my name is Satwik Putluri, and I am currently a sophomore studying biomedical sciences while pursuing a business minor. My career goal is to practice medicine while also conducting research. I am excited to work with my teammates to better understand the relation between the gut microbiome and running endurance as the field of gut micro bacteria is a growing field in the healthcare industry.
          </p>
        </div>
        <br></br>
        <hr width="40%"></hr>
        <br></br>
        <br></br>
        <div className="about-container">
          <img src="/satwik-pfp.jpg" alt="Janak Abraham" className="about-image" />
          <h3 className="about-name">Janak Abraham&nbsp;
          <a href="https://www.linkedin.com/in/janak-abraham-977284268/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
          <FontAwesomeIcon icon={faLinkedin} /> 
          </a>
          </h3>
          <p className="about-bio">
            Howdy, my name is Janak Abraham, and I am currently a sophomore Biomedical Science major with a minor in business. I aspire to become a sports medicine physician and work alongside athletes to better their performance. Utilizing the theory “food is medicine” my teammates and I hope to become a driving force in completely understanding the capabilities of the gut microbiome.
          </p>
        </div>
        <br></br>
        <hr width="40%"></hr>
        <br></br>
        <br></br>
        <div className="about-container">
          <img src="/satwik-pfp.jpg" alt="Vikash Ravuri" className="about-image" />
          <h3 className="about-name">Vikash Ravuri&nbsp;
          <a href="" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
          <FontAwesomeIcon icon={faLinkedin} /> 
          </a>
          </h3>
          <p className="about-bio">
          Howdy, my name is Vikash Ravuri, and I am currently a sophomore studying biology with a business minor in pursuit of studying medicine. I am excited to work with my teammates to better understand the relation between nutrition and runners. I personally am a marathon runner and have come to understand the importance of having a well-balanced runner personalized diet. Runners are a specific niche that metabolize and require a different nutrient portfolio compared to the average person and we hope to make personalized nutrition at the forefront of runners daily life.
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
        <div className="contact-details">
          <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:perugu@gmail.com">perugu@gmail.com</a>
        </div>
        <p>Contact us for any inquiries or additional information</p>
      </section>
      <footer className="footer">
        © 2024 Perugu. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
