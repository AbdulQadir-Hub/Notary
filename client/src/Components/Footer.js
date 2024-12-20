import React from "react";
import "./Styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="about-section">
          <h3>About Us</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="social-icons">
            <Link to="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          {["Quick Links", "Resources", "Support", "Company"].map(
            (title, idx) => (
              <div key={idx} className="footer-link-group">
                <h4>{title}</h4>
                <Link to="#">About Us</Link>
                <br />
                <Link to="#">Testimonials</Link>
                <br />
                <Link to="#">Terms of Service</Link>
                <br />
                <Link to="#">Privacy</Link>
                <br />
                <Link to="#">Contact Us</Link>
                <br />
              </div>
            )
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <span>❤️</span> by Colorlib
        </p>
      </div>
    </footer>
  );
};

export default Footer;
