import React from 'react';
import './styles/Skills.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';



// Images
import html from './images/logo/html.png';
import css from './images/logo/css.png';
import js from './images/logo/js.png';
import rjs from './images/logo/rjs.png';
import php from './images/logo/php.png';
import mysql from './images/logo/mysql.png';
import wordpress from './images/logo/wp.png';
import figma from './images/logo/figma.png';
import photoshop from './images/logo/ps.png';
import xd from './images/logo/xd.png';
import bootstrap from './images/logo/bootstrap.png';
import tailwind from './images/logo/tailwind.png';
import jquery from './images/logo/jquery.png';
import api from './images/logo/api.png';
import git from './images/logo/git.png';
import github from './images/logo/github.png';
 

// const logos = [html, css, js, rjs, php, mysql, wordpress, figma, photoshop];

// const uiux = ['figma', 'Adobe Photoshop', 'Adobe XD'];
// const frontEnd = ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Javascript', 'jQuery', 'React', 'Wordpress' ];
// const backEnd = ['PHP', 'My SQL', 'RESTful API', 'CURL'];
// const versionControl = ['Git', 'GitHub'];


// altered array

const uiux = [
  {
    name: 'Figma',
    logo: figma,
    desc: 'Proficient in creating interactive designs and prototypes using Figma, with the ability to collaborate effectively on design projects.'
  },
  {
    name: 'Adobe Photoshop',
    logo: photoshop,
    desc: 'Experienced in photo editing and graphic design, utilizing advanced features to create high-quality visuals for web and print media.'
  },
  {
    name: 'Adobe XD',
    logo: xd,
    desc: 'Skilled in designing user interfaces and user experiences with Adobe XD, including wireframing, prototyping, and creating interactive design elements.'
  }
];

const frontEnd = [
  {
    name: 'HTML5',
    logo: html,
    desc: 'Intermediate knowledge of HTML5 for building structured and semantic web pages, with an understanding of the latest standards and best practices.'
  },
  {
    name: 'CSS3',
    logo: css,
    desc: 'Competent in using CSS3 to style and layout web pages, including responsive design techniques and modern layout methods like Flexbox and Grid.'
  },
  {
    name: 'Bootstrap',
    logo: bootstrap,
    desc: 'Experienced in using Bootstrap to rapidly develop responsive, mobile-first web pages with pre-designed components and utilities.'
  },
  {
    name: 'Tailwind CSS',
    logo: tailwind,
    desc: 'Proficient in utilizing Tailwind CSS for creating custom, utility-first designs with a focus on modular and maintainable styling.'
  },
  {
    name: 'JavaScript',
    logo: js,
    desc: 'Intermediate skills in JavaScript for dynamic web functionality, including manipulating the DOM and working with asynchronous operations.'
  },
  {
    name: 'jQuery',
    logo: jquery,
    desc: 'Familiar with jQuery for simplifying JavaScript operations and enhancing user interactions with efficient DOM manipulation and event handling.'
  },
  {
    name: 'React',
    logo: rjs,
    desc: 'Knowledgeable in building dynamic and responsive web applications using React, including managing state and handling component lifecycle events.'
  },
  {
    name: 'WordPress',
    logo: wordpress,
    desc: 'Experienced in customizing and developing WordPress themes and plugins, with a solid understanding of PHP and the WordPress ecosystem.'
  }
];

const backEnd = [
  {
    name: 'PHP',
    logo: php,
    desc: 'Intermediate skills in PHP for server-side scripting and web application development, including handling form submissions and interacting with databases.'
  },
  {
    name: 'MySQL',
    logo: mysql,
    desc: 'Proficient in using MySQL for managing and querying relational databases, with experience in designing schema and optimizing performance.'
  },
  {
    name: 'RESTful API',
    logo: api,
    desc: 'Skilled in integrating and working with RESTful APIs to enable communication between web applications and external services.'
  }
  // ,
  // {
  //   name: 'cURL',
  //   logo: mysql,
  //   desc: 'Experienced in using cURL for making HTTP requests to interact with web services and retrieve or send data from/to APIs.'
  // }
];

const versionControl = [
  {
    name: 'Git',
    logo: git,
    desc: 'Intermediate knowledge of Git for version control, including branching, merging, and resolving conflicts to manage code effectively.'
  },
  {
    name: 'GitHub',
    logo: github,
    desc: 'Proficient in using GitHub for collaborative development, including managing repositories, pull requests, and contributing to open-source projects.'
  }
];

// const skills = {
//   uiux,
//   frontEnd,
//   backEnd,
//   versionControl
// };



const Skills = () => {
  return (
    <section id='skills'>
      <div className="sec-hdr-wrapper">
        <div className="sec-main-hdr">Skills</div>
        <div className="sec-sub-hdr">What I Know</div>
      </div>

      <div className="skills-content">
        <div className="uiux-container">
          <div className="skills-top-hdr">
            <div className='skill-cat'>Design</div>
            <div className='expand-icon'><FontAwesomeIcon icon={faAngleDown} /></div>
          </div>
          <div className="skills-wrapper">
          {uiux.map((skill, i) => (
            <div className="skills-card">
                <div className="skill-logo">
                  <img src={skill.logo} alt={skill.name} />
                </div>
                <div className="skill-hdr">{skill.name}</div>
                <div className="skill-desc">{skill.desc}</div>
            </div>
            ))}
          </div>
        </div>
        <div className="frontend-container">
          <div className="skills-top-hdr">
            <div className='skill-cat'>Front-End Development</div>
            <div className='expand-icon'><FontAwesomeIcon icon={faAngleDown} /></div>
          </div>
          <div className="skills-wrapper">
          {frontEnd.map((skill, i) => (
            <div className="skills-card">
                <div className="skill-logo">
                  <img src={skill.logo} alt={skill.name} />
                </div>
                <div className="skill-hdr">{skill.name}</div>
                <div className="skill-desc">{skill.desc}</div>
            </div>
            ))}
          </div>
        </div>
        <div className="backend-container">
          <div className="skills-top-hdr">
            <div className='skill-cat'>Back-End Development</div>
            <div className='expand-icon'><FontAwesomeIcon icon={faAngleDown} /></div>
          </div>
          <div className="skills-wrapper">
          {backEnd.map((skill, i) => (
            <div className="skills-card">
                <div className="skill-logo">
                  <img src={skill.logo} alt={skill.name} />
                </div>
                <div className="skill-hdr">{skill.name}</div>
                <div className="skill-desc">{skill.desc}</div>
            </div>
            ))}
          </div>
        </div>
        <div className="version-cont-container">
          <div className="skills-top-hdr">
            <div className='skill-cat'>Version Control</div>
            <div className='expand-icon'><FontAwesomeIcon icon={faAngleDown} /></div>
          </div>
          <div className="skills-wrapper">
          {versionControl.map((skill, i) => (
            <div className="skills-card">
                <div className="skill-logo">
                  <img src={skill.logo} alt={skill.name} />
                </div>
                <div className="skill-hdr">{skill.name}</div>
                <div className="skill-desc">{skill.desc}</div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
