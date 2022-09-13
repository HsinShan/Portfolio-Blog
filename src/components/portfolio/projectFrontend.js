import React from "react";
import { Button } from "antd";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import LoadingImg from "../common/loadingImg";
import "../../assets/style/portfolio/projectFrontend.scss";
import "../../assets/style/portfolio/overlay.scss";

const ProjectFrontend = ({ project }) => {
  const { title, subtitle, image, skills, links } = project;
  const device = useDeviceDetect();
  const overlayClass = device === "laptop" ? "overlay" : "normal";

  return (
    <div className="project projectFrontend">
      <LoadingImg alt={title} src={image} />
      <div className={overlayClass}>
        <div className="subtitle">【{subtitle}】</div>
        <div className="title">{title}</div>
        <div className="skills">
          {skills.map((skill) => (
            <p>{skill}</p>
          ))}
        </div>
        <div className="link">
          {Object.keys(links).map((key) => (
            <Button href={links[key]} target="_blank">
              {key}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectFrontend;
