// src/components/Header.js

import React, { useState } from 'react';
import './Header.css'; // Ensure the Header.css file exists for styling

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [shake, setShake] = useState(false);
  const [loginError, setLoginError] = useState(''); // Add this line to declare loginError state


  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop - 90;

    window.scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  };

  const handleLoginClick = () => {
    setIsLoginVisible(true);
  };

  const closeLogin = () => {
    setIsLoginVisible(false);
    setShake(false);
  };

  const attemptLogin = (event) => {
    event.preventDefault();
    setShake(true);
    setLoginError('Invalid login credentials'); // Set the error message
    setTimeout(() => {
      setShake(false);
      setLoginError(''); // Clear the error message after 1.5 seconds
    }, 1500); // 1500ms = 1.5s
  };

  return (
    <header className="header">
      <div className="brand-name" onClick={scrollToTop}><img src="/perugu.png" alt="Perugu Logo" /></div>
      <div className="nav-toggle" onClick={() => setIsNavVisible(!isNavVisible)}>
        {/* Toggle Button for Mobile */}
        <i className={isNavVisible ? 'arrow up' : 'arrow down'} />
      </div>
      <nav className={isNavVisible ? 'nav active' : 'nav'}>
        <ul>
          <li><a href="#how-it-works" onClick={scrollToSection}>Our Process</a></li>
          <li><a href="#what-we-offer" onClick={scrollToSection}>What We Offer</a></li>
          <li><a href="#future-plans" onClick={scrollToSection}>Future Plans</a></li>
          <li><a href="#about-us" onClick={scrollToSection}>About Us</a></li>
          <li className="nav-item login-link"><a onClick={handleLoginClick}>Login</a></li>
        </ul>
      </nav>
      {isLoginVisible && (
        <div className={`login-modal ${shake ? 'shake' : ''}`}>
          {loginError && <div className="login-error">{loginError}</div>}
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" onClick={attemptLogin}>Login</button>
            <button type="button" onClick={closeLogin}>Close</button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
