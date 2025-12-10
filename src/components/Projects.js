import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";
import PropTypes from "prop-types";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {

    const projects = {
      "SuiteSpot_Property-listing-website": {
        desc:
          "SuiteSpot is a web-based real estate platform designed to streamline the process of buying, selling, and renting properties. It serves as a digital marketplace where users can browse high-quality property listings and agents or sellers can manage their inventory.",
        techStack: "JavaScript, EJS, Bootstrap",
        link: "https://github.com/Yogiraj2005/SuiteSpot_Property-listing-website",

        // open: "https://d"
      },
      "ZenoTrade-Stock-Trading-platform": {
        desc:
          "A full-stack stock monitoring platform with a visually rich dashboard for tracking, analyzing, and gaining insights from market data",
        techStack: "Javascript, HTML / CSS, ReactJs,NodeJs",
        link: "https://github.com/Yogiraj2005/ZenoTrade--Stock-Trading-platform",
        // open: "http"
      },
      "FitTrack-Virtual-Health-Coach": {
        desc:
          "A virtual assistant designed to act as a personalized fitness coach for tracking workouts and goals. It features the Achieve Your Zenith module, likely serving as a web interface to help users optimize their physical performance.",
        techStack: "Node.js (Express.js), React.js, TypeScript",
        link: "https://github.com/Yogiraj2005/FitTrack-Virtual-Health-Coach.git",
        open: "https://personalize-fitness-coach-virtual-t1kr.onrender.com"
      },
      "Telemedicine-application-for-nabha-HealthGuard-by-Getch-": {
        desc:
          "It is platform designed to bridge the healthcare gap in rural India. Using the Nabha district in Punjab as a case study.--> Project needs your suggetions open for contributions If interested focus on the pharmacy model",
        techStack: "Javascript, JavaScript, html, css",
        link: "https://github.com/Nipunbhadane123/Telemedicine_application_for_nabha_HealthGuard_by_Getch-",
        open: "https://ai-base-healthcare-architecture-for-india.onrender.com"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
