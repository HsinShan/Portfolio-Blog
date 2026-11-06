import React, { useEffect } from "react";
import Portfolio from "../components/portfolio";
import useContent from "../content";
import "../assets/style/portfolio/index.scss";

const FrontendPortfolio = () => {
  const { UI, PROJECTS_FRONTEND } = useContent();
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
