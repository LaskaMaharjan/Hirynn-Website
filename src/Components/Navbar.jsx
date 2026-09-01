import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/jobs", label: "Jobs" },
  { to: "/post-a-job", label: "Post a Job" },
  { to: "/about-us", label: "About Us" },
  { to: "/contact-us", label: "Contact Us" },
];

export default function Navbar({ loggedIn = true }) {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">🏠</span> Hirynn
        </Link>

        <nav className="navbar-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                "navbar-link" + (isActive ? " active" : "")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {loggedIn ? (
          <Link to="/my-profile" className="navbar-user">
            <span className="navbar-avatar" />
            Me <span className="navbar-caret">▾</span>
          </Link>
        ) : (
          <div className="navbar-auth">
            <button className="btn btn-outline">Login</button>
            <button className="btn btn-primary">Register</button>
          </div>
        )}
      </div>
    </header>
  );
}