import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-container">
        <div className="footer-brand">
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      </div>

      <p className="footer-copy">&copy; 2025 Miss Ash. All rights reserved.</p>
    </footer>
  );
};

export default Footer;