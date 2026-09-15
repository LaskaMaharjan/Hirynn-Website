import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  const handleApply = () => {
    alert(`Application submitted for ${job.title} at ${job.institution}! (demo only)`);
  };

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
        <Link to={`/jobs/${job.id}`} className="btn btn-outline">View Details</Link>
        <button className="btn btn-primary" onClick={handleApply}>Apply Now</button>
      </div>
    </div>
  );
}