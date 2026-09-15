export default function JobDetail() {
  const handleApply = () => {
    alert("Application submitted! (demo only)");
  };

  return (
    <div className="page container">
      <p className="back-link">← Back to jobs</p>

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
        <button className="btn btn-primary" onClick={handleApply}>Apply Now</button>
      </div>

      <div className="job-detail-body">
        <h3>Job Description</h3>
        <p className="text-muted">
          We are seeking a passionate Mathematics teacher to join our
          dynamic team. The ideal candidate will have experience teaching
          high school students and a strong background in mathematics
          education.
        </p>
      </div>
    </div>
  );
}