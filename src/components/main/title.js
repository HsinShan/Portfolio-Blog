import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LoadingImg from "../common/loadingImg";
import meImg from "../../assets/images/me.png";
import useContent from "../../content";
import "../../assets/style/main/title.scss";

const Title = () => {
  const { PROFILE } = useContent();
  const { name, headline, intro, explore, tags, social } = PROFILE;
  return (
    <div className="title">
      <center>
        <LoadingImg src={meImg} width="180"></LoadingImg>
      </center>
      <h1>{name}</h1>
      <h3>{headline}</h3>
      {intro.map((line, i) => (
        <p key={i}>
          <b>{line}</b>
        </p>
      ))}
      <p>
        <b>
          {explore.text}
          <br />
          {/* TODO(UI step): arrow spacing kept as before ("→ A →B") */}
          {explore.links.map((link, i) => (
            <Fragment key={link.to}>
              {i === 0 ? "→ " : " →"}
              <Link to={link.to}>{link.label}</Link>
            </Fragment>
          ))}
        </b>
      </p>
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
