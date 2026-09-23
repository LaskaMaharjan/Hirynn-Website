import { Link } from "react-router-dom";

const skills = ["Calculus", "Algebra", "Statistics", "Classroom Management", "Geometry", "Curriculum Development"];
const certificates = ["New York State Teaching License", "AP Calculus Certifications", "Google Certified Educator"];

const experience = [
  { role: "Senior Mathematics Teacher", place: "Lincoln High School", location: "Lalitpur, Nepal", years: "2019-Present", desc: "Lead mathematics department, teach AP Calculus and Statistics, mentor new teachers." },
  { role: "Senior Mathematics Teacher", place: "Euro High School", location: "Lalitpur, Nepal", years: "2017-2018", desc: "Lead mathematics department, teach AP Calculus and Statistics, mentor new teachers." },
];

const education = [
  { degree: "Master of Education in Mathematics", school: "Colombia University", year: "2016", gpa: "3.8" },
  { degree: "Bachelor of Science in Mathematics", school: "Tribhuvan University", year: "2014", gpa: "3.9" },
];

const quickActions = [
  { icon: "📋", label: "My Applications", to: "/my-applications" },
  { icon: "💼", label: "Browse Jobs", to: "/jobs" },
  { icon: "🔖", label: "Saved Jobs", to: "/saved-jobs" },
];

export default function Profile() {
  return (
    <div className="page container">
      <div className="profile-layout">
        <div className="profile-sidebar">
          <div className="profile-card">
            <div className="profile-avatar"></div>
            <h2>Haley Jessica</h2>
            <p className="text-muted">Mathematics Teacher</p>

            <ul className="profile-contact">
              <li>✉ haley@hirynn.com</li>
              <li>📞 +977 9808701828</li>
              <li>📍 Lalitpur, Nepal</li>
            </ul>

            <button className="btn btn-primary btn-block">✎ Edit Profile</button>
            <button className="btn btn-outline btn-block" style={{ marginTop: 10 }}>⬇ Download Resume</button>
          </div>

          <div className="profile-box">
            <h3>Skills</h3>
            <div className="skill-tags">
              {skills.map((s) => (
                <span className="pill" key={s}>{s}</span>
              ))}
            </div>
          </div>

          <div className="profile-box">
            <h3>Certificates</h3>
            <ul className="arrow-list">
              {certificates.map((c) => (
                <li key={c}>→ {c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="profile-main">
          <div className="profile-box">
            <h3>About Me</h3>
            <p className="text-muted">
              Passionate mathematics educator with 8 years of experience
              teaching high school students. Committed to making complex
              mathematical concepts accessible and engaging for all
              learners.
            </p>
          </div>

          <div className="profile-box">
            <h3>Experience</h3>
            {experience.map((e, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-head">
                  <strong>{e.role}</strong>
                  <span className="text-muted">📅 {e.years}</span>
                </div>
                <p className="text-muted">{e.place}</p>
                <p className="text-muted">📍 {e.location}</p>
                <p className="text-muted">{e.desc}</p>
              </div>
            ))}
          </div>

          <div className="profile-box">
            <h3>Education</h3>
            {education.map((e, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-head">
                  <strong>{e.degree}</strong>
                  <span className="text-muted">📅 {e.year}</span>
                </div>
                <p className="text-muted">{e.school}</p>
                <p className="text-muted">GPA: {e.gpa}</p>
              </div>
            ))}
          </div>

          <div className="profile-box">
            <h3>Quick Actions</h3>
            <div className="quick-actions">
              {quickActions.map((a) => (
                <Link to={a.to} className="quick-action" key={a.label}>
                  <div className="quick-action-icon">{a.icon}</div>
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}