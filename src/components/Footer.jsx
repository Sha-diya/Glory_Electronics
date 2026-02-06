import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* CONTACT COLUMN */}
        <div className="contact">
          {/* Contact Info */}
          <div className="contact-top">
            <h3>CONTACT US</h3>
            <p><strong>Glory Energy Engineering</strong></p>
            <p>House 42/3, Box Kalbart,Kathalbagan, Dhanmondi</p>
            <p> Dhaka, Bangladesh, 1205</p>
          </div>

          {/* Icons + Button (beneath info) */}
          <div className="contact-actions">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=61561986861157"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com/in/engr-mahbub-zaman-912222179/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="mailto:gee.office11@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://wa.me/8801673-947370"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>

            <button className="contact-btn">Contact Us</button>
          </div>
        </div>

        {/* BUILDING IMAGE */}
        <div className="building">
          <img
            src="/officelocation.PNG"
            alt="Company Building"
          />
        </div>

        {/* MAP */}
        <div className="map">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.821841210266!2d90.38689967397003!3d23.748150688865255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bc7d14e415%3A0xbd4f5efcefb1df65!2sFree%20School%20St%2C%20Dhaka%201205!5e1!3m2!1sen!2sbd!4v1769620295361!5m2!1sen!2sbd" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Electrical & Electronic Service. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
