// src/About.jsx
import React from "react";
import { FaTools, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      {/* Header */}
      <div className="about-header">
        <h1>About Glory Energy Engineering</h1>
        <p>Reliable • Professional • Compliant Electrical Engineering Services</p>
      </div>

      {/* Main About Box */}
      <div className="about-box">
        <h2>Who We Are</h2>
        <p>
          We are pleased to introduce <strong>Glory Energy Engineering</strong> as a
          reliable and professional electrical engineering service provider
          based in Dhaka, Bangladesh. We specialize in delivering complete
          electrical installation, rectification, and safety solutions for
          factories, commercial buildings, and industrial facilities.
        </p>

        <p>
          Our team focuses on safety, compliance, and long-term reliability by
          following national and international standards in every project we
          undertake.
        </p>
      </div>

      {/* Icon Highlights */}
      <div className="about-highlights">
        <div className="highlight-card">
          <FaTools className="highlight-icon" />
          <h3>Industry Experience</h3>
          <p>
            Proven expertise in industrial, commercial, and factory electrical
            projects.
          </p>
        </div>

        <div className="highlight-card">
          <FaShieldAlt className="highlight-icon" />
          <h3>Safety First</h3>
          <p>
            Strong emphasis on electrical safety audits, testing, and preventive
            maintenance.
          </p>
        </div>

        <div className="highlight-card">
          <FaCheckCircle className="highlight-icon" />
          <h3>Regulatory Compliance</h3>
          <p>
            Fully compliant with DIFE requirements, safety codes, and engineering
            standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
