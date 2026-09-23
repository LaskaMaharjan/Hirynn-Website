import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  const handleApply = () => {
    alert(`Application submitted for ${job.title} at ${job.institution}! (demo only)`);
  };

  return (
    <div className="job-card">
      <h3>⚛️ {job.title}</h3>
      <p className="job-card-institution">{job.institution}  {job.location}</p>

      <div className="job-card-tags">
        <span className="pill-solid">Full Time</span>
        <span className="pill-solid">Primary</span>
        <span className="pill-solid">2-4 years</span>
      </div>

      <div className="job-card-actions">
        <Link to={`/jobs/${job.id}`} className="btn btn-outline">View Details</Link>
        <button className="btn btn-primary" onClick={handleApply}>Apply Now</button>
      </div>
    </div>
  );
}