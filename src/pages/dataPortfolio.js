import React, { useEffect } from "react";
import Portfolio from "../components/portfolio";
import PROJECTS from "../content/projectsData";
import UI from "../content/ui";
import "../assets/style/portfolio/index.scss";

const DataPortfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Portfolio type={1} title={UI.portfolio.dataTitle} projects={PROJECTS} />
    </>
  );
};
export default DataPortfolio;
