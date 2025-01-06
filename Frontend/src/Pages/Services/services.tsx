import React from 'react';
import './services.module.css';
import Header from '../../Components/Header/Header';

const Services: React.FC = () => {
  return (
    <div className="services-page">
      <Header/>
      <header className="services-header">
        <h1>Our Services</h1>
      </header>

      <section className="main-services">
        <div className="service-card">
          <img src="/Images/car-towing.jpg" alt="Car Towing" />
          <h2>Car Towing</h2>
          <p>Fast and reliable towing for cars of all types and sizes, 24/7 availability.</p>
        </div>
        <div className="service-card">
          <img src="/Images/accident-recovery.jpg" alt="Accident Recovery Towing" />
          <h2>Accident Recovery Towing</h2>
          <p>Specialized services for recovering vehicles after an accident, ensuring safety and efficiency.</p>
        </div>
        <div className="service-card">
          <img src="/Images/roadside-assistance.jpg" alt="Roadside Assistance" />
          <h2>Roadside Assistance</h2>
          <p>
            Support for flat tires, jump starts, fuel delivery, and minor mechanical issues on the go.
          </p>
        </div>
        <div className="service-card">
          <img src="/Images/heavy-crane.jpg" alt="Heavy Crane Services" />
          <h2>Heavy Crane Services</h2>
          <p>
            Expert handling of heavy equipment and vehicle recovery with our advanced crane services.
          </p>
        </div>
      </section>

      <section className="additional-services">
        <h2>Additional Services</h2>
        <ul>
          <li>Light-duty towing for delivery vehicles and small cars.</li>
          <li>Fuel delivery for vehicles stranded without fuel.</li>
          <li>Motorcycle towing for bikes of all sizes.</li>
          <li>Flatbed towing for vehicles with low clearance.</li>
          <li>Winching and recovery for vehicles stuck in difficult situations.</li>
          <li>Long-distance towing across Nairobi and beyond.</li>
        </ul>
      </section>

      <footer className="services-footer">
        <div className="contact-info">
          <p>Email: contact@rescue-lane.com</p>
          <p>Phone: 0759955777</p>
        </div>
        <div className="social-links">
          <a href="#">TikTok</a>
          <a href="#">WhatsApp</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Services;
