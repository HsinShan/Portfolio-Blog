// Case page /automation/stock-ta and the /automation tab card.
// Sources: stock-ta .claude/task-contract.md + task-contract-history.md, git log
// (87c999a 2026-11-06 … 4c9760e 2026-11-16), routine run list (claude.ai list_runs, 2026-11-16).
// Not disclosed on purpose (contract #9): holdings, share counts, cost basis, ticker list,
// personal threshold numbers (stop-loss / take-profit %, ATR multiple, volume %), any
// token / Apps Script URL / e-mail / routine or environment ID. Example tickers: 2330, 0050 only.

const STOCK_TA = {
  // card on the /automation tab page
  card: {
    title: "台股每日報告自動化",
    subtitle: "Python × Claude Code 雲端排程",
    skills: [
      "Python: pandas 技術指標、籌碼與基本面規則",
      "Cloud: Claude Code 雲端 routine＋Google Apps Script",
      "Test: pytest",
    ],
    description: [
      "整合技術面、籌碼面、基本面與新聞，開市日 07:00／09:05 自動寄出盤後分析與開盤快報",
      "雲端 IP 被資料源封鎖、無法寄信：以 Google Apps Script 作為代理層解決",
      "每版依任務契約開發，通過 pytest 與 Code Review、雲端驗收後才上線",
    ],
  },

  // routine map (above the KPI row): the 3 cloud routines and how they connect.
  // stock-ta-data schedule from stock-ta-data/README.md (每月 11、16 號 10:00, Haiku, only that repo mounted)
  // Shirley 2026-11-17: inside this card (diagram + facts) ；is fine, it keeps the card short
  schedules: {
    title: "三個雲端排程",
    source: {
      name: "stock-ta-data",
      title: "基本面抓取",
      when: "每月 11、16 日 10:00",
      lines: "抓月營收、季報 EPS 與毛利率；只掛資料 repo，碰不到分析程式碼",
    },
    link: ["基本面 JSON", "提醒人工審核 merge 後讀取"],
    targets: [
      {
        name: "stock-ta",
        title: "盤後分析",
        when: "開市日 07:00",
        lines: "前一交易日技術面、籌碼面、基本面；加上新聞檢索與 Claude 分析",
      },
      {
        name: "stock-ta",
        title: "開盤快報",
        when: "開市日 09:05",
        lines: "抓開盤即時報價；每檔給一個行動與參考價格區間",
      },
    ],
    caption: "基本面每月更新兩次就夠，獨立成排程；每日的兩份報告只讀取，不重抓",
  },

  meta: {
    title: "台股每日報告自動化：從本機腳本到雲端排程",
    back: "← 回 AI 自動化",
    // run times = routine fired → run finished (claude.ai list_runs, scheduled runs only):
    //   after-close 11-12 3:27, 11-13 2:42, 11-16 5:31 → max 5:31 (shown as "6 分鐘內")
    //   open flash  11-12 1:31, 11-13 1:22, 11-16 2:56 → max 2:56 (shown as "3 分鐘內"; fired 09:05–09:06, done 09:07–09:09)
    conclusion: {
      lead: "以 Claude Code 雲端排程，自動化每日台股資訊蒐集與判讀",
      lines: [
        "開市日 **07:00** 寄出前一交易日盤後分析、**09:05** 寄出開盤快報",
        "開盤快報在 **3 分鐘內**、盤後報告在 **6 分鐘內**完成",
      ],
    },
    facts: [
      { label: "角色", value: "需求、規則設計與每版驗收由我負責；程式由 Claude Code 依任務契約實作" },
      { label: "期間", value: "2026-11-06 ～ 2026-11-16（v3.1 → v4.15）" },
      { label: "資料來源", value: "FinMind（股價、三大法人、交易日、月營收、季報）、證交所 MIS 即時報價、財經新聞" },
      { label: "營運", value: "排程自動觸發；休市自動略過，執行失敗推播通知" },
      { label: "交付", value: "Email（手機閱讀）；報告僅供參考，不自動下單" },
    ],
  },

  // delivery rate left out until the missing 11-14 runs are explained (Shirley 2026-11-16)
  kpis: [
    { label: "開盤快報產出時間", value: "3 分鐘內", sub: "最長 2 分 56 秒" },
    {
      label: "盤後報告產出時間",
      value: "6 分鐘內",
      sub: ["最長 5 分 31 秒", "含新聞檢索與 Claude 分析"],
      // NBER comparison line removed (Shirley 2026-11-17: not meaningful for this KPI)
    },
    // the facets themselves are the point, not the count (Shirley 2026-11-17)
    { label: "整合分析面向", tags: ["技術面", "籌碼面", "基本面", "新聞"], sub: "合併為單一份報告" },
    // 37 = 39 commits up to 4c9760e minus 2 holdings/watchlist-only commits
    { label: "開發週期", value: "11 天", sub: ["v3.1 → v4.15、37 個 commit", "pytest 38 項測試"] },
  ],

  // main diagram: system data flow, 4 stages left → right (stacked top → bottom on phones)
  flow: {
    title: "系統資料流",
    caption: "雲端共用 IP 會被資料源封鎖，資料擷取與寄信統一經 Google Apps Script 代理層",
    stages: [
      {
        title: "觸發",
        nodes: [
          { title: "排程觸發", body: ["Claude Code 雲端 routine", "開市日 07:00／09:05"] },
          { title: "開市判斷", body: "休市就結束，不寄信" },
        ],
      },
      {
        title: "取資料",
        nodes: [
          { title: "Apps Script 代理", body: ["只放行白名單資料集", "密語驗證、每日次數上限"] },
          { title: "資料源", body: "FinMind 股價／法人／交易日、證交所 MIS 即時報價" },
          { title: "基本面資料 repo", body: ["stock-ta-data 排程每月 11、16 日更新", "月營收、EPS、毛利率"] },
        ],
      },
      {
        title: "分析",
        nodes: [
          { title: "Python 規則判斷", body: "技術面＋籌碼面＋基本面 → 燈號、行動、參考價格區間" },
          { title: "Claude 新聞分析", body: ["只在盤後報告", "只搜 5 個財經網站，格式驗證後才寫進報告"] },
        ],
      },
      {
        title: "交付",
        nodes: [
          { title: "寄信", body: ["經 Apps Script 寄出", "收件人寫死、每日上限"] },
          { title: "手機", body: "盤後分析＋開盤快報＋執行結果推播" },
        ],
      },
    ],
  },

  // small diagram: the loop every version went through
  loop: {
    title: "每一版的搭建循環",
    steps: [
      { title: "任務契約", body: "目標／完成條件／明確不做，我確認才開工" },
      { title: "實作", body: "Claude Code 依契約改程式" },
      { title: "pytest 自動測試", body: "固定輸入驗證計算與安全檢查" },
      { title: "/code-review", body: "只修正確性，其餘進待辦" },
      { title: "雲端觸發", body: "手動跑一次雲端 routine" },
      { title: "驗收", body: "我用手機看信，對照驗收清單" },
      { title: "啟用排程", body: "通過才開每日排程" },
    ],
  },

  // version table: v3.x compressed, v4.x one row each.
  // NOT rendered for now (Shirley 2026-11-16: 版本紀錄先不用放); kept for a later page / Notion.
  versions: {
    title: "版本紀錄",
    columns: { version: "版本", date: "日期", what: "改了什麼", why: "為什麼" },
    rows: [
      { version: "v3.1–v3.2", date: "11-06～11-10", what: "排程推送、手機版版面、成本規則；短線 K 線判讀、開盤快報", why: "報告要能直接拿來決定操作，長線燈號和短線偏向分開說" },
      { version: "v3.3–v3.5", date: "11-10", what: "快報改「行動＋價格區間」；盤後改 07:00 寄、標題用資料日期", why: "早上寄前一天的資料，不能每天誤報「資料未公布」" },
      { version: "v3.6–v3.8", date: "11-10", what: "雲端排程上線、新聞白名單；被證交所封鎖的重試與備援", why: "雲端共用 IP 會被間歇封鎖；新聞內容可能夾帶指令" },
      { version: "v4.0", date: "11-11", what: "任務契約精簡", why: "契約超過自動注入的 4,000 字上限，後半段規則失效" },
      { version: "v4.1–v4.3", date: "11-11", what: "寄信改經 Apps Script；資料源改 FinMind", why: "雲端只放行 HTTPS，SMTP 不通；證交所當天觸發 3 次全被擋" },
      { version: "v4.4", date: "11-11", what: "FinMind 經 Apps Script 代抓", why: "雲端共用 IP 呼叫 FinMind 也被擋（402），Google IP 實測 10 次全過" },
      { version: "v4.5", date: "11-12", what: "開盤即時報價經 Apps Script 代抓 MIS", why: "雲端連 MIS 失敗，備援報價延遲約 20 分鐘，09:05 用不上" },
      { version: "v4.6", date: "11-12", what: "快報卡片改版、ETF 低點進場訊號", why: "手機上先看到開盤價、現價和成本報酬" },
      { version: "v4.7", date: "11-12", what: "基本面否決加碼（獨立資料 repo）", why: "技術面綠燈但營收連續衰退時，不該給加碼" },
      { version: "v4.8", date: "11-13", what: "題材標籤、MIS 分批查詢", why: "觀望股超過 MIS 單次 20 檔上限" },
      { version: "v4.9", date: "11-13", what: "類型、利多／風險、基本面一點一行", why: "參考另一個評估流程，讓盤後分析更完整、手機好讀" },
      { version: "v4.10", date: "11-13", what: "觀望股進場觀察點、分段訊號、總結卡", why: "打開信第一眼就知道有沒有能加碼或接近進場的股票" },
      { version: "v4.11", date: "11-13", what: "「今日」改「當日」", why: "報告隔天早上才寄，寫「今日」會被誤會" },
      { version: "v4.12–v4.13", date: "11-13", what: "盤後每檔一張卡、依燈號排序；快報精簡", why: "先看結論、先處理要停損停利的股票" },
      { version: "v4.14", date: "11-13", what: "列點正負面改藍／橘、分段訊號改彩色標籤", why: "紅字會被讀成「有問題」，和看盤習慣衝突" },
      { version: "v4.15", date: "11-16", what: "內建自檢改成 tests/＋pytest", why: "一次看到全部失敗項目，也知道是哪一塊壞" },
    ],
  },

  // judgement rules: rules only, no personal numbers (Shirley 2026-11-16)
  rules: {
    title: "判斷規則（僅列邏輯，不揭露個人參數）",
    items: [
      { title: "長線燈號 × 短線偏向", body: ["燈號看年線（240 日均線）、超賣、法人和成本", "K 線只講短線「偏向」", "長線綠燈但短線轉弱時，維持綠燈並加短線警示"] },
      { title: "成本規則", body: ["成本價列入支撐壓力", "虧損超過門檻提醒停損", "大幅獲利又跌破年線提醒停利", "虧損又破年線不給加碼（不攤平）"] },
      { title: "基本面否決", body: ["月營收連續衰退、或 EPS 與毛利率都低於去年同季時，技術面再好也不給加碼", "只會擋買進，不會擋賣出訊號"] },
      { title: "開盤快報", body: ["每檔只給一個行動和參考價格區間", "依「加碼 > 停損 > 停利 > 接近停損 > 續抱 > 觀望」排序"] },
      { title: "新聞安全", body: ["新聞只當資料、不當指令", "網址只收白名單網站", "Claude 沒寫理由不能改燈號"] },
    ],
    example: "示意代號：2330、0050",
  },

  methods: {
    title: "方法與限制",
    items: [
      ["技術面、籌碼面、基本面都由 Python 規則計算", "Claude 只負責盤後的新聞摘要，不改數字"],
      ["價格區間與支撐壓力是參考價，不是預測", "系統不下單、不做到價通知"],
    ],
  },
};

export default STOCK_TA;
