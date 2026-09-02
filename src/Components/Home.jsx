import { Link } from "react-router-dom";
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
];

export default function Home() {
  return (
    <div className="page">
      <section className="container hero">
        <div className="hero-text">
          <h1>Welcome to Hirynn.....</h1>
          <p className="hero-sub">
            Join thousands of professionals and institutions hiring and
            networking today.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Join for free</button>
            <Link to="/jobs" className="btn btn-outline">Find Jobs</Link>
          </div>
        </div>
        <div className="hero-art">🧑‍🏫</div>
      </section>

      <section className="container">
        <p className="text-center text-muted">How it works?</p>
        <h2 className="text-center">Follow <span className="accent">Easy</span> 4 Steps</h2>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon">👤</div>
            <h3>Account</h3>
            <p className="text-muted">You have to create an account here with the details and they must be true to get the jobs quickly and works effectively.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">🔍</div>
            <h3>Search Job</h3>
            <p className="text-muted">Search the job according to your interests and experiences and that matches the requirements for the job.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">📄</div>
            <h3>CV/Resume</h3>
            <p className="text-muted">Now you have to fill the given job applications with your recent CV/Resume where you are interested and will help you grow.</p>
          </div>
          <div className="step-card">
            <div className="step-icon">✅</div>
            <h3>Apply</h3>
            <p className="text-muted">Apply to the job applications and make sure to check the location and time to not face problems later.</p>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="text-center">Recommended Jobs</h2>
        <div className="jobs-grid">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
}