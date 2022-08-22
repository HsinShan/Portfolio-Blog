import React from "react";
import Project from "./project";
import Project2 from "./project2";
import Project3 from "./project3";
import "../../assets/style/portfolio/index.scss";

const Portfolio = ({ type, title, projects }) => {
  return (
    <div className="portfolio">
      <h1 className="page-title">{title}</h1>
      <div className="projects">
        {projects.map((project) => {
          if (type === 1) return <Project project={project} />;
          else {
            if (project.group === 1) {
              return <Project2 project={project} />;
            } else {
              return (
                <div className="js-block">
                  <h3>{project.title}</h3>
                  <h4>{project.subtitle}</h4>
                  <div className="js-block-projects">
                    {project.projects.map((p) => (
                      <Project3 project={p} />
                    ))}
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
};
export default Portfolio;
