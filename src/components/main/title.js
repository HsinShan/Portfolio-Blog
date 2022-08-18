import React from "react";
import meImg from "../../assets/images/me.png";
import "../../assets/style/main/title.scss";

const Title = () => {
  return (
    <div className="title">
      <center>
        <img src={meImg} alt="Shirley Hsieh" width="180" />
      </center>
      <h1> Shirley Hsieh </h1>
      <h3>Data Scientist / Data Analyst</h3>
      <div className="tags">
        <span># Data Science</span>
        <span># Machine Learning</span>
        <span># Data Analysis</span>
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
