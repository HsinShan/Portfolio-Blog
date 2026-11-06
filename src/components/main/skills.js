import React from "react";
import { Card } from "antd";
import Reveal from "../common/reveal";
import useContent from "../../content";
import "../../assets/style/main/skills.scss";

const Skills = () => {
  const { SKILLS } = useContent();
  return (
    <div className="skills">
      {SKILLS.map((skill, i) => (
        // cards appear one after another (stagger)
        <Reveal className="skill-col" delay={i * 0.1} key={i}>
          <Card title={skill.title} bordered={false}>
            {skill.skill.map((item, index) => (
              <li className="skill" key={index}>
                ★ {item}
              </li>
            ))}
          </Card>
        </Reveal>
      ))}
    </div>
  );
};
export default Skills;
