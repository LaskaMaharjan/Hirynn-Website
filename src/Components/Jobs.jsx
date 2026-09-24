import { useState } from "react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard.jsx";

const jobs = [
  { id: 1, title: "High School Mathematics Teacher", institution: "Tulips Academy", blurb: "Seeking a passionate mathematics teacher for our dynamic high school environment.", subject: "Mathematics", location: "Harisiddhi, Lalitpur", type: "Full-Time" },
  { id: 2, title: "High School Mathematics Teacher", institution: "Tulips Academy", blurb: "Seeking a passionate mathematics teacher for our dynamic high school environment.", subject: "Mathematics", location: "Harisiddhi, Lalitpur", type: "Full-Time" },
  { id: 3, title: "High School Mathematics Teacher", institution: "Tulips Academy", blurb: "Seeking a passionate mathematics teacher for our dynamic high school environment.", subject: "Mathematics", location: "Harisiddhi, Lalitpur", type: "Full-Time" },
  { id: 4, title: "High School Mathematics Teacher", institution: "Tulips Academy", blurb: "Seeking a passionate mathematics teacher for our dynamic high school environment.", subject: "Mathematics", location: "Harisiddhi, Lalitpur", type: "Full-Time" },
  { id: 5, title: "High School Mathematics Teacher", institution: "Tulips Academy", blurb: "Seeking a passionate mathematics teacher for our dynamic high school environment.", subject: "Mathematics", location: "Harisiddhi, Lalitpur", type: "Full-Time" },
  { id: 6, title: "High School Mathematics Teacher", institution: "Tulips Academy", blurb: "Seeking a passionate mathematics teacher for our dynamic high school environment.", subject: "Mathematics", location: "Harisiddhi, Lalitpur", type: "Full-Time" },
];

const filters = [
  { label: "Subjects", placeholder: "All subjects" },
  { label: "Locations", placeholder: "All locations" },
  { label: "Job Types", placeholder: "All types" },
  { label: "Experience Level", placeholder: "All levels" },
  { label: "Salary Range", placeholder: "All ranges" },
];

export default function Jobs() {
  const [query, setQuery] = useState("");

  const visibleJobs = jobs.filter((j) =>
    (j.title + j.institution + j.subject)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="page container jobs-page">
      <Link to="/" className="back-link">← Back</Link>
      <h1>Teaching Jobs</h1>
      <p className="text-muted">
        Discover your next teaching opportunity from top institutions in
        Nepal.
      </p>

      <div className="jobs-layout">
        <aside className="jobs-filters">
          <h3 className="filters-title">▽ Filters</h3>
          {filters.map((f) => (
            <div className="field" key={f.label}>
              <label>{f.label}</label>
              <select defaultValue="">
                <option value="">{f.placeholder}</option>
              </select>
            </div>
          ))}
        </aside>

        <div className="jobs-results">
          <input
            className="jobs-search"
            placeholder="Search jobs, institutions or subjects"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="jobs-grid jobs-grid-2col">
            {visibleJobs.map((job) => (
              <JobCard key={job.id} job={job} showBlurb />
            ))}
          </div>

          {visibleJobs.length === 0 && (
            <p className="text-muted">No jobs match your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}