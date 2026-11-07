import React from "react";

// Numbers worth a glance in résumé bullets: 2,300+ / 16% / -28% / 160+ / 0.3%.
// Skips digits glued to letters (GA4, P&L-style codes) and list markers ("1. ").
// No lookbehind on purpose: Safari < 16.4 can't parse it and the whole bundle
// would fail, so the "not preceded by a letter/digit/dot" check is done in code.
const NUMBER = /[-+]?\d(?:[\d,.]*\d)?(?:\+|%)?(?!\.\s)(?![A-Za-z\d])/g;
const GLUED_BEFORE = /[A-Za-z\d.]/;

const HighlightNumbers = ({ text }) => {
  const parts = [];
  let last = 0;
  for (const m of text.matchAll(NUMBER)) {
    const before = text[m.index - 1];
    if (before && GLUED_BEFORE.test(before)) continue;
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <strong className="num" key={m.index}>
        {m[0]}
      </strong>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
};
export default HighlightNumbers;
