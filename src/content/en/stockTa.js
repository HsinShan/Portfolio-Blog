// Case page /automation/stock-ta and the /automation tab card, English.
// Translation of content/zh/stockTa.js; every number must match the Chinese file
// (sources and disclosure rules are documented there). Terminology (Shirley 2026-11-17):
// 盤後分析 = after-close report, 開盤快報 = market-open brief, 燈號 = traffic-light signal,
// 三大法人 = institutional investors (foreign investors, investment trusts, dealers),
// 年線 = 240-day moving average, 攤平 = averaging down, 基本面否決 = fundamentals veto.

const STOCK_TA = {
  // card on the /automation tab page
  card: {
    title: "Taiwan Stock Daily Report Automation",
    subtitle: "Python × Claude Code cloud routines",
    skills: [
      "Python: pandas technical indicators, institutional-flow and fundamentals rules",
      "Cloud: Claude Code cloud routines + Google Apps Script",
      "Test: pytest",
    ],
    description: [
      "Combines technicals, institutional investor flows, fundamentals and news; on trading days it e-mails an after-close report at 07:00 and a market-open brief at 09:05 (Taipei time)",
      "Cloud IPs were blocked by data sources and could not send e-mail: solved with Google Apps Script as a proxy layer",
      "Every version followed a task contract and shipped only after pytest, code review and a cloud acceptance run",
    ],
  },

  // routine map (above the KPI row): the 3 cloud routines and how they connect
  schedules: {
    title: "Three cloud routines",
    source: {
      name: "stock-ta-data",
      title: "Fundamentals fetch",
      when: "11th and 16th of each month, 10:00",
      lines: "Fetches monthly revenue, quarterly EPS and gross margin; mounts only the data repo, so it cannot touch the analysis code",
    },
    link: ["Fundamentals JSON", "Flags a human review; read after merge"],
    targets: [
      {
        name: "stock-ta",
        title: "After-close report",
        when: "Trading days 07:00",
        lines: "Previous trading day's technicals, institutional flows and fundamentals; plus news search and Claude analysis",
      },
      {
        name: "stock-ta",
        title: "Market-open brief",
        when: "Trading days 09:05",
        lines: "Fetches real-time opening quotes; one action and a reference price range per stock",
      },
    ],
    caption: "Fundamentals only need updating twice a month, so they run as a separate routine; the two daily reports only read them and never refetch",
  },

  meta: {
    title: "Taiwan Stock Daily Report Automation: From Local Script to Cloud Routines",
    back: "← Back to AI Automation",
    conclusion: {
      lead: "Automated daily Taiwan-stock data collection and interpretation with Claude Code cloud routines",
      lines: [
        "On trading days the after-close report for the previous session goes out at **07:00**, the market-open brief at **09:05** (Taipei time)",
        "The market-open brief finishes **within 3 minutes**, the after-close report **within 6 minutes**",
      ],
    },
    facts: [
      { label: "Role", value: "I owned requirements, rule design and acceptance of every version; Claude Code implemented the code under task contracts" },
      { label: "Period", value: "2026-11-06 – 2026-11-16 (v3.1 → v4.15)" },
      { label: "Data sources", value: "FinMind (prices, institutional investors, trading calendar, monthly revenue, quarterly reports), TWSE MIS real-time quotes, financial news" },
      { label: "Operations", value: "Routines trigger automatically; market holidays are skipped, failed runs send a push notification" },
      { label: "Delivery", value: "E-mail (read on phone); reports are for reference only, no automatic orders" },
    ],
  },

  kpis: [
    { label: "Market-Open Brief Run Time", value: "≤\u00a03\u00a0min", sub: "Longest: 2\u00a0min\u00a056\u00a0s" },
    {
      label: "After-Close Report Run Time",
      value: "≤\u00a06\u00a0min",
      sub: ["Longest: 5\u00a0min\u00a031\u00a0s", "Includes news search and Claude analysis"],
    },
    { label: "Analysis Dimensions", tags: ["Technicals", "Inst. flows", "Fundamentals", "News"], sub: "Merged into one report" },
    // Development cycle card removed (contract #11: effort, not outcome; the period is already in facts)
  ],

  // main diagram: system data flow, 4 stages left → right (stacked top → bottom on phones)
  flow: {
    title: "System data flow",
    caption: "Shared cloud IPs get blocked by data sources, so all data fetching and e-mail go through a Google Apps Script proxy layer",
    stages: [
      {
        title: "Trigger",
        nodes: [
          { title: "Scheduled trigger", body: ["Claude Code cloud routine", "Trading days 07:00 / 09:05"] },
          { title: "Trading-day check", body: "Market closed: stop, no e-mail" },
        ],
      },
      {
        title: "Fetch",
        nodes: [
          { title: "Apps Script proxy", body: ["Allow-listed datasets only", "Passphrase check, daily call limit"] },
          { title: "Data sources", body: "FinMind prices / institutional investors / trading calendar, TWSE MIS real-time quotes" },
          { title: "Fundamentals data repo", body: ["Updated by the stock-ta-data routine on the 11th and 16th of each month", "Monthly revenue, EPS, gross margin"] },
        ],
      },
      {
        title: "Analyze",
        nodes: [
          { title: "Python rules", body: "Technicals + institutional flows + fundamentals → signal, action, reference price range" },
          { title: "Claude news analysis", body: ["After-close report only", "Searches 5 financial news sites only; output is format-validated before it enters the report"] },
        ],
      },
      {
        title: "Deliver",
        nodes: [
          { title: "E-mail", body: ["Sent through Apps Script", "Hard-coded recipient, daily limit"] },
          { title: "Phone", body: "After-close report + market-open brief + run-status push notifications" },
        ],
      },
    ],
  },

  // small diagram: the loop every version went through
  loop: {
    title: "Build loop for every version",
    steps: [
      { title: "Task contract", body: "Goal / done criteria / out of scope; work starts only after I sign off" },
      { title: "Implementation", body: "Claude Code changes the code under the contract" },
      { title: "pytest", body: "Fixed inputs verify calculations and safety checks" },
      { title: "/code-review", body: "Fix correctness only; everything else goes to the backlog" },
      { title: "Cloud trigger", body: "Run the cloud routine once by hand" },
      { title: "Acceptance", body: "I read the e-mail on my phone against an acceptance checklist" },
      { title: "Enable schedule", body: "The daily schedule is switched on only after it passes" },
    ],
  },

  // version table: NOT rendered for now (same as zh); kept for a later page / Notion
  versions: {
    title: "Version history",
    columns: { version: "Version", date: "Date", what: "What changed", why: "Why" },
    rows: [
      { version: "v3.1–v3.2", date: "11-06–11-10", what: "Scheduled delivery, mobile layout, cost-basis rules; short-term candlestick reading, market-open brief", why: "The report should drive actual decisions, so long-term signals and short-term bias are stated separately" },
      { version: "v3.3–v3.5", date: "11-10", what: "Brief changed to \"action + price range\"; after-close report moved to 07:00, subject line uses the data date", why: "A morning e-mail carries the previous day's data and must not report \"data not yet published\" every day" },
      { version: "v3.6–v3.8", date: "11-10", what: "Cloud routine launched, news allow-list; retry and fallback when TWSE blocks requests", why: "Shared cloud IPs get blocked intermittently; news content may carry injected instructions" },
      { version: "v4.0", date: "11-11", what: "Task contract trimmed", why: "The contract exceeded the 4,000-character auto-injection limit, so rules in the second half stopped applying" },
      { version: "v4.1–v4.3", date: "11-11", what: "E-mail sent through Apps Script; data source switched to FinMind", why: "The cloud only allows HTTPS, so SMTP failed; all 3 TWSE triggers that day were blocked" },
      { version: "v4.4", date: "11-11", what: "FinMind fetched through Apps Script", why: "Shared cloud IPs were also blocked by FinMind (402); from a Google IP all 10 test calls passed" },
      { version: "v4.5", date: "11-12", what: "Real-time opening quotes fetched from MIS through Apps Script", why: "Cloud calls to MIS failed and the fallback quotes lag ~20 minutes, useless at 09:05" },
      { version: "v4.6", date: "11-12", what: "Brief card redesign, ETF buy-the-dip signal", why: "On a phone the opening price, current price and return on cost show first" },
      { version: "v4.7", date: "11-12", what: "Fundamentals veto on adding (separate data repo)", why: "A green technical signal should not say add when revenue keeps declining" },
      { version: "v4.8", date: "11-13", what: "Theme tags, batched MIS queries", why: "The watchlist exceeded MIS's 20-ticker limit per request" },
      { version: "v4.9", date: "11-13", what: "Category, catalysts / risks, fundamentals one point per line", why: "Borrowed from another evaluation workflow to make the after-close report more complete and easier to read on a phone" },
      { version: "v4.10", date: "11-13", what: "Entry watch points for watchlist stocks, staged signals, summary card", why: "The first screen of the e-mail shows whether any stock is ready to add or close to an entry" },
      { version: "v4.11", date: "11-13", what: "\"Today\" changed to \"that day\"", why: "The report arrives the next morning, so \"today\" was misleading" },
      { version: "v4.12–v4.13", date: "11-13", what: "One card per stock in the after-close report, sorted by signal; leaner brief", why: "Conclusions first, and stop-loss / take-profit stocks handled first" },
      { version: "v4.14", date: "11-13", what: "Positive / negative points in blue / orange, staged signals as colored tags", why: "Red text read as \"something is wrong\", which clashes with Taiwan's red-means-up convention" },
      { version: "v4.15", date: "11-16", what: "Built-in self-check moved to tests/ + pytest", why: "See every failure at once and know which part broke" },
    ],
  },

  // judgement rules: rules only, no personal numbers
  rules: {
    title: "Decision rules (logic only, personal parameters not disclosed)",
    items: [
      { title: "Long-term signal × short-term bias", body: ["The traffic-light signal uses the 240-day moving average (annual line), oversold readings, institutional flows and cost basis", "Candlesticks only describe the short-term bias", "When the long-term signal is green but the short term weakens, the signal stays green with a short-term warning"] },
      { title: "Cost-basis rules", body: ["Cost basis counts as a support / resistance level", "A loss beyond the threshold triggers a stop-loss reminder", "A position with a large gain that breaks below the annual line triggers a take-profit reminder", "No add when the position is at a loss and below the annual line (no averaging down)"] },
      { title: "Fundamentals veto", body: ["No add, however strong the technicals, when monthly revenue keeps declining or both EPS and gross margin are below the same quarter last year", "It only blocks buys, never sell signals"] },
      { title: "Market-open brief", body: ["One action and one reference price range per stock", "Sorted Add (buy more) > Stop-loss > Take-profit > Near stop-loss > Hold > Watch"] },
      { title: "News safety", body: ["News is treated as data, never as instructions", "Only URLs from allow-listed sites are accepted", "Claude cannot change a signal without stating a reason"] },
    ],
    example: "Example tickers: 2330, 0050",
  },

  methods: {
    title: "Methods and limitations",
    items: [
      ["Technicals, institutional flows and fundamentals are all computed by Python rules", "Claude only summarizes news for the after-close report and never changes the numbers"],
      ["Price ranges and support / resistance levels are reference prices, not forecasts", "The system places no orders and sends no price alerts"],
    ],
  },
};

export default STOCK_TA;
