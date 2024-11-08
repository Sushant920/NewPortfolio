import React from "react";
import { useNavigate } from "react-router-dom";
import autobanner from "../../common/images/banners/auto-banner.png";
import "./projectdesc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Autocomplete = () => {
  const navigate = useNavigate();
  return (
    <div className="prjdesc_Wrapper">
      <div id="back_Btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h3>Back</h3>
      </div>
      <div className="projinfo">
        <img src={autobanner} alt="" className="imgbanner" />
        <div className="project_Shortdesc">
          <h1 className="project_Heading">Autocomplete Suggestion Box</h1>
          <p className="project_Type">Frontend</p>
          <p className="project_Short_Description">
          This project is an Autocomplete Suggestion Box developed using JavaScript. 
          It provides users with a dynamic autocomplete feature that suggests items from a 
          diverse dataset of over 100 entries as they type. The application is designed to be 
          interactive and user-friendly, offering suggestions ranging from common fruits and names to 
          programming languages and musical terms. It enhances the user experience by making searches faster and more intuitive.
          </p>
          <div className="project_Techstack">
            <h3 className="project_Techstack_heading">Tech Stack</h3>
            <img
              src="https://skillicons.dev/icons?i=html,css,javascript"
              alt="tech stack"
              className="project_Techstack_icons"
            />
          </div>
          <div className="project_Buttons">
            <a
              href="https://github.com/Sushant920/Autocomplete-Suggestion-Box"
              className="Buttons"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLaptopCode} />
              Demo
            </a>
            <a
              href="https://github.com/Sushant920/Autocomplete-Suggestion-Box"
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
              <h4>Autocomplete Suggestions with JavaScript:</h4>
              <p>
              The application uses JavaScript to implement a dynamic autocomplete feature. 
              As users type in the input field, the application compares the input with a dataset of over 
              100 diverse entries, suggesting relevant matches in real-time. This efficient implementation 
              provides a seamless user experience, making data retrieval quick and intuitive without the need for external libraries.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Autocomplete;
