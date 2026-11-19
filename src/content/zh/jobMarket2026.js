// Standalone report page /portfolio-data/job-market-2026 (2025 vs 2026 AI impact).
// Every number comes from the Notion page「收斂報告 v2」Step 1／2 (job-market-2026 main
// 018e17c, reports/ regenerated 2026-11-12); comments name the report section.
// Changes are written as "%" on purpose (Shirley 2026-11-14): differences between two
// shares, never relative growth.

const JOB_MARKET_2026 = {
  meta: {
    title: "AI 對台灣數據職缺的影響：2025 vs 2026",
    back: "← 回資料科學作品集",
    // line breaks as Shirley set them (2026-11-14)
    conclusion: {
      lead: "2026 的數據職缺轉向 **AI 應用整合**：",
      lines: [
        "大量職缺**掛上 AI 職稱**，內容從「訓練模型」轉向「**把 AI 接進產品和流程**」",
        "**傳統 DA／DE 職缺的占比縮小**，但 SQL、統計等**核心要求看不出變化**",
        "條件相近時，要求 AI 技能的職缺**薪資中位數高約 14%**，兩年都在",
      ],
    },
    // header bullets: what the data is
    facts: [
      { label: "資料", value: "104 人力銀行 12 個數據職缺關鍵字（相關性排序前 29／30 頁）" },
      { label: "時間", value: "2025 年 3–4 月 vs 2026 年 11 月，兩個快照" },
      { label: "樣本", value: "清洗後 2025 1,890 筆、2026 2,200 筆" },
      { label: "顯著", value: "多重比較 BH-FDR 校正後 q < 0.05" },
    ],
  },

  // KPI row: big = 2026, small = 2025 and the change; premium is a single value.
  // Same 3 figures as the project card (projectsData.js) and the experience entry (contract #11);
  // note = the insight line under the change (ai_impact 2.1, 9 / 1.1, 1.2)
  kpis: [
    { label: "職稱掛 AI 的職缺", from: 40.9, to: 58.0, note: "同一批職缺只 42.0% → 45.3%：是新職缺，不是改名" },
    { label: "傳統分析師職缺占比", from: 36.1, to: 25.7, note: "傳統 DE 也從 17.2% 降到 12.9%" },
    { label: "AI 技能薪資溢價（中位數）", value: "約 +14%", sub: "2025 +13.5%／2026 +14.3%" },
  ],

  ui: {
    showTable: "看表格",
    showChart: "看圖",
    // one encoding for the whole page, shown once under the KPI row
    legend: {
      title: "全頁圖例",
      y2025: "灰色＝2025／對照",
      y2026: "主色＝2026／重點",
      sig: "實心＝顯著（q < 0.05）",
      notSig: "空心＝看不出差異",
    },
    y2025: "2025",
    y2026: "2026",
    change: "變化",
    measureLabel: "指標",
    ci: "95% 信賴區間",
    premium: "薪資中位數溢價",
    count: "提到的職缺數",
    methodsTitle: "方法與限制",
    q: "q",
    z: "z",
    // punctuation used when components join values: "12.8%（281）", "1,890／2,200", "+14.1% ～ +20.1%"
    punct: { open: "（", close: "）", slash: "／", range: " ～ " },
  },

  // 0 overview: change of each share (2026 − 2025, in %) with 95% Newcombe CI
  forest: {
    title: "職缺占比的變化：跟 **AI 應用**有關的**上升**，傳統職缺和模型研發**下降**，SQL、統計**沒動**",
    measure: [
      "每一列＝該類職缺占全部職缺的比例，2026 減 2025 的差",
      "「傳統分析師提到」4 列＝傳統分析師職缺裡，描述提到該技能的比例",
    ],
    note: [
      "兩比例 z 檢定＋Newcombe 95% 信賴區間，BH-FDR 校正；區間沒碰到 0 線＝顯著",
      "變化是用未四捨五入的占比算的，跟兩年占比直接相減可能差 0.1%",
      "傳統分析師職缺＝職稱沒掛 AI 的 BA／DA／DS（2025 682 筆、2026 565 筆）；傳統 DE 職缺＝職稱沒掛 AI 的 DE",
      "出處：ai_impact 報告 1.1–1.3、2.1、2.4 節",
    ],
    columns: ["指標", "2025 占比", "2026 占比", "變化", "95% 信賴區間", "q"],
    // section: ai_impact 2.1 / 1.3 / 1.2 / 2.4
    rows: [
      { label: "職稱掛 AI 的職缺", from: 40.9, to: 58.0, diff: 17.1, lo: 14.1, hi: 20.1, q: "< 0.001", sig: true },
      { label: "職稱掛 AI 的 DE 職缺", from: 4.3, to: 12.8, diff: 8.5, lo: 6.8, hi: 10.2, q: "< 0.001", sig: true },
      { label: "主題：智慧系統與軟體整合", from: 8.5, to: 14.3, diff: 5.8, lo: 3.8, hi: 7.7, q: "< 0.001", sig: true },
      { label: "主題：系統需求與專案管理", from: 9.8, to: 15.0, diff: 5.3, lo: 3.2, hi: 7.3, q: "< 0.001", sig: true },
      { label: "傳統分析師提到：流程自動化", from: 4.7, to: 9.6, diff: 4.9, lo: 2.0, hi: 7.9, q: "0.008", sig: true },
      { label: "傳統分析師提到：生成式 AI", from: 1.2, to: 3.9, diff: 2.7, lo: 1.0, hi: 4.7, q: "0.009", sig: true },
      { label: "傳統分析師提到：SQL", from: 9.4, to: 9.7, diff: 0.4, lo: -2.9, hi: 3.7, q: "0.834", sig: false },
      { label: "傳統分析師提到：統計", from: 14.2, to: 12.2, diff: -2.0, lo: -5.7, hi: 1.8, q: "0.447", sig: false },
      { label: "主題：AI 模型開發與訓練", from: 12.0, to: 8.9, diff: -3.1, lo: -5.0, hi: -1.2, q: "0.004", sig: true },
      { label: "傳統 DE 職缺", from: 17.2, to: 12.9, diff: -4.3, lo: -6.5, hi: -2.1, q: "< 0.001", sig: true },
      { label: "要求深度學習的職缺", from: 19.5, to: 13.1, diff: -6.4, lo: -8.7, hi: -4.1, q: "< 0.001", sig: true },
      { label: "傳統分析師職缺", from: 36.1, to: 25.7, diff: -10.4, lo: -13.2, hi: -7.6, q: "< 0.001", sig: true },
    ],
  },

  // 1: all jobs vs the 364 jobs posted in both years (ai_impact 2.1, 9)
  slope: {
    title: "職稱 AI 化是 2026 **換了一批職缺**在徵，**不是舊職缺改名**",
    measure: ["職稱有 AI 字的職缺占比：全部職缺 vs 兩年都在徵的同一批職缺"],
    note: [
      "同一批職缺＝兩年 jobNo 相同的 364 個職缺；McNemar 精確檢定 q 0.121（看不出差異）",
      "全部職缺 q < 0.001；調整搜尋關鍵字組成後，2026 仍有 53.2%",
      "出處：ai_impact 報告 2.1、9 節",
    ],
    columns: ["職缺範圍", "2025 占比", "2026 占比", "筆數"],
    series: [
      { key: "all", label: "全部職缺", from: 40.9, to: 58.0, n: "1,890 → 2,200 筆", sig: true },
      { key: "same", label: "兩年都在徵的同一批職缺", from: 42.0, to: 45.3, n: "364 筆", sig: false },
    ],
  },

  // 2: weighted log-odds words, |z| > 1.96; bar = share 2026 − share 2025 (ai_impact 3)
  words: {
    title: "徵才用詞從「研發」轉向「**落地**」",
    measure: ["職缺描述提到該詞的比例，2026 減 2025 的差"],
    note: [
      "用 weighted log-odds（Monroe et al. 2008）挑出兩年差異最明顯（|z| > 1.96）的詞",
      "「agent」大多指 AI agent（抽 10 筆有 8 筆），少數是採購／業務代理",
      "出處：ai_impact 報告第 3 節",
    ],
    columns: ["用詞", "2025 提到的比例", "2026 提到的比例", "變化", "z"],
    rows: [
      { word: "agent", from: 1.8, to: 11.0, z: 5.82 },
      { word: "自動化", from: 5.8, to: 12.5, z: 3.27 },
      { word: "落地", from: 4.1, to: 9.0, z: 2.86 },
      { word: "RAG", from: 2.5, to: 6.6, z: 2.98 },
      { word: "串接", from: 2.6, to: 6.5, z: 2.75 },
      { word: "知識庫", from: 0.2, to: 2.0, z: 2.74 },
      { word: "自然語言處理", from: 4.2, to: 1.9, z: -2.89 },
      { word: "演算法", from: 11.4, to: 8.2, z: -2.63 },
      { word: "深度學習", from: 10.8, to: 6.5, z: -3.46 },
      { word: "機器學習", from: 23.9, to: 16.5, z: -4.15 },
    ],
    up: "2026 比較常出現",
    down: "2025 比較常出現",
  },

  // 3: DE (LDA content category) split by AI title, counts out of all jobs (ai_impact 1.1, 1.2)
  de: {
    title: "DE 職缺看起來變多，**增加的全是職稱掛 AI 的 DE**；**傳統 DE 在縮**",
    measure: ["DE 職缺占全部職缺的比例，拆成「傳統 DE」和「職稱掛 AI 的 DE」兩層"],
    note: [
      "DE＝依職缺描述內容（2025 主題模型）歸為資料工程的職缺；兩層的變化都顯著（q < 0.001）",
      "改用職稱判斷的 DE 也是下降：10.9% → 6.2%",
      "出處：ai_impact 報告 1.1、1.2 節",
    ],
    columns: ["DE 職缺", "2025 占比（筆數）", "2026 占比（筆數）"],
    total: { 2025: 1890, 2026: 2200 },
    layers: [
      { key: "plain", label: "傳統 DE（職稱沒有 AI）", 2025: 325, 2026: 283 },
      { key: "ai", label: "職稱掛 AI 的 DE", 2025: 81, 2026: 281 },
    ],
    totalLabel: "DE 合計",
  },

  // 4: traditional analyst jobs (BA/DA/DS, no AI in title), ai_impact 2.4
  skills: {
    title: "傳統分析師職缺：SQL、統計要求**沒變**，多了**流程自動化**和**生成式 AI**",
    measure: ["傳統分析師職缺（職稱沒掛 AI 的 BA／DA／DS）裡，描述提到該技能的比例"],
    note: [
      "樣本：2025 682 筆、2026 565 筆",
      "生成式 AI 的增加主要在 DS（1.9% → 8.0%），DA 單看看不出差異",
      "出處：ai_impact 報告 2.4 節",
    ],
    columns: ["技能", "2025 提到的比例", "2026 提到的比例", "q"],
    rows: [
      { skill: "SQL", from: 9.4, to: 9.7, n: "64 → 55 筆", q: "0.834", sig: false },
      { skill: "統計／AB Test", from: 14.2, to: 12.2, n: "97 → 69 筆", q: "0.447", sig: false },
      { skill: "流程自動化", from: 4.7, to: 9.6, n: "32 → 54 筆", q: "0.008", sig: true },
      { skill: "生成式 AI", from: 1.2, to: 3.9, n: "8 → 22 筆", q: "0.009", sig: true },
    ],
  },

  // 5: median (Q50) premium of ML/AI skills, five categories + category model (ai_impact 4)
  premium: {
    title: "條件相近時，要求 AI 技能的職缺**薪資中位數高約 14%**，**兩年都在**",
    measure: ["條件相近時，要求 AI 技能的職缺比沒要求的，最高月薪中位數高多少"],
    note: [
      "分位數迴歸（中位數），控制職務類別、年資、學歷、公司規模、能否遠端",
      "樣本：有公開月薪的職缺（2025 341 筆、2026 391 筆）",
      "兩年溢價的差異用年份交互項檢定：q 0.917，看不出差異；單看分析師類時看不出溢價",
      "出處：ai_impact 報告第 4 節",
    ],
    columns: ["年份", "薪資中位數溢價", "q"],
    rows: [
      { year: "2025", value: 13.5, q: "0.012" },
      { year: "2026", value: 14.3, q: "0.012" },
    ],
  },

  // collapsed section at the bottom; only the "what we can say" side of Step 3
  methods: [
    {
      title: "分析流程",
      items: [
        "爬蟲：用 104 列表 API 爬兩個時間點，12 個關鍵字各取相關性排序前段",
        "清洗：兩年套同一套 v2 規則（職稱字邊界、面議改缺值、排除化學／臨床分析師）",
        "主題模型：LDA 套 2025 模型比兩年；另用 2026 資料重訓 50 個模型，只採 35／50 個以上模型都出現的主題",
        "檢定：兩比例 z 檢定＋Newcombe 信賴區間＋BH-FDR；同一批職缺用 McNemar；薪資用分位數迴歸＋年份交互項",
      ],
    },
    {
      title: "限制",
      items: [
        "比的是「樣本裡的占比」，不是職缺數量：每個關鍵字只抓前 29／30 頁",
        "只有兩個快照（3–4 月 vs 11 月），看不出中間怎麼變，也拆不開季節效應",
        "104 列表只給描述前約 120 字，「沒提到」不等於「不需要」",
        "薪資只含有公開月薪的職缺（約 18%），是刊登薪資、未扣通膨；溢價是相關，不是因果",
      ],
    },
  ],
};

export default JOB_MARKET_2026;
