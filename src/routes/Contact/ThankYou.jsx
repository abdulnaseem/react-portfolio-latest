import React from 'react';
import { Link } from 'react-router-dom';
import classes from './contact.module.css';
import { Checkmark } from 'react-checkmark'

const ThankYou = () => {
  return (
    <div className={classes.thankYouContainer}>
      <h1 className={`${classes.heading} text-3xl font-bold mt-10 mb-5 text-center`}>
        Thank you for reaching out!
      </h1>
      <Checkmark size="96px" />
      <div className="text-center mt-8">
        <Link to="/" className="text-blue-600 underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;