import React from "react";
import LoadingImg from "../common/loadingImg";
import meImg from "../../assets/images/me.png";
import "../../assets/style/main/title.scss";

const Title = () => {
  return (
    <div className="title">
      <center>
        <LoadingImg src={meImg} width="180"></LoadingImg>
      </center>
      <h1> Shirley Hsieh </h1>
      <h3> Data Analyst / Data Scientist</h3>
      <p>
        <b>Data Analyst with Software Engineering Background</b>
      </p>
      <div className="tags">
        <span># Big Data Analytics</span>
        <span># Data Visualization</span>
        <span># Digital Marketing</span>
        <span># Statistical Analysis</span>
        <span># Machine Learning</span>
        <span># Software Development</span>
      </div>
      <div className="about">
        <li>
          Proactive learner with data analysis and digital marketing expertise.
        </li>
        <li>
          Provide data-driven insights to boost performance and campaign
          success.
        </li>
        <li>
          Experienced in traffic monitoring, visitor journey analysis, and SEO
          strategies.
        </li>
        <li>
          Proficient in SQL, Python, and BI tools for analyzing large datasets
          and identifying trends.
        </li>
        <li>
          Strong in data visualization, report writing, and cross-departmental
          communication.
        </li>
      </div>
      <p>
        Email: <span className="email">shirleyhsieh825@gmail.com</span>
      </p>
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
          <img src="https://i.imgur.com/ZbIeZFi.png" width="40" alt="github" />
        </a>
      </div>
    </div>
  );
};
export default Title;
