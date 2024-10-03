import React from "react";
import { Timeline } from "antd";

const Work = () => {
  return (
    <div className="work">
      <Timeline mode="left">
        <Timeline.Item label="2022.10-now" color="blue">
          <h3>Data Analyst | TutorABC</h3>
          <p class="block-title">Monthly Performance and Campaign Analysis</p>
          <p>◆ Identify factors behind performance changes.</p>
          <p>◆ Evaluate media channel effectiveness.</p>
          <p>◆ Create reports and share insights with stakeholders.</p>
          <p>◆ Assess promotional campaign success.</p>
          <p class="block-title">
            Digital Marketing Optimization: Traffic, SEO Strategies, and Visitor
            Journey Analysis
          </p>
          <p>◆ Track web and app traffic using GA4 and GTM.</p>
          <p>◆ Plan tracking events to analyze user interactions.</p>
          <p>
            ◆ Export GA4 raw data using BigQuery and merge with offline data for
            full journey analysis.
          </p>
          <p>◆ Develop SEO strategies and monitor performance regularly.</p>
          <p>
            ◆ Create keyword reports using Search Console and Looker Studio.
          </p>
          <p class="block-title">Operational Process Enhancement</p>
          <p>◆ Define KPIs and set up dashboards for tracking.</p>
          <p>◆ Automate solutions to optimize daily operations.</p>
          <p class="block-title">Data Governance</p>
          <p>
            ◆ Ensure data accuracy and compliance with the data engineering
            team.
          </p>
          <p class="block-title">Cross-Functional Collaboration</p>
          <p>◆ Support marketing, sales, and RD with data analysis.</p>
          <p>
            ◆ Participate in project management for timely delivery and analysis
            goals.
          </p>
        </Timeline.Item>
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
        <Timeline.Item label="2019.11-2020.09" color="blue">
          <h3>Frontend Engineer | Rakuten</h3>
          <p>Javascript, React, ROR, Graphql</p>
          <p>1. New product review page project.</p>
          <p>2. New Shop Campaign page project.</p>
        </Timeline.Item>
        <Timeline.Item label="2019.03-2019.06" color="blue">
          <h3>RD intern | Adventech</h3>
          <p>Vue (Vuestic + echarts)</p>
          <p>
            Frontend development of IoT software, and setting up agents on
            devices.
          </p>
          <p>
            <a href="http://bit.ly/31lOjID">Certificate</a>
          </p>
        </Timeline.Item>
        <Timeline.Item label="2018.09-2019.01" color="blue">
          <h3>RD intern | 若水國際</h3>
          <p>Vue (ElementUI + Axios) </p>
          <p>
            1. Assist in frontend development of the new AI annotation platform.
          </p>
          <p>2. Maintain the existing AI annotation platform.</p>
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
export default Work;
