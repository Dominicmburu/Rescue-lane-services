import React from 'react';
import '/.Home.module.css'; // Import styles specific to this page
import { FaPhone, FaClock } from 'react-icons/fa';
import Header from '../../Components/Header/Header';


const Home: React.FC = () => {
  return (
    <><Header /><div className="home">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="/Images/Vintage Retro Tow Truck Logo.png" alt="Rescue Lane Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>
        <div className="contact-info">
          <div className="open-time">
            <FaClock className="icon" />
            <span>Open 24/7<br />Mon-Sun</span>
          </div>
          <div className="phone">
            <FaPhone className="icon" />
            <a href="tel:0759955777">0759955777</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <h1>Rescue Lane Towing</h1>
        <h2>Reliable Solutions When You Need It the Most</h2>
        <h3>The Highest Quality Towing Services</h3>
        <div className="emergency">
          <p>24/7 Emergency Services</p>
          <h2>0759955777</h2>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          With over 10 years of experience, we aim to offer fast response and reliable service to our customers.
        </p>
        <p>
          Our services span across Nairobi and into other towns like Mombasa, Kisumu, Nakuru, Thika, and beyond. Trust Rescue Lane to prioritize your safety and peace of mind.
        </p>
        <button>Read More</button>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>We Specialize In</h2>
        <div className="service-list">
          <div className="service-item">
            <img src="/Images/roadside-assistance.jpg" alt="Roadside Assistance" />
            <p>Roadside Assistance</p>
          </div>
          <div className="service-item">
            <img src="/Images/deliveries.jpg" alt="Deliveries" />
            <p>Deliveries</p>
          </div>
          <div className="service-item">
            <img src="/Images/motorcycle-towing.jpg" alt="Motorcycle Towing" />
            <p>Motorcycle Towing</p>
          </div>
          <div className="service-item">
            <img src="/Images/flatbed-towing.jpg" alt="Flatbed Towing" />
            <p>Flatbed Towing</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>Testimonials</h2>
        <blockquote>
          <p>
            "Rescue Lane provided exceptional service when my car broke down in the middle of nowhere. Highly recommended!"
          </p>
          <footer>– Vivian Aoko</footer>
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="contact-footer">
          <p>Email: contact@rescue-lane.com</p>
          <p>Phone: 0759955777</p>
        </div>
        <div className="social-links">
          <a href="#">TikTok</a>
          <a href="#">WhatsApp</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
        <p>Copyright &copy; 2024 Rescue Lane Towing. All rights reserved.</p>
      </footer>
    </div></>
  );
};

export default Home;
