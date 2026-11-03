
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo-link">
        <Logo />
      </Link>

      <div className="nav-links">
        <Link to="/" className="active">Home</Link>
        <Link to="/browse">Browse Items</Link>
        <a href="/#about">About</a>
      </div>

      <div className="nav-buttons">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/register" className="register-btn">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
