import { useState } from "react";
import AdminJobs from "./AdminJobs";
import AdminApplications from "./AdminApplications";
import AdminWorkHours from "./AdminWorkHours";

function AdminDashboard({ onLogout }) {
  const [tab, setTab] = useState("jobs"); // "jobs" | "applications" | "hours"

  return (
    <div className="card card-panel">
      <div className="card-header">
        <div>
          <h1 className="card-title">
            Admin Panel <span className="badge">Program Administrator</span>
          </h1>
          <p className="card-subtitle">
            Post opportunities, manage applications, and track student work hours.
          </p>
        </div>
        <button onClick={onLogout} className="btn btn-secondary">
          Logout
        </button>
      </div>

      <nav className="tabs" aria-label="Admin navigation">
        <button
          className={`tab ${tab === "jobs" ? "tab-active" : ""}`}
          onClick={() => setTab("jobs")}
        >
          Post Opportunities
        </button>
        <button
          className={`tab ${tab === "applications" ? "tab-active" : ""}`}
          onClick={() => setTab("applications")}
        >
          Manage Applications
        </button>
        <button
          className={`tab ${tab === "hours" ? "tab-active" : ""}`}
          onClick={() => setTab("hours")}
        >
          Track Work Hours
        </button>
      </nav>

      {tab === "jobs" && <AdminJobs />}
      {tab === "applications" && <AdminApplications />}
      {tab === "hours" && <AdminWorkHours />}
    </div>
  );
}

export default AdminDashboard;
