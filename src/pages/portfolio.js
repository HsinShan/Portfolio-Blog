import React from "react";
import Project from "../components/portfolio/project";
import "../assets/style/portfolio/index.scss";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="page-title">資料科學相關專案</h1>
      <Project />
    </div>
  );
};
export default Portfolio;
