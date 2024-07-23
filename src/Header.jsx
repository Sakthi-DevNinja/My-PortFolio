// src/Header.jsx
import React from "react";
import { useTheme } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <div className="nav-wrapper flex">
        <a href="#home" rel="noreferrer" className="my-logo">
          MyLogo
        </a>
        <nav>
          <ul className="flex">
            <li className="nav-link">
              <a href="#Home" rel="noreferrer">Home</a>
            </li>
            <li className="nav-link">
              <a href="#About" rel="noreferrer">About
              </a>
            </li>
            <li className="nav-link">
              <a href="#Projects" rel="noreferrer">Projects</a>
            </li>
            <li className="nav-link">
              <a href="#Skill" rel="noreferrer">Skills</a>
            </li>
            <li className="nav-link">
              <a href="#Experience" rel="noreferrer">Experience</a>
            </li>
            <li className="nav-link">
              <a href="#Education" rel="noreferrer">Education</a>
            </li>
            <li className="nav-link">
              <a href="#Contact" rel="noreferrer">Contact</a>
            </li>
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
