import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Portfolio from "../components/portfolio";
import useContent from "../content";
import "../assets/style/portfolio/index.scss";

const DataPortfolio = () => {
  const { UI, PROJECTS } = useContent();
  const { hash } = useLocation();
  // react-router doesn't scroll to #hash on its own: jump to the card if one is
  // named (e.g. /portfolio-data#color-tool), otherwise start at the top
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [hash]);

  return (
    <>
      <Portfolio type={1} title={UI.portfolio.dataTitle} projects={PROJECTS} />
    </>
  );
};
export default DataPortfolio;
