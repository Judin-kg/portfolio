import React from "react";
import "./Psection.css";
import cardVideo1 from "../components/assets/v1.mp4";
import cardVideo2 from "../components/assets/v2.mp4";
import cardVideo3 from "../components/assets/v3.mp4";
import sectionBackground from "../components/assets/background.mp4"; // PSection background video

export default function PSection() {
  const cards = [
    {
      title: "SERVICES",
      video: cardVideo1,
      description: "I craft responsive, user-friendly websites and web applications that bring ideas to life online.",
    },
    {
      title: "Usability",
      video: cardVideo2,
      description: "Designing intuitive web experiences that make navigation effortless and interactions smooth for every user.",
    },
    {
      title: "Converting",
      video: cardVideo3,
      description: "Transforming visual concepts into fully functional, responsive websites using clean, efficient, and scalable code",
    },
  ];

  return (
    <section className="psection">
      {/* Background video for the section */}
      <video className="psection-bg-video" src={sectionBackground} autoPlay loop muted />

      <h2 className="psection-title"></h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <video
              className="card-background-video"
              src={card.video}
              autoPlay
              loop
              muted
            />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
