import React, { useState } from 'react';
import styles from './contact.module.css'; 
import Footer from '../../components/Footer/footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const nextUrlInput = document.createElement('input');
    nextUrlInput.type = 'hidden';
    nextUrlInput.name = '_next';
    nextUrlInput.value = `${window.location.origin}/thank-you`;
    form.appendChild(nextUrlInput);

    form.action = "https://formsubmit.co/3c62f87ba55dcc02de3208b84fb356e0";
    form.method = "POST";
    form.submit();
  };

  const isFormValid = () =>
    Object.values(formData).some((value) => value.trim() !== '');

  return (
    <>
      <div className={styles.contactWrapper}>
        <h2 className={styles.heading}>✨ Let's Build Something Amazing</h2>

        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          {/* Name */}
          <div className={styles.formGroup}>
            <label htmlFor="name">Name <span>*</span></label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email <span>*</span></label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div className={styles.formGroup}>
            <label htmlFor="message">Message <span>*</span></label>
            <textarea
              id="message"
              name="message"
              placeholder="What can I help you with?"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={styles.submitButton}
            disabled={!isFormValid()}
          >
            🚀 Send Message
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ContactForm;
