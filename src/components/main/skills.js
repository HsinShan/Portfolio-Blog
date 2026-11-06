import React from "react";
import { Card } from "antd";
import SKILLS from "../../content/skills";
import "../../assets/style/main/skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      {SKILLS.map((skill) => (
        <Card title={skill.title} bordered={false} key={skill.title}>
          {skill.skill.map((item, index) => (
            <li className="skill" key={item + index}>
              ★ {item}
            </li>
          ))}
        </Card>
      ))}
    </div>
  );
};
export default Skills;
