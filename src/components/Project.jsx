import React from "react";
import "./Project.css";
import project1 from "../components/assets/Screenshot 2025-09-27 143243.png";
import project2 from "../components/assets/Screenshot 2025-09-27 143100.png";
import project3 from "../components/assets/Screenshot 2025-09-27 143344.png";
import project4 from "../components/assets/Screenshot 2025-09-27 143645.png";
import project5 from "../components/assets/f02abb76-5db3-4c07-81f1-62dc5a825575.jpg";
import project6 from "../components/assets/Screenshot 2025-09-27 145935.png";

import projectBgVideo from "../components/assets/background.mp4"; // Background video for section

export default function Project() {
  const projects = [
    { title: "SmartBuyAdvisor", description: "", image: project1, link: "https://smartbuyadvisor-8462p9e45-judins-projects.vercel.app/" },
    { title: "Bharath Cement", description: "", image: project2, link: "http://bharathcement.vercel.app" },
    { title: "Square One", description: "", image: project3, link: "http://www.squareonetly.com" },
    { title: "RJ Atlas Digital AI", description: "", image: project4, link: "http://www.rjatlasdigitalai.com" },
    { title: "TaskManagement", description: "", image: project5, link: "https://taskmanagement-nine-murex.vercel.app/" },
    { title: "RJ Residency", description: "", image: project6, link: "http://rj-atlas-residency.vercel.app" },
  ];

  return (
    <section className="project-section"id="projects">
      {/* Background video */}
      <video className="project-bg-video" src={projectBgVideo} autoPlay loop muted />

      <h2 className="project-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} className="project-image" />
            <h3 className="project-card-title">{proj.title}</h3>
            <p className="project-card-desc">{proj.description}</p>
            <a href={proj.link} className="view-project-btn">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
