import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
  Legend,
  LabelList,
  Cell,
} from "recharts";
import makeTooltip from "./tooltip";
import { COLOR, TICK, signed, pct, edges } from "./theme";

// ---------- shared pieces ----------

// Long category labels wrap to two lines on phones: before "（", or after "：" / "、" / "／".
const splitLabel = (s) => {
  const paren = s.indexOf("（");
  if (paren > 0) return [s.slice(0, paren), s.slice(paren)];
  const m = s.match(/^(.+?[：、／])(.+)$/);
  return m ? [m[1], m[2]] : [s];
};

const CategoryTick = ({ x, y, payload, wrap }) => {
  const parts = wrap ? splitLabel(payload.value) : [payload.value];
  return (
    <text x={x} y={y} textAnchor="end" fontSize={wrap ? 11 : 12} fill={COLOR.ink}>
      {parts.map((t, i) => (
        <tspan key={t} x={x - 4} dy={i === 0 ? (parts.length > 1 ? "-0.25em" : "0.35em") : "1.2em"}>
          {t}
        </tspan>
      ))}
    </text>
  );
};

// solid = significant, hollow = not distinguishable
const Dot = ({ cx, cy, color, sig, r = 5 }) => (
  <circle cx={cx} cy={cy} r={r} fill={sig ? color : COLOR.surface} stroke={color} strokeWidth={2} />
);

// horizontal bar rounded only at its data end (4px), square at the zero baseline
const barPath = (left, top, w, h, roundRight, r = 4) => {
  const rr = Math.min(r, w / 2, h / 2);
  if (roundRight)
    return `M${left},${top}h${w - rr}a${rr},${rr} 0 0 1 ${rr},${rr}v${h - 2 * rr}a${rr},${rr} 0 0 1 -${rr},${rr}h-${w - rr}z`;
  return `M${left + w},${top}v${h}h-${w - rr}a${rr},${rr} 0 0 1 -${rr},-${rr}v-${h - 2 * rr}a${rr},${rr} 0 0 1 ${rr},-${rr}z`;
};

const rowCursor = { fill: "rgba(191, 81, 37, 0.06)" };

// white outline behind SVG text (drawn under the fill via paint-order)
const HALO = { stroke: COLOR.surface, strokeWidth: 3, paintOrder: "stroke" };

// ---------- 0. overview: change with 95% CI ----------

