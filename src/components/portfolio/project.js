import React, { useState } from "react";
import Detail from "./detail";
import "../../assets/style/portfolio/project.scss";

const Project = ({ project }) => {
  const { title, subtitle, image, period, tags } = project;
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    <div className="project">
      <img className="image" alt={title} src={image} />
      <div className="overlay" onClick={showModal}>
        <div className="subtitle">【{subtitle}】</div>
        <div className="title">{title}</div>
        <div className="period">{period}</div>
        <div className="tags">
          {tags.map((tag) => (
            <span># {tag}</span>
          ))}
        </div>
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
export default Project;
