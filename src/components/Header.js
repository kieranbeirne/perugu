// src/components/Header.js

import React, { useState } from 'react';
import './Header.css'; // Ensure the Header.css file exists for styling

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (event) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    const href = event.currentTarget.getAttribute('href'); // Get the href attribute of the clicked element
    const offsetTop = document.querySelector(href).offsetTop; // Get the top offset of the target section

    window.scroll({
      top: offsetTop, // Scroll to the top offset of the target section
      behavior: 'smooth' // Smoothly scroll to the target section
    });
  };

  return (
    <header className="header">
      <div className="brand-name" onClick={scrollToTop}>Perugu</div>
      <div className="nav-toggle" onClick={() => setIsNavVisible(!isNavVisible)}>
        {/* Toggle Button for Mobile */}
        <i className={isNavVisible ? 'arrow up' : 'arrow down'} />
      </div>
      <nav className={isNavVisible ? 'nav active' : 'nav'}>
        <ul>
          <li><a href="#about-us" onClick={scrollToSection}>About Us</a></li>
          <li><a href="#how-it-works" onClick={scrollToSection}>How It Works</a></li>
          <li><a href="#background" onClick={scrollToSection}>Background</a></li>
          <li><a href="#future-plans" onClick={scrollToSection}>Future Plans</a></li>
          <li><a href="#contact-us" onClick={scrollToSection}>Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
