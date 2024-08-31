import React from "react";
import { Link } from "react-router-dom";
import "./projects.css"; // Custom CSS for additional styling

export default function Projects() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Our Project Highlights</h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item mb-4">
          <h2 className="accordion-header" id="web-dev-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#web-dev-accordion"
              aria-expanded="true"
              aria-controls="web-dev-accordion"
            >
              E-commerce Website using Django & React
            </button>
          </h2>
          <div
            id="web-dev-accordion"
            className="accordion-collapse collapse show"
            aria-labelledby="web-dev-header"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                We developed a comprehensive e-commerce platform tailored for the
                garment industry, utilizing Django for the backend and React for the frontend.
              </p>
              <p>
                This dynamic platform allows customers to easily browse an extensive product catalog, view detailed product descriptions, and securely purchase items online. Our integration of Razorpay ensures seamless and secure payment processing.
              </p>
              <p>
                <strong>GitHub Repository: </strong>
                <Link to="https://github.com/Apurv-02/Django-React-Ecommerce" target="_blank">
                  Django-React-Ecommerce
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item mb-4">
          <h2 className="accordion-header" id="odoo-apps-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#odoo-apps"
              aria-expanded="false"
              aria-controls="odoo-apps"
            >
              Odoo Apps
            </button>
          </h2>
          <div
            id="odoo-apps"
            className="accordion-collapse collapse"
            aria-labelledby="odoo-apps-header"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Our expertise in Odoo ERP development has led to the creation of specialized applications designed to optimize business processes.
              </p>
              <ul>
                <li>
                  <strong>Product Image Generator:</strong> Automatically generates product images based on the product name, simplifying the product listing process.
                  <br />
                  <Link to="https://apps.odoo.com/apps/modules/16.0/sttl_product_image" target="_blank">
                    View App
                  </Link>
                </li>
                <li>
                  <strong>Product Catalog View:</strong> Provides custom views for Sales, Purchase, and Bill of Material modules, offering an organized layout for managing product data.
                  <br />
                  <Link to="https://apps.odoo.com/apps/modules/16.0/sttl_product_catalogue_bom" target="_blank">
                    View App
                  </Link>
                </li>
                <li>
                  <strong>Description Generator:</strong> Generates detailed product descriptions based on the product name, enhancing information quality and consistency.
                  <br />
                  <Link to="https://apps.odoo.com/apps/modules/16.0/sttl_product_description" target="_blank">
                    View App
                  </Link>
                </li>
              </ul>
              <p>
                These applications demonstrate our commitment to developing tools that streamline operations and improve business efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item mb-4">
          <h2 className="accordion-header" id="api-dev-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#api-dev"
              aria-expanded="false"
              aria-controls="api-dev"
            >
              API Development & Integrations
            </button>
          </h2>
          <div
            id="api-dev"
            className="accordion-collapse collapse"
            aria-labelledby="api-dev-header"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                We specialize in both developing custom APIs and seamlessly integrating third-party APIs to enhance the functionality and connectivity of your applications. Our expertise includes creating tailored APIs for unique business needs, as well as integrating popular APIs like ChatGPT for conversational AI and various payment gateways to ensure secure and efficient transactions. Whether you're looking to build a new API from scratch or integrate existing services, we ensure smooth, reliable, and scalable solutions to drive your business forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
