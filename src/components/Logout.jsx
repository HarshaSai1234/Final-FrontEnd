function Logout({ onBackToLogin }) {
  return (
    <div className="card center" aria-labelledby="logout-title">
      <h1 id="logout-title" className="card-title">
        You’ve been logged out
      </h1>
      <p className="section-description" style={{ maxWidth: "420px" }}>
        Thank you for using the Student Work-Study Portal. You can log in again
        anytime to manage opportunities and work hours.
      </p>
      <button onClick={onBackToLogin} className="btn btn-primary">
        Back to Login
      </button>
    </div>
  );
}

export default Logout;
