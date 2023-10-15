import React from "react";
import {
  InstagramOutlined,
  FacebookFilled,
  MailFilled,
  PhoneFilled,
} from "@ant-design/icons";
import { MdLocationPin } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="f-wrapper">
          <div className="container">
            <div className="sec aboutus">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Suscipit quae, quisquam et ducimus nostrum eos, voluptas iste
                neque harum modi nobis sequi excepturi quo id voluptates tenetur
                inventore libero perspiciatis.
              </p>
            </div>

            <div className="quickLinks">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Our Products</a>
                </li>
                <li>
                  <a href="">Services</a>
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
                  <span>starharvest.contact@gmail.com</span>
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
