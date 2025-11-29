import { useState } from "react";
import StudentApply from "./StudentApply";
import StudentWorkHours from "./StudentWorkHours";
import StudentFeedback from "./StudentFeedback";

function StudentDashboard({ onLogout, onToggleTheme }) {
  const [tab, setTab] = useState("apply");

  return (
    <div className="page-full">
      <div className="card-header">
        <div>
          <h1 className="card-title">
            Student Dashboard <span className="badge">Work-Study Student</span>
          </h1>
          <p className="card-subtitle">
            Apply for positions, submit your work hours, and view supervisor feedback.
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button onClick={onToggleTheme} className="btn btn-primary">
            Toggle Theme
          </button>
          <button onClick={onLogout} className="btn btn-secondary">
            Logout
          </button>
        </div>
      </div>

      <nav className="tabs">
        <button
          className={`tab ${tab === "apply" ? "tab-active" : ""}`}
          onClick={() => setTab("apply")}
        >
          Apply for Positions
        </button>
        <button
          className={`tab ${tab === "hours" ? "tab-active" : ""}`}
          onClick={() => setTab("hours")}
        >
          Track Work Hours
        </button>
        <button
          className={`tab ${tab === "feedback" ? "tab-active" : ""}`}
          onClick={() => setTab("feedback")}
        >
          Feedback
        </button>
      </nav>

      {tab === "apply" && <StudentApply />}
      {tab === "hours" && <StudentWorkHours />}
      {tab === "feedback" && <StudentFeedback />}
    </div>
  );
}

export default StudentDashboard;
