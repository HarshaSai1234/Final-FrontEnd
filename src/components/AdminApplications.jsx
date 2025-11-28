import { useState } from "react";

const initialApplications = [
  { id: 1, student: "Anita Rao", job: "Library Assistant", status: "Pending" },
  { id: 2, student: "Vikram Das", job: "IT Help Desk", status: "Pending" },
];

function AdminApplications() {
  const [applications, setApplications] = useState(initialApplications);

  const updateStatus = (id, status) => {
    setApplications((apps) =>
      apps.map((a) => (a.id === id ? { ...a, status } : a))
    );
  };

  const statusTag = (status) => {
    if (status === "Approved") return <span className="tag tag-green">Approved</span>;
    if (status === "Rejected") return <span className="tag tag-red">Rejected</span>;
    return <span className="tag tag-yellow">Pending</span>;
  };

  return (
    <section aria-labelledby="admin-apps-title">
      <h2 id="admin-apps-title" className="section-title">
        Manage student applications
      </h2>
      <p className="section-description">
        Review work-study applications and record decisions for each student.
      </p>

      <table className="table" aria-label="Student applications">
        <thead>
          <tr>
            <th>Student</th>
            <th>Position</th>
            <th>Status</th>
            <th aria-label="Actions" />
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.student}</td>
              <td>{app.job}</td>
              <td>{statusTag(app.status)}</td>
              <td>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => updateStatus(app.id, "Approved")}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => updateStatus(app.id, "Rejected")}
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default AdminApplications;
