import React from 'react';
import Layout from '../Components/Layout';
import "../assets/styles/Home.css"

const HomePage: React.FC = () => {
  return (
    <Layout>
       <div className="homepage">
      <header className="hero-section">
        <div className="hero-overlay">
          <h1>Rescue Lane Towing- Kenya</h1>
          <h2>Roadside Assistance When You Need It the Most</h2>
          <h3>The Highest Quality Towing Services</h3>
          <div className="emergency-box">
            <p>24/7 Emergency Services</p>
            <h2>0759955777</h2>
          </div>
        </div>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          With over 15 years of experience, we aim to offer fast response and reliable service to our customers.
          Our team of dedicated professionals are available around the clock to cater for your towing needs.
        </p>
        <p>
          Our services span across Nairobi and into other towns like Mombasa, Kisumu, Nakuru, Thika, and beyond.
          Trust Rescue Lane to prioritize your safety and peace of mind.
        </p>
        <button>Read More</button>
      </section>

      <section className="services-section">
        <h2>We Specialize In</h2>
        <div className="service-list">
          <div className="service-item">
            <img src="roadside-assistance.jpg" alt="Roadside Assistance" />
            <p>Roadside Assistance</p>
          </div>
          <div className="service-item">
            <img src="deliveries.jpg" alt="Deliveries" />
            <p>Deliveries</p>
          </div>
          <div className="service-item">
            <img src="motorcycle-towing.jpg" alt="Motorcycle Towing" />
            <p>Motorcycle Towing</p>
          </div>
          <div className="service-item">
            <img src="flatbed-towing.jpg" alt="Flatbed Towing" />
            <p>Flatbed Towing</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <blockquote>
          <p>
            "Rescue Lane provided exceptional service when my car broke down in the middle of nowhere. Highly
            recommended!"
          </p>
          <footer>– Vivian Aoko</footer>
        </blockquote>
      </section>
    </div>
    </Layout>
  );
};

export default HomePage;
