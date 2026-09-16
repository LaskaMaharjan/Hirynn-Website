const applications = [
  { id: 1, title: "High School Mathematics Teacher", institution: "Tulips Academy", status: "Under Review", statusClass: "status-review" },
  { id: 2, title: "High School Mathematics Teacher", institution: "Tulips Academy", status: "Interview Scheduled", statusClass: "status-interview" },
  { id: 3, title: "High School Mathematics Teacher", institution: "Tulips Academy", status: "Rejected", statusClass: "status-rejected" },
  { id: 4, title: "High School Mathematics Teacher", institution: "Tulips Academy", status: "Offer Received", statusClass: "status-offer" },
];

export default function Applications() {
  return (
    <div className="page container">
      <h1>My Applications</h1>
      <p className="text-muted">Track the status of your job applications.</p>

      <div className="applications-list">
        {applications.map((app) => (
          <div className="application-row" key={app.id}>
            <div>
              <h3>{app.title}</h3>
              <p className="text-muted">{app.institution}</p>
              <span className={`status ${app.statusClass}`}>{app.status}</span>
            </div>
            <button className="btn btn-outline">View Job</button>
          </div>
        ))}
      </div>
    </div>
  );
}