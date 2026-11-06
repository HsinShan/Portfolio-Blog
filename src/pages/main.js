import React, { useEffect } from "react";
import Title from "../components/main/title";
import Experience from "../components/main/experience";
import Skills from "../components/main/skills";
import Language from "../components/main/language";
import useContent from "../content";
import "../assets/style/main/index.scss";

const Main = () => {
  const { UI } = useContent();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main">
      <div className="block">
        <Title />
      </div>
      <div className="block block2">
        <h1>{UI.main.experience}</h1>
        <Experience />
      </div>
      <div className="block">
        <h1>{UI.main.skills}</h1>
        <Skills />
      </div>
      <div className="block block2">
        <Language />
      </div>
    </div>
  );
};
export default Main;
