// Home page header (photo, intro, tags, social links) and language section.

const PROFILE = {
  name: "Shirley Hsieh",
  headline: "Data Analyst | Product & Marketing Analytics",
  // no sentence-final punctuation in the hero block (intro + explore)
  intro: [
    "Data Analyst with 3+ years of experience and 1 year in front-end development",
    "Product analytics for copy-trading products and marketing analytics for online education, focused on metric definition, funnel analysis, and customer journey analysis",
    "Built and launched a web tool with Claude Code, from tracking plan to funnel-driven iteration",
  ],
  explore: {
    // featured card: label / period / title / lead come from PRODUCT (product.js)
    featured: {
      text: "Bringing my analytics and frontend experience together in one launched product",
      to: "/product",
    },
    text: "More portfolios",
    links: [
      { to: "/portfolio-data", label: "Data Portfolio" },
      { to: "/portfolio-frontend", label: "Frontend Portfolio" },
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
      icon: "/images/portfolio/DQfuQnm.png",
    },
    {
      name: "github",
      href: "https://github.com/HsinShan",
      icon: "/images/portfolio/ZbIeZFi.png",
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
