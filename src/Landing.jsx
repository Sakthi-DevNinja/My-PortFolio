import React from 'react';
import Image from './images/sv.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons';


 
const Landing = () => {
  return (
    <main>
        
        <div className='main-container'>
            <div className='img-sec'>
                <img 
                    className='sakthi'
                    src={Image} 
                    alt="Sakthivel S" 
                />
            </div>
            <div className='personal-dtls'>
                <div className="name">SAKTHIVEL S</div>
                <div className="role">FULL STACK DEVELOPER</div>
            </div>
            <div className='about-me'>Enthusiastic about crafting web solutions <br /> HTML, CSS, JavaScript, PHP, MySQL</div>

            <div className='contact-list'>
                <div className="social-links whatsapp">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                
                <div className="social-links facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                </div>

                <div className="social-links instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </div>

                <div className="social-links linkedin">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </div>

                <div className="social-links twitterx">
                    <FontAwesomeIcon icon={faTwitter} />
                </div>

                <div className="social-links github">
                    <FontAwesomeIcon icon={faGithub} />
                </div>  
            </div>

        </div>
    </main>
  )
}

export default Landing