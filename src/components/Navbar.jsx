import React from "react";
import { Link } from "react-router-dom";  // ✅ import Link
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">
          JUDIN <span>KG</span>
        </h1>
      </div>

      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>

      <div className="navbar-right">
        {/* ✅ Now uses React Router link */}
        <Link to="/contact" className="contact-btn">
          Contact
        </Link>
      </div>
    </nav>
  );
}
