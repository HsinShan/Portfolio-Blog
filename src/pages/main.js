import React, { useEffect } from "react";
import Title from "../components/main/title";
import Experience from "../components/main/experience";
import Skills from "../components/main/skills";
import Language from "../components/main/language";
import "../assets/style/main/index.scss";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main">
      <div class="block">
        <Title />
      </div>
      <div className="block block2">
        <h1>Experience</h1>
        <Experience />
      </div>
      <div className="block">
        <h1>MY SKILLS & EXPERTISE</h1>
        <Skills />
      </div>
      <div className="block block2">
        <Language />
      </div>
    </div>
  );
};
export default Main;
