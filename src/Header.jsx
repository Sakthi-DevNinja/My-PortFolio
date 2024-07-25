// src/Header.jsx
import React, { useEffect, useState, useCallback } from 'react';
import { useTheme } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { theme } = useTheme();
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;
    const threshold = pageHeight * 0.12; 

    setIsSticky(currentScrollPos > 20);
    setVisible(currentScrollPos < threshold || prevScrollPos > currentScrollPos);

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`header ${theme} ${isSticky ? 'sticky' : ''}`}
      style={{ top: visible ? '0' : '-80px' }}
    >
      <div className="nav-wrapper flex">
        <a href="#home" rel="noreferrer" className="my-logo">
          MyLogo
        </a>
        <nav>
          <ul className="flex">
            <li className="nav-link"><a href="#home" rel="noreferrer">Home</a></li>
            <li className="nav-link"><a href="#aboutme" rel="noreferrer">About</a></li>
            <li className="nav-link"><a href="#skills" rel="noreferrer">Skills</a></li>
            <li className="nav-link"><a href="#experience" rel="noreferrer">Experience</a></li>
            <li className="nav-link"><a href="#education" rel="noreferrer">Education</a></li>
            <li className="nav-link"><a href="#projects" rel="noreferrer">Projects</a></li>
            <li className="nav-link"><a href="#contact" rel="noreferrer">Contact</a></li>
          </ul>
        </nav>
        <div className="nav-rt flex">
          <ThemeSwitcher />
          <div className="side-bar-icons flex">
            <div className="side-bar-open">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="side-bar-close">
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
