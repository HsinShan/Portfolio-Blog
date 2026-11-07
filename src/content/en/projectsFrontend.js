const PROJECTS_FRONTEND = [
  {
    group: 1,
    category: "React",
    projects: [
      {
        title: "Pinball Game",
        subtitle: "Self-built React Web Game",
        image: "/images/portfolio/psl-pinball.jpg",
        skills: [
          "Frontend: React + Vite + Sass Modules",
          "Game: SVG board animation + pure-function game engine",
          "Test: Vitest",
          "Run with: Docker",
        ],
        description: [
          "Separated game logic from rendering: the engine computes every outcome, the UI only plays the animation",
          "Randomized windmill positions and speeds each round, with automated tests guarding the expected reward value",
          "Planned GA4 event tracking before launch, tagging every event with the build version to compare board layouts",
        ],
        links: {
          demo: "https://psl-pinball.onrender.com/",
        },
      },
      {
        title: "MeetLangLang",
        subtitle: "Graduate Software Development Methods, Final Project",
        image: "/images/portfolio/ZpGwTvS.png",
        skills: [
          "Frontend: React + Sass",
          "Backend: Javascript + Mysql",
          "Run with: Docker",
        ],
        description: [],
        links: {
          docs: "https://drive.google.com/file/d/1xZilQ0e7YO33zzZDANWatRMndg9ShUdi/view?usp=sharing",
          frontendCode: "https://github.com/HsinShan/MeetLangLang-Frontend",
          backendCode: "https://github.com/HsinShan/MeetLangLang-Backend",
        },
      },
      {
        title: "Daily Stock Market Info",
        subtitle: "Rakuten ROR Practice",
        image: "/images/portfolio/VEvRqaQ.png",
        skills: ["Frontend: React + Sass", "Backend: Ruby on Rails"],
        description: [],
        links: {
          code: "https://github.com/HsinShan/ror-practice/tree/dev/shirley",
        },
      },
    ],
  },
  {
    group: 1,
    category: "Vue",
    projects: [
      {
        title: "Lucky Draw System",
        subtitle: "Vue Personal Project",
        image: "/images/portfolio/uTzjXOk.png",
        skills: ["Vue.js+Firebase"],
        description: [],
        links: {
          demo: "https://crud-table-cb119.firebaseapp.com/",
          code: "https://github.com/HsinShan/crud-table",
        },
      },
      {
        title: "Hotel Management System",
        subtitle: "Vue Personal Project",
        image: "/images/portfolio/KdjeaRP.jpg",
        skills: ["Vue.js"],
        description: [],
        links: {
          codepen: "https://codepen.io/ShirleyHsieh/pen/bJPboe",
        },
      },
      {
        title: "Blog",
        subtitle: "Vue Personal Project",
        image: "/images/portfolio/rqcabiL.png",
        skills: ["Vue.js+Firebase"],
        description: [],
        links: {
          code: "https://github.com/HsinShan/Portfolio/tree/master/blog",
        },
      },
    ],
  },
  {
    group: 1,
    category: "Others",
    projects: [
      {
        title: "Weather",
        subtitle: "Self-taught Personal Project",
        image: "/images/portfolio/omf4njD.jpg",
        skills: ["JS"],
        description: [],
        links: {
          codepen: "https://codepen.io/ShirleyHsieh/pen/LoEvZa",
        },
      },
    ],
  },
  {
    group: 1,
    category: "Undergraduate Capstone Project",
    projects: [
      {
        title: "HandStory (Nail Art Information Platform) / Frontend Development",
        subtitle: "2017.01-2018.06 Capstone Project",
        image: "/images/portfolio/dqqFzO4.jpg",
        skills: [
          "Desktop: php+html+css+jquery",
          "Mobile: php+Jquery mobile(html/css/jquery)",
        ],
        description: [
          "Frontend development for web, mobile, and tablet (html/css/jquery)",
          "Database design and setup (mysql)",
          "Supported PHP backend development, site testing, and frontend-backend integration",
        ],
        links: {
          code: "https://github.com/HsinShan/Handstory/blob/master/README.md",
        },
      },
    ],
  },
  {
    group: 1,
    category: "RWD",
    projects: [
      {
        title: "HappyTravel Club / Travel Agency Website",
        subtitle: "Self-taught Personal Project",
        image: "/images/portfolio/t4fVzPS.jpg",
        skills: ["Html+CSS+Javascript+Bootstrap"],
        description: [],
        links: {
          demo: "https://hsinshan.github.io/Portfolio/HappyTravel%20Club/",
          code: "https://github.com/HsinShan/Portfolio/tree/master/HappyTravel%20Club",
        },
      },
      {
        title: "BagStore / Handbag E-commerce Website",
        subtitle: "Self-taught Personal Project",
        image: "/images/portfolio/ZbPEMPy.jpg",
        skills: ["RWD+CSS animation"],
        description: [],
        links: {
          demo: "https://hsinshan.github.io/Portfolio/Bag/",
          code: "https://github.com/HsinShan/Portfolio/tree/master/Bag",
        },
      },
      {
        title: "Shirley's Dessert / Dessert Shop",
        subtitle: "Self-taught Personal Project",
        image: "/images/portfolio/6W6VRMy.jpg",
        skills: ["Bootstrap"],
        description: [],
        links: {
          demo: "https://hsinshan.github.io/Portfolio/Shirley's%20Dessert/",
          code: "https://github.com/HsinShan/Portfolio/tree/master/Shirley's%20Dessert",
        },
      },
    ],
  },
  {
    group: 2,
    category: "Javascript",
    title: "Javascript Mini Games",
    subtitle: "Self-taught Personal Project: one theme a day, five-day challenge",
    projects: [
      {
        title: "Coincollector",
        demoURL: "https://hsinshan.github.io/DailyChallenge/CoinCollector.html",
        codeURL:
          "https://github.com/HsinShan/DailyChallenge/blob/master/CoinCollector.html",
        image: "/images/portfolio/hRGKnAH.png",
      },
      {
        title: "BombNumber",
        demoURL: "https://hsinshan.github.io/DailyChallenge/bombnumber.html",
        codeURL:
          "https://github.com/HsinShan/DailyChallenge/blob/master/bombnumber.html",
        image: "/images/portfolio/qITDbaV.png",
      },
      {
        title: "Painter",
        demoURL: "https://hsinshan.github.io/DailyChallenge/painter.html",
        codeURL:
          "https://github.com/HsinShan/DailyChallenge/blob/master/painter.html",
        image: "/images/portfolio/oqCTPhi.png",
      },
      {
        title: "Calculator",
        demoURL: "https://hsinshan.github.io/DailyChallenge/calculator.html",
        codeURL:
          "https://github.com/HsinShan/DailyChallenge/blob/master/calculator.html",
        image: "/images/portfolio/bfgnamy.png",
      },
      {
        title: "Matching",
        demoURL: "https://hsinshan.github.io/DailyChallenge/matching.html",
        codeURL:
          "https://github.com/HsinShan/DailyChallenge/blob/master/matching.html",
        image: "/images/portfolio/nGIUNAi.png",
      },
    ],
  },
];

export default PROJECTS_FRONTEND;
