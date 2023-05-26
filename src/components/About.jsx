import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTemperatureHigh, faTachometerAlt, faMoneyBill, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import './css/About.css';

const About = () => {
  return (
    <div className="about-page">
      <h2 className="about-page-title">About Me</h2>
      <p className="about-page-description">
        Welcome to my website! I am Anubhav Gupta, a passionate full-stack web developer dedicated to creating innovative and user-friendly applications that simplify people's daily lives and help me enhance my skills.
      </p>

      <div className="about-section">
        <h3 className="about-section-title">My Mission</h3>
        <p className="about-section-description">
          My mission is to develop cutting-edge web applications that provide exceptional user experiences and add value to users' lives. I strive to create intuitive and elegant solutions that solve real-world problems and make a positive impact.
        </p>
      </div>

      <div className="about-section">
        <h3 className="about-section-title">What I Offer</h3>
        <ul className="about-section-list">
          <li>
            <FontAwesomeIcon icon={faClock} className="about-section-icon" />
            <span className="about-section-item">Time Converter:</span> Convert time units such as seconds, minutes, hours, and more.
          </li>
          <li>
            <FontAwesomeIcon icon={faTemperatureHigh} className="about-section-icon" />
            <span className="about-section-item">Temperature Converter:</span> Convert between Celsius, Fahrenheit, Kelvin, and other temperature units.
          </li>
          <li>
            <FontAwesomeIcon icon={faTachometerAlt} className="about-section-icon" />
            <span className="about-section-item">Speed Converter:</span> Convert speed units such as meters per second, kilometers per hour, and more.
          </li>
          <li>
            <FontAwesomeIcon icon={faMoneyBill} className="about-section-icon" />
            <span className="about-section-item">Currency Converter:</span> Convert between different currencies using up-to-date exchange rates.
          </li>
          <li>
            <FontAwesomeIcon icon={faEllipsisH} className="about-section-icon" />
            <span className="about-section-item">And much more!</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
