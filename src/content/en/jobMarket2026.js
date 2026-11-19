// Standalone report page /portfolio-data/job-market-2026 (2025 vs 2026 AI impact), English.
// Translation of content/zh/jobMarket2026.js; every number must match the Chinese file
// (source: Notion「收斂報告 v2」Step 1／2). Changes stay in "%" (Shirley 2026-11-14):
// differences between two shares, never relative growth.
// Terminology follows Indeed Hiring Lab / Lightcast usage (job postings, share of postings
// mentioning X, advertised salary). `short` = chart axis label; tables and tooltips show `label`.

const JOB_MARKET_2026 = {
  meta: {
    title: "AI's Impact on Taiwan's Data Job Market: 2025 vs 2026",
    back: "← Back to data science portfolio",
    conclusion: {
      lead: "In 2026, data job postings shifted toward **applied AI integration**:",
      lines: [
        "Many postings **put AI in the job title**, and the content moved from \"training models\" to \"**building AI into products and processes**\"",
        "**DA/DE postings without AI in the title made up a smaller share**, but core requirements such as SQL and statistics **showed no detectable change**",
        "Postings requiring AI skills carried a **~14% higher median salary** in both years",
      ],
    },
    facts: [
      { label: "Data", value: "104 Job Bank (Taiwan's largest job board), 12 data-job search keywords (top 29/30 result pages per keyword, sorted by relevance)" },
      { label: "Period", value: "Two snapshots: 2025/3–4 vs 2026/11" },
      { label: "Sample", value: "After cleaning: 1,890 postings (2025), 2,200 postings (2026)" },
      { label: "Significance", value: "q < 0.05 after BH-FDR correction for multiple comparisons" },
    ],
  },

  kpis: [
    // same 3 figures as the project card and the experience entry (contract #11)
    { label: "Postings with AI in the Title", from: 40.9, to: 58.0, note: "Same postings only 42.0% → 45.3%: new postings, not renamed ones" },
    { label: "Share of Analyst Postings without AI in the Title", from: 36.1, to: 25.7, note: "DE postings without AI also fell from 17.2% to 12.9%" },
    { label: "AI-Skill Salary Premium (Median)", value: "~+14%", sub: "2025 +13.5% / 2026 +14.3%" },
  ],

  ui: {
    showTable: "Show table",
    showChart: "Show chart",
    legend: {
      title: "Legend (all charts)",
      y2025: "Gray = 2025 / comparison",
      y2026: "Accent color = 2026 / focus",
      sig: "Filled = significant (q < 0.05)",
      notSig: "Open = no detectable difference",
    },
    y2025: "2025",
    y2026: "2026",
    change: "Change",
    measureLabel: "Metric",
    ci: "95% CI",
    premium: "Median salary premium",
    count: "Postings mentioning",
    methodsTitle: "Methods & Limitations",
    q: "q",
    z: "z",
    punct: { open: " (", close: ")", slash: " / ", range: " to " },
  },

  forest: {
    title: "Change in posting share: **applied-AI** categories **rose**, traditional roles and model R&D **fell**, SQL and statistics showed **no detectable change**",
    measure: [
      "Each row = change in that category's share of all postings (2026 minus 2025)",
      "The 4 \"Analysts:\" rows = share of analyst postings without AI in the title whose description mentions the skill",
    ],
    note: [
      "Two-proportion z-test + Newcombe hybrid score 95% CI, BH-FDR corrected; intervals that do not cross 0 are significant",
      "Changes are computed from unrounded shares, so they may differ by 0.1% from the difference of the rounded shares",
      "Analyst postings without AI in the title = BA/DA/DS (2025: 682, 2026: 565); DE postings without AI in the title are defined the same way",
      "Source: ai_impact report §1.1–1.3, 2.1, 2.4",
    ],
    columns: ["Metric", "2025 share", "2026 share", "Change", "95% CI", "q"],
    rows: [
      { label: "Postings with AI in the title", short: "AI-titled postings", from: 40.9, to: 58.0, diff: 17.1, lo: 14.1, hi: 20.1, q: "< 0.001", sig: true },
      { label: "DE postings with AI in the title", short: "AI-titled DE", from: 4.3, to: 12.8, diff: 8.5, lo: 6.8, hi: 10.2, q: "< 0.001", sig: true },
      { label: "Topic: AI systems & software integration", short: "Topic: AI integration", from: 8.5, to: 14.3, diff: 5.8, lo: 3.8, hi: 7.7, q: "< 0.001", sig: true },
      { label: "Topic: requirements & project management", short: "Topic: requirements & PM", from: 9.8, to: 15.0, diff: 5.3, lo: 3.2, hi: 7.3, q: "< 0.001", sig: true },
      { label: "Analysts mentioning: process automation (incl. RPA)", short: "Analysts: automation/RPA", from: 4.7, to: 9.6, diff: 4.9, lo: 2.0, hi: 7.9, q: "0.008", sig: true },
      { label: "Analysts mentioning: generative AI", short: "Analysts: GenAI", from: 1.2, to: 3.9, diff: 2.7, lo: 1.0, hi: 4.7, q: "0.009", sig: true },
      { label: "Analysts mentioning: SQL", short: "Analysts: SQL", from: 9.4, to: 9.7, diff: 0.4, lo: -2.9, hi: 3.7, q: "0.834", sig: false },
      { label: "Analysts mentioning: statistics", short: "Analysts: statistics", from: 14.2, to: 12.2, diff: -2.0, lo: -5.7, hi: 1.8, q: "0.447", sig: false },
      { label: "Topic: AI model development & training", short: "Topic: model dev & training", from: 12.0, to: 8.9, diff: -3.1, lo: -5.0, hi: -1.2, q: "0.004", sig: true },
      { label: "DE postings without AI in the title", short: "DE (no AI title)", from: 17.2, to: 12.9, diff: -4.3, lo: -6.5, hi: -2.1, q: "< 0.001", sig: true },
      { label: "Postings requiring deep learning", short: "Deep learning", from: 19.5, to: 13.1, diff: -6.4, lo: -8.7, hi: -4.1, q: "< 0.001", sig: true },
      { label: "Analyst postings without AI in the title", short: "Analysts (no AI title)", from: 36.1, to: 25.7, diff: -10.4, lo: -13.2, hi: -7.6, q: "< 0.001", sig: true },
    ],
  },

  slope: {
    title: "The rise in AI job titles reflects **a different mix of postings in 2026**, **not retitling** of existing jobs",
    measure: ["Share of postings with AI in the title: all postings vs the postings that appeared in both snapshots"],
    note: [
      "Same postings = 364 postings matched by job ID across both snapshots; McNemar's exact test q 0.121 (no detectable difference)",
      "All postings q < 0.001; after reweighting for the search-keyword mix, the 2026 share is still 53.2%",
      "Source: ai_impact report §2.1, 9",
    ],
    columns: ["Postings", "2025 share", "2026 share", "n"],
    series: [
      { key: "all", label: "All postings", from: 40.9, to: 58.0, n: "1,890 → 2,200 postings", sig: true },
      { key: "same", label: "Same postings in both snapshots", from: 42.0, to: 45.3, n: "364 postings", sig: false },
    ],
  },

  words: {
    title: "Job-ad wording shifted from \"R&D\" to \"**deployment**\"",
    measure: ["Share of descriptions mentioning the term, 2026 minus 2025"],
    note: [
      "Weighted log-odds ratio with an informative Dirichlet prior (Monroe et al. 2008); showing terms with the largest differences (|z| > 1.96)",
      "The postings are in Chinese; the original term is in parentheses",
      "\"agent\" mostly means AI agent (8 of 10 sampled); a few are procurement/sales agents",
      "Source: ai_impact report §3",
    ],
    columns: ["Term", "2025 share mentioning", "2026 share mentioning", "Change", "z"],
    rows: [
      { word: "agent", from: 1.8, to: 11.0, z: 5.82 },
      { word: "automation (自動化)", from: 5.8, to: 12.5, z: 3.27 },
      { word: "deployment (落地)", from: 4.1, to: 9.0, z: 2.86 },
      { word: "RAG", from: 2.5, to: 6.6, z: 2.98 },
      { word: "integration (串接)", from: 2.6, to: 6.5, z: 2.75 },
      { word: "knowledge base (知識庫)", from: 0.2, to: 2.0, z: 2.74 },
      { word: "NLP (自然語言處理)", from: 4.2, to: 1.9, z: -2.89 },
      { word: "algorithm (演算法)", from: 11.4, to: 8.2, z: -2.63 },
      { word: "deep learning (深度學習)", from: 10.8, to: 6.5, z: -3.46 },
      { word: "machine learning (機器學習)", from: 23.9, to: 16.5, z: -4.15 },
    ],
    up: "More common in 2026",
    down: "More common in 2025",
  },

  de: {
    title: "DE's share appears to grow, but **all of the increase comes from AI-titled DE**; **DE without AI in the title shrank**",
    measure: ["DE postings as a share of all postings, split into DE without AI in the title and AI-titled DE"],
    note: [
      "DE = postings classified as data engineering by description content (2025 topic model); both layers changed significantly (q < 0.001)",
      "DE classified by job title also fell: 10.9% → 6.2%",
      "Source: ai_impact report §1.1, 1.2",
    ],
    columns: ["DE postings", "2025 share (n)", "2026 share (n)"],
    total: { 2025: 1890, 2026: 2200 },
    layers: [
      { key: "plain", label: "DE without AI in the title", 2025: 325, 2026: 283 },
      { key: "ai", label: "AI-titled DE", 2025: 81, 2026: 281 },
    ],
    totalLabel: "All DE",
  },

  skills: {
    title: "Analyst postings without AI in the title: SQL and statistics showed **no detectable change**; **process automation** and **generative AI** rose",
    measure: ["Share of analyst postings without AI in the title (BA/DA/DS) whose description mentions the skill"],
    note: [
      "Sample: 682 postings (2025), 565 postings (2026)",
      "The generative AI increase is mainly in DS (1.9% → 8.0%); DA alone shows no detectable difference",
      "Process automation matches 流程自動化, 自動化, 機器人, RPA, process automation and Airflow",
      "Source: ai_impact report §2.4",
    ],
    columns: ["Skill", "2025 share mentioning", "2026 share mentioning", "q"],
    rows: [
      { skill: "SQL", from: 9.4, to: 9.7, n: "64 → 55 postings", q: "0.834", sig: false },
      { skill: "Statistics / A/B testing", short: "Statistics / A/B", from: 14.2, to: 12.2, n: "97 → 69 postings", q: "0.447", sig: false },
      { skill: "Process automation (incl. RPA)", short: "Automation (RPA)", from: 4.7, to: 9.6, n: "32 → 54 postings", q: "0.008", sig: true },
      { skill: "Generative AI", short: "GenAI", from: 1.2, to: 3.9, n: "8 → 22 postings", q: "0.009", sig: true },
    ],
  },

  premium: {
    title: "Postings requiring AI skills have a **~14% higher median salary**, **in both years**",
    measure: ["How much higher the median advertised maximum monthly salary is for postings requiring AI skills, holding other factors constant"],
    note: [
      "Median (quantile) regression controlling for job category, experience, education, company size and remote work",
      "Sample: postings with an advertised monthly salary (2025: 341, 2026: 391)",
      "The year × AI-skill interaction tests the change between years: q 0.917, no detectable difference; analyst roles alone show no detectable premium",
      "Source: ai_impact report §4",
    ],
    columns: ["Year", "Median salary premium", "q"],
    rows: [
      { year: "2025", value: 13.5, q: "0.012" },
      { year: "2026", value: 14.3, q: "0.012" },
    ],
  },

  methods: [
    {
      title: "Methodology",
      items: [
        "Scraping: collected postings through the 104 Job Bank listing API at two points in time, keeping the top relevance-ranked pages for each of 12 keywords",
        "Cleaning: the same v2 rules for both years (word-boundary matching for job titles, \"negotiable\" salaries treated as missing, chemistry/clinical analyst roles excluded)",
        "Topic model: applied the 2025 LDA model to both years; retrained 50 models on 2026 data and kept only topics found in at least 35 of 50",
        "Tests: two-proportion z-test + Newcombe CI + BH-FDR; McNemar's exact test for the matched postings; median regression + year interaction for salary",
      ],
    },
    {
      title: "Limitations",
      items: [
        "Compares shares within the sample, not posting volume: only the top 29/30 pages per keyword were collected",
        "Only two snapshots (months 3–4 vs 11): changes between them are not observed, and seasonal effects cannot be isolated",
        "The 104 listing shows only the first ~120 characters of each description, so \"not mentioned\" ≠ \"not required\"",
        "Salary covers only postings with an advertised monthly salary (~18%); figures are nominal (not inflation-adjusted), and the premium is a correlation, not a causal effect",
      ],
    },
  ],
};

export default JOB_MARKET_2026;
