import React from "react";
import { Timeline } from "antd";

const Work = () => {
  return (
    <div className="work">
      <div className="title">工作經驗</div>
      <Timeline mode="left">
        <Timeline.Item label="2019.11-2020.09" color="blue">
          <h3>前端開發工程師 | 台灣樂天市場</h3>
          <p>主要負責專案開發:</p>
          <p>1. 全新商品評價頁面開發</p>
          <p>2. 全新店家促銷活動頁面開發</p>
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
    </div>
  );
};
export default Work;
