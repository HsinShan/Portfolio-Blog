import React, { useState } from "react";
import { Button } from "antd";
import Emph from "./emph";

// Same anatomy for every chart: conclusion title → what is measured → chart (or its
// table) → source notes. The table view keeps every value reachable without hovering.
// `measure` and `note` are arrays of short lines.
const ChartCard = ({ title, measure = [], note = [], ui, table, wide = false, children }) => {
  const [showTable, setShowTable] = useState(false);
  return (
    <section className={`chart-card${wide ? " chart-card-wide" : ""}`}>
      <div className="chart-card-head">
        <h2>
          <Emph text={title} />
        </h2>
        {table && (
          <Button size="small" onClick={() => setShowTable((v) => !v)} aria-pressed={showTable}>
            {showTable ? ui.showChart : ui.showTable}
          </Button>
        )}
      </div>
      {measure.length > 0 && (
        <div className="chart-measure">
          <span className="chart-measure-label">{ui.measureLabel}</span>
          {measure.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      )}
      {showTable && table ? (
        <div className="chart-table-wrap">
          <table className="chart-table">
            <thead>
              <tr>
                {table.columns.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((r, i) => (
                // index key: rows are static and never reorder
                <tr key={i}>
                  {r.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="chart-body">{children}</div>
      )}
      <ul className="chart-note">
        {note.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </section>
  );
};
export default ChartCard;
