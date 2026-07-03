import React from "react";
import { createRoot } from "react-dom/client";
import ScheduleSpineExplainer from "./ScheduleSpineExplainer.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="app-shell">
      <header className="app-header">
        <p className="kicker">Project controls / posets / schedule theory</p>
        <h1>Schedule Spine Explorer</h1>
        <p>
          An interactive walkthrough of Dilworth lanes, Hollom's 2024 spine
          result, review loops, and the boundary where a project backbone may
          fail to exist.
        </p>
      </header>
      <ScheduleSpineExplainer />
    </main>
  </React.StrictMode>
);
