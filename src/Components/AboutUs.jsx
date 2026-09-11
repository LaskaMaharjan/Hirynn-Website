const stats = [
  { value: "140+", label: "Schools Connected" },
  { value: "500+", label: "Teachers Empowered" },
  { value: "1000+", label: "Successful Matches" },
  { value: "95%", label: "Successful Rate" },
];

const team = [
  { name: "Edisa Shrestha", role: "CEO & Founder" },
  { name: "Ram Koirala", role: "Partnership Head" },
  { name: "Pratik Rai", role: "Marketing Head" },
  { name: "Serlin Khadka", role: "Product Lead" },
];

export default function AboutUs() {
  return (
    <div className="page container">
      <section className="about-hero">
        <div>
          <h1>Shaping Future Together!</h1>
          <p className="text-muted about-hero-quote">
            "At Hirynn, we believe education is the foundation of progress.
            Our platform is dedicated to connecting passionate teachers with
            the right opportunities, helping schools and institutions find
            the talent they need to inspire the next generation."
          </p>
        </div>
        <div className="about-hero-art">🧑‍🏫</div>
      </section>

      <p className="text-center about-intro">
        At Hirynn, we are committed to empowering educators, supporting
        institutions, and strengthening education by building trusted
        connections.
      </p>

      <div className="about-stats">
        {stats.map((s) => (
          <div className="about-stat" key={s.label}>
            <div className="about-stat-value">{s.value}</div>
            <p className="text-muted">{s.label}</p>
          </div>
        ))}
      </div>

      <section className="about-team">
        <h2>Our Team Members</h2>
        <div className="team-grid">
          {team.map((m) => (
            <div className="team-card" key={m.name}>
              <div className="team-avatar"></div>
              <strong>{m.name}</strong>
              <p className="text-muted">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}