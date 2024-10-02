import React from "react";
import { Timeline } from "antd";

const Education = () => {
  return (
    <div className="education">
      <div className="title">Education</div>
      <Timeline mode="left">
        <Timeline.Item label="2020.09-2022.07" color="red">
          <h3>Information Management | National Taiwan University</h3>
          <p class="block-title">Master Thesis</p>
          <p>
            Identify Most Valuable Customers: Examine the Influence of Customer
            Online Behaviors and the Application of LSTM Model
          </p>
          <p class="block-title">Project experience</p>
          <p>
            Feature engineering, Machine learning, Deep learning, Statistical
            modeling
          </p>
        </Timeline.Item>
        <Timeline.Item label="2015.09-2019.06" color="red">
          <h3>
            Management of Information Systems | National ChengChi University
          </h3>
          <p>Graduation project: A Nail Art Information Integration System</p>
          <p>Experience in database planning and implementation</p>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};
export default Education;
