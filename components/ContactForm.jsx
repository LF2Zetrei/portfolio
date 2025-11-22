'use client';

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';

const ContactForm = ({
  title,
  backgroundColor = '#fff',
  buttonColor = '#222',
  buttonHoverColor = '#000',
  labels = { name: 'Nom', email: 'Email', message: 'Message / Demande' },
  buttonText = 'Envoyer',
  description, // New prop for description section
}) => {
  const formRef = useRef();

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const formStyle = {
    backgroundColor,
    borderRadius: '8px',
    padding: '24px',
    maxWidth: '400px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    color: '#222',
    margin: '0 auto',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: '600',
    marginBottom: '8px',
    fontSize: '0.9rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s',
  };

  const textareaStyle = { ...inputStyle, minHeight: '80px', resize: 'vertical' };

  const inputFocusStyle = {
    borderColor: '#333',
    outline: 'none',
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    width: '100%',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: buttonHoverColor,
  };

  const descriptionStyle = {
    marginTop: '24px',
    paddingTop: '16px',
    borderTop: '1px solid #ccc',
    fontSize: '0.9rem',
    color: '#555',
    fontFamily: 'Arial, sans-serif',
    whiteSpace: 'pre-wrap',
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
    <div style={{ padding: '24px' }}>
      {title && (
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '24px',
            fontFamily: 'Arial, sans-serif',
            color: '#222',
            fontWeight: '700',
          }}
        >
          {title}
        </h2>
      )}
      <form ref={formRef} style={formStyle} onSubmit={handleSubmit} noValidate>
        <label style={labelStyle} htmlFor="name">
          {labels.name}
        </label>
        <input
          style={{
            ...inputStyle,
            ...(focusedInput === 'name' ? inputFocusStyle : {}),
          }}
          type="text"
          id="name"
          name="name"
          required
          onFocus={() => setFocusedInput('name')}
          onBlur={() => setFocusedInput(null)}
        />

        <label style={labelStyle} htmlFor="email">
          {labels.email}
        </label>
        <input
          style={{
            ...inputStyle,
            ...(focusedInput === 'email' ? inputFocusStyle : {}),
          }}
          type="email"
          id="email"
          name="email"
          required
          onFocus={() => setFocusedInput('email')}
          onBlur={() => setFocusedInput(null)}
        />

        <label style={labelStyle} htmlFor="message">
          {labels.message}
        </label>
        <textarea
          style={{
            ...textareaStyle,
            ...(focusedInput === 'message' ? inputFocusStyle : {}),
          }}
          id="message"
          name="message"
          required
          onFocus={() => setFocusedInput('message')}
          onBlur={() => setFocusedInput(null)}
        />

        <button
          type="submit"
          style={isButtonHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          {buttonText}
        </button>
        {description && <div style={descriptionStyle}>{description}</div>}
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonHoverColor: PropTypes.string,
  labels: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
  }),
  buttonText: PropTypes.string,
  description: PropTypes.string,
};

export default ContactForm;