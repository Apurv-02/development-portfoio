import React from "react";
import logo_about from "../../images/about_icon.png";
import "./about.css"; // Custom CSS for additional styling

export default function About() {
  return (
    <>
      <header className="hero-section my-md-0 py-md-0">
        <div className="container-fluid px-0 px-md-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
              <h1 className="main-heading">
                Crafting digital experiences with a blend of creativity and code.
              </h1>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <img src={logo_about} alt="Icon" className="img-fluid rounded shadow-sm" width="400px"/>
            </div>
          </div>
        </div>
      </header>

      <div className="container ">
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Languages</h5>
              <ul className="card-text">
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Frameworks & Technologies</h5>
              <ul className="card-text">
                <li>Django</li>
                <li>React</li>
                <li>Odoo ERP</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Services</h5>
              <ul className="card-text">
                <li>Web Development</li>
                <li>Backend Development</li>
                <li>Odoo ERP Development</li>
                <li>API Development</li>
                <li>API Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
