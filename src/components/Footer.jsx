import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a
          href="./components/assets/Judin_KG_Resume.pdf"
          download
          className="btn download-btn"
        >
          Download CV
        </a>
      </div>

      <div className="footer-right">
       
        <a
          href="https://github.com/Judin-kg"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/judinkg/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
