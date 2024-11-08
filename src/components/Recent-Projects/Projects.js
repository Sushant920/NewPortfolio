import React from "react";
import "./projects.css";
import alumni from "../../common/images/banners/alumni-sphere-banner.png";
import music from "../../common/images/banners/music-buddy-banner.png";
import spot from "../../common/images/banners/spot-it-banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGear } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { animateScroll } from "react-scroll";
const Projects = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div className="projects-section">
      <div className="projects-header">
        <h1>Recent Projects</h1>
        <NavLink to="/projects" onClick={scrollToTop} className="more-projects">
          <h2>See All</h2>
          <div className="more">
            <FontAwesomeIcon icon={faArrowRight} className="more-icon" />
          </div>
        </NavLink>
      </div>
      <div className="projects">
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
          </div>
        </div>
        <div className="projectpage-container">
          <img src={music} alt="" className="project-image" />
          <div className="projectpage-desc">
            <div className="prj-card-title">
              <div className="project-card-heading">
                <h2 className="warp-text">Music Buddy</h2>
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
          to="/projects"
          onClick={scrollToTop}
          className="more-projects_mobile"
        >
          <h2>See All</h2>
          <div className="more">
            <FontAwesomeIcon icon={faArrowRight} className="more-icon" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Projects;
