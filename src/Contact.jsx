import React from "react";

// import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faMapMarkerAlt,faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import "./styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="sec-hdr-wrapper">
        <div className="sec-main-hdr">Contact me</div>
        <div className="sec-sub-hdr">Get in touch</div>
      </div>

      <div className="contact-content">
        <div className="column left">
          <div className="text">Get in Touch</div>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. You can reach me through the following contact details</p>
          <div className="icons">
            <div className="row">
              <FontAwesomeIcon icon={faUser} />
              <div className="info">
                <div className="head">Name</div>
                <div className="sub-title">Sakthivel S</div>
              </div>
            </div>
            <div className="row">
              <FontAwesomeIcon icon={faPhone} />
              <div className="info">
                <div className="head">Phone</div>
                <div className="sub-title">+91 9585909130</div>
              </div>
            </div>
            <div className="row">
              <FontAwesomeIcon icon={faEnvelope} />
              <div className="info">
                <div className="head">Email</div>
                <div className="sub-title">vel8679@gmail.com</div>
              </div>
            </div>
            <div className="row">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <div className="info">
                <div className="head">Address</div>
                <div className="sub-title">Kaveripattinam, Krishnagiri</div>
              </div>
            </div>
          </div>

          <div className='contact-list'>
              <a href='https://wa.me/9585909130?text=Welcome!' target='_blank' rel="noreferrer" className="social-links whatsapp"><FontAwesomeIcon icon={faWhatsapp} /></a>
              
              <a href='https://www.instagram.com/sakthivel14325?igsh=b2JrcWtsZHc3ZnUw' target='_blank' rel="noreferrer" className="social-links instagram"><FontAwesomeIcon icon={faInstagram} /></a>

              <a href='https://www.linkedin.com/in/sakthivel-dev' target='_blank' rel="noreferrer" className="social-links linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a>

              <a href='https://github.com/Sakthi-DevNinja' target='_blank' rel="noreferrer" className="social-links github"><FontAwesomeIcon icon={faGithub} /></a>  

              <a href='https://www.facebook.com/profile.php?id=100011062291623&mibextid=ZbWKwL' target='_blank' rel="noreferrer" className="social-links facebook"><FontAwesomeIcon icon={faFacebookF} /></a>

              <a href='#ṭwitter' target='_blank' rel="noreferrer" className="social-links twitterx"><FontAwesomeIcon icon={faXTwitter} /></a>
          </div>

        </div>

        <div className="column right">
          <div class="text">Message me</div>
          <form action=".">
            <div className="input-fields">

              <div className="input-flex">
                <div className="input-fld username">
                  <input type="text" className="" id="" value="" placeholder="Name"  />
                </div>
                <div className="input-fld email">
                  <input type="email" className="" id="" value="" placeholder="Email" />
                </div>
              </div>
              
              <div className="input-fld subject">
                  <input type="text" className="" id="" value="" placeholder="Subject" />
              </div>
              <div className="input-fld message">
                  <textarea name="message" id="email-msg" className="" cols="30" rows="10" placeholder="Message.."></textarea>
              </div>
              
              <div className="sub-btn-wrapper">
                <button type="submit">Send message</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
