import { useState } from "react";

function Signup({ onSignup, onShowLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const result = onSignup({ name, email, password, role });

    if (!result.success) {
      if (result.reason === "exists") {
        setError("An account with this email already exists. Please log in.");
      } else {
        setError("Sign up failed. Please try again.");
      }
      return;
    }

    onShowLogin();
  };

  return (
    <div className="card" aria-labelledby="signup-title">
      <div className="card-header">
        <div>
          <h1 id="signup-title" className="card-title">
            Create Work-Study Account
          </h1>
          <p className="card-subtitle">
            Sign up as a student or admin to access the portal.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} aria-label="Signup form">
        <div className="form-group">
          <label>
            Name
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              required
            />
          </label>
        </div>

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
              placeholder="Create a password"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <span className="small">Select role for this account:</span>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              marginTop: "0.25rem",
            }}
          >
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
          <p
            style={{
              color: "#b91c1c",
              fontSize: "0.85rem",
              marginBottom: "0.75rem",
            }}
          >
            {error}
          </p>
        )}

        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>

      <p className="small" style={{ marginTop: "1rem" }}>
        Already have an account?{" "}
        <button
          type="button"
          className="link-button"
          onClick={onShowLogin}
        >
          Log in
        </button>
      </p>
    </div>
  );
}

export default Signup;
