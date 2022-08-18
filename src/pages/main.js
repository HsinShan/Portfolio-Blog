import React from "react";
import Title from "../components/main/title";
import Education from "../components/main/education";
import Language from "../components/main/language";
import "../assets/style/main/index.scss";

const Main = () => {
  return (
    <div>
      <div class="block">
        <Title />
      </div>
      <div className="block block2">
        <h1>Education & Work Experience</h1>
        <Education />
      </div>
      <div className="block">
        <Language />
      </div>
    </div>
  );
};
export default Main;
