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
        <b>
          Data Analyst with 2+ years of experience in digital marketing data
          analysis and data-driven decision-making.
        </b>
      </p>
      <p>
        <b>
          Passionate about logical thinking and problem-solving to drive
          business growth.
        </b>
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
          <b>Visitor Journey Analysis, SEO Strategy & Traffic Monitoring</b>:
          Increased website conversion rate by 2%
        </li>
        <li>
          <b>Data Visualization & Performance Tracking</b>: Built 10+
          dashboards, boosting efficiency by 80%
        </li>
        <li>
          <b>Technical Proficiency</b>: Skilled in SQL, Python, and BI tools for
          analyzing large datasets and identify trends
        </li>
        <li>
          <b>Reporting & Cross-Department Collaboration</b>: Strong in report
          writing, cross-functional communication, and project management
        </li>
        <li>
          <b>Technical Mindset in Data Challenges</b>: 1+ year of front-end
          development, applying a technical approach to data analysis
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
