function StudentFeedback() {
  const feedback = [
    {
      id: 1,
      from: "Library Supervisor",
      about: "Library Assistant",
      message: "Great punctuality and attention to detail at the circulation desk.",
    },
    {
      id: 2,
      from: "IT Help Desk Lead",
      about: "IT Help Desk",
      message: "Good communication with students; keep improving troubleshooting speed.",
    },
  ];

  return (
    <section aria-labelledby="student-feedback-title">
      <h2 id="student-feedback-title" className="section-title">
        Supervisor feedback
      </h2>
      <p className="section-description">
        View comments from supervisors about your performance in work-study roles.
      </p>

      {feedback.length === 0 ? (
        <p className="small">No feedback has been recorded yet.</p>
      ) : (
        <ul className="list">
          {feedback.map((f) => (
            <li key={f.id}>
              <strong>{f.about}</strong> — {f.message}{" "}
              <span className="small">({f.from})</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default StudentFeedback;
