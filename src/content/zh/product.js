// 「產品開發」頁（/product）：2026 配色工具網站。結構與 en/product.js 一一對應，
// 數字沿用原數據作品集卡片（對得回 Notion「初版履歷 v1」），不新增。
// 文字是純字串，數字由元件自動上色（HighlightNumbers）。

const PRODUCT = {
  label: "獨立專案",
  period: "2026",
  title: "配色工具網站",
  subtitle: "從照片抽取代表色，並用漏斗分析驅動改版",
  lead: "獨立開發並上線的網頁工具，自行規劃 GA4 事件與升級漏斗",
  image: {
    src: "/images/color-tool-workspace.png",
    alt: "配色工具網站的色票庫與手動配色畫面",
  },
  stats: [
    { value: "2,300+", label: "活躍使用者" },
    { value: "21,000", label: "次事件" },
    { value: "29", label: "個 GA4 事件" },
    { value: "193", label: "項自動化測試" },
  ],
  // shown under the stat cards; date range the stats cover
  statsPeriod: "數據統計期間 2026/08/25 ~ 2026/11/04",
  sections: [
    {
      heading: "核心功能",
      items: [
        "以 k-means 在 Lab 色彩空間分群，從照片分離出物品本色與高光、陰影",
        "採 farthest-first 初始化，確保同一張照片結果一致",
      ],
    },
    {
      heading: "開發方式",
      items: [
        "以 Claude Code 協作開發：拆分為 11 個獨立元件與各自附測試的邏輯模組",
        "用 graphify 建立程式碼圖譜，改版前先評估影響範圍",
        "搭配 Code Review 與 193 項自動化測試控管品質",
      ],
    },
    {
      heading: "漏斗發現與修正",
      ordered: true,
      items: [
        "發現進站 → 首次上傳僅 16%，新增「載入範例」入口降低使用門檻",
        "新功能影片帶動流量高峰後，升級漏斗為 105 → 82 → 21",
        "拆解後發現範例資料觸發付費提示，21 次點擊中 17 次來自只用過範例的用戶，判定該期付費意願數據失真",
        "修正觸發門檻與事件邏輯，只計算用戶自己的資料，並把資料切換點前後的判讀規則寫進埋點規劃文件",
      ],
    },
  ],
  tags: ["k-means", "CIELAB", "GA4", "Funnel Analysis", "Event Tracking", "React", "Claude Code"],
};

export default PRODUCT;
