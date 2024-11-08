import React from "react";
import { useNavigate } from "react-router-dom";
import flutterportfoliobanner from "../../common/images/banners/flutter-portfolio-banner.png";
import "./projectdesc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const FlutterPortfolio = () => {
  const navigate = useNavigate();
  return (
    <div className="prjdesc_Wrapper">
      <div id="back_Btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h3>Back</h3>
      </div>
      <div className="projinfo">
        <img src={flutterportfoliobanner} alt="" className="imgbanner" />
        <div className="project_Shortdesc">
          <h1 className="project_Heading">Flutter Portfolio</h1>
          <p className="project_Type">Frontend</p>
          <p className="project_Short_Description">
          This is a simple Flutter Portfolio app implemented using the Flutter framework. 
          The app showcases a collection of my projects, skills, and 
          professional experience in a clean, interactive interface. 
          When a user navigates through the app, they can view different sections like 
          "About Me," "Projects," and "Contact Information," with smooth transitions and a 
          responsive design tailored for both mobile and web platforms.
          </p>
          <div className="project_Techstack">
            <h3 className="project_Techstack_heading">Tech Stack</h3>
            <img
              src="https://skillicons.dev/icons?i=flutter,dart"
              alt="tech stack"
              className="project_Techstack_icons"
            />
          </div>
          <div className="project_Buttons">
            <a
              href="https://portfolio-40d6f.web.app/"
              className="Buttons"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLaptopCode} />
              Demo
            </a>
            <a
              href="https://github.com/Sushant920/Portfolio"
              className="Buttons"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="project_Longdesc">
        <h2>Main Features</h2>
        <div className="description">
          <ul>
            <li>
              <h4>About Me Section:</h4>
              <p>
              The application provides a dedicated "About Me" section where users can l
              earn more about my background, interests, and professional values.
              </p>
            </li>
            <li>
              <h4>My Journey Timeline:</h4>
              <p>
              A visually engaging timeline showcases the key milestones and experiences throughout 
              my journey, offering a chronological overview of my growth and accomplishments.
              </p>
            </li>
            <li>
              <h4>Skills Section:</h4>
              <p>
              An organized display of my technical and professional skills, 
              highlighting my areas of expertise and proficiency in various tools and technologies.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlutterPortfolio;
