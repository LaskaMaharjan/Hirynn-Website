const skills = ["Calculus", "Algebra", "Statistics", "Classroom Management", "Geometry"];

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

            <button className="btn btn-primary" style={{ width: "100%" }}>✎ Edit Profile</button>
          </div>

          <div className="profile-box">
            <h3>Skills</h3>
            <div className="skill-tags">
              {skills.map((s) => (
                <span className="pill" key={s}>{s}</span>
              ))}
            </div>
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
            <div className="timeline-item">
              <strong>Senior Mathematics Teacher</strong>
              <p className="text-muted">Lincoln High School · Lalitpur, Nepal</p>
              <p className="text-muted">2019 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}