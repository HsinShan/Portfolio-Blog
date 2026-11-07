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
        <LoadingImg src={meImg} width="180"></LoadingImg>
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
        {/* featured product: whole card is one link; text reused from PRODUCT */}
        <p className="explore-heading">{explore.featured.text}</p>
        <Link to={explore.featured.to} className="explore-featured">
          {/* {" "} keeps the link's accessible name readable (flex hides the spaces) */}
          <span className="featured-meta">
            {PRODUCT.label} · {PRODUCT.period}
          </span>{" "}
          <span className="featured-title">{PRODUCT.title}</span>{" "}
          <span className="featured-lead">{PRODUCT.lead}</span>
        </Link>
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
            <img src={s.icon} width="40" alt={s.name} />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Title;
