export default function ContactUs() {
  return (
    <div className="page container">
      <h1 className="text-center">Feel Free to Get in Touch!</h1>

      <div className="contact-layout">
        <div className="contact-form">
          <h3>Send us a message!</h3>
          <p className="text-muted">
            Do you have a question? A complaint? Or need any help to choose
            the right job? Feel free to contact us.
          </p>

          <div className="form-row">
            <div className="field">
              <label>First Name</label>
              <input placeholder="Enter your first name" />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input placeholder="Enter your last name" />
            </div>
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="Enter your email address" />
          </div>

          <div className="field">
            <label>Send us a message</label>
            <textarea placeholder="Enter your message" />
          </div>

          <button className="btn btn-primary">Send Message</button>
        </div>

        <div className="contact-side">
          <h4>Hi! We are always here to help you.</h4>
          <div className="contact-info-card">
            <strong>Hotline:</strong>
            <p>+977 56 498 3456</p>
          </div>
          <div className="contact-info-card">
            <strong>Email:</strong>
            <p>support@hirynn.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}