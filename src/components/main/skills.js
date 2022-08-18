import React from "react";
import { Card } from "antd";
import SKILLS from "../../skills";
import "../../assets/style/main/skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      {SKILLS.map((skill) => (
        <Card title={skill.title} bordered={false}>
          {skill.skill.map((item) => (
            <div className="skill">★ {item}</div>
          ))}
        </Card>
      ))}
    </div>
  );
};
export default Skills;
