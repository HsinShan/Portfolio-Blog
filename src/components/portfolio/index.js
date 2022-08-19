import React from "react";
import Project from "./project";
import "../../assets/style/portfolio/index.scss";

const Portfolio = ({ title, projects }) => {
  return (
    <div className="portfolio">
      <h1 className="page-title">{title}</h1>
      <div className="projects">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
