import React from "react";
import Portfolio from "../components/portfolio";
import PROJECTS from "../constants/PROJECTS_DATA";
import "../assets/style/portfolio/index.scss";

const FrontendPortfolio = () => {
  return (
    <>
      <Portfolio title="前端開發作品集" projects={PROJECTS} />
    </>
  );
};
export default FrontendPortfolio;
