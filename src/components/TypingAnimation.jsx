// src/components/TypingAnimation.jsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
      <span ref={el} className="typing"></span>
  );
};

export default TypingAnimation;
