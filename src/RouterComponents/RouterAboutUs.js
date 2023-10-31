import { useNavigate } from "react-router-dom";
import React from "react";
import "./RouterComponent.css";
import aboutImage from "../assets/About.png";
import line from "../assets/line.png";
import icon1 from "../assets/icons8-ok-64.png";
import icon2 from "../assets/icons8-binoculars-64.png";
import { Button } from "antd";

const RouterAboutUs = () => {
  const navigate = useNavigate();

  const exploreClick = () => {
    navigate("/products");
  };

  return (
    <div>
      <div className="router-main">
        <div className="image-class" style={{ height: "100%" }}>
          <div className="inner-text">
            <div>
              <h2>ABOUT US</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="about-main">
            <div className="left-pane">
              <img
                alt="Star Harvest Exim logo"
                className="about-image"
                src={aboutImage}
              />
            </div>
            <div className="right-pane">
              <h4>
                About Us{" "}
                <img
                  alt="Star Harvest Exim logo"
                  style={{ width: "8%" }}
                  src={line}
                />
              </h4>
              <h2>Know About Our Exports & Imports</h2>
              <p>
                At Star Harvest Exim, we believe in the power of global
                connections, the authenticity of quality products, and the
                satisfaction of our clients. Established in 2023, our journey in
                the import and export industry has been marked by dedication,
                integrity, and a relentless pursuit of excellence.
              </p>
              <div style={{ display: "flex" }}>
                <div>
                  <img alt="Star Harvest Exim logo" src={icon1} />
                  <h4>Product Quality</h4>
                  <p style={{ color: "green" }}>
                    We can assure you about the Quality of the products in
                    excellence
                  </p>
                </div>
                <div>
                  <img alt="Star Harvest Exim logo" src={icon2} />
                  <h4>Dedicated Services</h4>
                  <p style={{ paddingRight: "20px", color: "green" }}>
                    We ensure that providing the best and premium services
                  </p>
                </div>
              </div>
              <div className="about-button">
                <Button
                  onClick={exploreClick}
                className="route-button"
                  style={{
                    background: "green",
                    color: "white",
                    width: "10rem",
                  }}
                >
                  Explore now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouterAboutUs;
