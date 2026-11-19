import React from "react";
import { Link } from "react-router-dom";
import LoadingImg from "../common/loadingImg";
import meImg from "../../assets/images/me.png";
import useContent from "../../content";
import "../../assets/style/main/title.scss";

const Title = () => {
  const { PROFILE, PRODUCT } = useContent();
  const { name, headline, intro, explore, tags, social } = PROFILE;
  return (
    <div className="title">
      <center>
        {/* home page LCP (measured); lowercase because React 18.2 has no fetchPriority prop */}
        <LoadingImg src={meImg} width="180" height="180" loading="eager" fetchpriority="high" />
      </center>
      <h1>{name}</h1>
      <h3>{headline}</h3>
      {/* first intro line is the one-sentence summary; the rest support it */}
      <div className="intro">
        {intro.map((line, i) => (
          <p key={i} className={i === 0 ? "lead" : undefined}>
            {line}
          </p>
        ))}
      </div>
      <div className="explore">
        {/* featured product: same size as the portfolio buttons, filled so it reads as the primary one;
            label reused from PRODUCT */}
        <p className="explore-heading">{explore.featured.text}</p>
        <div className="explore-links explore-featured">
          <Link to={explore.featured.to} className="explore-btn explore-btn-primary">
            {PRODUCT.title}
          </Link>
        </div>
        <p className="explore-heading">{explore.text}</p>
        <div className="explore-links">
          {explore.links.map((link) => (
            <Link key={link.to} to={link.to} className="explore-btn">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag}># {tag}</span>
        ))}
      </div>
      <div className="link">
        {social.map((s) => (
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            key={s.name}
          >
            <img src={s.icon} width="40" height="40" alt={s.name} />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Title;
