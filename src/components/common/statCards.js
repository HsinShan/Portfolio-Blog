import React from "react";
import "../../assets/style/common/statCards.scss";

// Row of "big number + short label" cards (product page, experience, portfolio).
// Layout only: stats come from content/*: [{ value: "2,300+", label: "活躍使用者" }].
// `columns` sets the desktop column count (defaults to one row); `compact` is the
// smaller, tinted variant for white backgrounds (experience, portfolio modal).
// Spacing around the row is left to the caller via className.
const StatCards = ({ stats, columns, compact = false, className = "" }) => {
  if (!stats || stats.length === 0) return null;
  const cols = columns || stats.length;
  return (
    <ul
      className={[
        "stat-cards",
        cols >= 4 && "stat-cards-wrap",
        compact && "stat-cards-compact",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--stat-cols": cols }}
    >
      {stats.map((s, i) => (
        // index key: values may repeat across cards and the list never reorders
        <li key={i}>
          <span className="stat-value">{s.value}</span>
          <span className="stat-label">{s.label}</span>
        </li>
      ))}
    </ul>
  );
};
export default StatCards;
