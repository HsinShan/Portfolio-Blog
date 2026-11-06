import React, { useEffect } from "react";
import Portfolio from "../components/portfolio";
import PROJECTS_FRONTEND from "../content/projectsFrontend";
import UI from "../content/ui";
import "../assets/style/portfolio/index.scss";

const FrontendPortfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Portfolio
        type={2}
        title={UI.portfolio.frontendTitle}
        projects={PROJECTS_FRONTEND}
      />
    </>
  );
};
export default FrontendPortfolio;
