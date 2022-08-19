import React from "react";
import Portfolio from "../components/portfolio";
import PROJECTS from "../constants/PROJECTS_DATA";
import "../assets/style/portfolio/index.scss";

const DataPortfolio = () => {
  return (
    <>
      <Portfolio type={1} title="資料科學作品集" projects={PROJECTS} />
    </>
  );
};
export default DataPortfolio;
