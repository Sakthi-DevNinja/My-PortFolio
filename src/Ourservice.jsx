import React from 'react';
import './styles/Service.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faExchangeAlt, faFileAlt, faCogs } from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';

const Ourservice = () => {
  return (
    <section id='ourservice'>
      <div className="sec-hdr-wrapper">
        <div className="sec-main-hdr">My Services</div>
        <div className="sec-sub-hdr">What i provide</div>
      </div>

      <div className="serv-content">
                <div className="card">
                    <div className="box">
                        <span className='serv-icon'><FontAwesomeIcon icon={faCode} /></span>
                        <div className="text">Web Development</div>
                        <p>I specialize in creating and deploying dynamic web applications. From front-end to back-end development, I ensure that your website is responsive, user-friendly, and functional. My expertise includes HTML5, CSS3, JavaScript, jQuery,React, PHP, MySQL, and more.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <span className='serv-icon'><FontAwesomeIcon icon={faPaintBrush} /></span>
                        <div className="text">UI/UX Design</div>
                        <p>I offer comprehensive UI/UX design services using tools like Figma and Adobe. I focus on creating intuitive and engaging user interfaces that enhance user experience and accessibility.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <span className='serv-icon'><FontAwesomeIcon icon={faWordpress} /></span>
                        <div className="text">WordPress Development</div>
                        <p>I create and maintain websites using WordPress, customizing themes and plugins to meet your specific needs. My services include responsive design implementation, SEO best practices, and ongoing maintenance and updates.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <span className='serv-icon'><FontAwesomeIcon icon={faExchangeAlt} /></span>
                        <div className="text">API Integration</div>
                        <p>I provide seamless integration of third-party APIs to enhance the functionality of your web applications. My experience includes implementing RESTful APIs, handling secure data transmission, and ensuring error-free performance.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <span className='serv-icon'><FontAwesomeIcon icon={faFileAlt} /></span>
                        <div className="text">Report Generation</div>
                        <p>I develop comprehensive reporting modules for generating various reports within web applications. This includes designing report templates, automating report generation and distribution, and creating interactive charts and graphs.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <span className='serv-icon'><FontAwesomeIcon icon={faCogs} /></span>
                        <div className="text">Custom Web Solutions</div>
                        <p>I offer tailored web solutions to meet unique business requirements. Whether you need a custom CMS, e-commerce functionality, or specialized web applications, I have the skills to deliver high-quality, scalable solutions.</p>
                    </div>
                </div>

               </div>

    
    </section>
  )
}

export default Ourservice
