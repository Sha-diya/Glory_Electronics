// src/Service.jsx
import React from "react";
import { FaBolt, FaTools, FaShieldAlt, FaCheckCircle, FaFireExtinguisher } from "react-icons/fa";

function Service() {
  const services = [
    {
      icon: <FaBolt />,
      title: "Electrical Wiring & Installation",
      desc: "Safe and professional wiring, installation & rectification works."
    },
    {
      icon: <FaTools />,
      title: "Sub-Station Panel Supply",
      desc: "Supply and installation of high-quality sub-station panels."
    },
    {
      icon: <FaShieldAlt />,
      title: "Lightning Protection System",
      desc: "Design & installation of effective Lightning Protection Systems (LPS)."
    },
    {
      icon: <FaCheckCircle />,
      title: "Electrical Safety Audit",
      desc: "DIFE-approved audits, testing (Earthing, Thermography) & preventive maintenance."
    },
    {
      icon: <FaFireExtinguisher />,
      title: "Fire Detection & Protection",
      desc: "Design, supply and commissioning of fire detection & protection systems."
    }
  ];

  return (
    <div className="services-page">

      {/* Page Header */}
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          Comprehensive electrical, electronic & safety solutions you can trust
        </p>
      </div>

      {/* Core Services Section */}
      <section className="core-services">
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Service;
