export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (demo only)");
  };

  return (
    <div className="page container contact-page">
      <h1 className="text-center">
        <span className="squiggle">〰️</span> Feel Free to Get in Touch! <span className="squiggle">〰️</span>
      </h1>

      <div className="contact-outer">
        <div className="contact-layout">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send us a message!</h3>
            <p className="text-muted">
              Do you have a question? A complaint? Or need any help to
              choose the right job? Feel free to contact us.
            </p>

            <div className="form-row">
              <div className="field">
                <label>First Name</label>
                <input placeholder="Enter your first name" required />
              </div>
              <div className="field">
                <label>Last Name</label>
                <input placeholder="Enter your last name" required />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="Enter your email address" required />
              </div>
              <div className="field">
                <label>Contact Details</label>
                <input placeholder="Enter your contact number" />
              </div>
            </div>

            <div className="field">
              <label>Send us a message</label>
              <textarea placeholder="Enter your message" required />
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          <aside className="contact-side">
            <h4>Hi! We are always here to help you.</h4>

            <div className="contact-info-card">
              <strong>Hotline:</strong>
              <p>+977 56 498 3456</p>
            </div>
            <div className="contact-info-card">
              <strong>SMS/Whatsapp</strong>
              <p>+977 56 498 3456</p>
            </div>
            <div className="contact-info-card">
              <strong>Email:</strong>
              <p>support@hirynn.com</p>
            </div>

            <hr />
            <p className="text-center">Connect with us!</p>
            <div className="footer-social" style={{ justifyContent: "center" }}>
              <span>f</span>
              <span>◎</span>
              <span>▶</span>
              <span>◆</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}