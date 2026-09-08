import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Jobs from "./Components/Jobs.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
      <Footer />
    </>
  );
}