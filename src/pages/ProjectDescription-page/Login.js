import React from "react";
import { useNavigate } from "react-router-dom";
import loginbanner from "../../common/images/banners/login-banner.png";
import "./projectdesc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="prjdesc_Wrapper">
      <div id="back_Btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h3>Back</h3>
      </div>
      <div className="projinfo">
        <img src={loginbanner} alt="" className="imgbanner" />
        <div className="project_Shortdesc">
          <h1 className="project_Heading">Firebase Swift Login Register App</h1>
          <p className="project_Type">End-to-End Swift Application</p>
          <p className="project_Short_Description">
          This project is a Swift-based Login and Register app integrated with Firebase. 
          It enables seamless user authentication, allowing users to create accounts, log in securely, 
          and manage their sessions efficiently. Firebase ensures reliable backend support, making the app robust and scalable.
          </p>
          <div className="project_Techstack">
            <h3 className="project_Techstack_heading">Tech Stack</h3>
            <img
              src="https://skillicons.dev/icons?i=swift,firebase"
              alt="tech stack"
              className="project_Techstack_icons"
            />
          </div>
          <div className="project_Buttons">
            <div className="Buttons inactivebutton">
              <FontAwesomeIcon icon={faLaptopCode} />
              Demo
            </div>
            <a
              href="https://github.com/Sushant920/Swift-Login-Register"
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
              <h4>Secure User Authentication:</h4>
              <p>
              Provides reliable and secure account registration, login, and management.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
