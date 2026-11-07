import React, { useState } from "react";
import { Button } from "antd";
import Detail from "./detail";
import LoadingImg from "../common/loadingImg";
import useContent from "../../content";
import "../../assets/style/portfolio/projectData.scss";
import "../../assets/style/portfolio/card.scss";

// Same layout on every screen size: image, then subtitle / title / period and a
// button that opens the detail modal (no hover-only overlay).
const ProjectData = ({ project }) => {
  const { UI } = useContent();
  const { title, subtitle, image, period, anchor } = project;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  return (
    <div className="project projectData" id={anchor}>
      <div className="card-image clickable" onClick={showModal}>
        <LoadingImg alt={title} src={image} />
      </div>
      <div className="card-body">
        <div className="subtitle">{subtitle}</div>
        <div className="title">{title}</div>
        <div className="period">{period}</div>
        <div className="card-actions">
          <Button className="more-btn" onClick={showModal}>
            {UI.portfolio.seeMore}
          </Button>
        </div>
      </div>
      <Detail
        isVisible={isModalVisible}
        handleOk={hideModal}
        handleCancel={hideModal}
        project={project}
      />
    </div>
  );
};
export default ProjectData;
