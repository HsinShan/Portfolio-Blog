import React from "react";
import { Button } from "antd";
import LoadingImg from "../common/loadingImg";
import useContent from "../../content";
import "../../assets/style/portfolio/projectFrontendTiny.scss";
import "../../assets/style/portfolio/card.scss";

const ProjectFrontendTiny = ({ project }) => {
  const { UI } = useContent();
  const { title, image, demoURL, codeURL } = project;
  return (
    <div className="project projectFrontendTiny">
      <div className="card-image">
        <LoadingImg alt={title} src={image} />
      </div>
      <div className="card-body">
        <div className="title">{title}</div>
        <div className="card-actions">
          <Button href={demoURL} target="_blank">
            {UI.portfolio.links.demo}
          </Button>
          <Button href={codeURL} target="_blank">
            {UI.portfolio.links.code}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProjectFrontendTiny;
