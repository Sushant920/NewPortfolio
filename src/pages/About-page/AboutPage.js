import React from "react";
import "./aboutpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import profilepicture from "../../common/images/ProfilePicture.jpeg";
import AboutCarousel from "./AboutCarousel";
import SocialLinks from "./SocialLinks";
const AboutPage = () => {
  document.title = "Portfolio | About";
  return (
    <div className="aboutpage_Wrapper">
      <div className="about_Wrapper">
        <div className="about_Heading">ABOUT</div>
        <div className="about_container">
          <div className="about_L">
            <img src={profilepicture} alt="" className="about_Image" />
          </div>
          <div className="about_R">
            <p>
              I'm Sushant, a second-year Computer Science student at {" "}
              <span className="special">
                SRM Institute of Science and Technology
              </span>
              . My passion lies in developing innovative software solutions and exploring cutting-edge technologies. With hands-on experience in {" "}
              <span className="special">
                React.js, Flutter, Python, and machine learning
              </span>
              , I specialize in building high-performance applications that seamlessly blend functionality with innovation. From leading technical initiatives to managing projects, I thrive in collaborative environments and love mentoring teams to achieve impactful results. 
              My expertise isn’t just confined to coding. I bring a wealth of {" "}
              <span className="special">
                experience in project management, leadership, and data-driven problem-solving
              </span>
              , ensuring smooth execution of every task. Collaboration is central to my approach, as I believe the best outcomes are achieved through teamwork and open communication. 
              Beyond technology, I enjoy staying engaged with the latest advancements, organizing workshops, and exploring creative ideas in the digital space. So, whether you're {" "}
              <span className="special">
                seeking a skilled developer, a dedicated leader, or a collaborative team player
              </span>
              , I'm here to bring your digital visions to life. Let’s connect and embark on an exciting journey of innovation together!
            </p>
            <div className="about_Buttons">
              <a
                href="https://drive.google.com/uc?export=download&id=1nroIWzmAhsI8DBGohYiGuLd4lRoAW-NV"
                download="Sushant-Resume.pdf"
                aria-label="Download Resume"
              >
                <div className="resume_Download">
                  <FontAwesomeIcon icon={faFile} />
                  <p>Download Resume</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="carousel_sociallinks_container">
          <AboutCarousel />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
