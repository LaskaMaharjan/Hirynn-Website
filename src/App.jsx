import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Jobs from "./Components/Jobs.jsx";
import JobDetail from "./Components/JobDetail.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import PostJob from "./Components/PostJob.jsx";
import Profile from "./Components/Profile.jsx";
import Applications from "./Components/Applications.jsx";
import SavedJobs from "./Components/SavedJobs.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Navbar loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/post-a-job" element={<PostJob />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/my-applications" element={<Applications />} />
        <Route path="/saved-jobs" element={<SavedJobs />} />
        <Route path="/login" element={<Login onLogin={() => setLoggedIn(true)} />} />
        <Route path="/register" element={<Register onLogin={() => setLoggedIn(true)} />} />
      </Routes>
      <Footer />
    </>
  );
}