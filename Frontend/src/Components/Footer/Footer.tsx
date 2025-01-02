import React from 'react';
import './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Rescue Lane Towing. All rights reserved.</p>
      <p>Contact us: <a href="mailto:rescuelane@gmail.com">rescuelane@gmail.com</a> | Phone: 0759595577</p>
    </footer>
  );
};

export default Footer;
