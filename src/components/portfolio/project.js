import React, { useState } from "react";
import { Card } from "antd";
import Detail from "./detail";
import "../../assets/style/portfolio/project.scss";

const Project = ({ project }) => {
  const { title, subtitle, image, results, period, tags } = project;
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
      <Card
        hoverable
        cover={<img alt={title} src={image} />}
        onClick={showModal}
      >
        <div className="subtitle">【{subtitle}】</div>
        <div className="title">{title}</div>
        <div className="period">{period}</div>
        <div className="tags">
          {tags.map((tag) => (
            <span># {tag}</span>
          ))}
        </div>
      </Card>
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
