import React from "react";
import classes from "./footer.module.css";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.wrapper}>

        <div className={classes.col}>
          <h2 className={classes.title}>Quick Links</h2>
          <ul className={classes.linkList}>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/suggested">Suggested</a></li>
          </ul>
        </div>

        <div className={classes.col}>
          <h2 className={classes.title}>Contacts</h2>
          <span className={classes.contact}><FaFacebookSquare /> FaceBook: Dream Travel</span>
          <span className={classes.contact}><FaInstagram /> Instagram: Dream Travel</span>
          <span className={classes.contact}><FaYoutube /> Youtube: Dream Travel</span>
          <span className={classes.contact}><FaLinkedin /> LinKedin: Dream Travel</span>
        </div>

        <div className={classes.col}>
          <h2 className={classes.title}>Privacy Policy</h2>
          <p>
            At Dream Travel, we prioritize your privacy and security. Our privacy policy outlines how we handle your personal information. We collect only what's necessary to provide our services, like your name and contact details. Rest assured, we never sell or share your data without your consent. We adhere to strict privacy practices and comply with laws to ensure the confidentiality of your information. Your trust is essential to us, and we're here to address any questions or concerns you may have.
          </p>
        </div>

       
      </div>
      <div className={classes.created}>
          Created By<span className={classes.names}> Omaima && Hajer </span>|| All Right Reserved!
        </div>
    
      
    </footer>
  );
};

export default Footer;
