import React from "react";
import { Timeline } from "antd";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="work">
      <Timeline mode="left">
        <Timeline.Item label="2022.10-now" color="blue">
          <h3>Data Analyst | TutorABC</h3>
          <p class="block-title">Performance & Marketing Analysis</p>
          <p>
            ◆ Conduct monthly performance analysis and evaluate marketing
            campaign effectiveness.
          </p>
          <p>
            ◆ Design marketing budget allocation formulas, assisting in
            improving cost efficiency.
          </p>
          <p class="block-title">Website Traffic & Conversion Optimization</p>
          <p>
            ◆ Improve website conversion rate by 2% through visitor journey
            analysis and process optimization.
          </p>
          <p>
            ◆ Monitor traffic trends and provide real-time optimization
            insights.
          </p>
          <p>
            ◆ Conduct SEO keyword research and prioritize content optimization,
            boosting CTR by 1%.
          </p>
          <p>
            ◆ Analyze app usage data to assist to help prioritize free resource
            updates.
          </p>
          <p class="block-title">Operational Process Enhancement</p>
          <p>◆ Build 10+ dashboards, boosting tracking efficiency by 80%.</p>
          <p>
            ◆ Design a sales result labeling system to track and analyze lead
            quality.
          </p>
          <p>
            ◆ Develop a capacity threshold alert in BigQuery to prevent data
            import failures.
          </p>
          <p class="block-title">Data Governance & Collaboration</p>
          <p>◆ Ensure data accuracy to support reliable analysis.</p>
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
          <p>
            <Link to="/portfolio-data">See More</Link>
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
          <p class="block-title">Main Project</p>
          <p>1. New product review page project.</p>
          <p>2. New Shop Campaign page project.</p>
        </Timeline.Item>
        <Timeline.Item label="2019.03-2019.06" color="blue">
          <h3>RD intern | Adventech</h3>
          <p>Vue (Vuestic + echarts)</p>
          <p class="block-title">Main Responsibility</p>
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
          <p class="block-title">Main Responsibility</p>
          <p>
            1. Assist in frontend development of the new AI annotation platform.
          </p>
          <p>2. Maintain the existing AI annotation platform.</p>
        </Timeline.Item>
        <Timeline.Item label="2015.09-2019.06" color="red">
          <h3>
            Management of Information Systems | National ChengChi University
          </h3>
          <p class="block-title">Graduation project </p>
          <p> A Nail Art Information Integration System</p>
          <p class="block-title">Project experience</p>
          <p>
            Database planning and implementation, Frontend Development, API
            Development
          </p>
          <p>
            <Link to="/portfolio-frontend">See More</Link>
          </p>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};
export default Work;
