import React from "react";
import "./footer.css";
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
        Code that <span>empowers,</span> <br></br> 
        ideas that <span>inspire,</span> <br></br> 
        projects that <span>transform.</span>
      </p>
        <div className="footer-text">
          <p>Portfolio</p>
          <p>© 2024 Sushant</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
