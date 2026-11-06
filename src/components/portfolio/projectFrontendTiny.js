import React from "react";
import { Button } from "antd";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import LoadingImg from "../common/loadingImg";
import "../../assets/style/portfolio/projectFrontendTiny.scss";
import "../../assets/style/portfolio/overlay.scss";
import UI from "../../content/ui";

const ProjectFrontendTiny = ({ project }) => {
  const { title, image, demoURL, codeURL } = project;
  const device = useDeviceDetect();
  const overlayClass = device === "laptop" ? "overlay" : "normal";
  return (
    <div className="project projectFrontendTiny">
      <LoadingImg alt={title} src={image} />
      <div className={overlayClass}>
        <div className="title">{title}</div>
        <div className="link">
          <Button href={demoURL} target="_blank">
            {UI.portfolio.demo}
          </Button>
          <Button href={codeURL} target="_blank">
            {UI.portfolio.code}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProjectFrontendTiny;
