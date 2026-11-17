// Fixed interface text: site name, section titles, menu, buttons.
// Kept separate from résumé content so the language switch can swap both.

const UI = {
  siteName: "Shirley's Blog",
  langSwitch: { label: "EN", ariaLabel: "Switch to English" },
  main: {
    experience: "學歷與經歷",
    skills: "專業技能",
  },
  portfolio: {
    dataTitle: "資料科學作品集",
    frontendTitle: "前端開發作品集(2017~2020)",
    descriptionHeading: "簡介",
    resultsHeading: "結論",
    seeMore: "查看更多",
    seeCode: "查看程式碼",
    seeSlides: "查看簡報",
    seeReport: "看完整報告（互動圖表）",
    close: "關閉",
    // labels for project link buttons, keyed like `links` in projectsFrontend.js
    links: { demo: "展示", code: "程式碼", frontendCode: "前端程式碼", backendCode: "後端程式碼", codepen: "CodePen", docs: "文件" },
  },
  // /automation tab page
  automation: {
    title: "AI 自動化作品集",
    intro: "用 Claude Code 從需求、規則到雲端排程，搭建每天自己跑的自動化系統",
    seeCase: "看搭建流程",
  },
  // lazy page chunk failed to load (components/common/chunkErrorBoundary.js)
  loadError: { message: "頁面載入失敗，請重新整理再試一次", reload: "重新整理" },
  nav: {
    title: "導覽列",
    openMenu: "開啟選單",
    about: "介紹",
    portfolio: "作品集",
    dataScience: "資料科學",
    frontend: "前端開發",
    product: "產品開發",
    automation: "AI 自動化",
  },
};

export default UI;
