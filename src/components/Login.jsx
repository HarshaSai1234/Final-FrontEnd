import { useState } from "react";

function Login({ onLogin, onShowSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    const result = onLogin(email, password);

    if (!result.success) {
      if (result.reason === "no-user") {
        setError("Account not found. Please sign up first.");
      } else if (result.reason === "wrong-password") {
        setError("Incorrect password. Try again.");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="card" aria-labelledby="login-title">
      <div className="card-header">
        <div>
          <div className="logo">
            <span id="login-title" className="logo-main">
              Edu<span>Work</span>
            </span>
            <span className="logo-pill">Student Work-Study Portal</span>
          </div>
          <p className="card-subtitle">
            Sign in to access jobs, applications, and work-hour tracking.
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
          Log in
        </button>
      </form>

      <p className="small" style={{ marginTop: "1rem" }}>
        New to EduWork?{" "}
        <button
          type="button"
          className="link-button"
          onClick={onShowSignup}
        >
          Create an account
        </button>
      </p>
    </div>
  );
}

export default Login;
