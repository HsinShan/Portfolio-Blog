import React from "react";
import { Timeline } from "antd";
import { Link } from "react-router-dom";
import Reveal from "../common/reveal";
import HighlightNumbers from "../common/highlightNumbers";
import StatCards from "../common/statCards";
import useContent from "../../content";

const isBullet = (block) => typeof block === "string" && block.startsWith("◆");
// short label before the first colon, e.g. "◆ Build:" / "◆ 開發："
const LEAD_LABEL = /^◆\s*([^:：]{1,14}[:：])\s*/;
// same label rule for second-level bullets, which carry no "◆"
const SUB_LABEL = /^([^:：]{1,14}[:：])\s*/;

// Split an entry into sub-sections: blocks before the first heading, then one
// group per heading (heading + the blocks under it).
const toGroups = (blocks) =>
  blocks.reduce(
    (groups, block) => {
      if (block.heading) groups.push({ heading: block, items: [] });
      else groups[groups.length - 1].items.push(block);
      return groups;
    },
    [{ heading: null, items: [] }]
  );

// Render one timeline block; see content/en/experience.js for the block shapes.
const Block = ({ block }) => {
  if (typeof block === "string") {
    // "◆ Build: ..." -> bold "Build:" so the eye can scan the verbs down the list
    const m = isBullet(block) && block.match(LEAD_LABEL);
    if (m)
      return (
        <p>
          ◆ <strong className="lead-label">{m[1]}</strong>{" "}
          <HighlightNumbers text={block.slice(m[0].length)} />
        </p>
      );
    return (
      <p className={isBullet(block) ? undefined : "summary"}>
        <HighlightNumbers text={block} />
      </p>
    );
  }
  if (block.heading) return <p className="block-title">{block.heading}</p>;
  // "◆ Findings:" with second-level bullets, each led by its own short label
  if (block.lead)
    return (
      <>
        <p>
          ◆ <strong className="lead-label">{block.lead}</strong>
        </p>
        <ul className="sub-bullets">
          {block.items.map((item, i) => {
            const m = item.match(SUB_LABEL);
            return (
              <li key={i}>
                {m && <strong className="lead-label">{m[1]}</strong>}
                {m && " "}
                <HighlightNumbers text={m ? item.slice(m[0].length) : item} />
              </li>
            );
          })}
        </ul>
      </>
    );
  // per-project stat cards inside a sub-section (independent-projects entry)
  if (block.stats) return <StatCards stats={block.stats} compact className="work-stats" />;
  if (block.to)
    return (
      <p>
        <Link to={block.to}>{block.label}</Link>
      </p>
    );
  return (
    <p>
      <a href={block.href} target="_blank" rel="noopener noreferrer">
        {block.label}
      </a>
    </p>
  );
};

// One entry: text before the first heading runs full width; each heading's
// sub-section becomes a card; 2+ cards flow into two columns on laptop (see experience.scss).
const ItemBody = ({ blocks }) => {
  const [intro, ...sections] = toGroups(blocks);
  // stat cards need the full width (half-width columns wrap "2,300+" / "3 分鐘內"),
  // so entries with per-project stats keep one card per row
  const twoCols = sections.length > 1 && !sections.some((s) => s.items.some((b) => b.stats));
  return (
    <>
      {intro.items.map((block, i) => (
        <Block block={block} key={i} />
      ))}
      {sections.length > 0 && (
        <div className={twoCols ? "sections multi" : "sections"}>
          {sections.map((section, i) => (
            <div className="section-card" key={i}>
              <Block block={section.heading} />
              {section.items.map((block, j) => (
                <Block block={block} key={j} />
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const Work = () => {
  const { EXPERIENCE } = useContent();
  return (
    <div className="work">
      <Timeline mode="left">
        {EXPERIENCE.map((item) => (
          <Timeline.Item key={item.period} label={item.period} color={item.color}>
            <Reveal>
              {/* mobile only: the side label column is hidden and the date sits above the title */}
              <p className="period-inline">{item.period}</p>
              <h3>{item.title}</h3>
              <StatCards stats={item.stats} compact className="work-stats" />
              <ItemBody blocks={item.blocks} />
            </Reveal>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};
export default Work;
