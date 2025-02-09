import React, { useEffect } from "react";
import Portfolio from "../components/portfolio";
import PROJECTS_FRONTEND from "../constants/PROJECTS_FRONTEND";
import "../assets/style/portfolio/index.scss";

const FrontendPortfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Portfolio
        type={2}
        title="前端開發作品集(2017~2020)"
        projects={PROJECTS_FRONTEND}
      />
    </>
  );
};
export default FrontendPortfolio;
