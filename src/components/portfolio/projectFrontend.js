import React from "react";
import { Button } from "antd";
import LoadingImg from "../common/loadingImg";
import useContent from "../../content";
import "../../assets/style/portfolio/projectFrontend.scss";
import "../../assets/style/portfolio/card.scss";

const ProjectFrontend = ({ project }) => {
  const { UI } = useContent();
  const { title, subtitle, image, skills, description, links } = project;

  return (
    <div className="project projectFrontend">
      <div className="card-image">
        <LoadingImg alt={title} src={image} />
      </div>
      <div className="card-body">
        <div className="subtitle">{subtitle}</div>
        <div className="title">{title}</div>
        <div className="card-skills">
          {skills.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </div>
        {description.length > 0 && (
          <ul className="description">
            {description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <div className="card-actions">
          {Object.keys(links).map((key) => (
            <Button href={links[key]} target="_blank" key={key}>
              {UI.portfolio.links[key] || key}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectFrontend;
