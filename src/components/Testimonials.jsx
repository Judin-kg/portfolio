import React from "react";
import "./Testimonials.css";
import bgVideo from "../components/assets/background.mp4"; // section background video

export default function Testimonials() {
  const testimonials = [
    {
      name: "Vishnu P",
      role: "CEO",
      feedback:
        "This team is amazing! Their work exceeded our expectations and the app performance is outstanding.",
    },
    {
      name: "Thejus OM",
      role: "HR Manager",
      feedback:
        "Highly professional and delivered everything on time. The design and UX are phenomenal.",
    },
    {
      name: "Vyshak ",
      role: "Freelancer",
      feedback:
        "Great communication and very innovative solutions. I highly recommend working with them.",
    },
  ];

  return (
    <section className="testimonials-section"id="testimonials">
      {/* Background video */}
      <video className="testimonials-bg-video" src={bgVideo} autoPlay loop muted />

      <div className="testimonials-content">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-container">
          {testimonials.map((test, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-feedback">"{test.feedback}"</p>
              <h3 className="testimonial-name">{test.name}</h3>
              <p className="testimonial-role">{test.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
