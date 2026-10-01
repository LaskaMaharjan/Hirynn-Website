import { useState } from "react";
import { Link } from "react-router-dom";

const applications = [
  {
    id: 1,
    title: "High School Mathematics Teacher",
    institution: "Tulips Academy",
    location: "Harisiddhi, Lalitpur",
    appliedOn: "Sept 9, 2025",
    status: "review",
    statusLabel: "Under Review",
  },
  {
    id: 2,
    title: "High School Mathematics Teacher",
    institution: "Tulips Academy",
    location: "Harisiddhi, Lalitpur",
    appliedOn: "Sept 9, 2025",
    status: "interview",
    statusLabel: "Interview Scheduled",
  },
  {
    id: 3,
    title: "High School Mathematics Teacher",
    institution: "Tulips Academy",
    location: "Harisiddhi, Lalitpur",
    appliedOn: "Sept 9, 2025",
    status: "rejected",
    statusLabel: "Rejected",
  },
  {
    id: 4,
    title: "High School Mathematics Teacher",
    institution: "Tulips Academy",
    location: "Harisiddhi, Lalitpur",
    appliedOn: "Sept 9, 2025",
    status: "offer",
    statusLabel: "Offer Received",
  },
];

export default function Applications() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = applications.filter((app) => {
    const matchesQuery =
      app.title.toLowerCase().includes(query.toLowerCase()) ||
      app.institution.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesQuery && matchesStatus;
  });

  const total = applications.length;
  const underReview = applications.filter((a) => a.status === "review").length;
  const interviews = applications.filter((a) => a.status === "interview").length;
  const offers = applications.filter((a) => a.status === "offer").length;

  return (
    <div className="page applications-page">
      <div className="container">
        <Link to="/my-profile" className="back-link">← Back</Link>

        <div className="applications-header">
          <h1>My Applications</h1>
          <p>Track the status of your job applications.</p>
        </div>

        <div className="applications-toolbar">
          <div className="search-wrap">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search applications.."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="all">All Statuses</option>
            <option value="review">Under Review</option>
            <option value="interview">Interview Scheduled</option>
            <option value="rejected">Rejected</option>
            <option value="offer">Offer Received</option>
          </select>
        </div>

        <div className="applications-list">
          {filtered.map((app) => (
            <div className="application-row" key={app.id}>
              <div>
                <h4>{app.title}</h4>
                <div className="application-row-meta">
                  <span>🏫 {app.institution}</span>
                  <span>📍 {app.location}</span>
                  <span>📅 Applied on {app.appliedOn}</span>
                </div>
                <span className={`status status-${app.status}`}>{app.statusLabel}</span>
              </div>

              <div className="application-row-actions">
                <Link to={`/jobs/${app.id}`} className="btn btn-outline">
                  👁️ View Job
                </Link>
                {app.status === "interview" && (
                  <button className="btn btn-primary">Message</button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="applications-stats">
          <div className="stat-box">
            <strong>{total}</strong>
            <span>Total Applications</span>
          </div>
          <div className="stat-box stat-review">
            <strong>{underReview}</strong>
            <span>Under Review</span>
          </div>
          <div className="stat-box stat-interview">
            <strong>{interviews}</strong>
            <span>Interviews</span>
          </div>
          <div className="stat-box stat-offer">
            <strong>{offers}</strong>
            <span>Offers</span>
          </div>
        </div>
      </div>
    </div>
  );
}