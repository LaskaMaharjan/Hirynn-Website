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
        <h2 className="text-center">We always help to help you with!</h2>

        <div className="help-grid">
          <div className="help-list">
            <div className="help-item">
              <div className="help-icon">📈</div>
              <div>
                <h3>Enhance your career</h3>
                <p className="text-muted">Hirynn helps you discover the right opportunities, connect with trusted institutions, and grow as a professional.</p>
              </div>
            </div>
            <div className="help-item">
              <div className="help-icon">💬</div>
              <div>
                <h3>Communication</h3>
                <p className="text-muted">Hirynn connects educators with the right opportunities to achieve success.</p>
              </div>
            </div>
            <div className="help-item">
              <div className="help-icon">✅</div>
              <div>
                <h3>Smart Jobs</h3>
                <p className="text-muted">Hirynn helps you discover opportunities tailored to your skills and aspirations for long-term career growth.</p>
              </div>
            </div>
          </div>
          <div className="help-art">🤝</div>
        </div>
      </section>

      <section className="container promo">
        <div className="promo-art">💻</div>
        <div>
          <h2><span className="accent">500+</span> Nepal's Best Teaching Institutes Posted Their Jobs!</h2>
          <p className="text-muted">Explore opportunities posted by 500+ of Nepal's finest teaching institutions and advance your career.</p>
          <Link to="/jobs" className="btn btn-primary">Search Now</Link>
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

      <section className="container testimonial">
        <h2 className="text-center">What Our <span className="accent">Users</span> Say?</h2>
        <p className="testimonial-quote">"Hirynn made job hunting so simple. I found a position that matched my skills in just a few days. The process was smooth and stress-free."</p>
        <div className="testimonial-avatar"></div>
        <p className="testimonial-name">Anita Shrestha</p>
        <p className="text-muted">Secondary Teacher</p>
      </section>
    </div>
  );
}