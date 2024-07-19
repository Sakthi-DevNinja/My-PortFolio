// src/context/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('blue');

  useEffect(() => {
    const root = document.documentElement;

    switch (theme) {
      case 'dark':
        root.setAttribute('data-theme', 'dark');
        break;
        case 'light':
            root.setAttribute('data-theme', 'light');
            break;
        case 'blue':
        default:
        root.setAttribute('data-theme', 'blue');
        break;
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'light') return 'dark';
      if (prevTheme === 'dark') return 'blue';
      return 'light';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
