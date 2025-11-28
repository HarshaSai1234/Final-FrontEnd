import { useState } from "react";

function Login({ onLogin }) {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    // For demo: choose radio button role
    onLogin(role);
  };

  return (
    <div className="card" aria-labelledby="login-title">
      <div className="card-header">
        <div>
          <h1 id="login-title" className="card-title">
            Student Work-Study Portal
          </h1>
          <p className="card-subtitle">
            Log in as Admin or Student to manage work-study programs.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} aria-label="Login form">
        <div className="form-group">
          <label>
            Email
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@college.edu"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Password
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <span className="small">Select role (project demo):</span>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.25rem" }}>
            <label>
              <input
                type="radio"
                name="role"
                value="student"
                checked={role === "student"}
                onChange={() => setRole("student")}
              />{" "}
              Student
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="admin"
                checked={role === "admin"}
                onChange={() => setRole("admin")}
              />{" "}
              Admin
            </label>
          </div>
        </div>

        {error && (
          <p style={{ color: "#b91c1c", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
            {error}
          </p>
        )}

        <button type="submit" className="btn btn-primary">
          Continue as {role === "admin" ? "Admin" : "Student"}
        </button>
      </form>
    </div>
  );
}

export default Login;
