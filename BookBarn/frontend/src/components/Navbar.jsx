import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h2>📚 BookBarn</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {user?.role === "admin" && <Link to="/add">Add Book</Link>}
      </div>
      <div className="auth-buttons">
        {user ? (
          <>
            <span>Hi, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
