import { useState } from "react";

const initialJobs = [
  { id: 1, title: "High School Mathematics Teacher", institution: "Tulips Academy", location: "Harisiddhi, Lalitpur", type: "Full-Time" },
  { id: 2, title: "High School Mathematics Teacher", institution: "Tulips Academy", location: "Harisiddhi, Lalitpur", type: "Full-Time" },
];

export default function SavedJobs() {
  const [jobs, setJobs] = useState(initialJobs);

  const removeJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="page container">
      <h1>Saved Jobs</h1>
      <p className="text-muted">Jobs you've bookmarked for later review</p>

      <div className="applications-list">
        {jobs.map((job) => (
          <div className="application-row" key={job.id}>
            <div>
              <h3>{job.title}</h3>
              <p className="text-muted">{job.institution}</p>
              <div className="job-card-tags">
                <span className="pill">📍 {job.location}</span>
                <span className="pill">🕒 {job.type}</span>
              </div>
            </div>
            <button className="btn btn-outline" onClick={() => removeJob(job.id)}>
              ♥ Remove
            </button>
          </div>
        ))}

        {jobs.length === 0 && (
          <p className="text-muted text-center">No saved jobs yet.</p>
        )}
      </div>
    </div>
  );
}