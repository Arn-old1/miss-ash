import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" data-aos="fade-left">
      <h2>Contact Us</h2>
      <p>Have questions? Reach out to us and we’ll get back to you.</p>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p><strong>Phone:</strong> +256-707883114</p>
          <p><strong>Email:</strong> missashfashion@gmail.com</p>
          <p><strong>Location:</strong> Makindye, Kampala</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;