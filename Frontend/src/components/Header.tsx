import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import { FaTruck } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="header bg-dark text-light">
      <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Logo */}
        <div className="header-logo d-flex align-items-center">
          <FaTruck size={40} color="lightblue" />
        </div>

        {/* Open Time */}
        <div className="header-info d-flex align-items-center text-center">
          <BiTimeFive size={40} color="yellow" />
          <div className="ms-2">
            <span className="header-info-title text-warning">OPEN TIME</span>
            <br />
            <span className="header-info-subtitle">Open 24/7</span>
            <br />
            <span className="header-info-subtitle">Mon-Sun</span>
          </div>
        </div>

        {/* Call Us Now */}
        <div className="header-info d-flex align-items-center text-center">
          <FaPhoneAlt size={40} color="blue" />
          <div className="ms-2">
            <span className="header-info-title text-warning">CALL US NOW</span>
            <br />
            <span className="header-info-subtitle">0759595577</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="header-nav bg-brown">
        <ul className="nav-list d-flex justify-content-center py-2">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
