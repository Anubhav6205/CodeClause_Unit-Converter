import React from 'react';
import { FaRuler, FaSquare, FaCubes, FaClock, FaTachometerAlt, FaTemperatureHigh, FaCompress, FaBook, FaMoneyBill } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './css/Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar-options">
      <Link to="/">
        <FaRuler className="icon" />
        <p>Length</p>
      </Link>
      <Link to="/area">
        <FaSquare className="icon" />
        <p>Area</p>
      </Link>
      <Link to="/volume">
        <FaCubes className="icon" />
        <p>Volume</p>
      </Link>
      <Link to="/time">
        <FaClock className="icon" />
        <p>Time</p>
      </Link>
      <Link to="/speed">
        <FaTachometerAlt className="icon" />
        <p>Speed</p>
      </Link>
      <Link to="/temperature">
        <FaTemperatureHigh className="icon" />
        <p>Temperature</p>
      </Link>
      <Link to="/pressure">
        <FaCompress className="icon" />
        <p>Pressure</p>
      </Link>
      <Link to="/log">
        <FaBook className="icon" />
        <p>Log</p>
      </Link>
      <Link to="/currency">
        <FaMoneyBill className="icon" />
        <p>Currency</p>
      </Link>
    </div>
  );
}
