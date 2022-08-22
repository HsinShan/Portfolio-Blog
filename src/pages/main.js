import React from "react";
import Title from "../components/main/title";
import Experience from "../components/main/experience";
import Skills from "../components/main/skills";
import Language from "../components/main/language";
import "../assets/style/main/index.scss";

const Main = () => {
  return (
    <div className="main">
      <div class="block">
        <Title />
      </div>
      <div className="block block2">
        <h1>經歷</h1>
        <Experience />
      </div>
      <div className="block">
        <h1>技能</h1>
        <Skills />
      </div>
      <div className="block block2">
        <Language />
      </div>
    </div>
  );
};
export default Main;
