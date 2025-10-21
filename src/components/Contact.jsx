import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setMessageStatus(null);

    emailjs
      .sendForm("service_e3o04ha", "template_7ompd3k", form.current, {
        publicKey: "rESGs7QO7iU2hjH_s",
      })
      .then(
        () => {
          setSending(false);
          setMessageStatus('success');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setSending(false);
          setMessageStatus('error');
        },
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
         <button type="submit" disabled={sending}>
          {sending ? (
            <div className="spinner"></div>
          ) : (
            'Send Message'
          )}
        </button>

        {messageStatus === 'success' && (
          <p className="success-message">✅ Message sent successfully!</p>
        )}
        {messageStatus === 'error' && (
          <p className="error-message">❌ Failed to send. Please try again.</p>
        )}
      </form>

      <div className="social-icons">
        <a href="https://github.com/ykelvis24" target="_blank" rel="noreferrer" className="icon github">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="icon linkedin">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/yk_elvis" target="_blank" rel="noreferrer" className="icon twitter">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/_ykelvis" target="_blank" rel="noreferrer" className="icon instagram">
          <FaInstagram />
        </a>
        <a href="https://wa.me/2348136030685" target="_blank" rel="noreferrer" className="icon whatsapp">
          <FaWhatsapp />
        </a>
        <a href="tel:+2348136030685" className="icon phone">
          <FaPhoneAlt />
        </a>
      </div>
    </div>
  );
};

export default Contact;
