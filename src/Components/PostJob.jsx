export default function PostJob() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Job posted! (demo only)");
  };

  return (
    <div className="page container">
      <form className="post-job-card" onSubmit={handleSubmit}>
        <h1 className="text-center">Post a Teaching Jobs</h1>
        <p className="text-center text-muted">
          Find the perfect teacher for your institution by posting a
          detailed job listing.
        </p>

        <h3 className="section-heading">Job Information</h3>
        <div className="form-row">
          <div className="field">
            <label>Job Title *</label>
            <input placeholder="e.g., High School English Teacher" required />
          </div>
          <div className="field">
            <label>Subject *</label>
            <select defaultValue="">
              <option value="" disabled>Subject Name</option>
              <option>Mathematics</option>
              <option>English</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label>Job Description *</label>
          <textarea placeholder="Describe the role, responsibilities, and what you're looking for..." required />
        </div>

        <h3 className="section-heading">Institution</h3>
        <div className="form-row">
          <div className="field">
            <label>Institution Name *</label>
            <input placeholder="e.g., Greenwood High School" required />
          </div>
          <div className="field">
            <label>Location *</label>
            <input placeholder="e.g., Kathmandu, Nepal" required />
          </div>
        </div>

        <div className="text-center" style={{ marginTop: 20 }}>
          <button type="submit" className="btn btn-primary">Publish Job</button>
        </div>
      </form>
    </div>
  );
}