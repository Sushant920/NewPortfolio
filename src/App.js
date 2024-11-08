import "./App.css";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Projectspage from "./pages/Projects-page/Projectspage";
import Homepage from "./pages/Home-page/Homepage";
import ProgressBar from "react-scroll-progress-bar";
import Weather from "./pages/ProjectDescription-page/Weather";
import Login from "./pages/ProjectDescription-page/Login";
import Autocomplete from "./pages/ProjectDescription-page/Autocomplete";
import AboutPage from "./pages/About-page/AboutPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Contactpage from "./pages/Contact-page/Contactpage";
import AiSwift from "./pages/ProjectDescription-page/AiSwift";
import { Analytics } from "@vercel/analytics/react";
import Loader from "./components/Loader/Loader";
import FlutterPortfolio from "./pages/ProjectDescription-page/FlutterPortfolio";

function App() {
  return (
    <div className="App">
      <div className="Screen_Small">
        <div>
          <FontAwesomeIcon
            icon={faCircleExclamation}
            style={{ color: "#ffffff" }}
          />
        </div>
        <div>Display too small</div>
      </div>
      <div className="main_Screen">
        <ProgressBar bgcolor="var(--neon-green)" duration="0.8" />
        <div className="loader_Overlay">
          <Loader />
        </div>
        <div className="Header">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projectspage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/weather" element={<Weather />} />
          <Route path="/projects/Login" element={<Login />} />
          <Route path="/projects/FlutterPortfolio" element={<FlutterPortfolio />} />
          <Route path="/projects/Autocomplete" element={<Autocomplete />} />
          <Route path="/projects/AiSwift" element={<AiSwift />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
