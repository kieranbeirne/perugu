// src/components/Header.js

import React from 'react';
import './Header.css'; // Ensure the Header.css file exists for styling

const Header = () => {
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
      <div className="brand-name">Perugu</div>
      <nav>
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
