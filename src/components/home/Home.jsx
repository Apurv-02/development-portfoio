import React from "react";
import "./home.css";
import logo_main from "../../images/home_page_logo.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header className="hero-section">
        <div className="container-fluid px-0 px-md-5 mt-md-3">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start my-md-5 px-4 px-md-0">
              <h1 className="main-heading">
                Innovative Solutions for the Digital Age
              </h1>
              <h3 className="mt-3">Where Creativity Meets Code</h3>
              <p className="sub-text mt-md-3">
                We specialize in delivering high-quality solutions across various domains, including Python programming, API Integration and Development, Web Scraping, Web Development, Backend Development, and Odoo Development. Explore our portfolio to see our work in action, and feel free to reach out with any inquiries or project ideas. Let’s bring your vision to life!
              </p>
              <Link to="/projects" className="btn btn-primary mt-3">
                See Our Work
              </Link>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <img src={logo_main} alt="Icon" className="img-fluid rounded shadow-sm" />
            </div>
          </div>
        </div>
      </header>

      <section className="contact-cta text-center py-4">
        <p className="cta-text">Ready to start your project? 
          <Link to="mailto:shubhpathak77777@gmail.com,apurvkantaria1234@gmail.com" className="btn btn-secondary ms-2">Get in Touch</Link>
        </p>
      </section>
    </>
  );
}
