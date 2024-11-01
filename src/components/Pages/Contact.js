import React from "react";
import "./contact.css"; // Import the CSS file

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Construct the mailto URL
    const mailtoUrl = `mailto:akankshashree51@gmail.com?subject=Contact Form Submission&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`;

    // Open the default email client
    window.location.href = mailtoUrl;
  };

  return (
    <div name="contact" className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-header">
          <p className="contact-title">Contact</p>
          <p className="contact-subtitle">Submit the form below to get in touch with me</p>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="contact-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="contact-input contact-input-email"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="contact-textarea"
              required
            ></textarea>

            <button type="submit" className="contact-button">Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
