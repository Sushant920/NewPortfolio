import React from "react";
import "./about.css";
import { NavLink } from "react-router-dom";
import { animateScroll } from "react-scroll";
const About = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div className="about_Container">
      <h2 className="about-Heading">About</h2>
      <p className="about_Desc">
        Hi there! I'm Sushant, a dedicated Computer Science student at SRM Institute of Science and Technology with a passion for developing innovative software solutions. My expertise spans front-end development, data science, and leadership in technical communities, with hands-on experience in technologies like React.js, Flutter, Python, and machine learning. I thrive in collaborative environments, love mentoring teams, managing projects, and driving data-driven solutions. Beyond coding, I’m passionate about exploring emerging technologies and pushing the boundaries of what's possible in the digital world. Let’s connect and bring cutting-edge ideas to life!
      </p>
      <div className="more_About">
        <NavLink to="/about" className="more_About" onClick={scrollToTop}>
          More..
        </NavLink>
      </div>
    </div>
  );
};

export default About;
