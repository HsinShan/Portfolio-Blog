import React from "react";
import Title from "../components/main/title";
import Experience from "../components/main/experience";
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
        <Language />
      </div>
    </div>
  );
};
export default Main;
