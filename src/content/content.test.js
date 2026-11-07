// Guards the contract rule "both languages show the same numbers":
// every number in a zh content file must appear in its en counterpart, and vice versa.
import { CONTENT } from "./index";

// Strip URLs and HTML attributes so image ids / link paths don't count as figures.
const numbersIn = (value) =>
  JSON.stringify(value)
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
