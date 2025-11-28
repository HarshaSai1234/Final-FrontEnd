import { useState } from "react";

function AdminJobs() {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Library Assistant", department: "Central Library", hoursPerWeek: 10 },
  ]);

  const [form, setForm] = useState({
    title: "",
    department: "",
    hoursPerWeek: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.department || !form.hoursPerWeek) return;

    const newJob = {
      id: Date.now(),
      title: form.title,
      department: form.department,
      hoursPerWeek: Number(form.hoursPerWeek),
    };
    setJobs((prev) => [...prev, newJob]);
    setForm({ title: "", department: "", hoursPerWeek: "" });
  };

  return (
    <section aria-labelledby="admin-jobs-title">
      <h2 id="admin-jobs-title" className="section-title">
        Post work-study opportunities
      </h2>
      <p className="section-description">
        Create and publish campus work-study positions that students can view and apply for.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>
              Job title
              <input
                className="input"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Lab Assistant"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Department / Office
              <input
                className="input"
                name="department"
                value={form.department}
                onChange={handleChange}
                placeholder="Physics Department"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Hours per week
              <input
                className="input"
                type="number"
                min="1"
                max="20"
                name="hoursPerWeek"
                value={form.hoursPerWeek}
                onChange={handleChange}
                placeholder="10"
              />
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" style={{ marginTop: "0.5rem" }}>
          Save Opportunity
        </button>
      </form>

      <h3 className="section-title" style={{ marginTop: "1.5rem" }}>
        Active postings
      </h3>

      {jobs.length === 0 ? (
        <p className="small">No jobs posted yet.</p>
      ) : (
        <table className="table" aria-label="Admin job postings">
          <thead>
            <tr>
              <th>Title</th>
              <th>Department</th>
              <th>Hours / week</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.department}</td>
                <td>{job.hoursPerWeek}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default AdminJobs;
