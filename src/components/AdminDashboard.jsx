import { useState } from "react";
import AdminJobs from "./AdminJobs";
import AdminApplications from "./AdminApplications";
import AdminWorkHours from "./AdminWorkHours";


function AdminDashboard({ onLogout, onToggleTheme }) {
  const [tab, setTab] = useState("jobs");

  return (
    <div className="page-full">
      <div className="card-header">
        <div>
          <h1 className="card-title">
            Admin Panel <span className="badge">Program Administrator</span>
          </h1>
          <p className="card-subtitle">
            Post opportunities, manage applications, and track student work hours.
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
