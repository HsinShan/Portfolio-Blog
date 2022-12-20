import React from "react";
import { Timeline } from "antd";

const Work = () => {
  return (
    <div className="work">
      <div className="title">工作經驗</div>
      <Timeline mode="left">
        <Timeline.Item label="2022.10-now" color="blue">
          <h3>大數據分析師 | TutorABC</h3>
          <p class="block-title">【主要職責】客戶售後續約分析</p>
          <p>1. 找出忠誠客戶群的特質</p>
          <p>2. 訂定指標產生關懷列表，監控客戶上課狀況</p>
          <p>3. 分析客戶不續約因素</p>
          <p class="block-title">【其他專案】Reward Center 效益評估</p>
          <p>1. 分析 Reward Center 對銷課及續約的影響</p>
          <p>2. 評估關站對續約營收影響</p>
        </Timeline.Item>
        <Timeline.Item label="2019.11-2020.09" color="blue">
          <h3>前端開發工程師 | 台灣樂天市場</h3>
          <p>主要使用 React，其他技術 ROR、Graphql</p>
          <p class="block-title">【主要職責】專案開發</p>
          <p>1. 全新商品評價頁面開發</p>
          <p>2. 全新店家促銷活動頁面開發</p>
        </Timeline.Item>
        <Timeline.Item label="2019.03-2019.06" color="blue">
          <h3>軟體開發實習生 | 研華</h3>
          <p>主要使用 Vue 搭配 Vuestic 及 echarts</p>
          <p class="block-title">
            【主要職責】物聯網軟體前端功能開發，及協助設備導入 Agent
          </p>
          <p>
            <a href="http://bit.ly/31lOjID">實習證書</a>
          </p>
        </Timeline.Item>
        <Timeline.Item label="2018.09-2019.01" color="blue">
          <h3>系統開發實習生 | 若水國際</h3>
          <p>主要使用 Vue 搭配 ElementUI 及 Axios </p>
          <p class="block-title">
            【主要職責】新 AI 標註平台前端開發及維護現有 AI 標註平台
          </p>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};
export default Work;
