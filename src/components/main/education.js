import React from "react";
import { Timeline } from "antd";

const Education = () => {
  return (
    <div className="education">
      <div className="title">學歷</div>
      <Timeline mode="left">
        <Timeline.Item label="2020.09-2022.07" color="red">
          <h3>資訊管理學碩士學位 | 國立臺灣大學</h3>
          <p>畢業 GPA : 3.98</p>
          <p>積極修習資料科學相關課程，具備實作專案</p>
          <p>碩士論文研究顧客的線上行為對顧客價值的影響</p>
        </Timeline.Item>
        <Timeline.Item label="2015.09-2019.06" color="red">
          <h3>資訊管理學學士學位 | 國立政治大學</h3>
          <p>畢業專案製作美甲資訊整合系統</p>
          <p>具備資料庫規劃及建置的經驗</p>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};
export default Education;
