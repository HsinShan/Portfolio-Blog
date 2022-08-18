import React from "react";
import { Card } from "antd";
import "../../assets/style/portfolio/project.scss";
import ThesisImg from "../../assets/images/thesis.png";

const Project = () => {
  return (
    <div className="project">
      <Card hoverable cover={<img alt="master thesise" src={ThesisImg} />}>
        <div className="subtitle">【碩士論文】</div>
        <div className="title">
          辨識高價值顧客:探討顧客線上行為的影響及長短期記憶模型之應用
        </div>
        <div className="period">2021~2022</div>
        {/* <div className="description">
          <p className="subject">簡介</p>
          <ul>
            <li>使用 91APP 提供的店家網站資料，進行顧客價值的研究</li>
            <li>提出 2 種行為資料前處理方式 + 5 個實驗模型</li>
            <li>預測未來一年最有價值的顧客</li>
          </ul>
        </div> */}
        <div className="result">
          <ul>
            <li>模型最佳表現 : 0.95 (F1 & AUC)</li>
            <li>顧客的活躍度是關鍵</li>
            <li>應多引導顧客有想下單的動作</li>
          </ul>
        </div>
        <div className="tags">
          <span># LSTM</span>
          <span># Random Forest</span>
          <span># Time Series</span>
          <span># Customer Behavior</span>
        </div>
      </Card>
    </div>
  );
};
export default Project;
