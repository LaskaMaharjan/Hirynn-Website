import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register({ onLogin }) {
  const [role, setRole] = useState("teacher");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    navigate("/");
  };

  return (
    <div className="page container">
      <div className="auth-card">
        <h1 className="text-center">Create Account</h1>
        <p className="text-center text-muted">Join Hirynn as a teacher or institution</p>

        <form onSubmit={handleSubmit}>
          <label className="field-label">I am a:</label>
          <div className="role-toggle">
            <button
              type="button"
              className={role === "teacher" ? "role-btn active" : "role-btn"}
              onClick={() => setRole("teacher")}
            >
              Teacher
            </button>
            <button
              type="button"
              className={role === "institution" ? "role-btn active" : "role-btn"}
              onClick={() => setRole("institution")}
            >
              Institution
            </button>
          </div>

          {role === "teacher" ? (
            <div className="form-row">
              <div className="field">
                <label>First Name</label>
                <input
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label>Last Name</label>
                <input
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
          ) : (
            <div className="field">
              <label>Organization Name</label>
              <input
                placeholder="Organization name"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            Register
          </button>
        </form>

        <p className="text-center text-muted auth-switch">
          Already have an account? <Link to="/login" className="auth-link">Login</Link>
        </p>
      </div>
    </div>
  );
}