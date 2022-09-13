import React from "react";
import { Card } from "antd";
import SKILLS from "../../constants/SKILLS";
import "../../assets/style/main/skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      {SKILLS.map((skill, i) => (
        <Card title={skill.title} bordered={false} key={i}>
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
