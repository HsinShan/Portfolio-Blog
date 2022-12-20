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
      <h3>Data Scientist / Data Analyst</h3>
      <div className="tags">
        <span># Data Science</span>
        <span># Machine Learning</span>
        <span># Data Analysis</span>
        <span># Software Development</span>
      </div>
      <div className="about">
        <p>
          ◆ 擅長資料科學及軟體開發，目前主要專注於<span>資料科學</span>領域
        </p>
        <p>◆ 目前在 TutorABC 擔任大數據分析師，專注於提升續約營收</p>
        <p>◆ 相關專案經驗 → 資料前處理、機器學習、資料分析、統計分析</p>
        <p>◆ 1 年多的軟體前端開發經驗</p>
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
