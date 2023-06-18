import React from "react";
import { Timeline } from "antd";

const Work = () => {
  return (
    <div className="work">
      <div className="title">工作經驗</div>
      <Timeline mode="left">
        <Timeline.Item label="2022.10-now" color="blue">
          <h3>大數據分析師 | TutorABC</h3>
          <p class="block-title">【行銷及運營應用分析專案】</p>
          <p>
            1. 業績因果模型 : 使用 PLS
            建模找出影響業績的內外部因素，提供執行建議
          </p>
          <p>
            2. 顧客再上課預測 : 使用生存分析預測顧客再上課機率，以追蹤客戶黏著度
          </p>
          <p>3. 各類行銷及運營成效分析: 廣告代理商成效分析、續約影響因素分析</p>
          <p class="block-title">【固化報表指標定義及建立 Dashboard】</p>
          <p>1. 規劃並產出業務稽核固化報表，提升稽核效率及業務透明度</p>
          <p>
            2. 製作視覺化的 dashboard
            以追蹤業績表現，並提供每月業績分析，幫助決策和管理
          </p>
          <p class="block-title">【跨部門技術需求】</p>
          <p>需求訪談並提供解決方案及技術支援</p>
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
