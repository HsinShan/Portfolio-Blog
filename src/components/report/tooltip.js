import React from "react";

// Recharts `content` renderer: value first (strong), label after; text only, no HTML strings.
// `lines(payloadRow)` returns [{ value, label }].
const makeTooltip = (title, lines) => ({ active, payload }) => {
  if (!active || !payload || payload.length === 0) return null;
  const row = payload[0].payload;
  return (
    <div className="chart-tooltip">
      <div className="chart-tooltip-title">{title(row)}</div>
      {lines(row).map((l) => (
        <div className="chart-tooltip-row" key={l.label}>
          <strong>{l.value}</strong>
          <span>{l.label}</span>
        </div>
      ))}
    </div>
  );
};
export default makeTooltip;
