import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard.jsx";
import heroImage from "../assets/hero-illustration.png";
import helpImage from "../assets/help-illustration.svg";

const jobs = [
  { id: 1, title: "Mathematics Teacher", institution: "Tulips School", location: "Biratnagar, Nepal" },
  { id: 2, title: "Mathematics Teacher", institution: "Tulips School", location: "Biratnagar, Nepal" },
  { id: 3, title: "Mathematics Teacher", institution: "Tulips School", location: "Biratnagar, Nepal" },
  { id: 4, title: "Mathematics Teacher", institution: "Tulips School", location: "Biratnagar, Nepal" },
  { id: 5, title: "Mathematics Teacher", institution: "Tulips School", location: "Biratnagar, Nepal" },
  { id: 6, title: "Mathematics Teacher", institution: "Tulips School", location: "Biratnagar, Nepal" },
];

const testimonials = [
  {
    quote: "Hirynn made job hunting so simple. I found a position that matched my skills in just a few days. The process was smooth and stress-free.",
    name: "Anita Shrestha",
    role: "Secondary Teacher",
  },
  {
    quote: "As a school administrator, posting jobs on Hirynn saved us weeks of searching. We found qualified teachers within days.",
    name: "Rajesh Thapa",
    role: "Principal, Euro School",
  },
  {
    quote: "The platform is intuitive and the application tracking feature kept me informed throughout my job search journey.",
    name: "Priya Gurung",
    role: "Primary Teacher",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
        <div className="hero-art">
          <img src={heroImage} alt="Online learning illustration" />
        </div>
      </section>

      <section className="container">
        <p className="text-center text-muted">How it works?</p>
        <h2 className="text-center">Follow <span className="accent">Easy</span> 4 Steps</h2>

        <div className="steps-grid">
          <div className="step-card step-1">
            <div className="step-icon">👤</div>
            <h3>Account</h3>
            <p className="text-muted">You have to create an account here with the details and they must be true to get the jobs quickly and works effectively.</p>
          </div>
          <div className="step-card step-2">
            <div className="step-icon">🔍</div>
            <h3>Search Job</h3>
            <p className="text-muted">Search the job according to your interests and experiences and that matches the requirements for the job.</p>
          </div>
          <div className="step-card step-3">
            <div className="step-icon">📄</div>
            <h3>CV/Resume</h3>
            <p className="text-muted">Now you have to fill the given job applications with your recent CV/Resume where you are interested and will help you grow.</p>
          </div>
          <div className="step-card step-4">
            <div className="step-icon">✅</div>
            <h3>Apply</h3>
            <p className="text-muted">Apply to the job applications and make sure to check the location and time to not face problems later.</p>
          </div>
        </div>
      </section>

      <section className="container">
        <h2>We always help to help you with!</h2>

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
          <div className="help-art">
            <img src={helpImage} alt="Discussion illustration" />
          </div>
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
        <p className="testimonial-quote">"{testimonials[current].quote}"</p>
        <div className="testimonial-avatar"></div>
        <p className="testimonial-name">{testimonials[current].name}</p>
        <p className="text-muted">{testimonials[current].role}</p>

        <div className="carousel-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={i === current ? "dot active" : "dot"}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </section>

      <section className="container app-promo">
        <div className="app-art">📱</div>
        <div>
          <h2>Unlock Your Teaching Potential</h2>
          <p className="text-muted">
            Hirynn App is designed for teachers and educational institutions
            in Nepal to connect with the best opportunities. Discover
            teaching jobs, apply easily, and access career resources to grow
            professionally.
          </p>
          <strong>We Also Have an App</strong>
          <p className="text-muted">
            Use Hirynn on your Android device to explore job postings, apply
            to your favorite schools, and stay updated with career
            resources anytime, anywhere.
          </p>
          <div className="app-badge">▶ GET IT ON Google Play</div>
        </div>
      </section>
    </div>
  );
}