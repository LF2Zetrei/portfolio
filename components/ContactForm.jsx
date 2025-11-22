import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = ({
  gradientBackground = 'linear-gradient(135deg, #6b73ff 0%, #000dff 100%)',
  borderThickness = '2px',
  borderColor = '#000dff',
  borderRadius = '12px',
}) => {
  const formRef = useRef();

  const formStyle = {
    height: '100%',
    background: gradientBackground,
    border: `${borderThickness} solid ${borderColor}`,
    borderRadius,
    padding: '24px',
    maxWidth: '400px',
    color: '#fff',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    marginBottom: '16px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '1rem',
    boxSizing: 'border-box',
  };

  const textareaStyle = { ...inputStyle, minHeight: '80px', resize: 'vertical' };
  const labelStyle = { marginBottom: '6px', display: 'block', fontWeight: '600' };
  const buttonStyle = {
    backgroundColor: '#000dff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('Message envoyé !');
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert('Erreur lors de l’envoi, réessaie.');
        }
      );
  };

  return (
    <form ref={formRef} style={formStyle} onSubmit={handleSubmit}>
      <label style={labelStyle} htmlFor="name">Name</label>
      <input style={inputStyle} type="text" id="name" name="name" required />

      <label style={labelStyle} htmlFor="email">Email</label>
      <input style={inputStyle} type="email" id="email" name="email" required />

      <label style={labelStyle} htmlFor="message">Message/Request</label>
      <textarea style={textareaStyle} id="message" name="message" required />

      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
};

export default ContactForm;
