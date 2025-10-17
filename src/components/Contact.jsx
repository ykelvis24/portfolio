import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_63mcxg8',
      'template_4zo9pg6', 
      form.current,
      'uU4fMFcRVmy5KqYzx' 
    )
      .then(() => {
        setStatus('Message sent successfully');
        e.target.reset();
      })
      .catch((error) => {
        setStatus('Failed to send message');
        console.error(error);
      });
  };

  return (
    <section className="contact-section">
      <h2>Get In Touch</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />

        <button type="submit" className="my-btn">Send</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  );
}

export default Contact;
