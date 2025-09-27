import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import "./About.css";
import profileImg from "./assets/profile-removebg-preview.png";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <section className="about-section" id="about">
      {/* Left side */}
      <div className="about-left">
        <h1 className="about-heading1">Judin KG</h1>
        <h2 className="about-heading">
          Full Stack Developer & AI Enthusiast | Freelancer
        </h2>
        
        <h3 className="about-subheading">
          Building modern web applications and AI solutions while delivering freelance projects with passion and precision
        </h3>

        {/* ✅ Contact route link */}
       

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/judinkg/"
            target="_blank"
            rel="noreferrer"
            className="social-icon linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Judin-kg"
            target="_blank"
            rel="noreferrer"
            className="social-icon github"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/9746521953"
            target="_blank"
            rel="noreferrer"
            className="social-icon whatsapp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/judin.kg/?igsh=cDQyZ2g3azh1Mmxk#"
            target="_blank"
            rel="noreferrer"
            className="social-icon instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <br /><br /><br /><br /><br /><br />

        {/* Who I Am + Image under social icons */}
        <div className="about-right">
          <div className="whoami">
            <h3>Who I Am</h3>
            <p>
              I am a passionate Full Stack Developer and AI Enthusiast.<br /> 
              I love building web applications with modern technologies,<br /> 
              solving complex problems, and exploring AI and machine <br /> 
              learning to create impactful solutions.
            </p>
          </div>

          <div className="profile-container">
            <img src={profileImg} alt="Judin KG" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
