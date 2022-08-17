import React from "react";
import { Timeline } from "antd";
import "../../assets/style/main/education.scss";

const Education = () => {
  return (
    <>
      <Timeline mode="left">
        <Timeline.Item label="2020.09-2022.07" color="red">
          <h3>資訊管理學碩士學位 | 國立臺灣大學</h3>
          <p>畢業 GPA : 3.98</p>
          <p>積極修習資料科學相關課程，具備實作專案</p>
          <p>碩士論文研究顧客的線上行為對顧客價值的影響</p>
        </Timeline.Item>
        <Timeline.Item label="2019.11-2020.09" color="blue">
          <h3>前端開發工程師 | 台灣樂天市場</h3>
          <p>主要負責專案開發:</p>
          <p>1. 全新商品評價頁面開發</p>
          <p>2. 全新店家促銷活動頁面開發</p>
        </Timeline.Item>
        <Timeline.Item label="2015.09-2019.06" color="red">
          <h3>資訊管理學學士學位 | 國立政治大學</h3>
          <p>畢業專案製作美甲資訊整合系統，具備資料庫規劃及建置的經驗</p>
        </Timeline.Item>
        <Timeline.Item label="2019.03-2019.06" color="blue">
          <h3>軟體開發實習生 | 研華</h3>
          <p> 物聯網軟體前端功能開發，及協助設備導入 Agent</p>
          <p>
            <a href="http://bit.ly/31lOjID">實習證書</a>
          </p>
        </Timeline.Item>
        <Timeline.Item label="2018.09-2019.01" color="blue">
          <h3>系統開發實習生 | 若水國際</h3>
          <p>新AI標註平台前端開發及維護現有AI標註平台</p>
        </Timeline.Item>
      </Timeline>
    </>
  );
};
export default Education;
