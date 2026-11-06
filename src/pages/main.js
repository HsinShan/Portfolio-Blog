import React, { useEffect } from "react";
import Title from "../components/main/title";
import Experience from "../components/main/experience";
import Skills from "../components/main/skills";
import Language from "../components/main/language";
import Reveal from "../components/common/reveal";
import useContent from "../content";
import "../assets/style/main/index.scss";

const Main = () => {
  const { UI } = useContent();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main">
      {/* hero is above the fold: show it immediately, no reveal animation */}
      <div className="block hero">
        <Title />
      </div>
      <div className="block block2">
        <Reveal as="h1">{UI.main.experience}</Reveal>
        <Experience />
      </div>
      <div className="block">
        <Reveal as="h1">{UI.main.skills}</Reveal>
        <Skills />
      </div>
      <div className="block block2">
        <Reveal>
          <Language />
        </Reveal>
      </div>
    </div>
  );
};
export default Main;
