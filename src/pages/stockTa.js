import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useContent from "../content";
import Emph from "../components/report/emph";
import { FlowDiagram, BuildLoop, ScheduleMap, Lines } from "../components/automation/flowDiagram";
import "../assets/style/report/index.scss";
import "../assets/style/automation/index.scss";

// Case page /automation/stock-ta. Same frame as the job-market report page
// (data facts → KPI row → cards → methods), but the cards are diagrams and rule lists
// about how the system was built, not charts. No chart library needed.
const StockTa = () => {
  const { STOCK_TA: S } = useContent();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="report-page">
      <div className="report case">
        <Link className="report-back" to="/automation">
          {S.meta.back}
        </Link>
        <h1 className="page-title">{S.meta.title}</h1>

        <div className="report-conclusion">
          <p className="conclusion-lead">
            <Emph text={S.meta.conclusion.lead} />
          </p>
          {S.meta.conclusion.lines.map((t, i) => (
            <p key={i}>
              <Emph text={t} />
            </p>
          ))}
        </div>

        {/* Shirley 2026-11-17: routine map + project facts in one card, above the KPI row */}
        <section className="chart-card case-card case-sched">
          <h2>{S.schedules.title}</h2>
          <ScheduleMap schedules={S.schedules} />
          <ul className="report-facts">
            {S.meta.facts.map((f) => (
              <li key={f.label}>
                <strong>{f.label}</strong>
                <span className="lines">
                  <Lines text={f.value} />
                </span>
              </li>
            ))}
          </ul>
        </section>

        <ul className="report-kpis" style={{ "--kpi-cols": S.kpis.length }}>
          {S.kpis.map((k) => (
            <li key={k.label}>
              <span className="kpi-label">{k.label}</span>
              {k.tags ? (
                <ul className="kpi-tags">
                  {k.tags.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              ) : (
                <span className="kpi-value">{k.value}</span>
              )}
              <span className="kpi-sub">
                <Lines text={k.sub} />
              </span>
            </li>
          ))}
        </ul>

        <section className="chart-card case-card">
          <h2>{S.flow.title}</h2>
          <FlowDiagram flow={S.flow} />
        </section>

        <section className="chart-card case-card">
          <h2>{S.loop.title}</h2>
          <BuildLoop loop={S.loop} />
        </section>

        <section className="chart-card case-card">
          <h2>{S.rules.title}</h2>
          <ul className="case-rules">
            {S.rules.items.map((r) => (
              <li key={r.title}>
                <strong>{r.title}</strong>
                <ul className="case-rule-points">
                  {r.body.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="case-example">{S.rules.example}</p>
        </section>

        {/* only 2 short items: shown open, no collapse (the report page folds 4 long groups) */}
        <section className="chart-card case-card">
          <h2>{S.methods.title}</h2>
          <ul className="case-methods">
            {S.methods.items.map((t, i) => (
              <li key={i}>
                <Lines text={t} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
export default StockTa;
