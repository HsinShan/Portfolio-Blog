const PROJECTS = [
  {
    category: "2026 Personal Research",
    tags: ["Web Scraping", "NLP", "Topic Modeling", "Hypothesis Testing", "Quantile Regression", "Data Visualization"],
    projects: [
      {
        title: "AI's Impact on Taiwan's Data Job Market: 2025 vs 2026 (2026/11)",
        subtitle: "Personal Research",
        stats: [
          { value: "1,890 → 2,200", label: "job postings (2025 → 2026)" },
          { value: "40.9% → 58.0%", label: "postings with AI in the title" },
          { value: "~+14%", label: "AI-skill salary premium (median)" },
        ],
        period: "2026.11",
        image: "/images/job-market-2026-en.png",
        // numbers: Notion「收斂報告 v2」Step 1／2 (same source as content/zh/jobMarket2026.js)
        description:
          "Scraped 2026 data job postings from 104 Job Bank (Taiwan's largest job board) and compared them with the 2025 dataset under the same cleaning rules<br/>Goal: test whether job titles, responsibilities, skill requirements and salaries in data roles have changed as AI went mainstream<h3>Methods</h3>1. Scraping & cleaning: applied the same v2 cleaning rules to both years (1,890 postings in 2025, 2,200 in 2026)<br/>2. Topic modeling: applied the 2025 LDA model to both years, then retrained 50 models on 2026 data and kept only the topics most models agreed on<br/>3. Hypothesis testing: two-proportion z-tests with 95% CIs and BH-FDR correction for multiple comparisons (significant at q &lt; 0.05)<br/>4. Salary: median (quantile) regression with a year interaction term to test whether the AI-skill premium changed",
        results:
          "Data job postings shifted toward applied AI integration. DA/DE postings without AI in the title made up a smaller share, but SQL and statistics requirements showed no detectable change. Postings requiring AI skills carried a ~14% higher median salary in both years<br/><br/>"
          + "<span class='highlight'>1. Postings with \"AI\" in the title surged, driven mainly by a different mix of postings in 2026 rather than by retitling existing jobs</span><br/>・Postings with AI in the title: 40.9% → 58.0%<br/>・Among the 364 postings that appeared in both snapshots, the AI-titled share rose only from 42.0% to 45.3%, so little retitling occurred<br/>→ Most of the increase comes from a change in which jobs were posted in 2026<br/><br/>"
          + "<span class='highlight'>2. Content shifted from \"training models\" to \"building AI into products and processes\"</span><br/>・Topic shares (using the 2025 topic model): \"AI model development & training\" 12.0% → 8.9%; \"requirements & project management\" 9.8% → 15.0%; \"AI systems & software integration\" 8.5% → 14.3%<br/>・Postings requiring deep learning: 19.5% → 13.1%<br/>・Terms that became more common in descriptions: agent 1.8% → 11.0%, RAG 2.5% → 6.6%<br/><br/>"
          + "<span class='highlight'>3. DA/DE postings without AI in the title made up a smaller share; DE appears to grow only because AI-titled postings are being classified as DE</span><br/>・Analyst postings (BA/DA/DS) without AI in the title: 36.1% → 25.7%<br/>・All DE: 21.5% → 25.6%. Broken down, DE without AI in the title fell (17.2% → 12.9%), while AI-titled DE rose (4.3% → 12.8%)<br/><span class='note'>Note: these are shares of all postings, not posting counts</span><br/><br/>"
          + "<span class='highlight'>4. Analyst postings without AI in the title: SQL and statistics requirements held steady; process automation and generative AI are the new additions</span><br/>・Descriptions mentioning SQL: 9.4% → 9.7%; statistics: 14.2% → 12.2%; neither shows a detectable difference<br/>・Process automation (incl. RPA) 4.7% → 9.6%; generative AI 1.2% → 3.9% (mainly in DS postings)<br/>→ SQL and statistics remain table stakes; automation and GenAI tools are a plus<br/><br/>"
          + "<span class='highlight'>5. Postings requiring AI skills have a ~14% higher median salary, and the premium held in 2026 even as AI became mainstream</span><br/>・Controlling for job category, experience, education, company size and remote work: +13.5% in 2025 and +14.3% in 2026; the year-to-year difference is not significant<br/>・Overall salaries showed no detectable change (nominal, not inflation-adjusted)<br/><span class='note'>Note: the ~+14% is estimated across all data postings; analyst roles alone show no detectable premium</span>",
        tags: ["Web Scraping", "NLP", "LDA", "Hypothesis Testing", "Quantile Regression", "Recharts"],
        // in-site report page; no repo link (private repo)
        reportPath: "/portfolio-data/job-market-2026",
      },
    ],
  },
  {
    category: "2025 Personal Research",
    tags: [
      "NLP",
      "Topic Modeling",
      "Statistical Analysis",
      "Regression",
      "Apriori Association Rules",
    ],
    projects: [
      {
        title:
          "Decoding Taiwan's Data Job Market (2025/04): Role Classification, Skill Trends, and Salary Insights",
        subtitle: "Personal Research",
        // stat cards at the top of the detail modal; values also appear in the text below
        stats: [
          { value: "1,954", label: "data job postings" },
          { value: "0.645", label: "salary model Adj.\u00a0R²" },
          { value: "+53K", label: "master's + communication (max)" },
        ],
        period: "2025.04",
        image: "/images/job-market-2025-en.png",
        description:
          "1. Scraped and analyzed 1,954 data-related job postings in Taiwan, using NLP and LDA topic modeling to classify roles<br/>2. Applied statistical testing and regression modeling to identify the skill combinations and background factors associated with higher salaries<h3>Methods</h3>1. NLP preprocessing (jieba, spaCy), LDA topic modeling for job classification<br/>2. Statistical tests (t-test, ANOVA) to assess salary differences by role and skill<br/>3. OLS regression to model salary ceilings (Adj. R² = 0.645)<br/>4. Apriori association rules to uncover high-value skill combinations",
        results:
          "1. Cross-functional capabilities (technical + business thinking) drive the highest salary potential<br/>2. A master's degree combined with communication skills is strongly linked to managerial roles and higher pay (up to +53K)<br/>3. Technical depth in Python, machine learning, and ETL correlates with significant salary gains<br/>4. Execution-only skills (e.g., GA4/GTM, reporting) have limited impact on salary ceilings",
        tags: [
          "NLP",
          "Topic Modeling",
          "Statistical Analysis",
          "Regression",
          "Apriori Association Rules",
        ],
        url: "https://github.com/HsinShan/Data-Anaylsis-Portfolio/tree/main/104%20scraper",
      },
    ],
  },
  {
    category: "Master's Thesis",
    tags: ["LSTM", "Customer Behavior", "Data Imbalance", "Random Forest"],
    projects: [
      {
        title:
          "Identifying High-Value Customers: The Impact of Online Behavior and an Application of LSTM",
        subtitle: "Master's Thesis",
        period: "2021~2022",
        image: "/images/portfolio/bgtC3nu.png",
        description:
          "Studied <span class='highlight'>customer value</span> using e-commerce store data provided by 91APP<br/>Proposed 2 ways to preprocess behavioral data (event-based & session-based) and 5 experimental models (Random Forest / LSTM)<br/>Goal: identify customers who will become high-value in the next year<br/>VIP definition: the 80-20 rule<h3>Research Framework</h3><img src='/images/portfolio/VOs8izP.png' alt='Thesis Structure'/>",
        results:
          "1. <span class='highlight'>Online behavior has forward-looking value</span><br/>Behavior before a purchase (browsing, adding to cart, visit frequency) reveals the potential to become a high-value customer<br/>The event-based model with behavioral features reached an F1/AUC of 0.95<br/>2. <span class='highlight'>High activity ≠ immediate purchase</span>, but these customers can become VIPs<br/>Some active customers who haven't converted yet behave much like existing VIPs and are worth targeting and nurturing early<br/>3. <span class='highlight'>Intent-driven actions predict better than exposure alone</span><br/>High-intent actions such as adding to cart and viewing product details are key signals of future VIPs, far stronger than impressions or visit counts<br/>4. <span class='highlight'>Segmentation and marketing recommendations</span><br/><img src='/images/portfolio/xjzDHg8.png' alt='Thesis result'/>",
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
    category: "2020~2022 Graduate Coursework & Personal Projects",
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
        title: "Bike-Sharing Rental Demand Forecasting and Fleet Rebalancing",
        subtitle: "Manufacturing Data Science, Final Project",
        period: "2021.09~2022.01",
        image: "/images/portfolio/eM7un3i.png",
        description:
          "Two lines of research: <br/> A. <span class='bold'>Predictive</span>: forecast next-day rentals from the past year of data (Random Forest)<br/>B. <span class='bold'>Explanatory</span>: analysis of total rentals and of differences between registered and casual users",
        results:
          "1. Forecasts captured upward and downward trends (adding the previous week's average gave the best results)<br/>2. <span class='highlight'>Casual users rent significantly more on weekends than weekdays; registered users show the opposite</span> (One-way ANOVA + Post Hoc)<br/>3. Rentals are affected by <span class='highlight'>weather</span> (PLS)",

        tags: [
          "Rolling Window Prediction",
          "Random Forest",
          "Statistical Modeling",
          "One-way ANOVA",
          "Post Hoc",
          "PLS",
        ],
        url: "https://github.com/HsinShan/Data-Anaylsis-Portfolio/tree/main/Bike%20Rental%20Demand%20Prediction",
      },
      {
        title: "Using AI and Social Data to Support Investment Decisions",
        subtitle: "Big Data & Business Analytics, Midterm Project",
        // stat cards at the top of the detail modal; values also appear in the text below
        stats: [
          { value: "77%", label: "best model accuracy" },
          { value: "700", label: "keywords per bullish / bearish side" },
        ],
        period: "2021.03~2021.05",
        image: "/images/portfolio/F7708kK.png",
        description:
          "Focused on one stock: Genius Electronic Optical<br/>Selected bullish and bearish Yahoo Finance news articles from a social data database<br/>Extracted keywords and built a text vector space<br/>Built prediction models with 5 classification algorithms (Naive Bayes, KNN, SVM, Decision Tree, Random Forest)",
        results:
          "1. Extracted 700 keywords each for bullish and bearish news with the <span class='highlight'>TF*DF chi-square metric</span><br/><img src='/images/portfolio/paObsOb.png' alt='keywords' class='img-min'/><br/>2. Best model accuracy: <span class='highlight'>77%</span> (Naive Bayes)",
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
        title: "Segmenting Online Shoppers by Ad Influence",
        subtitle: "Big Data & Business Analytics, Final Project",
        period: "2021.04~2021.06",
        image: "/images/portfolio/T2XO1f5.jpg",
        description:
          "Used data from a women's shoe store provided by 91APP<br/>Compared <span class='highlight'>customer groups influenced by ads to different degrees</span> to improve ad performance<br/>Step1: EDA to examine differences between groups<br/>Step2: Decision Tree model to find the key features that separate the two groups",
        results:
          "<img src='/images/portfolio/urxSWtf.png' alt='ad impact result'/><h3>Marketing Strategy</h3><img src='/images/portfolio/eGTDG3v.png' alt='strategy'/>",
        tags: ["Data EDA", "AD Impact Analysis", "Decision Tree", "Clustering"],
        url: "https://github.com/HsinShan/Data-Anaylsis-Portfolio/tree/main/AD%20Impact%20Analysis",
      },
      {
        title: "Hotel Revenue Prediction",
        subtitle: "Machine Learning Techniques, Final Project",
        period: "2020.11~2021.01",
        image: "/images/portfolio/5M0par1.png",
        description:
          "Predicted daily revenue from hotel booking data<br/>Tested three approaches, compared them, and recommended the best one:<br/>Method one → predict revenue directly<br/>Method two → predict each booking's ADR, then adjust daily revenue by the share of non-canceled bookings<br/>Method three → predict whether a booking is canceled, then predict its ADR, and finally compute daily revenue",
        results:
          "1. Recommended <span class='highlight'>method three</span>: predicting cancellation and ADR per booking gives a more accurate estimate of daily revenue<br/>2. <span class='highlight'>Private score (MAE) dropped to 0.44</span>",
        tags: [
          "Logistic regression",
          "Linear regression",
          "XGBoost",
          "Revenue Prediction",
        ],
        url: "https://github.com/HsinShan/Data-Anaylsis-Portfolio/tree/main/Hotel%20Revenue%20Prediction",
      },
      {
        title: "How Politicians Run Their Social Media: A Strategy Analysis",
        subtitle: "Information Management, Final Project",
        period: "2020.10~2021.01",
        image: "/images/portfolio/zGDiXsP.png",
        description:
          "Explored the main types of Facebook strategies used by Taiwanese politicians, as a reference for newcomers or politicians whose pages underperform<br/><span class='highlight'>Clustered with k-means and HAC</span><h3>Methods</h3>Step 1: Scraped Facebook posts from the two months before the election, for the top 2 legislative candidates by vote share in each of the six special municipalities<br/>Step 2: Labeled post categories<br/>Step 3: Clustering",
        results:
          "1. Clear cluster boundaries gradually emerged, but candidates within a cluster <span class='highlight'>shared no common traits</span><br/>2. Likely causes: <span class='highlight'>too short a time window, too few candidates selected, and inconsistencies in manual labeling</span>",
        tags: ["HAC", "K-means", "Clustering"],
        url: "https://github.com/HsinShan/Data-Anaylsis-Portfolio/tree/main/Politician%20FB%20Strategy%20Cluster",
      },
      {
        title: "Credit Card Database Analysis and Marketing Recommendations",
        subtitle: "Big Data Marketing, Final Project",
        period: "2022.04~2022.06",
        image: "/images/portfolio/cqRZaqK.png",
        description:
          "Used a credit card company's data to split existing customers into 4 segments for targeted marketing<br/>Segmented customers with five metrics and analysis methods, then proposed marketing recommendations for each segment<h3>Methods</h3>Step 1: Static and dynamic customer value analysis with RFM, CAI, and CRI<br/>Step 2: Basket analysis to find suitable card spending category combinations for marketing recommendations<br/>Step 3: K-means to divide customers into four segments and understand how they differ, to inform marketing decisions",
        results:
          "<img src='/images/portfolio/cqRZaqK.png' alt='Clustering Result'/> <h3>Marketing Strategy</h3><img src='/images/portfolio/Vgg6G7d.png' alt='marketing strategies'/>",
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
        urlType: "slides", // Drive slide deck, not a repo: modal shows "See Slides"
      },
      {
        title: "Data Science Job Salary Analysis and Dream Job Recommendations",
        subtitle: "Personal Project",
        period: "2022.09",
        image: "/images/portfolio/OlMLLe6.png",
        description:
          "Analyzed the Kaggle datasets data-scientist-jobs, data-engineer-jobs, data-analyst-jobs, and business-analyst-jobs<br/>First analysis: which factors affect the average salary of data science jobs?<br/>Second analysis: company clustering based on company profile fields<br/>→ Combined both analyses to recommend companies<br/><br/>P.S. Recommendations are made from the perspective of average salary",
        results:
          "<img src='/images/portfolio/46DnuEh.png' alt='result1'/><img src='/images/portfolio/3hKVGLz.png' alt='result2'/><img src='/images/portfolio/uzs83hi.png' alt='result3'/><img src='/images/portfolio/6p9ECy7.png' alt='result4'/>",
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
