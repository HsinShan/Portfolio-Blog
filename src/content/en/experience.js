// Education & Experience timeline (newest first).
// Each block renders as one paragraph:
//   "text"                      -> <p>text</p>
//   { heading: "..." }          -> bold section title
//   { to: "/path", label }      -> in-site link (react-router)
//   { href: "https://...", label } -> external link
//   { stats: [{ value, label }] }   -> stat cards inside a sub-section (one per project)
//   { lead: "Findings:", items: ["Label: text", ...] } -> "◆ lead" + second-level bullets
// stats (optional): [{ value, label }] -> stat cards under the title
// color: "blue" = work, "red" = education

const EXPERIENCE = [
  {
    period: "2026.03-Present",
    color: "blue",
    title: "Independent Product Builder & Analyst | Career Break",
    // one sub-section per project; each project's { stats } block uses the same
    // numbers as its own page (product.js / stockTa.js kpis / jobMarket2026.js kpis)
    // and every value also appears in a bullet of the same sub-section
    blocks: [
      "Built 3 projects on my own with Claude Code: a color palette tool, a Taiwan-stock daily report automation, and a study of AI's impact on data jobs.",
      { heading: "Color Palette Tool" },
      "A web tool that extracts representative colors from photos; I designed its GA4 events and upgrade funnel and used funnel analysis to drive iterations.",
      {
        stats: [
          { value: "2,300+", label: "Active Users" },
          { value: "16%", label: "Landing → First Upload" },
          { value: "17/21", label: "Upgrade Clicks from Sample Data" },
        ],
      },
      "◆ Build: k-means clustering in CIELAB color space extracts true colors from photos, separating highlights and shadows",
      "◆ Launch: shipped with a 29-event GA4 tracking plan covering activation and upgrade funnels, reaching 2,300+ active users",
      "◆ Measure: landing-to-upload was only 16%, so added a sample-data entry point to lower the barrier",
      "◆ Validate: caught sample data inflating upgrade clicks (17 of 21) and fixed the tracking logic before pricing decisions",
      "◆ Engineering: React, modular architecture, graphify impact analysis, code review, and 193 automated tests",
      { to: "/product", label: "Project Detail" },
      { heading: "Taiwan Stock Daily Report Automation" },
      "Automated daily Taiwan-stock data collection and interpretation with Claude Code cloud routines; reports go out automatically on trading days.",
      {
        stats: [
          { value: "≤\u00a03\u00a0min", label: "Market-Open Brief Run Time" },
          { value: "≤\u00a06\u00a0min", label: "After-Close Report Run Time" },
          { value: "4", label: "Dimensions in One Report" },
        ],
      },
      "◆ Combine: technicals, institutional flows, fundamentals and news, 4 dimensions merged into one report",
      "◆ Schedule: after-close report at 07:00 (done within 6 minutes) and market-open brief at 09:05 (done within 3 minutes) on trading days",
      "◆ Architecture: cloud IPs were blocked by data sources, so Google Apps Script serves as the proxy layer for data fetching and e-mail",
      "◆ Quality: every version followed a task contract and shipped only after pytest, code review and a cloud acceptance run",
      { to: "/automation/stock-ta", label: "Project Detail" },
      { heading: "AI's Impact on Taiwan's Data Job Market: 2025 vs 2026" },
      "Re-scraped 104 data job postings and compared both years under the same cleaning rules to test how job content and pay changed as AI spread.",
      {
        stats: [
          { value: "40.9%\u00a0\u2060→ 58.0%", label: "AI-Titled Postings" },
          { value: "36.1%\u00a0\u2060→ 25.7%", label: "Non-AI Analyst Share" },
          { value: "~+14%", label: "AI-Skill Salary Premium (Median)" },
        ],
      },
      "◆ Methods: LDA topic modeling, two-proportion z-tests with BH-FDR correction, quantile regression (2025 1,890 postings, 2026 2,200)",
      {
        lead: "Findings:",
        items: [
          "Job titles: postings with AI in the title rose from 40.9% to 58.0%, mostly because 2026 brought a different set of postings, not renamed old ones",
          "Job mix: analyst postings without AI in the title fell from 36.1% to 25.7%, yet SQL and statistics requirements showed no detectable change",
          "Salary: with other factors held similar, postings requiring AI skills carried a ~14% higher median salary in both years",
        ],
      },
      { to: "/portfolio-data/job-market-2026", label: "Research Report" },
    ],
  },
  {
    period: "2025.06-2026.02",
    color: "blue",
    title: "Data Analyst | Hytech",
    blocks: [
      "Product analytics for copy-trading products, partnering with PMs and engineers on metrics, reporting, and product decisions.",
      { heading: "Metric Framework & BI Dashboards" },
      "◆ Defined North Star and secondary metrics; built daily/weekly/monthly Power BI dashboards",
      "◆ Handled 160+ requests from 15+ stakeholders; turned ad-hoc requests (65%) into dashboard metrics",
      "◆ Wrote event tracking specs for new releases (Sensors Data)",
      { heading: "Product Analytics & Root Cause Analysis" },
      "◆ Diagnosed why trade count fell while active users rose: traced it to declining signal-provider trades (-28% MoM) and an influx of low-frequency followers (trades per user -49%)",
      "◆ Delivered policy analyses (leverage, profit-sharing) and annual reports for 4 brands",
      { heading: "Data Pipeline Automation & Data Quality" },
      "◆ Launched a data automation project with a teammate, aligning data source definitions with engineering",
      "◆ Resolved 6+ data quality issues and reconciled P&L figures with the BI team",
      "◆ Redefined campaign eligibility logic to match business goals",
    ],
  },
  {
    period: "2022.10-2025.03",
    color: "blue",
    title: "Data Analyst | TutorABC",
    // stat cards under the title; every value also appears in a bullet below
    stats: [
      { value: "+10%", label: "Cost Efficiency" },
      { value: "3.03%\u00a0\u2060→ 3.7%", label: "Site-Wide CTR" },
      { value: "+2%", label: "Self-Booking Completion Rate" },
    ],
    blocks: [
      { heading: "Performance & Marketing Analysis" },
      "◆ Conducted monthly performance reviews and evaluated marketing campaign effectiveness",
      "◆ Designed budget allocation formulas, improving cost efficiency by 10%",
      "◆ Established a PLS-PM model to uncover both direct and indirect drivers of revenue fluctuation, providing actionable business recommendations",
      { heading: "CRM: Customer Journey Construction & Behavior Analysis" },
      "◆ Integrated tens of millions of online/offline records to construct a complete customer journey and designed ETL flows to optimize queries",
      "◆ Designed and implemented an event tagging strategy across website and app to enhance visitor behavior tracking",
      "◆ Built dashboards to monitor traffic trends and provide real-time optimization insights",
      "◆ Performed funnel analysis on the self-booking flow to identify drop-off points, raising completion rate by 2% (key steps +10% and +6%)",
      "◆ Optimized CRM automated email content at each journey stage, increasing lead rate by 2%",
      "◆ Identified Webchat drop-off points and introduced proactive lead capture, increasing lead rate by 0.3% and adding 14 closed deals",
      { heading: "SEO Strategy to Boost Organic Traffic" },
      "◆ Developed keyword strategies and optimized high-impression, low-CTR articles, raising site-wide CTR from 3.03% to 3.7%",
      "◆ Collaborated with the IMC team to optimize high-potential articles and address keyword gaps",
      { heading: "Operational Process Enhancement" },
      "◆ Built 20+ dashboards across sales, marketing, business development, and traffic, improving tracking efficiency by 80%",
      "◆ Designed a sales result labeling system to analyze lead quality",
      "◆ Developed a capacity threshold alert in BigQuery to prevent data import failures",
      { heading: "Data Governance & Cross-Functional Collaboration" },
      "◆ Ensured data accuracy and consistency across tracking infrastructure",
      "◆ Provided data-driven insights to support marketing, sales, and R&D teams",
      "◆ Participated in cross-functional projects to ensure timely delivery of analysis tasks",
    ],
  },
  {
    period: "2020.09-2022.07",
    color: "red",
    title: "Information Management | National Taiwan University",
    blocks: [
      { heading: "Master's Thesis" },
      "Identifying High-Value Customers: The Impact of Online Behavior and an Application of LSTM",
      { to: "/portfolio-data", label: "See More" },
      { heading: "Project experience" },
      "Feature engineering, Machine learning, Deep learning, Statistical modeling",
    ],
  },
  {
    period: "2019.11-2020.09",
    color: "blue",
    title: "Frontend Engineer | Rakuten",
    blocks: [
      "JavaScript, React, ROR, GraphQL",
      { heading: "Main Project" },
      "1. New product review page project.",
      "2. New Shop Campaign page project.",
    ],
  },
  {
    period: "2019.03-2019.06",
    color: "blue",
    title: "R&D Intern | Advantech",
    blocks: [
      "Vue (Vuestic + echarts)",
      { heading: "Main Responsibility" },
      "Frontend development of IoT software, and setting up agents on devices.",
      { href: "http://bit.ly/31lOjID", label: "Certificate" },
    ],
  },
  {
    period: "2018.09-2019.01",
    color: "blue",
    title: "R&D Intern | 若水國際",
    blocks: [
      "Vue (ElementUI + Axios)",
      { heading: "Main Responsibility" },
      "1. Assisted in frontend development of the new AI annotation platform.",
      "2. Maintained the existing AI annotation platform.",
    ],
  },
  {
    period: "2015.09-2019.06",
    color: "red",
    title: "Management of Information Systems | National Chengchi University",
    blocks: [
      { heading: "Graduation project" },
      "A Nail Art Information Integration System",
      { heading: "Project experience" },
      "Database planning and implementation, Frontend Development, API Development",
      { to: "/portfolio-frontend", label: "See More" },
    ],
  },
];

export default EXPERIENCE;
