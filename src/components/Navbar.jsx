import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h1>Task Manager</h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  </nav>
);

export default Navbar;
