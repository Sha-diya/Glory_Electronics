import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/logo.jpeg" alt="Company Logo" className="navbar-logo" />
        <span className="company-name">GL Engineering</span>
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
            <Link to="/contact"><button className="nav-contact-btn">Contact</button></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
