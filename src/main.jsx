import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import ScheduleSpineExplainer from "./ScheduleSpineExplainer.jsx";
import "./styles.css";

const attempts = [
  {
    id: "spine",
    label: "Attempt 1",
    title: "Spine explorer",
    summary:
      "The current interactive walkthrough: Dilworth lanes, Hollman's spine result, review-loop limits, and the no-spine boundary.",
    content: <ScheduleSpineExplainer />,
  },
  {
    id: "cases",
    label: "Attempt 2",
    title: "Project controls cases",
    summary:
      "A future version can test named project-control situations against the schedule-shape classifier.",
    content: (
      <section className="attempt-note">
        <h2>Project controls cases</h2>
        <p>
          This tab is reserved for case-led attempts: stage gates, rolling-wave
          plans, review loops, and control-account structures translated into
          the same spine/front language.
        </p>
      </section>
    ),
  },
  {
    id: "questions",
    label: "Attempt 3",
    title: "Question generator",
    summary:
      "A future version can turn each theorem boundary into diagnostic questions for a project controls audience.",
    content: (
      <section className="attempt-note">
        <h2>Question generator</h2>
        <p>
          This tab is reserved for a working prompt surface that asks whether a
          schedule is finite, locally finite, width-limited, vacillating, or
          sitting near the nested-infinite tower pathology.
        </p>
      </section>
    ),
  },
];

function App() {
  const [activeId, setActiveId] = useState(attempts[0].id);
  const active = attempts.find((attempt) => attempt.id === activeId);

  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="kicker">Project controls / posets / schedule theory</p>
        <h1>Hollman and Dilworth Project Controls Lab</h1>
        <p>
          A growing set of interactive attempts at making schedule-spine theory
          useful to project controls thinkers.
        </p>
      </header>

      <nav className="attempt-tabs" aria-label="Problem-area attempts">
        {attempts.map((attempt) => (
          <button
            key={attempt.id}
            className={attempt.id === activeId ? "active" : ""}
            type="button"
            onClick={() => setActiveId(attempt.id)}
          >
            <span>{attempt.label}</span>
            {attempt.title}
          </button>
        ))}
      </nav>

      <section className="attempt-intro" aria-live="polite">
        <h2>{active.title}</h2>
        <p>{active.summary}</p>
      </section>

      {active.content}
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
