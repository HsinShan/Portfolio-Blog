const PROJECTS = [
  {
    title: "辨識高價值顧客:探討顧客線上行為的影響及長短期記憶模型之應用",
    subtitle: "碩士論文",
    period: "2021~2022",
    image: "https://i.imgur.com/bgtC3nu.png",
    description: [
      "使用 91APP 提供的店家網站資料，進行顧客價值的研究",
      "提出 2 種行為資料前處理方式 + 5 個實驗模型",
      "預測未來一年最有價值的顧客",
    ],
    results: [
      "模型最佳表現 : 0.95 (F1 & AUC)",
      "顧客的活躍度是關鍵",
      "應多引導顧客有想下單的動作",
    ],
    tags: ["LSTM", "Random Forest", "Time Series", "Customer Behavior", "VIP"],
  },
];

export default PROJECTS;
