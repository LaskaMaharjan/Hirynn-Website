import { Link } from "react-router-dom";

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
    </div>
  );
}