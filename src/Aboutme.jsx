import React from 'react';
import './styles/Aboutme.css';
import Image from './images/sak.jpeg';
import Resume from './pdf/Sakthi.pdf';

import TypingAnimation from './components/TypingAnimation';

const Aboutme = () => {
  return (
    <section id='aboutme' >
      <div className="sec-hdr-wrapper">
        <div className="sec-main-hdr">About me</div>
        <div className="sec-sub-hdr">Who i am</div>
      </div>

      <div className="about-content ">
        <div className="column left">
        <img 
          className='aboutme-img  '
          src={Image} 
          alt="Sakthivel S" 
          />
        </div>
          <div className="column right">
              <div className="text">I'm Sakthivel<br /> I'm a <span className='dynamic-role typing-2'><TypingAnimation /></span></div>
              
              <p>I am Sakthivel S, a dedicated Full Stack Web Developer with a strong passion for technology and innovation. My journey in the tech industry has equipped me with a robust skill set in both front-end and back-end development. I thrive on the challenge of creating seamless, efficient, and visually appealing web applications that enhance user experience and drive business success. My expertise spans various technologies including HTML5, CSS3, JavaScript, PHP, MySQL, and more, enabling me to develop and integrate complex functionalities effectively.</p>
              
              <p>Beyond my technical skills, I am a collaborative team player who values clear communication and teamwork. I have experience working in dynamic environments, where I have successfully contributed to the development of innovative projects and solutions. My goal is to leverage my technical knowledge and collaborative spirit to contribute to cutting-edge projects that make a meaningful impact. I am continuously learning and staying updated with the latest industry trends, ensuring that I can provide fresh ideas and the best solutions for any project I undertake.</p>
              
              <a href={Resume} download="Sakthi.pdf">Download CV</a>
          </div>
      </div>
      
    </section>
    
  )
}

export default Aboutme
