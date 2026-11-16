import React from "react";

// Content strings mark key phrases with **double asterisks**; render them as <strong>
// (styled as highlight). Plain text only, no HTML strings.
const Emph = ({ text }) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    // odd indexes are the captured (highlighted) parts
    i % 2 ? (
      <strong className="hl" key={i}>
        {part}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
export default Emph;
