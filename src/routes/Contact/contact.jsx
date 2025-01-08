import React, { useState } from 'react';
import styles from './contact.module.css'; 
import Footer from '../../components/Footer/footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Dynamically set the `_next` field to use the current domain
    const nextUrlInput = document.createElement('input');
    nextUrlInput.type = 'hidden';
    nextUrlInput.name = '_next';
    nextUrlInput.value = `${window.location.origin}/thank-you`; // Base URL + /thank-you
    form.appendChild(nextUrlInput);

    form.action = "https://formsubmit.co/3c62f87ba55dcc02de3208b84fb356e0";
    form.method = "POST";
    form.submit();
  };

  const isFormValid = () => {
    return Object.values(formData).some((value) => value.trim() !== '');
  }

  return (
    <>
      <div className="mt-8">
        <h2 className='text-2xl font-bold'>Contact</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            {/* Name Input */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="http://localhost:5173/thank-you" />

            <div className={styles.formGroup}>
            <label htmlFor="name">Name <span className="text-red-600 font-bold">*</span></label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
            />
            </div>

            {/* Email Input */}
            <div className={styles.formGroup}>
            <label htmlFor="email">Email <span className="text-red-600 font-bold">*</span></label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
            />
            </div>

            {/* Message Input */}
            <div className={styles.formGroup}>
            <label htmlFor="message">Message <span className="text-red-600 font-bold">*</span></label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                required
            />
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitButton} disabled={!isFormValid()}>
              Send Message
            </button>
        </form>      
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;