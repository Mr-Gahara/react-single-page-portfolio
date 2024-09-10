import React, { useState, useEffect } from 'react';
import './Intro.css';

const Intro = ({ onAnimationEnd }) => {
  // Use state to trigger the end of the animation
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 3000); // Animation duration is 3 seconds

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="intro-container">
      <h1 className="intro-text">MOLTEN ZARAK</h1>
    </div>
  );
};

export default Intro;
