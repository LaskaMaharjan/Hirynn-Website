import { useState } from "react";

export default function PostJob() {
  const [requirements, setRequirements] = useState([""]);
  const [benefits, setBenefits] = useState([""]);

  const updateItem = (list, setList, index, value) => {
    const next = [...list];
    next[index] = value;
    setList(next);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Job posted! (demo only)");
  };

  return (
    <div className="page container post-job-page">
      <form className="post-job-card" onSubmit={handleSubmit}>
        <h1 className="text-center">Post a Teaching Jobs</h1>
        <p className="text-center text-muted post-job-sub">
          Find the perfect teacher for your institution by posting a
          detailed job listing.
        </p>

        <h3 className="section-heading">📖 Job Information</h3>
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
              <option>Science</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label>Job Description *</label>
          <textarea placeholder="Provide the detailed description of the roles, responsibilities, and what you are looking for in a candidate..." required />
        </div>

        <h3 className="section-heading">📖 Institution Name</h3>
        <div className="form-row">
          <div className="field">
            <label>Institution Name *</label>
            <input placeholder="e.g., Greenwood High School" required />
          </div>
          <div className="field">
            <label>Institution Type *</label>
            <select defaultValue="">
              <option value="" disabled>Select Type</option>
              <option>School</option>
              <option>College</option>
              <option>Training Center</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label>Location *</label>
          <input placeholder="e.g., Kathmandu, Nepal" required />
        </div>

        <h3 className="section-heading">⚙ Job Details</h3>
        <div className="form-row">
          <div className="field">
            <label>Job Type *</label>
            <select defaultValue="">
              <option value="" disabled>Select Type</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
            </select>
          </div>
          <div className="field">
            <label>Experience Level *</label>
            <select defaultValue="">
              <option value="" disabled>Select Level</option>
              <option>Entry Level</option>
              <option>2-5 years</option>
              <option>5+ years</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label>Salary Range *</label>
            <select defaultValue="">
              <option value="" disabled>Select Range</option>
              <option>Rs.20,000 - 30,000</option>
              <option>Rs.30,000 - 40,000</option>
            </select>
          </div>
          <div className="field">
            <label>Application Deadline *</label>
            <input type="date" required />
          </div>
        </div>

        <h3 className="section-heading">Requirements *</h3>
        {requirements.map((val, i) => (
          <div className="field" key={i}>
            <input
              placeholder="e.g., Bachelor's Degree in Mathematics"
              value={val}
              onChange={(e) => updateItem(requirements, setRequirements, i, e.target.value)}
            />
          </div>
        ))}
        <button type="button" className="btn btn-outline btn-block" onClick={() => setRequirements([...requirements, ""])}>
          + Add Requirements
        </button>

        <h3 className="section-heading" style={{ marginTop: 30 }}>Benefits &amp; Perks *</h3>
        {benefits.map((val, i) => (
          <div className="field" key={i}>
            <input
              placeholder="e.g., Health Insurances"
              value={val}
              onChange={(e) => updateItem(benefits, setBenefits, i, e.target.value)}
            />
          </div>
        ))}
        <button type="button" className="btn btn-outline btn-block" onClick={() => setBenefits([...benefits, ""])}>
          + Add Requirements
        </button>

        <h3 className="section-heading" style={{ marginTop: 30 }}>Contract Information *</h3>
        <div className="form-row">
          <div className="field">
            <label>Contact email *</label>
            <input type="email" placeholder="hredu@gmail.com" required />
          </div>
          <div className="field">
            <label>Contact Phone*</label>
            <input placeholder="+977 9808701828" required />
          </div>
        </div>

        <div className="text-center" style={{ marginTop: 20 }}>
          <button type="submit" className="btn btn-primary">Publish Job</button>
        </div>
      </form>
    </div>
  );
}