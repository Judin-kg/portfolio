import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">
          JUDIN <span>KG</span>
        </h1>

        {/* Hamburger menu */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li className="mobile-contact">
          
        </li>
      </ul>

      <div className="navbar-right">
        <Link to="/contact" className="contact-btn">
          Contact
        </Link>
      </div>
    </nav>
  );
}
