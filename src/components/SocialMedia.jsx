import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


const SocialMedia = () => {
  return (
    <div className='contact-list'>
        <a href='https://wa.me/9585909130?text=Welcome!' target='_blank' rel="noreferrer" className="social-links whatsapp"><FontAwesomeIcon icon={faWhatsapp} /></a>
        
        <a href='https://www.instagram.com/sakthivel14325?igsh=b2JrcWtsZHc3ZnUw' target='_blank' rel="noreferrer" className="social-links instagram"><FontAwesomeIcon icon={faInstagram} /></a>

        <a href='https://www.linkedin.com/in/sakthivel-dev' target='_blank' rel="noreferrer" className="social-links linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a>

        <a href='https://github.com/Sakthi-DevNinja' target='_blank' rel="noreferrer" className="social-links github"><FontAwesomeIcon icon={faGithub} /></a>  

        <a href='https://www.facebook.com/profile.php?id=100011062291623&mibextid=ZbWKwL' target='_blank' rel="noreferrer" className="social-links facebook"><FontAwesomeIcon icon={faFacebookF} /></a>

        <a href='#ṭwitter' target='_blank' rel="noreferrer" className="social-links twitterx"><FontAwesomeIcon icon={faXTwitter} /></a>
    </div>
  )
}

export default SocialMedia
