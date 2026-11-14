import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "antd";
import useContent from "../content";
import useDeviceDetect from "../hooks/useDeviceDetect";
import ChartCard from "../components/report/chartCard";
import Emph from "../components/report/emph";
import {
  ForestChart,
  SlopeChart,
  WordsChart,
  DeChart,
  SkillsChart,
  PremiumChart,
} from "../components/report/charts";
import { signed, pct } from "../components/report/theme";
import "../assets/style/report/index.scss";

// Dashboard order: data facts → KPI row → overview → one card per finding → methods.
// Loaded with React.lazy (App.js) so recharts stays out of the main bundle.
const JobMarket2026 = () => {
  const { JOB_MARKET_2026: R } = useContent();
  const narrow = useDeviceDetect() === "mobile";
  const { ui } = R;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // table views: same numbers as the charts, already formatted
  const tables = {
    forest: {
      columns: R.forest.columns,
      rows: R.forest.rows.map((r) => [r.label, pct(r.from), pct(r.to), signed(r.diff), `${signed(r.lo)} ～ ${signed(r.hi)}`, r.q]),
    },
    slope: {
      columns: R.slope.columns,
      rows: R.slope.series.map((s) => [s.label, pct(s.from), pct(s.to), s.n]),
    },
    words: {
      columns: R.words.columns,
      rows: R.words.rows.map((r) => [r.word, pct(r.from), pct(r.to), signed(r.to - r.from), r.z.toFixed(2)]),
    },
    de: {
      columns: R.de.columns,
      rows: R.de.layers.map((l) => [
        l.label,
        `${pct((l[2025] / R.de.total[2025]) * 100)}（${l[2025]}）`,
        `${pct((l[2026] / R.de.total[2026]) * 100)}（${l[2026]}）`,
      ]),
    },
    skills: {
      columns: R.skills.columns,
      rows: R.skills.rows.map((r) => [r.skill, pct(r.from), pct(r.to), r.q]),
    },
    premium: {
      columns: R.premium.columns,
      rows: R.premium.rows.map((r) => [r.year, signed(r.value), r.q]),
    },
  };

  return (
    <div className="report-page">
    <div className="report">
      <Link className="report-back" to="/portfolio-data">
        {R.meta.back}
      </Link>
      <h1 className="page-title">{R.meta.title}</h1>
      <div className="report-conclusion">
        <p className="conclusion-lead">
          <Emph text={R.meta.conclusion.lead} />
        </p>
        {R.meta.conclusion.lines.map((t) => (
          <p key={t}>
            <Emph text={t} />
          </p>
        ))}
      </div>

      <ul className="report-facts">
        {R.meta.facts.map((f) => (
          <li key={f.label}>
            <strong>{f.label}</strong>
            {f.value}
          </li>
        ))}
      </ul>

      <ul className="report-kpis">
        {R.kpis.map((k) => {
          const diff = k.to - k.from;
          return (
            <li key={k.label}>
              <span className="kpi-label">{k.label}</span>
              <span className="kpi-value">{k.value || pct(k.to)}</span>
              <span className="kpi-sub">
                {k.value ? (
                  k.sub
                ) : (
                  <>
                    {ui.y2025} {pct(k.from)}
                    <span className={diff > 0 ? "kpi-up" : "kpi-down"}>
                      {diff > 0 ? " ▲ " : " ▼ "}
                      {signed(diff)}
                    </span>
                  </>
                )}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="report-legend" aria-label={ui.legend.title}>
        <span><i className="key-dot key-2025" />{ui.legend.y2025}</span>
        <span><i className="key-dot key-2026" />{ui.legend.y2026}</span>
        <span><i className="key-dot key-2026" />{ui.legend.sig}</span>
        <span><i className="key-dot key-2026 key-hollow" />{ui.legend.notSig}</span>
      </div>

      <div className="report-grid">
        <ChartCard wide title={R.forest.title} measure={R.forest.measure} note={R.forest.note} ui={ui} table={tables.forest}>
          <ForestChart data={R.forest} ui={ui} narrow={narrow} />
        </ChartCard>
        <ChartCard title={R.slope.title} measure={R.slope.measure} note={R.slope.note} ui={ui} table={tables.slope}>
          <SlopeChart data={R.slope} ui={ui} />
        </ChartCard>
        <ChartCard title={R.words.title} measure={R.words.measure} note={R.words.note} ui={ui} table={tables.words}>
          <WordsChart data={R.words} ui={ui} narrow={narrow} />
        </ChartCard>
        <ChartCard title={R.de.title} measure={R.de.measure} note={R.de.note} ui={ui} table={tables.de}>
          <DeChart data={R.de} ui={ui} />
        </ChartCard>
        <ChartCard title={R.skills.title} measure={R.skills.measure} note={R.skills.note} ui={ui} table={tables.skills}>
          <SkillsChart data={R.skills} ui={ui} narrow={narrow} />
        </ChartCard>
        <ChartCard wide title={R.premium.title} measure={R.premium.measure} note={R.premium.note} ui={ui} table={tables.premium}>
          <PremiumChart data={R.premium} ui={ui} />
        </ChartCard>
      </div>

      <h2 className="report-section-title">{ui.methodsTitle}</h2>
      {/* antd v4: Collapse.Panel children (the `items` prop is v5 only) */}
      <Collapse className="report-methods">
        {R.methods.map((m) => (
          <Collapse.Panel key={m.title} header={m.title}>
            <ul>
              {m.items.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
    </div>
  );
};
export default JobMarket2026;
