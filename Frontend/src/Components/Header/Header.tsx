import React from 'react';
import './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Rescue Lane Towing</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
