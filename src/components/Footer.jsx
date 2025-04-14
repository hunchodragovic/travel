import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Planet Voyage</h1>
          <p>Choose your favorite destination</p>
        </div>
        <div>
          <a
            href="https://www.facebook.com/KADERplanetvoyage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a
            href="https://www.instagram.com/planet_voyage_dz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram-square"></i>
          </a>
        </div>
      </div>
      <div className="low">
        <div>
          <h4>Project</h4>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Changelog
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Status
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            License
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            All versions
          </a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Issues
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Project
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Support
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Troubleshooting
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Contact us
          </a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            License
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
