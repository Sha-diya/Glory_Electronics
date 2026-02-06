// src/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Get in touch with us!</p>
      </div>

      {/* Main Contact Section */}
      <div className="contact-grid">

        {/* Map */}
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Dhanmondi%20Dhaka%20Bangladesh&output=embed"
            loading="lazy"
          ></iframe>
        </div>

        {/* Info + Form */}
        <div className="contact-box">

          {/* Info */}
          <div className="contact-info">
            <h3>Our Office</h3>
            <p>
              <strong>📍 Address:</strong> House 42/3, Box Kalbart, Kathalbagan,
              Dhanmondi, Dhaka-1205, Bangladesh
            </p>
            <p><strong>📧 Email:</strong> gee.office11@gmail.com</p>
            <p><strong>📞 Phone:</strong> +880 1673-947370</p>
          </div>

          {/* Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="4" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

        </div>
      </div>

    </div>
  );
};

export default Contact;
