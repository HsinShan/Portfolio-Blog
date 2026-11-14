// Chart tokens for the report page. One encoding for every chart:
// color = year (2025 gray, 2026 brand), fill = significance (solid = q < 0.05, hollow = not).
// The gray is a deliberate "context" color: the dataviz validator passes it on CVD
// separation, normal-vision distance and contrast vs white, and flags only its low chroma
// (it is meant to read gray); every mark also carries a direct label, so identity is never color-only.
export const COLOR = {
  brand: "#bf5125", // $font-highlight
  context: "#8f8a86",
  ink: "#4c3a19", // $font-brown
  inkMuted: "#7d625a", // $font-brown-light
  grid: "#ece6e2",
  surface: "#ffffff",
};

export const TICK = { fontSize: 12, fill: COLOR.inkMuted };

// "+17.1%" / "-4.3%" / "0.0%"
export const signed = (v, digits = 1) => `${v > 0 ? "+" : ""}${v.toFixed(digits)}%`;
export const pct = (v, digits = 1) => `${v.toFixed(digits)}%`;

// Recharts can hand a bar a negative width; normalize to left/right edges.
export const edges = ({ x, width }) => ({
  left: Math.min(x, x + width),
  right: Math.max(x, x + width),
});
