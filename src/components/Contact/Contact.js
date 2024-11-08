import React from "react";
import "./contact.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { animateScroll as scroll } from "react-scroll";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="home_contact-container">
      <div className="getintouch">
        <div className="contact-heading">
          <h1>Get in Touch</h1>
        </div>
        <div className="contact-desc">
          <p>
            If you are interested in my work or want to provide feedback about
            this website, I am open to exchanging ideas .
          </p>
        </div>
      </div>
      <div className="right_container">
        <div className="follow_me">
          <h3>Follow me on</h3>
          <div className="contact_socials">
            <a
              href="https://www.instagram.com/sushant.sopan.chavan"
              target={"_blank"}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com/@sushantchavan3473"
              target={"_blank"}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://www.linkedin.com/in/chavansushant"
              target={"_blank"}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/Sushant920" target={"_blank"} rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <NavLink to="/contact" className="contact-link" onClick={scrollToTop}>
          <h3>Contact Me</h3>
          <FontAwesomeIcon icon={faPaperPlane} />
        </NavLink>
      </div>
    </div>
  );
};

export default Contact;
