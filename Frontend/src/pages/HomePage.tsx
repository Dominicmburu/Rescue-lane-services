import React from 'react';
import Layout from '../Components/Layout';
import "../assets/styles/Home.css"
import roadsideAssistanceImage from "../assets/images/Homepage/br5.jpg";
import deliveriesImage from "../assets/images/Homepage/deliveries.jpg";
import motorcycleTowingImage from "../assets/images/Homepage/motorcycle-towing.jpg";
import flatbedTowingImage from "../assets/images/Homepage/flatbed-towing.jpg";
import personImage from "../assets/images/Homepage/person-avatar.jpg"; 
import quoteIcon from "../assets/images/Homepage/quote-icon.png"; 
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
            <img src={roadsideAssistanceImage} alt="Roadside Assistance" />
            <p>Roadside Assistance</p>
          </div>
          <div className="service-item">
            <img src={deliveriesImage} alt="Deliveries" />
            <p>Deliveries</p>
          </div>
          <div className="service-item">
            <img src={motorcycleTowingImage} alt="Motorcycle Towing" />
            <p>Motorcycle Towing</p>
          </div>
          <div className="service-item">
            <img src={flatbedTowingImage} alt="Flatbed Towing" />
            <p>Flatbed Towing</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
          <h2>Testimonials</h2>
          <div className="testimonial-container">
            <div className="testimonial-content">
              <img
                src={personImage}
                alt="Testimonial Person"
                className="person-image"
              />
              <h3>Vivian Aoko</h3>
              <p>
                "Rescue Lane provided exceptional service when my car broke down
                in Nairobi's outskirts. Highly recommended! Their team was
                professional, courteous, and quick to help. I feel safer knowing
                they are just a phone call away!"
              </p>
            </div>
            <img
              src={quoteIcon}
              alt="Quote Icon"
              className="quote-icon-right"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;