import React from "react";
import { Card } from "antd";
import "../../assets/style/portfolio/project.scss";

const Project = ({ project }) => {
  const { title, subtitle, image, results, period, tags } = project;

  return (
    <div className="project">
      <Card hoverable cover={<img alt={title} src={image} />}>
        <div className="subtitle">【{subtitle}】</div>
        <div className="title">{title}</div>
        <div className="period">{period}</div>
        <div className="result">
          <ul>
            {results.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="tags">
          {tags.map((tag) => (
            <span># {tag}</span>
          ))}
        </div>
      </Card>
    </div>
  );
};
export default Project;
