import JobCard from "./JobCard.jsx";

const jobs = [
  {
    id: 1,
    title: "High School Mathematics Teacher",
    institution: "Tulips Academy",
    blurb: "Seeking a passionate mathematics teacher for our dynamic high school environment.",
    subject: "Mathematics",
    location: "Harisiddhi, Lalitpur",
    type: "Full-Time",
  },
  {
    id: 2,
    title: "High School Mathematics Teacher",
    institution: "Tulips Academy",
    blurb: "Seeking a passionate mathematics teacher for our dynamic high school environment.",
    subject: "Mathematics",
    location: "Harisiddhi, Lalitpur",
    type: "Full-Time",
  },
  {
    id: 3,
    title: "High School Mathematics Teacher",
    institution: "Tulips Academy",
    blurb: "Seeking a passionate mathematics teacher for our dynamic high school environment.",
    subject: "Mathematics",
    location: "Harisiddhi, Lalitpur",
    type: "Full-Time",
  },
];

export default function Jobs() {
  return (
    <div className="page container">
      <h1>Teaching Jobs</h1>
      <p className="text-muted">Discover your next teaching opportunity from top institutions in Nepal.</p>

      <div className="jobs-grid" style={{ marginTop: "24px" }}>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}