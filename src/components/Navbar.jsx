import { Link, BrowserRouter } from "react-router-dom";
import React from "react";
import "./css/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/"><img src="../../logo.png" alt="Logo" /></Link>
      </div>
      <div className="options">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/help">Help/FAQ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
