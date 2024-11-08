import React, { useEffect, useRef } from "react";
import "./projectspage.css";
import weatherbanner from "../../common/images/banners/Weather-banner.png";
import loginbanner from "../../common/images/banners/login-banner.png";
import hotstart from "../../common/images/banners/hotstart-clone-banner.png";
import aibanner from "../../common/images/banners/ai-banner.png";
import autobanner from "../../common/images/banners/auto-banner.png";
import flutterportfoliobanner from "../../common/images/banners/flutter-portfolio-banner.png";
import alumni from "../../common/images/banners/alumni-sphere-banner.png"
import music from "../../common/images/banners/music-buddy-banner.png";
import spot from "../../common/images/banners/spot-it-banner.png";
import { NavLink } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  document.title = "Portfolio | Projects";
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const playerRef = useRef(null);
  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);
  return (
    <div className="projectspage-section">
      <div className="projectspage-heading">
        <h1>PROJECTS</h1>
      </div>
      <div className="projectspage">
        <div className="projectpage-container">
          <img src={alumni} alt="" className="project-image" />
          <div className="projectpage-desc">
            <div className="prj-card-title">
              <div className="project-card-heading">
                <h2>Alumni Sphere</h2>
                <div className="project_type">Full Stack</div>
              </div>
              <div className="workInProgress">
                <p>Work in Progress</p>
                <FontAwesomeIcon icon={faGear} spin />
              </div>
            </div>
            <p className="proj__descrption">
            Currently developing an AI-powered platform to connect students and alumni, 
            enabling mentorship, career guidance, and secure networking.
            </p>
            <div className="techstack-edit">
              <img
                src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs"
                alt="tech stack"
                className="projectpage-tech"
              />
            </div>
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
        <div className="projectpage-container">
          <img src={music} alt="" className="project-image" />
          <div className="projectpage-desc">
            <div className="prj-card-title">
              <div className="project-card-heading">
                <h2 className="warp-text">Music buddy</h2>
                <h2 className="warp-text mobile">Music</h2>
                <h2 className="warp-text mobile">Buddy</h2>
                <div className="project_type">Full Stack</div>
              </div>
              <div className="workInProgress">
                <p>Work in Progress</p>
                <FontAwesomeIcon icon={faGear} spin />
              </div>
            </div>
            <p className="proj__descrption">
            Creating a music platform where fans can choose the beats, 
            shaping live streams with real-time interaction and high-quality audio.
            </p>
            <img
              src="https://skillicons.dev/icons?i=nextjs,tailwindcss,prisma,postgres"
              alt="tech stack"
              className="projectpage-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </div>
        <div className="projectpage-container">
          <img src={spot} alt="" className="project-image" />
          <div className="projectpage-desc">
            <div className="prj-card-title">
              <div>
                <h2>SpotIt</h2>
                <div className="project_type">Cross-platform mobile app</div>
              </div>
              <div className="workInProgress">
                <p>Work in Progress</p>
                <FontAwesomeIcon icon={faGear} spin />
              </div>
            </div>
            <p className="proj__descrption">
            A mobile object detection app in progress with Flutter, 
            designed to identify and label objects in real-time through the camera.
            </p>
            <img
              src="https://skillicons.dev/icons?i=flutter,tensorflow,firebase"
              alt="tech stack"
              className="projectpage-tech"
            />
          </div>
        </div>
        <NavLink
          to="/projects/AiSwift"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img src={aibanner} alt="" className="projectpage-image" />
          <div className="projectpage-desc">
            <h2>AI Voice Assistant Swift App</h2>
            <p className="project_type">End-to-End Swift Application</p>
            <p className="proj__descrption">
            The AI Voice Assistant Swift App for Vision Pro uses AI to provide 
            voice-controlled features like task automation, information retrieval, 
            and smart home control, offering a seamless, hands-free experience for Vision Pro users.
            </p>
            <img
              src="https://skillicons.dev/icons?i=swift"
              alt="tech stack"
              className="projectpage-tech"
            />
            {/* <button className="demo-btn">Demo</button> */}
          </div>
        </NavLink>
        <NavLink
          to="/projects/weather"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img src={weatherbanner} alt="" className="projectpage-image" />
          <div className="projectpage-desc">
            <h2>Weather App Swift</h2>
            <p className="project_type">End-to-End Swift Application</p>
            <p className="proj__descrption">
            This Swift-based Weather App delivers real-time weather updates and forecasts with a clean, intuitive interface.
            </p>
            <img
              src="https://skillicons.dev/icons?i=swift"
              alt="tech stack"
              className="projectpage-tech"
            />
          </div>
        </NavLink>
        <NavLink
          to="/projects/Login"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img
            src={loginbanner}
            alt=""
            className="projectpage-image"
          />
          <div className="projectpage-desc">
            <h2>Firebase Swift Login Register App</h2>
            <p className="project_type">End-to-End Swift Application</p>
            <p className="proj__descrption">
            This Swift-based Login and Register app uses Firebase for seamless user authentication, 
            enabling account creation, secure login, and efficient session management with robust backend support.
            </p>
            <img
              src="https://skillicons.dev/icons?i=swift,firebase"
              alt="tech stack"
              className="projectpage-tech"
            />
          </div>
        </NavLink>
        <NavLink
          to="/projects/credclone"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img src={hotstart} alt="" className="projectpage-image" />
          <div className="projectpage-desc">
            <h2>Hotstart Clone</h2>
            <p className="project_type">Frontend</p>
            <p className="proj__descrption">
              Crafted a responsive Hoststart Landing Page clone using ReactJS for
              modularity and interactivity, styled with CSS to match the
              original design.
            </p>
            <img
              src="https://skillicons.dev/icons?i=react,tailwindcss,vite"
              alt="tech stack"
              className="projectpage-tech"
            />
          </div>
        </NavLink>
        <NavLink
          to="/projects/Autocomplete"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img
            src={autobanner}
            alt=""
            className="projectpage-image"
          />
          <div className="projectpage-desc">
            <h2>Autocomplete Suggestion Box</h2>
            <p className="project_type">Frontend</p>
            <p className="proj__descrption">
            This JavaScript-based Autocomplete Suggestion Box provides dynamic, user-friendly 
            search suggestions from a dataset of over 100 diverse items, making searches faster and more intuitive.
            </p>
            <img
              src="https://skillicons.dev/icons?i=html,css,javascript"
              alt="tech stack"
              className="projectpage-tech"
            />
          </div>
        </NavLink>
        <NavLink
          to="/projects/FlutterPortfolio"
          onClick={scrollToTop}
          className="projectpage-container"
        >
          <img
            src={flutterportfoliobanner}
            alt=""
            className="projectpage-image"
          />
          <div className="projectpage-desc">
            <h2>Flutter Portfolio</h2>
            <p className="project_type">Frontend</p>
            <p className="proj__descrption">
              Developed a simple spotify playlist generator implemented using
              HTML,CSS and Javascript. It selects a random playlist from the
              array and opens it in a new browser tab.
            </p>
            <img
              src="https://skillicons.dev/icons?i=flutter,dart"
              alt="tech stack"
              className="projectpage-tech"
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Projects;
