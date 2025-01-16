import React from "react";
import Layout from "../Components/Layout";
import "../assets/styles/ContactUs.css";

const ContactUsPage: React.FC = () => {
  return (
    <Layout>
      <div className="contact-us-page">
        {/* Header Section */}
        <div className="contact-header">
          <h1>CONTACT US</h1>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section">
          <div className="cta-text">
            <h2>READY TO GET BACK ON THE ROAD?</h2>
            <p>
              With locations in Nairobi, Kiambu, and its environs, we have the
              ability to service your towing needs across wide areas in the
              shortest period of time. Call us and let us help you with
              professional towing assistance for your vehicle.
            </p>
          </div>
          <a href="tel:0759595577" className="cta-button">Call Rescue Lane!</a>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="google-map">
            <iframe
              title="Google Map Nairobi Ngong Road"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.60921493753!2d36.74975764365477!3d-1.2971372929315327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f111b5c7c6a4d%3A0xff6c3b869dc8f186!2sNgong%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1694585085495!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-section">
          <h2>SEND US A MESSAGE</h2>
          <form>
            <label htmlFor="name">NAME:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="phone">PHONE:</label>
            <input type="text" id="phone" name="phone" required />

            <label htmlFor="email">EMAIL:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">MESSAGE:</label>
            <textarea id="message" name="message" rows={5} required></textarea>

            <button type="submit">SUBMIT</button>
          </form>
        </div>

        {/* Footer Section 
        <div className="footer">
          <p>Connect with us:</p>
          <div className="social-icons">
            <a href="#"><img src="/path/to/tiktok-icon.png" alt="TikTok" /></a>
            <a href="#"><img src="/path/to/facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="/path/to/instagram-icon.png" alt="Instagram" /></a>
            <a href="#"><img src="/path/to/email-icon.png" alt="Email" /></a>
          </div> 
        </div> */}
      </div>
    </Layout>
  );
};

export default ContactUsPage;
