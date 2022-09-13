import React from "react";
import ProjectData from "./projectData";
import ProjectFrontend from "./projectFrontend";
import ProjectFrontendTiny from "./projectFrontendTiny";
import "../../assets/style/portfolio/index.scss";

const Portfolio = ({ type, title, projects }) => {
  return (
    <div className="portfolio">
      <h1 className="page-title">{title}</h1>
      <div className="projects">
        {projects.map((project) => {
          if (type === 1)
            // Data portfolio
            return (
              <div className="category">
                <h2 className="project-title">{project.category}</h2>
                <div className="all-tags">
                  {project.tags.map((tag) => (
                    <div className="tag">{tag}</div>
                  ))}
                </div>
                <div className="category-projects">
                  {project.projects.map((p) => (
                    <ProjectData project={p} />
                  ))}
                </div>
              </div>
            );
          else {
            // frontend portfolio
            if (project.group === 1) {
              return (
                <div className="category">
                  <h2 className="project-title">{project.category}</h2>
                  <div className="category-projects">
                    {project.projects.map((p) => (
                      <ProjectFrontend project={p} />
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <div className="js-block">
                  <h2 className="project-title">{project.category}</h2>
                  <h3>{project.title}</h3>
                  <h4>{project.subtitle}</h4>
                  <div className="js-block-projects">
                    {project.projects.map((p) => (
                      <ProjectFrontendTiny project={p} />
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
