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
    <main id='home'>
        
        <div className='main-container'>
            <div className='rt-blk'>
                <div className='img-sec'>
                    <img 
                        className='sakthi'
                        src={Image} 
                        alt="Sakthivel S" 
                        />
                </div>
            </div>

            <div className='lt-blk'>
                <div className='personal-dtls'>
                    <div className='welcome-intro md-hide'>Hello, It's Me</div>
                    <div className="name">Sakthivel</div>
                    
                    {/*<svg viewBox="0 0 1320 300">
                        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                        Sakthivel S
                        </text>
                        </svg> */}

                    <div className="role"><span className='md-hide'>And i'm a</span> <span className='dynamic-role typing'>Full Stack Developer</span></div>
                </div>
                <div className='about-me'>Enthusiastic about crafting web solutions <br /> HTML, CSS, JavaScript, PHP, MySQL</div>

                <div className='contact-list'>
                    <a href='https://wa.me/9585909130?text=Welcome!' target='_blank' rel="noreferrer" className="social-links whatsapp"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    
                    <a href='https://www.instagram.com/sakthivel14325?igsh=b2JrcWtsZHc3ZnUw' target='_blank' rel="noreferrer" className="social-links instagram"><FontAwesomeIcon icon={faInstagram} /></a>

                    <a href='https://www.linkedin.com/in/sakthivel-dev' target='_blank' rel="noreferrer" className="social-links linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a>

                    <a href='https://github.com/Sakthi-DevNinja' target='_blank' rel="noreferrer" className="social-links github"><FontAwesomeIcon icon={faGithub} /></a>  

                    <a href='https://www.facebook.com/profile.php?id=100011062291623&mibextid=ZbWKwL' target='_blank' rel="noreferrer" className="social-links facebook"><FontAwesomeIcon icon={faFacebookF} /></a>

                    <a href='#ṭwitter' target='_blank' rel="noreferrer" className="social-links twitterx"><FontAwesomeIcon icon={faXTwitter} /></a>
                </div>

    {/* 
                <div className='contact-list'>
                <a href='#whatsapp' target='_BLANK' className="social-links whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                
                <a href='#facebook' target='_BLANK' className="social-links facebook">
                <FontAwesomeIcon icon={faFacebookF} />
                </a>
                
                <a href='#instagram' target='_BLANK' className="social-links instagram">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                
                <a href='#linkedin' target='_BLANK' className="social-links linkedin">
                <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    
                    <a href='#twitterx' target='_BLANK' className="social-links twitterx">
                    <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    
                    <a href='#github' target='_BLANK' className="social-links github">
                    <FontAwesomeIcon icon={faGithub} />
                    </a>  
                    </div> */}

            </div>
        </div>
    </main>
  )
}

export default Landing