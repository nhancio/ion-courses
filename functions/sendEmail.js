import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload

    emailjs.sendForm(
      'service_k7o7hfo',   // Replace with actual Service ID
      'template_18emrtv',  // Replace with actual Template ID
      form.current, 
      'oOpZk3sV84hCJlK_l'    // Replace with actual Public Key
    ).then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.error('Email sending failed:', error.text);
        alert('Failed to send message.');
      }
    );

    e.target.reset(); // Reset form after submission
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
