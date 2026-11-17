import React from "react";

// Arrow between stages / steps. Points right on wide screens and down on phones
// (rotated in CSS), so the same markup works for both layouts. Decorative only:
// the reading order of the list already carries the sequence.
export const Arrow = () => (
  <svg className="flow-arrow" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
    <path d="M4 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Content text may be a string or an array of lines (the page never uses ；／。 inside a
// field: each clause is its own line). Renders each line as a block-level span.
export const Lines = ({ text }) =>
  [].concat(text).map((t, i) => (
    <span className="line" key={i}>
      {t}
    </span>
  ));

// Top diagram: the data routine feeds both daily report routines.
// Same HTML-box approach as FlowDiagram; the arrow carries a short label.
export const ScheduleMap = ({ schedules: s }) => {
  const Node = ({ n }) => (
    <li className="flow-node sched-node">
      <span className="sched-name">{n.name}</span>
      <strong>{n.title}</strong>
      <span className="sched-when">{n.when}</span>
      <span className="lines">
        <Lines text={n.lines} />
      </span>
    </li>
  );
  return (
    <figure className="flow">
      <div className="sched">
        <ul className="sched-col">
          <Node n={s.source} />
        </ul>
        <div className="sched-link">
          <Arrow />
          <span className="sched-link-label">
            <Lines text={s.link} />
          </span>
        </div>
        <ul className="sched-col">
          {s.targets.map((n) => (
            <Node key={n.title} n={n} />
          ))}
        </ul>
      </div>
      <figcaption>
        <Lines text={s.caption} />
      </figcaption>
    </figure>
  );
};

// System data flow: stages left → right, each a column of nodes.
// HTML boxes (not one big SVG) so long Chinese text wraps and phones can stack the stages.
export const FlowDiagram = ({ flow }) => (
  <figure className="flow">
    <ol className="flow-stages">
      {flow.stages.map((stage, i) => (
        <React.Fragment key={stage.title}>
          {i > 0 && (
            <li className="flow-link" aria-hidden="true">
              <Arrow />
            </li>
          )}
          <li className="flow-stage">
            <h3 className="flow-stage-title">
              <span className="flow-stage-no">{i + 1}</span>
              {stage.title}
            </h3>
            <ul className="flow-nodes">
              {stage.nodes.map((n) => (
                <li key={n.title} className="flow-node">
                  <strong>{n.title}</strong>
                  <span className="lines">
                    <Lines text={n.body} />
                  </span>
                </li>
              ))}
            </ul>
          </li>
        </React.Fragment>
      ))}
    </ol>
    <figcaption>{flow.caption}</figcaption>
  </figure>
);

// The loop every version went through: numbered steps with arrows between them.
export const BuildLoop = ({ loop }) => (
  <ol className="loop">
    {loop.steps.map((s, i) => (
      <React.Fragment key={s.title}>
        {i > 0 && (
          <li className="flow-link" aria-hidden="true">
            <Arrow />
          </li>
        )}
        <li className="loop-step">
          <span className="loop-no">{i + 1}</span>
          <strong>{s.title}</strong>
          <span className="lines">
            <Lines text={s.body} />
          </span>
        </li>
      </React.Fragment>
    ))}
  </ol>
);
