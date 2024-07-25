// src/components/ScrollUpButton.jsx
import React, { useEffect, useState } from 'react';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-up-btn ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default ScrollUpButton;
