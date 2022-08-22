import React from "react";
import { Modal, Button } from "antd";
import "../../assets/style/portfolio/detail.scss";

const Detail = ({ handleOk, handleCancel, isVisible, project }) => {
  const { title, subtitle, description, results, period, tags, url } = project;

  return (
    <Modal
      title={subtitle}
      className="detail"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      style={{ minWidth: "350px" }}
      width="65%"
      footer={[
        <Button
          key="link"
          href={url}
          target="_blank"
          onClick={handleOk}
          className="url"
        >
          See Code
        </Button>,
        <Button key="back" onClick={handleCancel}>
          Close
        </Button>,
      ]}
    >
      <div className="title">{title}</div>
      <div className="period">{period}</div>
      <div className="description">
        <h3>簡介</h3>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="results">
        <h3>結論</h3>
        <div dangerouslySetInnerHTML={{ __html: results }} />
      </div>
      <div className="tags">
        {tags.map((item) => (
          <span># {item}</span>
        ))}
      </div>
    </Modal>
  );
};
export default Detail;
