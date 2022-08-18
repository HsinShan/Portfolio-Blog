import React from "react";
import Education from "../components/main/education";
import meImg from "../assets/images/me.png";
import "../assets/style/main/index.scss";

const Main = () => {
  return (
    <div>
      <div class="block">
        <center>
          <img src={meImg} alt="Shirley Hsieh" width="180" />
        </center>
        <h1> Shirley Hsieh </h1>
        <h3>Data Scientist / Data Analyst</h3>
        <div className="tags">
          <span>Data Science</span>
          <span>Machine Learning</span>
          <span>Data Analysis</span>
        </div>
        <p>Email: shirleyhsieh825@gmail.com</p>
        <div class="link">
          <a
            href="https://tw.linkedin.com/in/shirley-hsieh-101397170"
            target="blank"
          >
            <img
              src="https://i.imgur.com/DQfuQnm.png"
              width="40"
              alt="linkedin"
            />
          </a>
          <a href="https://github.com/HsinShan" target="blank">
            <img
              src="https://i.imgur.com/ZbIeZFi.png"
              width="40"
              alt="github"
            />
          </a>
        </div>
      </div>
      <div className="block block2">
        <h1>About Me</h1>
        <p>Mainly Concentrate on Data Science</p>
        <p>
          Related Project Experience: Data Preprocessing, Machine Learning, Data
          Analysis, Statistical Modeing
        </p>
        <p>1+ year Software Frontend Experience</p>
      </div>
      <div className="block">
        <h1>Education & Work Experience</h1>
        <Education />
      </div>
      <div className="block block2">
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
