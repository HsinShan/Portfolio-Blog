import React, { useEffect } from "react";
import useContent from "../content";
import HighlightNumbers from "../components/common/highlightNumbers";
import Reveal from "../components/common/reveal";
import "../assets/style/product/index.scss";

// Standalone product page (/product). Layout only: all text lives in content/*/product.js.
const Product = () => {
  const { PRODUCT } = useContent();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product">
      {/* hero is visible on load, so it doesn't animate in */}
      <header className="product-hero">
        <p className="product-meta">
          {PRODUCT.label} · {PRODUCT.period}
        </p>
        <h1>{PRODUCT.title}</h1>
        <p className="product-subtitle">{PRODUCT.subtitle}</p>
        <p className="product-lead">{PRODUCT.lead}</p>
      </header>

      <ul className="product-stats">
        {PRODUCT.stats.map((s) => (
          <li key={s.value}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </li>
        ))}
      </ul>

      <Reveal className="product-shot">
        <img src={PRODUCT.image.src} alt={PRODUCT.image.alt} />
      </Reveal>

      {PRODUCT.sections.map((section) => {
        const List = section.ordered ? "ol" : "ul";
        return (
          <Reveal as="section" className="product-section" key={section.heading}>
            <h2>{section.heading}</h2>
            <List>
              {section.items.map((item) => (
                <li key={item}>
                  <HighlightNumbers text={item} />
                </li>
              ))}
            </List>
          </Reveal>
        );
      })}

      <ul className="product-tags">
        {PRODUCT.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};
export default Product;
