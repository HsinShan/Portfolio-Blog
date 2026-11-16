// Guards the contract rule "both languages show the same numbers":
// every number in a zh content file must appear in its en counterpart, and vice versa.
import { CONTENT } from "./index";

// Spell out unit-suffixed figures so "2.1+ 萬" (zh) and "21K+" (en) compare as the same number.
const expandUnits = (s) =>
  s.replace(/(\d+(?:\.\d+)?)(\+?)\s*(萬|K\b)/g, (_, n, plus, unit) =>
    String(Math.round(parseFloat(n) * (unit === "萬" ? 10000 : 1000))) + plus
  );

// Strip URLs and HTML attributes so image ids / link paths don't count as figures.
const numbersIn = (value) =>
  expandUnits(JSON.stringify(value))
    .replace(/https?:\/\/[^"'\s)]+/g, "")
    .replace(/\b(src|href|class)=\\?['"][^'"]*\\?['"]/g, "")
    .match(/\d[\d,.]*/g)
    ?.map((n) => n.replace(/[,.]$/, "").replace(/,/g, ""))
    .sort() || [];

test("zh and en have the same content files", () => {
  expect(Object.keys(CONTENT.en).sort()).toEqual(Object.keys(CONTENT.zh).sort());
});

describe.each(Object.keys(CONTENT.zh))("%s", (key) => {
  test("zh and en contain the same numbers", () => {
    expect(numbersIn(CONTENT.en[key])).toEqual(numbersIn(CONTENT.zh[key]));
  });
});
