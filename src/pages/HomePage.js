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
      <div id="logo" className="overlay-text">
          <img src="/logo-03.png" alt="Perugu Logo" />
        </div>
      <section id="how-it-works" className="section how-it-works">
        <h2><u>Our Process</u></h2>
        <p>Learn how <b>perugu</b> customizes your nutrition according to your distinct metabolic profile through three simple steps</p>
        <div class="process-steps">
          <div class="step">
            <h3>01</h3>
            <h4>Submit Urine Sample</h4>
            <p>You will be sent our standard kit with the nutrient rich shake, urine kit, and instructions on how to complete the protocol</p>
          </div>

          <div class="step">
            <h3>02</h3>
            <h4>Urine Test Analysis</h4>
            <p>We evaluate your metabolic rate associated with certain compounds present within your urine sample</p>
          </div>

          <div class="step">
            <h3>03</h3>
            <h4>PERSONALIZED NUTRITION</h4>
            <p>Receive personalized nutritional recommendations for <u>before</u>, <u>during</u>, and <u>after</u> endurance exercises</p>
          </div>
        </div>
      </section>
      <section id="what-we-offer" className="section background">
        <h2><u>What We Offer</u></h2>
        <div className="about-container">
        ​​<p className="about-offer">At <b>perugu</b>, we delve deep into the metabolic makeup of endurance athletes, utilizing sophisticated analysis of key metabolites </p>
       <br></br>
       ​​<p className="about-offer">By utilizing these metabolic markers, we provide comprehensive insights into each athlete's unique nutritional needs, tailoring precise plans to optimize <b>performance</b>, <b>recovery</b>, and overall <b>well-being</b></p>
       <br></br>
        ​​<p className="about-offer">Our approach ensures that every athlete receives a nutrition strategy finely tuned to their metabolic profile, empowering them to reach <b>new levels of performance and endurance</b></p>
        </div>
        <br></br>
        <br></br>

        <div className="about-containers">
          <div class="step-t">
              <h3>Harrison F.</h3>
              <h4>Corps Member at A&M</h4>
              <p>“The quality and attention to detail that Peregu emphasizes on its personalized nutrition plan makes it one of the premier tools for avid runners and military personnel such as myself. I can use to maximize performance and mitigate injury in my active lifestyle.”</p>
          </div>
          <div class="step-t">
              <h3>Tim M.</h3>
              <h4>Former A&M Cross Country Runner</h4>
              <p>"Peregu's concept of tailored nutritional guidance could revolutionize the track and field arena. As an athlete, finding the right balance of nutrients to fuel explosive power and enduring stamina remains a constant challenge. I would definitely use this product."</p>
          </div>
        </div>
      </section>
      {/* <section className="section future-plans">
        <h2><u>Testimonies</u></h2>
        Testimonies will go here
      </section> */}
      <section id="future-plans" className="section future-plans">
        <h2><u>Future Plans</u></h2>
        <div class="process-steps">
          <div class="steps">
            <h3>🧗</h3>
            <p>Expand our reach into diverse endurance sports markets, offering specialized solutions for athletes in disciplines that demand peak stamina and resilience</p>
          </div>

          <div class="steps">
            <h3>🔬</h3>
            <p>Incorporate continuous glucose monitoring (CGM) and partner with leading fitness tracking brands to deliver real-time feedback for optimized athletic performance</p>
          </div>

          <div class="steps">
            <h3>📈</h3>
            <p>Dedicated to sustainable growth, we aim to scale our team and outreach efforts to become a staple in the endurance sports community, emphasizing long-term commitment and impact</p>
          </div>
        </div>
      </section>
      <section id="about-us" className="section about-us">
        <h2><u>About Us</u></h2>
        <div className="about-container">
          <img src="/janak-pfp.jpg" alt="Janak Abraham" className="about-image" />
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
        <div className="about-container">
        <hr></hr>
        </div>
        <br></br>
        <br></br>
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
        <div className="about-container">
        <hr></hr>
        </div>
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
        <div className="about-container">
        <hr></hr>
        </div>
        <br></br>
        <br></br>
        <div className="about-container">
          <img src="/vikash-pfp.jpg" alt="Vikash Ravuri" className="about-image" />
          <h3 className="about-name">Vikash Ravuri&nbsp;
          <a href="https://www.linkedin.com/in/vikash-ravuri-3362a72b5/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
          <FontAwesomeIcon icon={faLinkedin} /> 
          </a>
          </h3>
          <p className="about-bio">
          Howdy, my name is Vikash Ravuri, and I am currently a sophomore studying biology with a business minor in pursuit of studying medicine. I am excited to work with my teammates to better understand the relation between nutrition and runners. I personally am a marathon runner and have come to understand the importance of having a well-balanced runner personalized diet. Runners are a specific niche that metabolize and require a different nutrient portfolio compared to the average person and we hope to make personalized nutrition at the forefront of runners daily life.
          </p>
        </div>
      </section>
      <section id="contact-us" className="section contact-us">
        <h2><u>Contact Us</u></h2>
        <div className="contact-details">
          <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:perugu@gmail.com">perugu@gmail.com</a>
        </div>
        <p>Contact us for any inquiries or additional information</p>
      </section>
      <footer className="footer">
        © 2024 Perugu. All rights reserved. <br></br>Developed with React.js by <a href="https://www.linkedin.com/in/kieranbeirne/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>Kieran Beirne</a>
      </footer>
    </div>
  );
};

export default HomePage;
