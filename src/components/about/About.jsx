import React from "react";
import "./about.css";
import { Row, Col } from "react-bootstrap";

function About() {
  return (
    <div>
      <header className="about-header w-100 d-flex justify-content-center align-items-center custom-color text-white">
        <h1 className="fs-2">About</h1>
      </header>

      <main className="mx-4 main-about">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <h2 className="text-color fw-bold">
                National and International <br />
                Transportation
              </h2>
              <p className="pt-3 fs-5">
                LR Car Service is committed to delivering quality corporate and
                individual transportation services worldwide. We guarantee you
                will be satisfied with our professional and reliable corporate
                and individual transport services.
              </p>
              <button type="button" className="btn btn-info mt-3 mb-5">
                Make Reservation
              </button>

              <h2 className="text-color fw-bold">Constant Communication</h2>
              <p className="pt-3 fs-5">
                At LR CAR, we excel in providing transportation for recurring
                appointments, ensuring you receive real-time updates on your
                location and estimated arrival time throughout the trip. Our
                weekly billing comes with detailed, customizable receipts
                tailored to fit your individual needs. We offer 24/7 live agent
                support to manage and monitor your transportation services
                nationwide. Our fleet of SUVs and sedans is equipped with robust
                broadband Wi-Fi, perfect for clients who need to work during
                their trips. Our experienced and licensed limousine drivers are
                dedicated to offering safe and reliable door-to-door
                transportation services for both nationwide and international
                destinations.
              </p>

              <p>
                <a class="link-opacity-100-hover" href="#">
                  Link hover opacity 100
                </a>
              </p>
            </div>
          </Col>

          <Col sm={12} md={12} lg={6}>
            <div className="image-parent">
              <img
                src="/public/img/edited-about-image.png"
                alt=""
                width="650px"
                className="image-fluid image"
              />
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
}

export default About;
