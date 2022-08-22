const PROJECTS = [
  {
    title: "辨識高價值顧客:探討顧客線上行為的影響及 LSTM 之應用",
    subtitle: "碩士論文",
    period: "2021~2022",
    image: "https://i.imgur.com/bgtC3nu.png",
    description:
      "使用 91APP 提供的店家網站資料，進行<span class='highlight'>顧客價值</span>的研究<br/>提出 2 種行為資料前處理方式 + 5 個實驗模型 <br/>期望找出未來一年的高價值顧客<br/><h3>研究架構</h3><img src='https://i.imgur.com/VOs8izP.png' alt='Thesis Structure'/>'",
    results:
      "1. 模型最佳表現 : <span class='highlight'>0.95 (F1 & AUC)</span><br/>2. <span class='highlight'>顧客的活躍度</span>是關鍵<br/>3. 應多引導顧客有想下單的動作<br/><h3>管理意涵</h3><img src='https://i.imgur.com/bpBTKXU.png' alt='Thesis result'/>",
    tags: [
      "LSTM",
      "Random Forest",
      "Time Series",
      "Customer Behavior",
      "VIP",
      "Undersampling",
    ],
    url: "https://github.com/HsinShan/Customer-Value-Prediction",
  },
  {
    title: "共享單車之租賃需求預測與車輛調度規劃",
    subtitle: "製造數據科學期末專案",
    period: "2021.09~2022.01",
    image: "https://i.imgur.com/eM7un3i.png",
    description:
      "主要進行兩種研究: <br/> A. <span class='bold'>預測型研究</span>: 使用過去一年資料預測未來一天租借量(Random Forest)<br/>B. <span class='bold'>解釋型研究</span>: 總租借量分析及註冊／非註冊會員差異分析",
    results:
      "1. 預測的租借量可以看出上升或下降的趨勢<br/>2. <span class='highlight'>非註冊會員假日租借量顯著高於平日,註冊會員則相反</span><br/>3. 租借量受到<span class='highlight'>天氣因素</span>的影響",

    tags: [
      "Rolling Window Prediction",
      "Random Forest",
      "Statistical Modeling",
      "One-way Anova",
      "Post Hoc",
      "PLS",
    ],
    url: "https://github.com/HsinShan/Data-Anaylsis-Portfolio/tree/main/Bike%20Rental%20Demand%20Prediction",
  },
  {
    title: "用AI及社群數據協助投資決策",
    subtitle: "大數據與商業分析期中專案",
    period: "2021.03~2022.05",
    image: "https://i.imgur.com/F7708kK.png",
    description:
      "社群數據資料庫中挑選出看漲及看跌的一批 YAHOO 股市新聞文章<br/>提取出關鍵字並建構文本向量空間</br>使用 5 種不同分類演算法建立預測模型",
    results:
      "1. 以 <span class='highlight'>TF*DF 卡方指標</span>提取看漲看跌各 700 個關鍵字<br/><img src='https://i.imgur.com/paObsOb.png' alt='keywords'/><br/>2. 最佳模型預測準確度: <span class='highlight'>77%</span> (Naive Bayes)",
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
    url: "https://github.com/HsinShan/Data-Anaylsis-Portfolio/tree/main/Stock%20Prediction",
  },
  {
    title: "線上購買受到廣告影響的人群分析",
    subtitle: "大數據與商業分析期末專案",
    period: "2021.04~2022.06",
    image: "https://i.imgur.com/T2XO1f5.png",
    description:
      "探討受廣告影響不同程度的客群之間的差異,以優化廣告投放的成效<br/>EDA檢視分群差異<br/>模型預測(使用 Decision Tree)，找出兩群人的重要特徵",
    results:
      "1. 廣告投放對人群的購買意圖有顯著影響<br/><img src='https://i.imgur.com/urxSWtf.png' alt='ad impact result'/><br/>2. <span class='highlight'>廣告引流的客群平均加入購物車的次數較多</span><h3>行銷策略</h3><img src='https://i.imgur.com/eGTDG3v.png' alt='strategy'/>",
    tags: ["Data EDA", "AD Impact Analysis", "Decision Tree", "Clustering"],
    url: "https://github.com/HsinShan/Data-Anaylsis-Portfolio/tree/main/AD%20Impact%20Analysis",
  },
  {
    title: "飯店營收預測",
    subtitle: "機器學習技法期末專案",
    period: "2020.11~2021.01",
    image: "https://i.imgur.com/5M0par1.png",
    description:
      "利用飯店訂房資料去預測每天的營收<br/>試驗三種不同的預測方式，比較所有方法並推薦較佳的方法:<br/>方法一→直接預測營收<br/>方法二→預測每筆訂單 ADR，並依照計算出每日非取消訂單佔比調整每日營收<br/>方法三→預測是否取消訂單,再預測及每筆訂單的 ADR，以計算每日的營收",
    results:
      "1. 推薦<span class='highlight'>使用方法三</span>用來預測 revenue，透過個別預測訂單是否被取消及訂單的 ADR,可以更準確估計 daily revenue<br/>2. <span class='highlight'>Private score(MAE) 下降至 0.39</span>",
    tags: [
      "Logistic regression",
      "Linear regression",
      "XGBoost",
      "Revenue Prediction",
    ],
    url: "https://github.com/HsinShan/Data-Anaylsis-Portfolio/tree/main/Hotel%20Revenue%20Prediction",
  },
  {
    title: "政治人物經營不同社群媒體之策略分析",
    subtitle: "資訊管理期末專案",
    period: "2020.10~2021.01",
    image: "https://i.imgur.com/zGDiXsP.png",
    description:
      "探討台灣政治人物在經營臉書大致分為哪些主要的類別，來提供新進者或是社群經營成效不佳的政治人物參考的依據<br/><span class='highlight'>使用 k-means 分群及 HAC 分群</span>",
    results:
      "1. 分群結果能逐漸找到明顯的分群界線,但群內候選人<span class='highlight'>無相似特徵</span><br/>2. 推測可能因素: <span class='highlight'>資料區間太短、資料組數挑選太少、人工標註貼文內容有差異</span>",
    tags: ["HAC", "K-means", "Clustering"],
    url: "https://github.com/HsinShan/Data-Anaylsis-Portfolio/tree/main/Politician%20FB%20Strategy%20Cluster",
  },
];

export default PROJECTS;
