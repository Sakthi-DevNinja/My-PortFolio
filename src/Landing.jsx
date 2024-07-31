import React from 'react';

import Image from './images/sv.jpeg';
import TypingAnimation from './components/TypingAnimation';
import SocialMedia from './components/SocialMedia';




 
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

                    <div className="role"><span className='welcome-intro'>And i'm a</span> <span className='dynamic-role'><TypingAnimation /></span></div>
                </div>
                <div className='about-me'>Enthusiastic about crafting web solutions</div>
                <SocialMedia />
                
            </div>
        </div>
    </main>
  )
}

export default Landing