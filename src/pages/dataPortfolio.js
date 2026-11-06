import React, { useEffect } from "react";
import Portfolio from "../components/portfolio";
import useContent from "../content";
import "../assets/style/portfolio/index.scss";

const DataPortfolio = () => {
  const { UI, PROJECTS } = useContent();
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
