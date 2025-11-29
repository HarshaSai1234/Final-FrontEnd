import { useState } from "react";

function Signup({ onSignup, onShowLogin }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !age || !phone || !gender || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const result = onSignup({
      name,
      age,
      phone,
      gender,
      email,
      password,
      role,
    });

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
            Create EduWork Account
          </h1>
          <p className="card-subtitle">
            Sign up to access job applications and work-study tools.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} aria-label="Signup form">
        <div className="form-group">
          <label>
            Full Name
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

        <div className="form-row">
          <label>
            Age
            <input
              className="input"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="18"
              required
            />
          </label>

          <label>
            Phone Number
            <input
              className="input"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="9876543210"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <span className="small">Gender:</span>
          <div style={{ display: "flex", gap: "1rem", marginTop: "0.35rem" }}>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={() => setGender("Male")}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={() => setGender("Female")}
              />{" "}
              Female
            </label>
          </div>
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
          <span className="small">Account Type:</span>
          <div style={{ display: "flex", gap: "1rem", marginTop: "0.35rem" }}>
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
