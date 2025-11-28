import { useState } from "react";
import StudentApply from "./StudentApply";
import StudentWorkHours from "./StudentWorkHours";
import StudentFeedback from "./StudentFeedback";

function StudentDashboard({ onLogout }) {
  const [tab, setTab] = useState("apply"); // "apply" | "hours" | "feedback"

  return (
    <div className="card card-panel">
      <div className="card-header">
        <div>
          <h1 className="card-title">
            Student Dashboard <span className="badge">Work-Study Student</span>
          </h1>
          <p className="card-subtitle">
            Apply for positions, submit your work hours, and view feedback from supervisors.
          </p>
        </div>
        <button onClick={onLogout} className="btn btn-secondary">
          Logout
        </button>
      </div>

      <nav className="tabs" aria-label="Student navigation">
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
