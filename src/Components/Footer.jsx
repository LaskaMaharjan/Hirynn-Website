export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">🏠 Hirynn</div>
          <p className="footer-text">
            Empowering teachers and learners with professional growth
            opportunities. Explore teaching jobs, connect with top
            institutions, and access resources to enhance your career
            anytime, anywhere.
          </p>

          <div className="footer-app">
            <strong>Download our App</strong>
            <p className="footer-text">Get the hirynn mobile app for learning on the go</p>
            <div className="footer-badge">▶ GET IT ON Google Play</div>
          </div>
        </div>

        <div className="footer-col">
          <strong>Other Links</strong>
          <ul>
            <li>C.V</li>
          </ul>
        </div>

        <div className="footer-col">
          <strong>Get in Touch</strong>
          <ul>
            <li>✉ support@hirynn.com</li>
            <li>☎ 9808349417</li>
          </ul>
          <strong>Follow Us</strong>
          <div className="footer-social">
            <span>f</span>
            <span>◎</span>
            <span>▶</span>
            <span>◆</span>
          </div>
        </div>
      </div>
    </footer>
  );
}