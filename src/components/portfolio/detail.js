import React from "react";
import { Modal, Button } from "antd";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import UI from "../../content/ui";
import "../../assets/style/portfolio/detail.scss";

const Detail = ({ handleOk, handleCancel, isVisible, project }) => {
  const { title, subtitle, description, results, period, tags, url } = project;
  const device = useDeviceDetect();
  const width = device === "laptop" ? "65%" : "95%";
  return (
    <Modal
      title={subtitle}
      className="detail"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={width}
      footer={[
        // Projects without a public repo (e.g. url omitted) show only Close
        url ? (
          <Button
            key="link"
            href={url}
            target="_blank"
            onClick={handleOk}
            className="url"
          >
            {UI.portfolio.seeCode}
          </Button>
        ) : null,
        <Button key="back" onClick={handleCancel}>
          {UI.portfolio.close}
        </Button>,
      ]}
    >
      <div className="title">{title}</div>
      <div className="period">{period}</div>
      <div className="description">
        <h3>{UI.portfolio.descriptionHeading}</h3>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="results">
        <h3>{UI.portfolio.resultsHeading}</h3>
        <div dangerouslySetInnerHTML={{ __html: results }} />
      </div>
      <div className="tags">
        {tags.map((item) => (
          <span key={item}># {item}</span>
        ))}
      </div>
    </Modal>
  );
};
export default Detail;
