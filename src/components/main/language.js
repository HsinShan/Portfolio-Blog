import React from "react";
import PROFILE from "../../content/profile";
import "../../assets/style/main/language.scss";

const Language = () => {
  const { title, score, date, transcript } = PROFILE.language;
  return (
    <div className="language">
      <h1>{title}</h1>
      <h3>{score}</h3>
      <p className="date">{date}</p>
      <p>
        {transcript.label}
        <a href={transcript.href}>{transcript.linkText}</a>
      </p>
    </div>
  );
};
export default Language;
