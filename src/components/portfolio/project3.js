import React from "react";
import { Button } from "antd";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import "../../assets/style/portfolio/project3.scss";
import "../../assets/style/portfolio/overlay.scss";

const Project3 = ({ project }) => {
  const { title, image, demoURL, codeURL } = project;
  const device = useDeviceDetect();
  const overlayClass = device === "laptop" ? "overlay" : "normal";
  return (
    <div className="project project3">
      <img className="image" alt={title} src={image} />
      <div className={overlayClass}>
        <div className="title">{title}</div>
        <div className="link">
          <Button href={demoURL} target="_blank">
            DEMO
          </Button>
          <Button href={codeURL} target="_blank">
            CODE
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Project3;
