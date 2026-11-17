import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import useContent from "../content";
import { Arrow } from "../components/automation/flowDiagram";
import "../assets/style/portfolio/index.scss";
import "../assets/style/portfolio/card.scss";
import "../assets/style/portfolio/projectFrontend.scss";
import "../assets/style/automation/index.scss";

// /automation tab: one card per automation project → its case page.
// Cover = a mini version of the case page's routine map, drawn in HTML from the same
// content (no screenshot: the real report e-mails show holdings).
// Reuses the frontend card look (.projectFrontend: centered skills, bullet list).
const PROJECTS = [{ key: "STOCK_TA", path: "/automation/stock-ta" }];

const Automation = () => {
  const content = useContent();
  const { UI } = content;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio automation">
      <h1 className="page-title">{UI.automation.title}</h1>
      <p className="automation-intro">{UI.automation.intro}</p>
      <div className="projects">
        <div className="category-projects">
          {PROJECTS.map(({ key, path }) => {
            const { card, schedules } = content[key];
            return (
              <div className="project projectFrontend automation-card" key={key}>
                <div
                  className="card-image clickable automation-cover"
                  onClick={() => navigate(path)}
                  aria-hidden="true"
                >
                  <div className="cover-node">
                    <strong>{schedules.source.title}</strong>
                    <span>{schedules.source.when}</span>
                  </div>
                  <span className="cover-arrow">
                    <Arrow />
                  </span>
                  <div className="cover-col">
                    {schedules.targets.map((n) => (
                      <div className="cover-node" key={n.title}>
                        <strong>{n.title}</strong>
                        <span>{n.when}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card-body">
                  <div className="subtitle">{card.subtitle}</div>
                  <h2 className="title">{card.title}</h2>
                  <div className="card-skills">
                    {card.skills.map((s) => (
                      <p key={s}>{s}</p>
                    ))}
                  </div>
                  <ul className="description">
                    {card.description.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <div className="card-actions">
                    <Button onClick={() => navigate(path)}>
                      {UI.automation.seeCase}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Automation;
