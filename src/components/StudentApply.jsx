import { useState } from "react";

const initialJobs = [
  { id: 1, title: "Library Assistant", department: "Central Library", hoursPerWeek: 10 },
  { id: 2, title: "IT Help Desk", department: "IT Services", hoursPerWeek: 8 },
  { id: 3, title: "Lab Assistant", department: "Physics Lab", hoursPerWeek: 6 },
];

function StudentApply() {
  const [jobs, setJobs] = useState(initialJobs);
  const [appliedIds, setAppliedIds] = useState([]);

  const handleApply = (jobId) => {
    if (!appliedIds.includes(jobId)) {
      setAppliedIds((prev) => [...prev, jobId]);
    }
  };

  return (
    <section aria-labelledby="student-apply-title">
      <h2 id="student-apply-title" className="section-title">
        Explore work-study opportunities
      </h2>
      <p className="section-description">
        Browse available positions and submit applications with a single click.
      </p>

      <table className="table" aria-label="Available jobs">
        <thead>
          <tr>
            <th>Title</th>
            <th>Department</th>
            <th>Hours / week</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => {
            const isApplied = appliedIds.includes(job.id);
            return (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.department}</td>
                <td>{job.hoursPerWeek}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={isApplied}
                    onClick={() => handleApply(job.id)}
                  >
                    {isApplied ? "Applied" : "Apply"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {appliedIds.length > 0 && (
        <p className="small" style={{ marginTop: "0.75rem" }}>
          You have applied for {appliedIds.length} position(s).
        </p>
      )}
    </section>
  );
}

export default StudentApply;
