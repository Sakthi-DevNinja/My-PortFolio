import React from 'react';
import Image from './images/sv.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
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


        </div>
    </main>
  )
}

export default Landing