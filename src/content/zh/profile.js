// 首頁上方（照片、簡介、標籤、社群連結）與語言區塊。結構同 en/profile.js。

const PROFILE = {
  name: "Shirley Hsieh",
  headline: "數據分析師｜產品分析・行銷分析",
  // no sentence-final punctuation in the hero block (intro + explore)
  intro: [
    "3+ 年數據分析經驗，另有 1 年前端開發經驗",
    "涵蓋產品分析（跟單交易產品）與行銷分析（線上教育），專長指標定義、漏斗分析與顧客旅程分析",
    "以 Claude Code 獨立開發並上線網頁工具，完成從埋點規劃到依漏斗分析改版的完整流程",
  ],
  explore: {
    // featured card: label / period / title / lead come from PRODUCT (product.js)
    featured: {
      text: "把過去的分析與前端經驗，整合成一個上線的產品",
      to: "/product",
    },
    text: "其他作品集",
    links: [
      { to: "/portfolio-data", label: "資料科學作品集" },
      { to: "/portfolio-frontend", label: "前端開發作品集" },
    ],
  },
  tags: [
    "產品分析",
    "指標體系",
    "大數據分析",
    "數據視覺化",
    "數位行銷",
    "統計分析",
    "機器學習",
    "軟體開發",
  ],
  social: [
    {
      name: "linkedin",
      href: "https://tw.linkedin.com/in/shirley-hsieh-101397170",
      icon: "https://i.imgur.com/DQfuQnm.png",
    },
    {
      name: "github",
      href: "https://github.com/HsinShan",
      icon: "https://i.imgur.com/ZbIeZFi.png",
    },
  ],
  language: {
    title: "語言能力",
    score: "多益 TOEIC：875 分",
    date: "測驗日期：2021.09.26",
    transcript: { label: "成績單：", linkText: "連結", href: "https://reurl.cc/RrDOZD" },
  },
};

export default PROFILE;
