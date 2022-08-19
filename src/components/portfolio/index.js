import React from "react";
import Project from "./project";
import Project2 from "./project2";
import "../../assets/style/portfolio/index.scss";

const Portfolio = ({ type, title, projects }) => {
  return (
    <div className="portfolio">
      <h1 className="page-title">{title}</h1>
      <div className="projects">
        {projects.map((project) => {
          if (type === 1) return <Project project={project} />;
          else return <Project2 project={project} />;
        })}
      </div>
    </div>
  );
};
export default Portfolio;
