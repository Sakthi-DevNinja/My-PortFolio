import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faTint } from '@fortawesome/free-solid-svg-icons';
import '../styles/ThemeSwitcher.css'; // Ensure this path is correct

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme(); // Use setTheme to directly set the theme
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    // Set slider value based on current theme
    switch (theme) {
      case 'dark':
        setSliderValue(0);
        break;
      case 'blue':
        setSliderValue(1);
        break;
      case 'light':
        setSliderValue(2);
        break;
      default:
        setSliderValue(0); // Default to light theme
        break;
    }
  }, [theme]);

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSliderValue(value);

    // Update theme based on slider value
    switch (value) {
      case 0:
        setTheme('dark');
        break;
      case 1:
        setTheme('blue');
        break;
        case 2:
          setTheme('light');
          break;
      default:
            setTheme('dark');
        break;
    }
  };

  const handleIconClick = (newTheme) => {
    setTheme(newTheme);
    // Update slider value to reflect the current theme
    switch (newTheme) {
      case 'dark':
        setSliderValue(0);
        break;
      case 'blue':
        setSliderValue(1);
        break;
      case 'light':
        setSliderValue(2);
        break;
      default:
        setSliderValue(0);
        break;
    }
  };

  return (
    <div className="theme-switcher">
      <div className="theme-switcher-slider">
        <input
          type="range"
          min="0"
          max="2"
          step="1"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <div className="theme-switcher-icons">
          <span 
            className={`icon ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => handleIconClick('dark')}
          >
            <FontAwesomeIcon icon={faMoon} title="Dark Theme" />
          </span>
          <span 
            className={`icon ${theme === 'blue' ? 'active' : ''}`}
            onClick={() => handleIconClick('blue')}
          >
            <FontAwesomeIcon icon={faTint} title="Blue Theme" />
          </span>
          <span 
            className={`icon ${theme === 'light' ? 'active' : ''}`}
            onClick={() => handleIconClick('light')}
          >
            <FontAwesomeIcon icon={faSun} title="Light Theme" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
