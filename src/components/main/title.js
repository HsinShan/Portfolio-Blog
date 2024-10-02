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
        <p>
          ◆ Proactive learner with a passion for acquiring new skills and
          staying updated with industry trends.
        </p>
        <p>
          ◆ Experienced in providing data-driven decision suggestions to
          optimize performance and campaign effectiveness.
        </p>
        <p>
          ◆ Involved in digital marketing optimization, focusing on traffic
          monitoring, visitor journey analysis, and SEO strategy development.
        </p>
        <p>
          ◆ Proficient in data analysis using SQL, Python, and BI tools to
          analyze large datasets and identify trends.
        </p>
        <p>
          ◆ Skilled in data visualization and report writing to effectively
          communicate insights.
        </p>
        <p>
          ◆ Strong cross-departmental communication and project management
          skills.
        </p>
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
