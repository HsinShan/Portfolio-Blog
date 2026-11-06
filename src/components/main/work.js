import React from "react";
import { Timeline } from "antd";
import { Link } from "react-router-dom";
import useContent from "../../content";

// Render one timeline block; see content/experience.js for the block shapes.
const Block = ({ block }) => {
  if (typeof block === "string") return <p>{block}</p>;
  if (block.heading) return <p className="block-title">{block.heading}</p>;
  if (block.to)
    return (
      <p>
        <Link to={block.to}>{block.label}</Link>
      </p>
    );
  return (
    <p>
      <a href={block.href}>{block.label}</a>
    </p>
  );
};

const Work = () => {
  const { EXPERIENCE } = useContent();
  return (
    <div className="work">
      <Timeline mode="left">
        {EXPERIENCE.map((item) => (
          <Timeline.Item key={item.period} label={item.period} color={item.color}>
            <h3>{item.title}</h3>
            {item.blocks.map((block, i) => (
              <Block block={block} key={i} />
            ))}
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};
export default Work;
