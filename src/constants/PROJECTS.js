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
  {
    title: "共享單車之租賃需求預測與車輛調度規劃",
    subtitle: "製造數據科學期末專案",
    period: "2021.09~2022.01",
    image: "https://i.imgur.com/eM7un3i.png",
    description: [
      "A. 預測型研究: 使用過去一年資料預測未來一天租借量",
      "B. 解釋型研究(總租借量分析及註冊／非註冊會員差異分析)",
    ],
    results: [
      "預測的租借量可以看出上升或下降的趨勢",
      "非註冊會員假日租借量最多,註冊會員則相反",
      "租借量受到天氣因素的影響",
    ],
    tags: [
      "Rolling Window Prediction",
      "Random Forest",
      "Statistical Modeling",
    ],
  },
  {
    title: "用AI及社群數據協助投資決策",
    subtitle: "大數據與商業分析期中專案",
    period: "2021.03~2022.05",
    image: "https://i.imgur.com/F7708kK.png",
    description: [
      "社群數據資料庫中挑選出看漲及看跌的一批新聞文章",
      "提取出關鍵字並建構文本向量空間",
      "建立預測模型",
    ],
    results: [
      "以 TF*DF 卡方指標提取看漲看跌各 700 個關鍵字",
      "最佳模型預測準確度: 77% (Naive Bayes)",
    ],
    tags: [
      "Text Mining",
      "N-gram",
      "Naive Bayes",
      "KNN",
      "SVM",
      "Decision Tree",
      "Random Forest",
      "Stock Prediction",
    ],
  },
  {
    title: "線上購買受到廣告影響的人群分析",
    subtitle: "大數據與商業分析期末專案",
    period: "2021.04~2022.06",
    image: "https://i.imgur.com/T2XO1f5.png",
    description: [
      "探討受廣告影響不同程度的客群之間的價,以優化廣告投放的成效",
      "EDA檢視分群差異",
      "分群貼標模型預測(使用 Decision Tree)",
    ],
    results: [
      "廣告投放對人群的購買意圖有顯著影響",
      "廣告引流的客群平均加入購物車的次數較多",
    ],
    tags: ["Data EDA", "AD Impact Analysis", "Decision Tree", "Clustering"],
  },
  {
    title: "飯店營收預測",
    subtitle: "機器學習技法期末專案",
    period: "2020.11~2021.01",
    image: "https://i.imgur.com/5M0par1.png",
    description: [
      "利用現有的飯店訂房資料去預測每天的營收",
      "試驗三種不同的預測方式",
      "比較所有方法並推薦較佳的方法",
      "方法一:直接預測 label",
      "方法二:計算每日非取消訂單佔每日所有訂單的營收比例平均值作為對於每日營收高估的調整比例,再預測每筆訂單的 ADR 並且計算每日的營收後,將每日的營收依照算出的比例進行調整",
      "方法三:先預測測試資料的訂單是否是取消訂單,再預測每筆訂單的 ADR 並且計算每日的營收,最後將營收以萬為單位紀錄,得到預測的 label",
    ],
    results: [
      "推薦使用方法三用來預測 revenue",
      "透過個別預測訂單是否被取消及訂單的 ADR,可以更準確估計 daily revenue",
      "Private score(MAE) 下降至 0.39",
    ],
    tags: [
      "Logistic regression",
      "Linear regression",
      "XGBoost",
      "Revenue Prediction",
    ],
  },
  {
    title: "政治人物經營不同社群媒體之策略分析",
    subtitle: "資訊管理期末專案",
    period: "2020.10~2021.01",
    image: "https://i.imgur.com/zGDiXsP.png",
    description: [
      "探討台灣政治人物在經營臉書大致分為哪些主要的類別，來提供新進者或是社群經營成效不佳的政治人物參考的依據",
      "使用 k-means 分群及 HAC 分群",
    ],
    results: [
      "分群結果能逐漸找到明顯的分群界線,但群內候選人無相似特徵",
      "可能因素: 資料區間太短、資料組數挑選太少、人工標註貼文內容有差異",
    ],
    tags: ["HAC", "K-means", "Clustering"],
  },
];

export default PROJECTS;
