import React from 'react';
import './ContactForm.module.css';

const ContactForm: React.FC = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <p>24/7 Emergency Services</p>
          <h2>0759955777</h2>
        </div>
      </header>

      <section className="cta">
        <h2>Ready to Get Back on the Road?</h2>
        <p>Call Rescue Lane!</p>
      </section>

      <section className="map">
        <h2>Map</h2>
        <p>[Embed your map here]</p>
      </section>

      <section className="message-form">
        <h2>Send Us a Message</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
          }}
        >
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer className="footer">
        <h3>Connect with Us</h3>
        <div className="social-links">
          <a href="#">TikTok</a>
          <a href="#">WhatsApp</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Email</a>
        </div>
        <div className="contact-footer">
          <p>Email: contact@rescue-lane.com</p>
          <p>Phone: 0759955777</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;
