import React from "react";
import { Timeline } from "antd";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="work">
      <Timeline mode="left">
        <Timeline.Item label="2025.04-Now" color="blue">
          <h3>Freelance Data Scientist | Self-Initiated Project</h3>
          <p>
            Initiated a self-directed research and portfolio enhancement phase
            after leaving my previous role.
          </p>
          <p class="block-title">
            Project: Decoding Taiwan's Data Job Market (2025/04): Role
            Classification, Skill Trends, and Salary Insights
          </p>
          <p class="block-title">★ Key Insights</p>
          <p>
            1. Cross-functional capabilities (technical + business thinking)
            drive the highest salary potential.
          </p>
          <p>
            2. Master's degrees combined with communication skills are strongly
            linked to managerial roles and higher compensation (up to +53K).
          </p>
          <p>
            3. Technical depth in Python, machine learning, and ETL correlates
            with significant salary gains.
          </p>
          <p>
            4. Execution-only skills (e.g., GA4/GTM, reporting) have limited
            impact on salary ceilings.
          </p>
          <p>
            <Link to="/portfolio-data">Project Detail</Link>
          </p>
        </Timeline.Item>
        <Timeline.Item label="2022.10-2025.03" color="blue">
          <h3>Data Analyst | TutorABC</h3>
          <p class="block-title">Performance & Marketing Analysis</p>
          <p>
            ◆ Conducted monthly performance reviews and evaluated marketing
            campaign effectiveness
          </p>
          <p>
            ◆ Designed budget allocation formulas to enhance cost efficiency
          </p>
          <p>
            ◆ Established a PLS-PM model to uncover both direct and indirect
            drivers of revenue fluctuation, providing actionable business
            recommendations
          </p>

          <p class="block-title">
            CRM: Customer Journey Construction & Behavior Analysis
          </p>
          <p>
            ◆ Integrated tens of millions of online/offline data to construct a
            complete customer journey and designed ETL flows to optimize queries
          </p>
          <p>
            ◆ Designed and implemented event tagging strategy across website and
            app to enhance visitor behavior tracking
          </p>
          <p>
            ◆ Built dashboards to monitor traffic trends and provide real-time
            optimization insights
          </p>
          <p>
            ◆ Performed behavior and funnel analysis to identify drop-off
            points, improving lead CVR by 2%
          </p>

          <p class="block-title">SEO Strategy to Boost Organic Traffic</p>
          <p>
            ◆ Developed keyword strategies and prioritized content optimization
            based on SEO potential, increasing organic CTR by 1%
          </p>
          <p>
            ◆ Collaborated with the IMC team to optimize high-potential articles
            and address keyword gaps
          </p>

          <p class="block-title">Operational Process Enhancement</p>
          <p>
            ◆ Built 10+ dashboards, enhancing tracking and reporting efficiency
          </p>
          <p>
            ◆ Designed a sales result labeling system to analyze lead quality
          </p>
          <p>
            ◆ Developed a capacity threshold alert in BigQuery to prevent data
            import failures
          </p>

          <p class="block-title">
            Data Governance & Cross-Functional Collaboration
          </p>
          <p>
            ◆ Ensured data accuracy and consistency across tracking
            infrastructure
          </p>
          <p>
            ◆ Provided data-driven insights to support marketing, sales, and RD
            teams
          </p>
          <p>
            ◆ Participated in cross-functional projects to ensure timely
            delivery of analysis tasks
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
