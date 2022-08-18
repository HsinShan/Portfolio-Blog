import React from "react";
import Project from "../components/portfolio/project";
import "../assets/style/portfolio/index.scss";
import PROJECTS from "../constants/PROJECTS";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="page-title">資料科學相關專案</h1>
      <div className="projects">
        {PROJECTS.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