export const ForestChart = ({ data, ui, narrow }) => {
  const rows = data.rows.map((r) => ({ ...r, range: [r.lo, r.hi] }));
  const shape = (p) => {
    const { y, height, payload } = p;
    const { left, right } = edges(p);
    const cx = left + ((right - left) * (payload.diff - payload.lo)) / (payload.hi - payload.lo);
    const cy = y + height / 2;
    const color = payload.sig ? COLOR.brand : COLOR.context;
    return (
      <g>
        <line x1={left} x2={right} y1={cy} y2={cy} stroke={color} strokeWidth={2} strokeLinecap="round" />
        <Dot cx={cx} cy={cy} color={color} sig={payload.sig} />
        {/* white halo keeps the label readable where it crosses the 0 line or grid */}
        <text x={right + 6} y={cy} dy="0.35em" fontSize={12} fill={COLOR.ink} {...HALO}>
          {signed(payload.diff)}
        </text>
      </g>
    );
  };
  const tip = makeTooltip(
    (r) => r.label,
    (r) => [
      { value: `${pct(r.from)} → ${pct(r.to)}`, label: `${ui.y2025} → ${ui.y2026}` },
      { value: signed(r.diff), label: ui.change },
      { value: `${signed(r.lo)} ～ ${signed(r.hi)}`, label: ui.ci },
      { value: r.q, label: "q" },
    ]
  );
  return (
    <ResponsiveContainer width="100%" height={rows.length * (narrow ? 42 : 34) + 40}>
      <BarChart layout="vertical" data={rows} margin={{ top: 8, right: 52, bottom: 8, left: 0 }}>
        <CartesianGrid horizontal={false} stroke={COLOR.grid} />
        <XAxis
          type="number"
          domain={[-15, 22]}
          ticks={[-10, -5, 0, 5, 10, 15, 20]}
          tickFormatter={(v) => signed(v, 0)}
          tick={TICK}
          stroke={COLOR.grid}
        />
        <YAxis
          type="category"
          dataKey="label"
          width={narrow ? 120 : 190}
          interval={0}
          tick={<CategoryTick wrap={narrow} />}
          axisLine={false}
          tickLine={false}
        />
        <ReferenceLine x={0} stroke={COLOR.inkMuted} />
        <Tooltip cursor={rowCursor} content={tip} />
        <Bar dataKey="range" shape={shape} isAnimationActive={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};

// ---------- 1. slope: all jobs vs the same 364 jobs ----------

export const SlopeChart = ({ data, ui }) => {
  const colorOf = (key) => (key === "all" ? COLOR.brand : COLOR.context);
  const rows = [{ year: ui.y2025 }, { year: ui.y2026 }];
  data.series.forEach((s) => {
    rows[0][s.key] = s.from;
    rows[1][s.key] = s.to;
  });
  const tip = ({ active, payload, label }) =>
    active && payload && payload.length ? (
      <div className="chart-tooltip">
        <div className="chart-tooltip-title">{label}</div>
        {payload.map((p) => (
          <div className="chart-tooltip-row" key={p.dataKey}>
            <strong>{pct(p.value)}</strong>
            <span>{p.name}</span>
          </div>
        ))}
      </div>
    ) : null;
  return (
    <ResponsiveContainer width="100%" height={340}>
      <LineChart data={rows} margin={{ top: 24, right: 16, bottom: 8, left: 0 }}>
        <CartesianGrid vertical={false} stroke={COLOR.grid} />
        <XAxis dataKey="year" padding={{ left: 48, right: 48 }} tick={TICK} stroke={COLOR.grid} />
        <YAxis domain={[30, 65]} ticks={[30, 40, 50, 60]} tickFormatter={(v) => pct(v, 0)} tick={TICK} width={44} axisLine={false} tickLine={false} />
        <Tooltip content={tip} cursor={{ stroke: COLOR.inkMuted, strokeWidth: 1 }} />
        <Legend iconType="plainline" formatter={(v) => <span className="chart-legend-text">{v}</span>} />
        {data.series.map((s) => (
          <Line
            key={s.key}
            dataKey={s.key}
            name={`${s.label}（${s.n}）`}
            stroke={colorOf(s.key)}
            strokeWidth={2}
            dot={(p) => <Dot key={p.index} cx={p.cx} cy={p.cy} color={colorOf(s.key)} sig={s.sig} />}
            activeDot={false}
            isAnimationActive={false}
          >
            {/* the two 2025 points are close: the lower series labels below, the upper above */}
            <LabelList
              dataKey={s.key}
              position={s.key === "all" ? "bottom" : "top"}
              offset={10}
              formatter={(v) => pct(v)}
              fontSize={13}
              fill={COLOR.ink}
            />
          </Line>
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

// ---------- 2. diverging words ----------

export const WordsChart = ({ data, ui, narrow }) => {
  const rows = data.rows.map((r) => ({ ...r, diff: +(r.to - r.from).toFixed(1) }));
  const shape = (p) => {
    const { y, height, payload } = p;
    const { left, right } = edges(p);
    const up = payload.diff > 0;
    const w = Math.max(right - left, 1);
    const top = y + 3;
    const h = Math.max(height - 6, 2);
    return (
      <g>
        <path d={barPath(left, top, w, h, up)} fill={up ? COLOR.brand : COLOR.context} />
        <text
          x={up ? right + 4 : left - 4}
          y={top + h / 2}
          dy="0.35em"
          textAnchor={up ? "start" : "end"}
          fontSize={12}
          fill={COLOR.ink}
          {...HALO}
        >
          {signed(payload.diff)}
        </text>
      </g>
    );
  };
  const tip = makeTooltip(
    (r) => r.word,
    (r) => [
      { value: `${pct(r.from)} → ${pct(r.to)}`, label: `${ui.y2025} → ${ui.y2026}` },
      { value: signed(r.diff), label: ui.change },
      { value: r.z.toFixed(2), label: "z" },
    ]
  );
  return (
    <>
      <div className="chart-direction">
        <span>← {data.down}</span>
        <span>{data.up} →</span>
      </div>
      <ResponsiveContainer width="100%" height={rows.length * (narrow ? 40 : 32) + 40}>
        <BarChart layout="vertical" data={rows} margin={{ top: 4, right: 48, bottom: 8, left: 40 }}>
          <CartesianGrid horizontal={false} stroke={COLOR.grid} />
          <XAxis
            type="number"
            domain={narrow ? [-15, 12] : [-12, 12]}
            ticks={[-8, -4, 0, 4, 8]}
            tickFormatter={(v) => signed(v, 0)}
            tick={TICK}
            stroke={COLOR.grid}
          />
          <YAxis
            type="category"
            dataKey="word"
            width={narrow ? 84 : 132}
            interval={0}
            tick={<CategoryTick wrap={narrow} />}
            axisLine={false}
            tickLine={false}
          />
          <ReferenceLine x={0} stroke={COLOR.inkMuted} />
          <Tooltip cursor={rowCursor} content={tip} />
          <Bar dataKey="diff" shape={shape} isAnimationActive={false} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

// ---------- 3. DE stacked by AI title ----------

export const DeChart = ({ data, ui }) => {
  const [plain, ai] = data.layers;
  const years = ["2025", "2026"];
  const rows = years.map((y) => {
    const n = data.total[y];
    return {
      year: ui[`y${y}`],
      plain: (plain[y] / n) * 100,
      ai: (ai[y] / n) * 100,
      total: ((plain[y] + ai[y]) / n) * 100,
      plainN: plain[y],
      aiN: ai[y],
      n,
    };
  });
  const tip = makeTooltip(
    (r) => r.year,
    (r) => [
      { value: `${pct(r.total)}（${(r.plainN + r.aiN).toLocaleString()}／${r.n.toLocaleString()}）`, label: data.totalLabel },
      { value: `${pct(r.ai)}（${r.aiN}）`, label: ai.label },
      { value: `${pct(r.plain)}（${r.plainN}）`, label: plain.label },
    ]
  );
  const sideLabel = (key) => (p) => (
    <text x={p.x + p.width + 8} y={p.y + p.height / 2} dy="0.35em" fontSize={12} fill={COLOR.ink}>
      {pct(rows[p.index][key])}
    </text>
  );
  const totalLabel = (p) => (
    <text x={p.x + p.width / 2} y={p.y - 8} textAnchor="middle" fontSize={13} fontWeight="bold" fill={COLOR.ink}>
      {`${data.totalLabel} ${pct(rows[p.index].total)}`}
    </text>
  );
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={rows} margin={{ top: 28, right: 16, bottom: 8, left: 0 }} barSize={64}>
        <CartesianGrid vertical={false} stroke={COLOR.grid} />
        <XAxis dataKey="year" tick={TICK} stroke={COLOR.grid} />
        <YAxis domain={[0, 30]} ticks={[0, 10, 20, 30]} tickFormatter={(v) => pct(v, 0)} tick={TICK} width={44} axisLine={false} tickLine={false} />
        <Tooltip cursor={rowCursor} content={tip} />
        <Legend iconType="square" formatter={(v) => <span className="chart-legend-text">{v}</span>} />
        {/* 2px white stroke = the gap between stacked segments */}
        <Bar dataKey="plain" name={plain.label} stackId="de" fill={COLOR.context} stroke={COLOR.surface} strokeWidth={2} isAnimationActive={false}>
          <LabelList content={sideLabel("plain")} />
        </Bar>
        <Bar dataKey="ai" name={ai.label} stackId="de" fill={COLOR.brand} stroke={COLOR.surface} strokeWidth={2} radius={[4, 4, 0, 0]} isAnimationActive={false}>
          <LabelList content={sideLabel("ai")} />
          <LabelList content={totalLabel} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

// ---------- 4. dumbbell: analyst skills ----------

export const SkillsChart = ({ data, ui, narrow }) => {
  const rows = data.rows.map((r) => ({ ...r, range: [Math.min(r.from, r.to), Math.max(r.from, r.to)] }));
  const shape = (p) => {
    const { y, height, payload } = p;
    const { left, right } = edges(p);
    const rising = payload.to >= payload.from;
    const x25 = rising ? left : right;
    const x26 = rising ? right : left;
    const cy = y + height / 2;
    // a 2025 value near the axis has no room on its left: put its label above the dot
    const fromAbove = rising && p.background && x25 - p.background.x < 40;
    return (
      <g>
        <line x1={left} x2={right} y1={cy} y2={cy} stroke={COLOR.grid} strokeWidth={4} strokeLinecap="round" />
        <Dot cx={x25} cy={cy} color={COLOR.context} sig r={6} />
        <Dot cx={x26} cy={cy} color={COLOR.brand} sig={payload.sig} r={6} />
        <text
          x={fromAbove ? x25 : x25 + (rising ? -10 : 10)}
          y={fromAbove ? cy - 12 : cy}
          dy={fromAbove ? 0 : "0.35em"}
          textAnchor={fromAbove ? "middle" : rising ? "end" : "start"}
          fontSize={12}
          fill={COLOR.inkMuted}
          {...HALO}
        >
          {pct(payload.from)}
        </text>
        <text x={x26 + (rising ? 10 : -10)} y={cy} dy="0.35em" textAnchor={rising ? "start" : "end"} fontSize={12} fontWeight="bold" fill={COLOR.ink} {...HALO}>
          {pct(payload.to)}
        </text>
      </g>
    );
  };
  const tip = makeTooltip(
    (r) => r.skill,
    (r) => [
      { value: `${pct(r.from)} → ${pct(r.to)}`, label: `${ui.y2025} → ${ui.y2026}` },
      { value: r.n, label: ui.count },
      { value: r.q, label: "q" },
    ]
  );
  return (
    <>
      <div className="chart-key">
        <span><i className="key-dot key-2025" />{ui.y2025}</span>
        <span><i className="key-dot key-2026" />{ui.y2026}</span>
        <span><i className="key-dot key-2026 key-hollow" />{ui.legend.notSig}</span>
      </div>
      <ResponsiveContainer width="100%" height={rows.length * 48 + 40}>
        <BarChart layout="vertical" data={rows} margin={{ top: 4, right: 56, bottom: 8, left: 8 }}>
          <CartesianGrid horizontal={false} stroke={COLOR.grid} />
          <XAxis type="number" domain={[0, 16]} ticks={[0, 4, 8, 12, 16]} tickFormatter={(v) => pct(v, 0)} tick={TICK} stroke={COLOR.grid} />
          <YAxis type="category" dataKey="skill" width={narrow ? 84 : 120} interval={0} tick={<CategoryTick wrap={narrow} />} axisLine={false} tickLine={false} />
          <Tooltip cursor={rowCursor} content={tip} />
          <Bar dataKey="range" shape={shape} isAnimationActive={false} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

// ---------- 5. salary premium ----------

export const PremiumChart = ({ data, ui }) => {
  const tip = makeTooltip(
    (r) => r.year,
    (r) => [
      { value: signed(r.value), label: ui.premium },
      { value: r.q, label: "q" },
    ]
  );
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data.rows} margin={{ top: 28, right: 16, bottom: 8, left: 0 }} barSize={72}>
        <CartesianGrid vertical={false} stroke={COLOR.grid} />
        <XAxis dataKey="year" tick={TICK} stroke={COLOR.grid} />
        <YAxis domain={[0, 20]} ticks={[0, 5, 10, 15, 20]} tickFormatter={(v) => signed(v, 0)} tick={TICK} width={44} axisLine={false} tickLine={false} />
        <Tooltip cursor={rowCursor} content={tip} />
        <Bar dataKey="value" radius={[4, 4, 0, 0]} isAnimationActive={false}>
          {data.rows.map((r) => (
            <Cell key={r.year} fill={r.year === "2025" ? COLOR.context : COLOR.brand} />
          ))}
          <LabelList dataKey="value" position="top" offset={8} formatter={(v) => signed(v)} fontSize={14} fontWeight="bold" fill={COLOR.ink} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
