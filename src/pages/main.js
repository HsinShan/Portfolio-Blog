import React from "react";
import Title from "../components/main/title";
import Education from "../components/main/education";
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
        <h1>Language</h1>
        <h3>TOEIC: 875</h3>
        <p>Date: 2021.09.26</p>
        <p>
          Transcript : <a href="https://reurl.cc/RrDOZD">LINK</a>
        </p>
      </div>
    </div>
  );
};
export default Main;
