// src/Header.jsx
import React from 'react';
import { useTheme } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
