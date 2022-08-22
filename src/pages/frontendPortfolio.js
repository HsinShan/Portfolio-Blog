import React from "react";
import Portfolio from "../components/portfolio";
import PROJECTS_FRONTEND from "../constants/PROJECTS_FRONTEND";
import "../assets/style/portfolio/index.scss";

const FrontendPortfolio = () => {
  return (
    <>
      <Portfolio type={2} title="前端開發作品集" projects={PROJECTS_FRONTEND} />
    </>
  );
};
export default FrontendPortfolio;
