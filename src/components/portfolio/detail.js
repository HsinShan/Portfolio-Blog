import React from "react";
import { Modal, Button } from "antd";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import useContent from "../../content";
import "../../assets/style/portfolio/detail.scss";

// phones: full-screen sheet (see detail.scss); tablets: almost full width
const MODAL_WIDTH = { laptop: "65%", pad: "90%", mobile: "100%" };

const Detail = ({ handleOk, handleCancel, isVisible, project }) => {
  const { UI } = useContent();
  const { title, subtitle, description, results, period, tags, url, urlType } = project;
  const device = useDeviceDetect();
  const width = MODAL_WIDTH[device];
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
            {urlType === "slides" ? UI.portfolio.seeSlides : UI.portfolio.seeCode}
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
