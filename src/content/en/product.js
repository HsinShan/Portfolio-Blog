// "Product" page (/product): the 2026 color palette tool.
// Same shape and numbers as zh/product.js (content.test.js compares them).
// Plain strings; the component highlights numbers (HighlightNumbers).

const PRODUCT = {
  label: "Independent Project",
  period: "2026",
  title: "Color Palette Tool",
  subtitle: "Extracting Representative Colors from Photos, with Funnel Analysis Driving Iterations",
  lead: "A web tool I built and launched on my own, with the GA4 events and upgrade funnel designed myself",
  image: {
    src: "/images/color-tool-workspace.png",
    alt: "The color palette tool's swatch library and manual palette screen",
  },
  stats: [
    { value: "2,300+", label: "active users" },
    { value: "21,000", label: "events" },
    { value: "29", label: "GA4 events" },
    { value: "193", label: "automated tests" },
  ],
  // shown under the stat cards; date range the stats cover
  statsPeriod: "Data period: 2026/08/25 ~ 2026/11/04",
  sections: [
    {
      heading: "Core Features",
      items: [
        "Clusters colors with k-means in the Lab color space, separating an object's base color from highlights and shadows",
        "Uses farthest-first initialization so the same photo always gives the same result",
      ],
    },
    {
      heading: "How It Was Built",
      items: [
        "Developed with Claude Code: split into 11 independent components and logic modules, each with its own tests",
        "Mapped the codebase with graphify to assess impact before each change",
        "Kept quality in check with code review and 193 automated tests",
      ],
    },
    {
      heading: "Funnel Findings & Fixes",
      ordered: true,
      items: [
        "Found that only 16% of visitors uploaded a photo, so I added a \"Load example\" entry to lower the barrier",
        "After a feature video drove a traffic spike, the upgrade funnel read 105 → 82 → 21",
        "Breaking it down showed the paywall prompt was triggered by sample data: 17 of 21 clicks came from users who had only tried the example, so that period's willingness-to-pay data was judged unreliable",
        "Fixed the trigger threshold and event logic to count only users' own data, and documented how to read data before and after the switch in the tracking plan",
      ],
    },
  ],
  tags: ["k-means", "CIELAB", "GA4", "Funnel Analysis", "Event Tracking", "React", "Claude Code"],
};

export default PRODUCT;
