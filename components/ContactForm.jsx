'use client';

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';

const ContactForm = ({
  title,
  backgroundColor = '#fff',
  buttonColor = '#222',
  buttonHoverColor = '#000',
  labels = { name: 'Name', email: 'Email', message: 'Message' },
  buttonText = 'Send',
  description,
}) => {
  const formRef = useRef();
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

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
        () => {
          alert('Message sent!');
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert('Error while sending, please try again.');
        }
      );
  };

  const inputClass = (field) =>
    `w-full px-3 py-2 mb-5 rounded border text-base box-border transition-colors duration-300 outline-none
     ${focusedInput === field ? 'border-gray-700' : 'border-gray-300'}`;

  return (
    <div className="w-full px-0 py-0">

      {/* Titre */}
      {title && (
        <h2 className="text-center text-xl md:text-2xl font-bold mb-6 text-[#222]">
          {title}
        </h2>
      )}

      {/* Formulaire */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        style={{ backgroundColor }}
        className="w-full rounded-none md:rounded-lg p-6 shadow-none md:shadow-md 
             box-border mx-auto max-w-full md:max-w-sm lg:max-w-md"
      >
        {/* Nom */}
        <label className="block font-semibold mb-2 text-sm" htmlFor="name">
          {labels.name}
        </label>
        <input
          className={inputClass('name')}
          type="text"
          id="name"
          name="name"
          required
          onFocus={() => setFocusedInput('name')}
          onBlur={() => setFocusedInput(null)}
        />

        {/* Email */}
        <label className="block font-semibold mb-2 text-sm" htmlFor="email">
          {labels.email}
        </label>
        <input
          className={inputClass('email')}
          type="email"
          id="email"
          name="email"
          required
          onFocus={() => setFocusedInput('email')}
          onBlur={() => setFocusedInput(null)}
        />

        {/* Message */}
        <label className="block font-semibold mb-2 text-sm" htmlFor="message">
          {labels.message}
        </label>
        <textarea
          className={`${inputClass('message')} min-h-[80px] resize-y`}
          id="message"
          name="message"
          required
          onFocus={() => setFocusedInput('message')}
          onBlur={() => setFocusedInput(null)}
        />

        {/* Bouton */}
        <button
          type="submit"
          style={{
            backgroundColor: isButtonHovered ? buttonHoverColor : buttonColor,
          }}
          className="w-full py-3 px-6 rounded font-semibold text-base text-white
                     border-none cursor-pointer transition-colors duration-300"
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          {buttonText}
        </button>

        {/* Description */}
        {description && (
          <div className="mt-6 pt-4 border-t border-gray-300 text-sm text-gray-500 whitespace-pre-wrap">
            {description}
          </div>
        )}
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