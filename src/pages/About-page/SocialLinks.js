import React from "react";
import "./aboutpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const SocialLinks = () => {
  return (
    <div className="SocialLinks_Container">
      <div className="Socials">
        <a
          href="https://www.instagram.com/sushant.sopan.chavan"
          target={"_blank"}
          rel="noopener noreferrer"
          aria-label="Instagram | sushant.sopan.chavan"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.youtube.com/@sushantchavan3473"
          target={"_blank"}
          rel="noopener noreferrer"
          aria-label="Youtube | sushantchavan3473"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href="https://www.linkedin.com/in/chavansushant/"
          target={"_blank"}
          rel="noopener noreferrer"
          aria-label="LinkedIn | chavansushant"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://github.com/Sushant920"
          target={"_blank"}
          rel="noopener noreferrer"
          aria-label="gitHub | Sushant920"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
