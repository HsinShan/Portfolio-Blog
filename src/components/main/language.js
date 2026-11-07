import React from "react";
import useContent from "../../content";
import "../../assets/style/main/language.scss";

const Language = () => {
  const { PROFILE } = useContent();
  const { title, score, date, transcript } = PROFILE.language;
  return (
    <div className="language">
      <h1>{title}</h1>
      <h3>{score}</h3>
      <p className="date">{date}</p>
      <p>
        {transcript.label}
        <a href={transcript.href} target="_blank" rel="noopener noreferrer">
          {transcript.linkText}
        </a>
      </p>
    </div>
  );
};
export default Language;
