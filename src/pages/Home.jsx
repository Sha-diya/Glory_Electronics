import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  // Fade-in animation for Services section
  useEffect(() => {
    const section = document.querySelector(".fade-section");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ================= HERO ================= */}
      <div className="hero">
        <img src="/img1.jpg" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Trusted Electrical & Engineering Solutions</h1>
          <p>Design • Installation • Safety • Maintenance</p>
        </div>
      </div>

       {/* ================= ABOUT ================= */}
      <section className="home-about fade-section">
        <div className="about-box">
          <h2>About Glory Energy Engineering</h2>
          <p>
            We are pleased to introduce <strong>Glory Energy Engineering</strong> as a
            reliable and professional electrical engineering service provider
            based in Dhaka, Bangladesh.
          </p>

          <p>
            We specialize in delivering complete electrical installation,
            rectification, and safety solutions for factories, commercial
            buildings, and industrial facilities.
          </p>

          <Link to="/about" className="about-btn">
            Learn More
          </Link>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services fade-section">
        <div className="services-header">
          <h2>Our Core Services</h2>
          <p>
            Reliable, compliant and professional electrical & safety solutions
          </p>
        </div>

        {/* Service Cards */}
        <div className="services-grid">
          <div className="service-card">
            <h3>Electrical Wiring & Installation</h3>
            {/* <p>
              Electrical wiring, installation & rectification works for
              residential, commercial and industrial projects.
            </p> */}
          </div>

          <div className="service-card">
            <h3>Sub-Station Panel Works</h3>
            {/* <p>
              Supply and installation of sub-station panels with proper safety
              compliance.
            </p> */}
          </div>

          <div className="service-card">
            <h3>Lightning Protection System (LPS)</h3>
            {/* <p>
              Design and installation of effective lightning protection systems
              as per standard guidelines.
            </p> */}
          </div>

          <div className="service-card">
            <h3>Electrical Safety Audit & Testing</h3>
            {/* <p>
              DIFE safety audit, earthing test, thermography and preventive
              maintenance services.
            </p> */}
          </div>

          <div className="service-card">
            <h3>Fire Detection & Protection</h3>
            {/* <p>
              Fire alarm system design, supply, installation and commissioning.
            </p> */}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "45px" }}>
          <Link to="/services" className="services-link-btn">
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
