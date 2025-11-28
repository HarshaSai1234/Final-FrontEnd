import { useState } from "react";

function StudentWorkHours() {
  const [entries, setEntries] = useState([
    { id: 1, week: "2025-11-24", position: "Library Assistant", hours: 6 },
  ]);

  const [form, setForm] = useState({
    week: "",
    position: "",
    hours: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.week || !form.position || !form.hours) return;

    const newEntry = {
      id: Date.now(),
      week: form.week,
      position: form.position,
      hours: Number(form.hours),
    };
    setEntries((prev) => [...prev, newEntry]);
    setForm({ week: "", position: "", hours: "" });
  };

  return (
    <section aria-labelledby="student-hours-title">
      <h2 id="student-hours-title" className="section-title">
        Submit weekly work hours
      </h2>
      <p className="section-description">
        Record the hours you worked for each week so that your supervisor can review them.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>
              Week (start date)
              <input
                className="input"
                type="date"
                name="week"
                value={form.week}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Position
              <input
                className="input"
                name="position"
                value={form.position}
                onChange={handleChange}
                placeholder="Library Assistant"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Hours worked
              <input
                className="input"
                type="number"
                min="1"
                max="20"
                name="hours"
                value={form.hours}
                onChange={handleChange}
                placeholder="8"
              />
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" style={{ marginTop: "0.5rem" }}>
          Add Entry
        </button>
      </form>

      <h3 className="section-title" style={{ marginTop: "1.5rem" }}>
        Submitted hours
      </h3>

      <table className="table" aria-label="Submitted work hours">
        <thead>
          <tr>
            <th>Week</th>
            <th>Position</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e) => (
            <tr key={e.id}>
              <td>{e.week}</td>
              <td>{e.position}</td>
              <td>{e.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default StudentWorkHours;
