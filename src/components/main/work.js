import React from "react";
import { Timeline } from "antd";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="work">
      <Timeline mode="left">
        <Timeline.Item label="2026.03-Now" color="blue">
          <h3>Independent Product Builder & Analyst | Self-employed</h3>
          <p>
            Initiated, built, and analyzed my own web product with Claude Code,
            reaching 2,300+ active users.
          </p>
          <p>
            ◆ Build: k-means clustering in CIELAB color space extracts true
            colors from photos, separating highlights and shadows
          </p>
          <p>
            ◆ Launch: shipped with a 29-event GA4 tracking plan covering
            activation and upgrade funnels
          </p>
          <p>
            ◆ Measure: landing-to-upload was only 16%, so added a sample-data
            entry point to lower the barrier
          </p>
          <p>
            ◆ Validate: caught sample data inflating upgrade clicks (17 of 21)
            and fixed the tracking logic before pricing decisions
          </p>
          <p>
            ◆ Engineering: React, modular architecture, graphify impact
            analysis, code review, and 193 automated tests
          </p>
          <p>
            <Link to="/portfolio-data">Project Detail</Link>
          </p>
        </Timeline.Item>
        <Timeline.Item label="2025.06-2026.02" color="blue">
          <h3>Data Analyst | Hytech</h3>
          <p>
            Product analytics for copy-trading products, partnering with PMs
            and engineers on metrics, reporting, and product decisions.
          </p>

          <p class="block-title">Metric Framework & BI Dashboards</p>
          <p>
            ◆ Defined North Star and secondary metrics; built daily/weekly/monthly
            Power BI dashboards
          </p>
          <p>
            ◆ Handled 160+ requests from 15+ stakeholders; turned ad-hoc
            requests (65%) into dashboard metrics
          </p>
          <p>◆ Wrote event tracking specs for new releases (Sensors Data)</p>

          <p class="block-title">Product Analytics & Root Cause Analysis</p>
          <p>
            ◆ Diagnosed why trade count fell while active users rose: traced it
            to declining signal-provider trades (-28% MoM) and an influx of
            low-frequency followers (trades per user -49%)
          </p>
          <p>
            ◆ Delivered policy analyses (leverage, profit-sharing) and annual
            reports for 4 brands
          </p>

          <p class="block-title">Data Pipeline Automation & Data Quality</p>
          <p>
            ◆ Launched a data automation project with a teammate, aligning data
            source definitions with engineering
          </p>
          <p>
            ◆ Resolved 6+ data quality issues and reconciled P&L figures with
            the BI team
          </p>
          <p>◆ Redefined campaign eligibility logic to match business goals</p>
        </Timeline.Item>
        <Timeline.Item label="2022.10-2025.03" color="blue">
          <h3>Data Analyst | TutorABC</h3>
          <p class="block-title">Performance & Marketing Analysis</p>
          <p>
            ◆ Conducted monthly performance reviews and evaluated marketing
            campaign effectiveness
          </p>
          <p>
            ◆ Designed budget allocation formulas, improving cost efficiency by
            10%
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
            ◆ Performed funnel analysis on the self-booking flow to identify
            drop-off points, raising completion rate by 2% (key steps +10% and
            +6%)
          </p>
          <p>
            ◆ Optimized CRM automated email content at each journey stage,
            increasing lead rate by 2%
          </p>
          <p>
            ◆ Identified Webchat drop-off points and introduced proactive lead
            capture, increasing lead rate by 0.3% and adding 14 closed deals
          </p>

          <p class="block-title">SEO Strategy to Boost Organic Traffic</p>
          <p>
            ◆ Developed keyword strategies and optimized high-impression,
            low-CTR articles, raising site-wide CTR from 3.03% to 3.7%
          </p>
          <p>
            ◆ Collaborated with the IMC team to optimize high-potential articles
            and address keyword gaps
          </p>

          <p class="block-title">Operational Process Enhancement</p>
          <p>
            ◆ Built 20+ dashboards across sales, marketing, business
            development, and traffic, improving tracking efficiency by 80%
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
