import React from "react";
import { motion } from "framer-motion";

// Fade + slide up the first time the element scrolls into view.
// `delay` lets siblings stagger (e.g. timeline items, skill cards).
const Reveal = ({ children, delay = 0, className, as = "div" }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      // "some" = any pixel visible; a ratio (e.g. 0.15) is unreachable for
      // elements taller than ~6x the viewport, which would then stay hidden
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </Tag>
  );
};
export default Reveal;
