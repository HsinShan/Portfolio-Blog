// Education & Experience timeline (newest first).
// Each block renders as one paragraph:
//   "text"                      -> <p>text</p>
//   { heading: "..." }          -> bold section title
//   { to: "/path", label }      -> in-site link (react-router)
//   { href: "https://...", label } -> external link
// color: "blue" = work, "red" = education

const EXPERIENCE = [
  {
    period: "2026.03-Now",
    color: "blue",
    title: "Independent Product Builder & Analyst | Self-employed",
    blocks: [
      "Initiated, built, and analyzed my own web product with Claude Code, reaching 2,300+ active users.",
      "◆ Build: k-means clustering in CIELAB color space extracts true colors from photos, separating highlights and shadows",
      "◆ Launch: shipped with a 29-event GA4 tracking plan covering activation and upgrade funnels",
      "◆ Measure: landing-to-upload was only 16%, so added a sample-data entry point to lower the barrier",
      "◆ Validate: caught sample data inflating upgrade clicks (17 of 21) and fixed the tracking logic before pricing decisions",
      "◆ Engineering: React, modular architecture, graphify impact analysis, code review, and 193 automated tests",
      { to: "/product", label: "Project Detail" },
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
    blocks: [
      { heading: "Performance & Marketing Analysis" },
      "◆ Conducted monthly performance reviews and evaluated marketing campaign effectiveness",
      "◆ Designed budget allocation formulas, improving cost efficiency by 10%",
      "◆ Established a PLS-PM model to uncover both direct and indirect drivers of revenue fluctuation, providing actionable business recommendations",
      { heading: "CRM: Customer Journey Construction & Behavior Analysis" },
      "◆ Integrated tens of millions of online/offline data to construct a complete customer journey and designed ETL flows to optimize queries",
      "◆ Designed and implemented event tagging strategy across website and app to enhance visitor behavior tracking",
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
      "◆ Provided data-driven insights to support marketing, sales, and RD teams",
      "◆ Participated in cross-functional projects to ensure timely delivery of analysis tasks",
    ],
  },
  {
    period: "2020.09-2022.07",
    color: "red",
    title: "Information Management | National Taiwan University",
    blocks: [
      { heading: "Master Thesis" },
      "Identify Most Valuable Customers: Examine the Influence of Customer Online Behaviors and the Application of LSTM Model",
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
      "Javascript, React, ROR, Graphql",
      { heading: "Main Project" },
      "1. New product review page project.",
      "2. New Shop Campaign page project.",
    ],
  },
  {
    period: "2019.03-2019.06",
    color: "blue",
    title: "RD intern | Advantech",
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
    title: "RD intern | 若水國際",
    blocks: [
      "Vue (ElementUI + Axios)",
      { heading: "Main Responsibility" },
      "1. Assist in frontend development of the new AI annotation platform.",
      "2. Maintain the existing AI annotation platform.",
    ],
  },
  {
    period: "2015.09-2019.06",
    color: "red",
    title: "Management of Information Systems | National ChengChi University",
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
