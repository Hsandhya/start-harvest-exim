import React from "react";
import {
  InstagramOutlined,
  FacebookFilled,
  MailFilled,
  PhoneFilled,
} from "@ant-design/icons";
import { MdLocationPin } from "react-icons/md";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="f-wrapper">
          <div className="container">
            <div className="sec aboutus">
              <h2>About Us</h2>
              <p>
                At Star Harvest Exim, we believe in the power of global
                connections, the authenticity of quality products, and the
                satisfaction of our clients. Established in 2023, our journey in
                the import and export industry has been marked by dedication,
                integrity, and a relentless pursuit of excellence.
              </p>
            </div>

            <div className="quickLinks">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About</Link>
                </li>
                <li>
                  <Link to="/products">Our Products</Link>
                </li>
                <li>
                  <Link to="/certificates">Certificates</Link>
                </li>
              </ul>
            </div>

            <div className="contact">
              <h2>Reach at</h2>
              <ul>
                <li>
                  <span>{<MdLocationPin />} </span>
                  <span>
                    58, Karpagam Avenue, 2nd street, <br />
                    Raja Annamalaipuram,Chennai-600028
                  </span>
                </li>
                <li>
                  <span>{<PhoneFilled />} </span>
                  <span>+91-7299915599</span>
                </li>
                <li>
                  <span>{<MailFilled />} </span>
                  <span>info@starharvestexim.com</span>
                </li>
              </ul>
              <div className="social-link">
                <a href="https://instagram.com/starharvestexim?igshid=MzRlODBiNWFlZA==">
                  <InstagramOutlined />
                </a>
                <a href="https://www.facebook.com/Starharvestexim?mibextid=ZbWKwL">
                  <FacebookFilled />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <p>copyright © Star Havest Exim, All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
