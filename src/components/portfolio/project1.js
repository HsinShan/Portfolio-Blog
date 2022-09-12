import React, { useState } from "react";
import { Button } from "antd";
import Detail from "./detail";
import LoadingImg from "../common/loadingImg";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import "../../assets/style/portfolio/project1.scss";
import "../../assets/style/portfolio/overlay.scss";

const Project1 = ({ project }) => {
  const { title, subtitle, image, period, tags } = project;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const device = useDeviceDetect();
  const overlayClass = device === "laptop" ? "overlay" : "normal";
  const moreBtn = () =>
    device === "laptop" ? null : (
      <div className="btn">
        <Button className="more-btn" onClick={showModal}>
          See More
        </Button>
      </div>
    );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="project project1">
      <LoadingImg alt={title} src={image} />
      <div
        className={overlayClass}
        onClick={device === "laptop" ? showModal : null}
      >
        <div className="subtitle">【{subtitle}】</div>
        <div className="title">{title}</div>
        <div className="period">{period}</div>

        {device === "laptop" ? (
          <div className="tags">
            {tags.map((tag) => (
              <span># {tag}</span>
            ))}
          </div>
        ) : null}

        {moreBtn()}
      </div>
      <Detail
        isVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        project={project}
      />
    </div>
  );
};
export default Project1;
