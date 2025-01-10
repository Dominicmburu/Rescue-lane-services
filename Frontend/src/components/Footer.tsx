import React from 'react';
import '../assets/styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: <a href="mailto:rescuelane@gmail.com">rescuelane@gmail.com</a></p>
            <p>Phone: <a href="tel:0759595577">0759595577</a></p>
            <p>Address: Ngong Road, Posta, Nairobi</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <p>Social links coming soon...</p>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; {new Date().getFullYear()} Rescue Lane Towing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
