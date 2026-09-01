export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p className="job-card-institution">{job.institution}</p>
      <p className="job-card-blurb">{job.blurb}</p>

      <div className="job-card-tags">
        <span className="pill">📖 {job.subject}</span>
        <span className="pill">📍 {job.location}</span>
        <span className="pill">🕒 {job.type}</span>
      </div>

      <div className="job-card-actions">
        <button className="btn btn-outline">View Details</button>
        <button className="btn btn-primary">Apply Now</button>
      </div>
    </div>
  );
}