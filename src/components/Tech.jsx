import React from "react";
import "./Tech.css";
import bgVideo from "../components/assets/background.mp4";

// Icons from react-icons
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPhp, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiNestjs } from "react-icons/si";

export default function Tech() {
  return (
    <section className="tech-section">
      {/* Background video */}
      <video className="tech-bg-video" src={bgVideo} autoPlay loop muted />

      <div className="tech-content">
        <h2 className="tech-title">Our Technologies</h2>
        <p className="tech-desc">
          We use cutting-edge technologies to build high-performance applications and deliver seamless user experiences.
        </p>

        {/* Icons Grid */}
        <div className="tech-icons">
          {/* Row 1 */}
          <div className="icon-row left">
            <SiTailwindcss className="tech-icon" title="Tailwind CSS" />
            <SiNestjs className="tech-icon" title="NestJS" />
            <FaReact className="tech-icon" title="React" />
            <FaHtml5 className="tech-icon" title="HTML5" />
          </div>

          {/* Row 2 */}
          <div className="icon-row right">
            <FaCss3Alt className="tech-icon" title="CSS3" />
            <FaJsSquare className="tech-icon" title="JavaScript" />
            <FaNodeJs className="tech-icon" title="Node.js" />
            <FaPhp className="tech-icon" title="PHP" />
          </div>

          {/* Row 3 */}
          <div className="icon-row left">
            <FaBootstrap className="tech-icon" title="Bootstrap" />
          </div>
        </div>
      </div>
    </section>
  );
}
