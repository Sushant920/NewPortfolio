import React from "react";
import { useNavigate } from "react-router-dom";
import aibanner from "../../common/images/banners/ai-banner.png";
import "./projectdesc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const AiSwift = () => {
  const navigate = useNavigate();
  return (
    <div className="prjdesc_Wrapper">
      <div id="back_Btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h3>Back</h3>
      </div>
      <div className="projinfo">
        <img src={aibanner} alt="" className="imgbanner" />
        <div className="project_Shortdesc">
          <h1 className="project_Heading">AI Voice Assistant Swift App</h1>
          <p className="project_Type">End-to-End Swift Application</p>
          <p className="project_Short_Description">
          The AI Voice Assistant Swift App for Vision Pro is an advanced 
          voice-controlled application designed specifically for Vision Pro users. 
          It leverages AI to understand and respond to voice commands, providing a seamless, 
          hands-free user experience. The app integrates with Vision Pro’s capabilities, offering 
          features like task automation, information retrieval, and smart home control, all through 
          natural voice interactions.
          </p>
          <div className="project_Techstack">
            <h3 className="project_Techstack_heading">Tech Stack</h3>
            <img
              src="https://skillicons.dev/icons?i=swift"
              alt="tech stack"
              className="project_Techstack_icons"
            />
          </div>
          <div className="project_Buttons">
          <a
              href="https://github.com/Sushant920/AiVoiceAssistant"
              className="Buttons"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLaptopCode} />
              Demo
            </a>
            <a
              href="https://github.com/Sushant920/AiVoiceAssistant"
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
              <h4>Voice-Controlled Interface:</h4>
              <p>
              Interact with the app using natural voice commands for hands-free control.
              </p>
            </li>
            <li>
              <h4>AI-Powered Responses:</h4>
              <p>
              Leverages advanced AI to understand and respond to user queries.
              </p>
            </li>
            <li>
              <h4>Vision Pro Compatibility:</h4>
              <p>
              Optimized for a seamless experience on Vision Pro devices.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AiSwift;
