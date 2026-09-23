import { Link } from "react-router-dom";

const requirements = [
  "Bachelor's degree in Mathematics or Education",
  "Teaching certification",
  "2+ years of teaching experience",
  "Strong classroom management skills",
];

const responsibilities = [
  "Health Insurance",
  "Retirement Plan",
  "Professional development opportunities",
  "Summer break",
];

const similarJobs = [
  { title: "Elementary Science Teacher", institution: "Sunshine School" },
  { title: "Chemistry Teacher", institution: "Euro School" },
];

export default function JobDetail() {
  const handleApply = () => {
    alert("Application submitted! (demo only)");
  };

  return (
    <div className="page container job-detail">
      <Link to="/jobs" className="back-link">← Back to jobs</Link>

      <div className="job-detail-header">
        <div>
          <h1>High School Mathematics Teacher</h1>
          <p className="job-card-institution">Tulips Academy</p>
          <div className="job-card-tags">
            <span className="pill">📖 Mathematics</span>
            <span className="pill">📍 Harisiddhi, Lalitpur</span>
            <span className="pill">🕒 Full-Time</span>
          </div>
        </div>
        <div className="job-detail-actions">
          <button className="btn btn-outline">♡ Save</button>
          <button className="btn btn-outline">⤴ Share</button>
        </div>
      </div>

      <div className="job-detail-grid">
        <div className="job-detail-main">
          <div className="job-detail-body">
            <h3>Job Description</h3>
            <p className="text-muted">
              We are seeking a passionate Mathematics teacher to join our
              dynamic team. The ideal candidate will have experience
              teaching high school students and a strong background in
              mathematics education. He/She must fit to all the
              requirements and expectations and can be called to interview
              via email.
            </p>
          </div>

          <div className="job-detail-body">
            <h3>Requirements</h3>
            <ul className="arrow-list">
              {requirements.map((r) => (
                <li key={r}>→ {r}</li>
              ))}
            </ul>
          </div>

          <div className="job-detail-body">
            <h3>Responsibilities</h3>
            <ul className="arrow-list">
              {responsibilities.map((r) => (
                <li key={r}>→ {r}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="job-detail-side">
          <div className="job-detail-body text-center">
            <h3>Apply for this position</h3>
            <button className="btn btn-primary btn-block" onClick={handleApply}>
              Apply Now
            </button>
            <p className="text-muted apply-note">
              You'll be redirected to complete your application.
            </p>
          </div>

          <div className="job-detail-body">
            <h3 className="text-center underline-heading">Job Details</h3>
            <div className="job-detail-list">
              <div>
                <dt>📅 Posted</dt>
                <dd>September 5, 2025</dd>
              </div>
              <div>
                <dt>📅 Application Deadline</dt>
                <dd>October 5, 2025</dd>
              </div>
              <div>
                <dt>👤 Experience Required</dt>
                <dd>2-5 years</dd>
              </div>
            </div>
          </div>

          <div className="job-detail-body">
            <h3 className="text-center underline-heading">Similar Jobs</h3>
            <ul className="similar-jobs">
              {similarJobs.map((j) => (
                <li key={j.title}>
                  <strong>{j.title}</strong>
                  <p className="text-muted">{j.institution}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}