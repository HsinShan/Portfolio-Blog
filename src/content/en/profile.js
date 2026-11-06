// Home page header (photo, intro, tags, social links) and language section.

const PROFILE = {
  name: "Shirley Hsieh",
  headline: "Data Analyst | Product & Marketing Analytics",
  intro: [
    "Data Analyst with 3+ years of experience and 1 year in front-end development.",
    "Product analytics for copy-trading products and marketing analytics for online education, focused on metric definition, funnel analysis, and customer journey analysis.",
    "Built and launched a web tool with Claude Code, from tracking plan to funnel-driven iteration.",
  ],
  explore: {
    text: "Explore more Shirley's independent projects and research showcased.",
    links: [
      { to: "/portfolio-data", label: "Data Science Portfolio" },
      { to: "/portfolio-frontend", label: "Software Frontend Development Portfolio" },
    ],
  },
  tags: [
    "Product Analytics",
    "Metric Framework",
    "Big Data Analytics",
    "Data Visualization",
    "Digital Marketing",
    "Statistical Analysis",
    "Machine Learning",
    "Software Development",
  ],
  social: [
    {
      name: "linkedin",
      href: "https://tw.linkedin.com/in/shirley-hsieh-101397170",
      icon: "https://i.imgur.com/DQfuQnm.png",
    },
    {
      name: "github",
      href: "https://github.com/HsinShan",
      icon: "https://i.imgur.com/ZbIeZFi.png",
    },
  ],
  language: {
    title: "Language",
    score: "TOEIC: 875",
    date: "Date: 2021.09.26",
    transcript: { label: "Transcript : ", linkText: "LINK", href: "https://reurl.cc/RrDOZD" },
  },
};

export default PROFILE;
