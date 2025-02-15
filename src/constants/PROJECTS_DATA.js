const PROJECTS = [
  {
    category: "碩士論文",
    tags: ["LSTM", "Customer Behavior", "Data Imbalance", "Random Forest"],
    projects: [
      {
        title: "辨識高價值顧客:探討顧客線上行為的影響及 LSTM 之應用",
        subtitle: "碩士論文",
        period: "2021~2022",
        image: "https://i.imgur.com/bgtC3nu.png",
        description:
          "使用 91APP 提供的店家網站資料，進行<span class='highlight'>顧客價值</span>的研究<br/>提出 2 種行為資料前處理方式(event-based & session-based) + 5 個實驗模型(Random Forest / LSTM) <br/>期望找出未來一年的高價值顧客<br/>VIP 定義: 80-20 法則<h3>研究架構</h3><img src='https://i.imgur.com/VOs8izP.png' alt='Thesis Structure'/>'",
        results:
          "1. 模型最佳表現 : <span class='highlight'>0.95 (F1 & AUC)</span><br/>2. <span class='highlight'>顧客的活躍度</span>是關鍵<br/>3. 應多引導顧客有想下單的動作<br/><h3>行銷策略</h3><img src='https://i.imgur.com/xjzDHg8.png' alt='Thesis result'/>",
        tags: [
          "LSTM",
          "Random Forest",
          "Customer Behavior",
          "VIP",
          "Undersampling",
        ],
        url: "https://github.com/HsinShan/Customer-Value-Prediction",
      },
    ],
  },
  {
    category: "研究所時期課程專案",
    tags: [
      "Rolling Window Prediction",
      "Statistics",
      "Text Mining",
      "Clustering",
      "Tree-based Models",
      "Linear Models",
      "SPSS",
      "EDA",
      "Data Visualization",
    ],
    projects: [
      {
        title: "共享單車之租賃需求預測與車輛調度規劃",
        subtitle: "製造數據科學期末專案",
        period: "2021.09~2022.01",
        image: "https://i.imgur.com/eM7un3i.png",
        description:
          "主要進行兩種研究: <br/> A. <span class='bold'>預測型研究</span>: 使用過去一年資料預測未來一天租借量(Random Forest)<br/>B. <span class='bold'>解釋型研究</span>: 總租借量分析及註冊／非註冊會員差異分析",
        results:
          "1. 預測的租借量可以看出上升或下降的趨勢(加入前一周的平均數據進行預測成效最佳)<br/>2. <span class='highlight'>非註冊會員假日租借量顯著高於平日,註冊會員則相反</span>(One-way Anova + Post Hoc)<br/>3. 租借量受到<span class='highlight'>天氣因素</span>的影響(PLS)",

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
          "主要針對個股: 玉晶光<br/>社群數據資料庫中挑選出看漲及看跌的一批 YAHOO 股市新聞文章<br/>提取出關鍵字並建構文本向量空間</br>使用 5 種不同分類演算法建立預測模型(Naive Bayes, KNN, SVM, Decision Tree, Random Forest)",
        results:
          "1. 以 <span class='highlight'>TF*DF 卡方指標</span>提取看漲看跌各 700 個關鍵字<br/><img src='https://i.imgur.com/paObsOb.png' alt='keywords' class='img-min'/><br/>2. 最佳模型預測準確度: <span class='highlight'>77%</span> (Naive Bayes)",
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
          "使用 91APP 提供的女鞋店家資料<br/>探討<span class='highlight'>受廣告影響不同程度的客群</span>之間的差異,以優化廣告投放的成效<br/>Step1: EDA 檢視分群差異<br/>Step2: 模型預測(使用 Decision Tree)，找出兩群人的重要特徵及分群依據",
        results:
          "<img src='https://i.imgur.com/urxSWtf.png' alt='ad impact result'/><h3>行銷策略</h3><img src='https://i.imgur.com/eGTDG3v.png' alt='strategy'/>",
        tags: ["Data EDA", "AD Impact Analysis", "Decision Tree", "Clustering"],
        url: "https://github.com/HsinShan/Data-Anaylsis-Portfolio/tree/main/AD%20Impact%20Analysis",
      },
      {
        title: "飯店營收預測",
        subtitle: "機器學習技法期末專案",
        period: "2020.11~2021.01",
        image: "https://i.imgur.com/5M0par1.png",
        description:
          "利用飯店訂房資料去預測每日營收<br/>試驗三種不同的預測方式，比較所有方法，並推薦較佳的方法:<br/>方法一→直接預測營收<br/>方法二→預測每筆訂單 ADR，並依照計算出每日非取消訂單佔比調整每日營收<br/>方法三→預測是否取消訂單,再預測每筆訂單的 ADR，最後計算每日的營收",
        results:
          "1. 推薦<span class='highlight'>使用方法三</span>用來預測 revenue，透過個別預測訂單是否被取消及訂單的 ADR,可以更準確估計 daily revenue<br/>2. <span class='highlight'>Private score(MAE) 下降至 0.44</span>",
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
          "探討台灣政治人物在經營臉書大致分為哪些主要的類別，來提供新進者或是社群經營成效不佳的政治人物參考的依據<br/><span class='highlight'>使用 k-means 及 HAC 分群</span><h3>研究方法</h3>Step 1: 爬取六都得票率前2高的立委候選人選前兩個月的臉書貼文<br/>Step 2: 標註貼文類別<br/>Step 3: 分群",
        results:
          "1. 分群結果能逐漸找到明顯的分群界線,但群內候選人<span class='highlight'>無相似特徵</span><br/>2. 推測可能因素: <span class='highlight'>資料區間太短、資料組數挑選太少、人工標註貼文內容有差異</span>",
        tags: ["HAC", "K-means", "Clustering"],
        url: "https://github.com/HsinShan/Data-Anaylsis-Portfolio/tree/main/Politician%20FB%20Strategy%20Cluster",
      },
      {
        title: "信用卡資料庫分析及行銷建議",
        subtitle: "大數據行銷期末專案",
        period: "2022.04~2022.06",
        image: "https://i.imgur.com/cqRZaqK.png",
        description:
          "使用信用卡公司的數據，將現有顧客分成 4 群，以分別依照各群差異進行精準行銷<br/>採用五種指標及分析方法，來將現有客戶進行分群，並提出各群相應的行銷決策建議<h3>分析方法</h3>Step 1: 使用 RFM、CAI、CRI指標對客戶進行靜態及動態的價值分析<br/>Step 2: 透過購物籃分析了解合適的刷卡產品類別組合，以便於做行銷決策的推薦<br/>Step 3: 藉由 Kmeans將現有客戶分為四群，了解各群間的差異性，以利於後續的行銷決策擬定。",
        results:
          "<img src='https://i.imgur.com/cqRZaqK.png' alt='Clustering Result'/> <h3>行銷策略</h3><img src='https://i.imgur.com/Vgg6G7d.png' alt='marketing strategies'/>",
        tags: [
          "SPSS",
          "K-means",
          "Clustering",
          "Marketing",
          "Customer Value",
          "Basket Analysis",
          "Statistics",
        ],
        url: "https://drive.google.com/file/d/1Tw_u9DVwmb0XxLNjcwvHuIWZxrChPgLz/view?usp=sharing",
      },
      {
        title: "Data Science Job 平均薪資分析及 Dream Job推薦",
        subtitle: "自製專案",
        period: "2022.09",
        image: "https://i.imgur.com/OlMLLe6.png",
        description:
          "主要針對 Kaggle 上的 data-scientist-jobs, data-engineer-jobs, data-analyst-jobs 及 business-analyst-jobs 進行分析 <br/> 分析一 : 哪些因素會影響 Data Science Job 的平均薪資?<br/>分析二 : 企業分群 - 透過企業概況欄位分群,將企業分類<br/>→ 透過兩項分析提供企業推薦<br/><br/>P.S. 整體推薦方向是以平均薪資的角度做推薦",
        results:
          "<img src='https://i.imgur.com/46DnuEh.png' alt='result1'/><img src='https://i.imgur.com/3hKVGLz.png' alt='result2'/><img src='https://i.imgur.com/uzs83hi.png' alt='result3'/><img src='https://i.imgur.com/6p9ECy7.png' alt='result4'/>",
        tags: [
          "EDA",
          "Data Visualization",
          "Clustering",
          "Kmeans",
          "Statistics",
        ],
        url: "https://github.com/HsinShan/Data-Science-Job-Analysis",
      },
    ],
  },
];

export default PROJECTS;
