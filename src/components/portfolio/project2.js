import React from "react";
import { Button } from "antd";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import "../../assets/style/portfolio/project2.scss";
import "../../assets/style/portfolio/overlay.scss";

const Project2 = ({ project }) => {
  const { title, subtitle, image, skills, demoURL, codeURL } = project;
  const device = useDeviceDetect();
  const overlayClass = device === "laptop" ? "overlay" : "normal";

  return (
    <div className="project project2">
      <img className="image" alt={title} src={image} />
      <div className={overlayClass}>
        <div className="subtitle">【{subtitle}】</div>
        <div className="title">{title}</div>
        <div className="skills">
          {skills.map((skill) => (
            <p>{skill}</p>
          ))}
        </div>
        <div className="link">
          <Button href={demoURL} target="_blank">
            DEMO
          </Button>
          <Button href={codeURL} target="_blank">
            Code
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Project2;
