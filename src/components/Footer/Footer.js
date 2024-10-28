import React from "react";
import "./footer.css";
import {
  UilInstagramAlt,
  UilYoutube,
  UilLinkedin,
  UilGithub,
} from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";
import { animateScroll } from "react-scroll";
import logo from "../../common/images/LOGO FINAL white png.png";

const Footer = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div className="footer-container">
      <div className="footer-desc">
        <NavLink to="/" onClick={scrollToTop}>
          <img src={logo} alt="r21-Logo" />
        </NavLink>
      </div>
      <div className="footer-r">
      <p className="footer-userdesc">
        Crafting <span>innovative solutions</span> <br></br> one{" "}
        <span>line of code</span> at a time.
      </p>
        {/* <div className="icons">
          <a href="">
            <UilInstagramAlt size="30" color="#d5ff3f" />
          </a>

          <a href="">
            <UilLinkedin size="30" color="#d5ff3f" />
          </a>
          <a href="">
            <UilGithub size="30" color="#d5ff3f" />
          </a>
          <a href="">
            <UilYoutube size="30" color="#d5ff3f" />
          </a>
        </div> */}
        <div className="footer-text">
          <p>Portfolio</p>
          <p>© 2024 Sushant</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
