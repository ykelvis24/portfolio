import React, { useRef } from "react";
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_e3o04ha", "template_7ompd3k", form.current, {
        publicKey: "rESGs7QO7iU2hjH_s",
      })
      .then(
        () => console.log("SUCCESS!"),
        (error) => console.log("FAILED...", error.text)
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
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
