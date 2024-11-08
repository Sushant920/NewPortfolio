import React from "react";
import { useNavigate } from "react-router-dom";
import weatherbanner from "../../common/images/banners/Weather-banner.png";
import "./projectdesc.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Weather = () => {
  const navigate = useNavigate();
  return (
    <div className="prjdesc_Wrapper">
      <div id="back_Btn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h3>Back</h3>
      </div>
      <div className="projinfo">
        <img src={weatherbanner} alt="" className="imgbanner" />
        <div className="project_Shortdesc">
          <h1 className="project_Heading">Weather App Swift</h1>
          <p className="project_Type">End-to-End Swift Application</p>
          <p className="project_Short_Description">
          This project is a Swift-based Weather App that provides real-time weather updates and 
          forecasts. It features a clean and intuitive interface, delivering accurate temperature, 
          conditions, and location-based weather data to enhance the user experience.
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
              href="https://github.com/Sushant920/WeatherUI-Swift"
              className="Buttons"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLaptopCode} />
              Demo
            </a>
            <a
              href="https://github.com/Sushant920/WeatherUI-Swift"
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
              <h4>Real-Time Weather Updates</h4>
              <p>
              Provides current weather conditions and forecasts.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weather;
