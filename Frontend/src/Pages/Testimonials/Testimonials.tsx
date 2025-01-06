import React from 'react';
import './Testimonials.module.css';
import Header from '../../Components/Header/Header';


const Testimonials: React.FC = () => {
  return (
    <div className="testimonials-page">
      <Header/>
      <header className="testimonials-header">
        <h1>Customer Testimonials</h1>
      </header>

      <div className="testimonials-container">
        {/* Testimonial Cards */}
        <div className="testimonials-list">
          <div className="testimonial-card">
            <h2>Vivian Aoko</h2>
            <p>
              "Rescue Lane provided exceptional service when my car broke down
              in the middle of nowhere. Highly recommended!"
            </p>
            <button className="read-more">Read More</button>
          </div>

          <div className="testimonial-card">
            <h2>John Mwangi</h2>
            <p>
              "The team was fast and professional. They made a stressful
              situation much easier."
            </p>
            <button className="read-more">Read More</button>
          </div>

          <div className="testimonial-card">
            <h2>Faith Wanjiru</h2>
            <p>
              "Their towing services were amazing! They arrived quickly and
              safely delivered my car."
            </p>
            <button className="read-more">Read More</button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="testimonials-sidebar">
          {/* Recent Posts */}
          <div className="recent-posts">
            <h2>Recent Posts</h2>
            <ul>
              <li>
                <a href="#">Tips for Safe Towing</a>
              </li>
              <li>
                <a href="#">How to Handle a Roadside Emergency</a>
              </li>
              <li>
                <a href="#">What to Do After a Car Breakdown</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="categories">
            <h2>Categories</h2>
            <ul>
              <li>
                <a href="#">Roadside Assistance</a>
              </li>
              <li>
                <a href="#">Vehicle Towing</a>
              </li>
              <li>
                <a href="#">Emergency Tips</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="testimonials-footer">
        <div className="contact-info">
          <p>Email: contact@rescue-lane.com</p>
          <p>Phone: 0759955777</p>
        </div>
        <div className="footer-links">
          <a href="#">TikTok</a>
          <a href="#">WhatsApp</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Testimonials;
