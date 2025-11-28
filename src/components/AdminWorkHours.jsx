function AdminWorkHours() {
  const records = [
    { id: 1, student: "Anita Rao", job: "Library Assistant", week: "2025-11-24", hours: 8 },
    { id: 2, student: "Vikram Das", job: "IT Help Desk", week: "2025-11-24", hours: 6 },
  ];

  return (
    <section aria-labelledby="admin-hours-title">
      <h2 id="admin-hours-title" className="section-title">
        Track student work hours
      </h2>
      <p className="section-description">
        Monitor weekly hours submitted by students to ensure they stay within program limits.
      </p>

      <table className="table" aria-label="Work hours">
        <thead>
          <tr>
            <th>Student</th>
            <th>Position</th>
            <th>Week of</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r) => (
            <tr key={r.id}>
              <td>{r.student}</td>
              <td>{r.job}</td>
              <td>{r.week}</td>
              <td>{r.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="list" style={{ marginTop: "1rem" }}>
        <li>Use this view to flag students who exceed allowed hours.</li>
        <li>In a real system, you would export hours to payroll from here.</li>
      </ul>
    </section>
  );
}

export default AdminWorkHours;
