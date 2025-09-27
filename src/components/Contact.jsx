import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // go back to home
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.from_name.value;
    const email = e.target.from_email.value;
    const message = e.target.message.value;

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    // Open Gmail or default email client
    window.location.href = `mailto:judinkg2003@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section">
      <div className="contact-form">
        <button className="close-btn" onClick={handleClose}>×</button>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
