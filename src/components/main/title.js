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
          <b>具備網頁開發技能的資料工作者</b>
        </p>
        <p>◆ 目前在 TutorABC 擔任數據分析師，挖掘數據提供決策建議</p>
        <p>◆ 碩論研究顧客行為對於顧客價值的影響</p>
        <p>◆ 相關專案經驗 → 資料前處理、機器學習、資料分析、統計分析</p>
        <p>◆ 軟體前端開發 1+ 年經驗，具備自學及獨立解決問題的能力</p>
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
