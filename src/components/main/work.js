import React from "react";
import { Timeline } from "antd";

const Work = () => {
  return (
    <div className="work">
      <Timeline mode="left">
        <Timeline.Item label="2022.10-now" color="blue">
          <h3>Data Analyst | TutorABC</h3>
          <p class="block-title">Monthly Performance and Campaign Analysis</p>
          <p>◆ Identify factors contributing to performance fluctuations.</p>
          <p>◆ Evaluate the effectiveness of various media channels.</p>
          <p>
            ◆ Produce data reports and communicate insights to stakeholders.
          </p>
          <p>◆ Assess the effectiveness of promotional campaigns.</p>
          <p class="block-title">
            Digital Marketing Optimization: Traffic, SEO Strategies, and Visitor
            Journey Analysis
          </p>
          <p>◆ Utilize GA4 and GTM to track website and app traffic.</p>
          <p>
            ◆ Plan tracking events across all web and app pages to gain insights
            into user interactions.
          </p>
          <p>
            ◆ Export GA4 raw data using BigQuery and combine it with offline
            data for comprehensive visitor journey analysis.
          </p>
          <p>
            ◆ Develop SEO strategies through keyword research and regularly
            monitor SEO performance.
          </p>
          <p>
            ◆ Export Search Console data and create keyword tracking reports in
            Looker Studio for marketing colleagues to easily access keyword
            status.
          </p>
          <p class="block-title">Operational Process Enhancement</p>
          <p>
            ◆ Define KPIs and establish dashboards for efficient performance
            tracking.
          </p>
          <p>
            ◆ Provide automated data-driven solutions to optimize daily
            operational processes in other departments.
          </p>
          <p class="block-title">Data Governance</p>
          <p>
            ◆ Collaborate with the data engineering team to ensure data accuracy
            and compliance.
          </p>
          <p class="block-title">Cross-Functional Collaboration</p>
          <p>
            ◆ Work with marketing, sales, and RD teams to support
            cross-departmental data requirements and analysis.
          </p>
          <p>
            ◆ Participate in project management to ensure timely project
            delivery and meet data analysis goals.
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
      </Timeline>
    </div>
  );
};
export default Work;
