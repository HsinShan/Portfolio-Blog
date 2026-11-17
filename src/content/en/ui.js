// Same shape as zh/ui.js.

const UI = {
  siteName: "Shirley's Blog",
  langSwitch: { label: "中文", ariaLabel: "切換為中文" },
  main: {
    experience: "Education & Experience",
    skills: "Skills & Expertise",
  },
  portfolio: {
    dataTitle: "Data Science Portfolio",
    frontendTitle: "Frontend Development Portfolio (2017–2020)",
    descriptionHeading: "Overview",
    resultsHeading: "Findings",
    seeMore: "See More",
    seeCode: "See Code",
    seeReport: "Full report (interactive charts)",
    seeSlides: "See Slides",
    close: "Close",
    // labels for project link buttons, keyed like `links` in projectsFrontend.js
    links: { demo: "Demo", code: "Code", frontendCode: "Frontend Code", backendCode: "Backend Code", codepen: "CodePen", docs: "Docs" },
  },
  // /automation tab page
  automation: {
    title: "AI Automation Portfolio",
    intro: "Automation systems that run on their own every day, built with Claude Code from requirements and rules to cloud scheduling",
    seeCase: "How it was built",
  },
  // lazy page chunk failed to load (components/common/chunkErrorBoundary.js)
  loadError: { message: "This page failed to load. Please refresh and try again.", reload: "Refresh" },
  nav: {
    title: "Menu",
    openMenu: "Open menu",
    about: "About",
    portfolio: "Portfolio",
    dataScience: "Data Science",
    frontend: "Frontend",
    product: "Product",
    automation: "AI Automation",
  },
};

export default UI;
