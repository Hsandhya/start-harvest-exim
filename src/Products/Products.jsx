import React from "react";
import "./Products.css";
import line1 from "../assets/line.png";
import line2 from "../assets/line2.png";
import image1 from "../assets/bold-peanut.jpg";
import image2 from "../assets/pexels-kindel-media-7456550.jpg";
import image3 from "../assets/pexels-nick-collins-1392585.jpg";
import image4 from "../assets/pexels-samer-daboul-1652002.jpg";
import image5 from "../assets/Cashew.png";
import image6 from "../assets/pexels-tamanna-rumee-7988015.jpg";

import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const exploreClick = () => {
    navigate("/products");
  };
  return (
    <div>
      <div className="product-top">
        <h3 style={{ textAlign: "center" }}>
          {" "}
          <img
            alt="Star Harvest Exim logo"
            style={{ width: "15%" }}
            src={line2}
          />{" "}
          Our Products{" "}
          <img
            alt="Star Harvest Exim logo"
            style={{ width: "15%" }}
            src={line1}
          />
        </h3>
        <h1 style={{ color: "green" }}>Healthy products for day-to-day life</h1>
      </div>
      <div className="product-content">
        <div class="card">
          <div class="imgbox">
            <img alt="Star Harvest Exim logo" src={image1} />
          </div>
          <div>
            <span className="content-text">Peanuts</span>
          </div>

          <div class="content">
            <h2 style={{ fontSize: "15px" }}>
              Experience the Crunchy Deliciousness of Peanuts
            </h2>
            <p style={{ fontSize: "13px", fontWeight: "500" }}>
              At Star Harvest Exim, we specialize in sourcing and delivering
              top-quality Peanuts renowned for their crispiness and delicious
              taste.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="imgbox">
            <img alt="Star Harvest Exim logo" src={image2} />
          </div>
          <div>
            <span className="content-text">Onions</span>
          </div>

          <div class="content">
            <h2 style={{ fontSize: "15px" }}>
              The Flavorful Foundation of Your Dishes
            </h2>
            <p style={{ fontSize: "13px", fontWeight: "500" }}>
              Discover the incredible versatility and savory depth that onions
              bring to your culinary creations with Star Harvest Exim.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="imgbox">
            <img alt="Star Harvest Exim logo" src={image3} />
          </div>
          <div>
            <span className="content-text">Garlics</span>
          </div>

          <div class="content">
            <h2 style={{ fontSize: "15px" }}>
              Unlock the Rich Flavors of Garlic with Star Harvest Exim
            </h2>
            <p style={{ fontSize: "13px", fontWeight: "500" }}>
              At Star Harvest Exim, we take pride in sourcing and delivering the
              finest garlic varieties from around India.
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "5rem" }} className="product-content">
        <div class="card">
          <div class="imgbox">
            <img alt="Star Harvest Exim logo" src={image4} />
          </div>
          <div>
            <span className="content-text">Coconuts</span>
          </div>

          <div class="content">
            <h2 style={{ fontSize: "15px" }}>
              Indulge in the Tropical Delights of Coconut with Star Harvest Exim
            </h2>
            <p style={{ fontSize: "13px", fontWeight: "500" }}>
              At Star Harvest Exim, we specialize in sourcing and delivering
              premium coconuts that bring the taste of the tropics to your
              kitchen.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="imgbox">
            <img alt="Star Harvest Exim logo" src={image5} />
          </div>
          <div>
            <span className="content-text">Cashews</span>
          </div>

          <div class="content">
            <h2 style={{ fontSize: "15px" }}>
              Discover the Delightful Crunch of Premium Cashews{" "}
            </h2>
            <p style={{ fontSize: "13px", fontWeight: "500" }}>
              At Star Harvest Exim, we specialize in sourcing and delivering
              top-quality cashews that are perfect for snacking, cooking, and
              adding a touch of luxury to your dishes.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="imgbox">
            <img alt="Star Harvest Exim logo" src={image6} />
          </div>
          <div>
            <span className="content-text">Turmerics</span>
          </div>

          <div class="content">
            <h2 style={{ fontSize: "15px" }}>
              Experience the Vibrant Flavors of Turmeric with Star Harvest Exim
            </h2>
            <p style={{ fontSize: "13px", fontWeight: "500" }}>
              At Star Harvest Exim, we take pride in sourcing and delivering
              high-quality turmeric that will add a burst of flavor to your
              culinary creations.
            </p>
          </div>
        </div>
      </div>

      <div className="products-mobile">
        <div style={{ marginBottom: "1rem" }} className="parallax-container">
          <div className="parallax-content">
            <h2 style={{ color: "white" }}>CASHEW NUTS</h2>
          </div>
        </div>
        <div
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div>
            <h2 style={{ color: "green" }}>
              Discover the Delightful Crunch of Premium Cashews
            </h2>
          </div>
          <div>
            <h4
              style={{
                color: "black",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              "At Star Harvest Exim, we specialize in sourcing and delivering
              top-quality cashews that are perfect for snacking, cooking, and
              adding a touch of luxury to your dishes."
            </h4>
          </div>
        </div>
        <div className="parallax-container2">
          <div className="parallax-content">
            <h2 style={{ color: "white" }}>TURMERIC</h2>
          </div>
        </div>
        <div
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div>
            <h2 style={{ color: "green" }}>
              Experience the Vibrant Flavors of Turmeric with Star Harvest Exim{" "}
            </h2>
          </div>
          <div>
            <h4
              style={{
                color: "black",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              "At Star Harvest Exim, we take pride in sourcing and delivering
              high-quality turmeric that will add a burst of flavor to your
              culinary creations."
            </h4>
          </div>
        </div>
        <div className="parallax-container3">
          <div className="parallax-content">
            <h2 style={{ color: "white" }}>COCONUTS</h2>
          </div>
        </div>
        <div
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div>
            <h2 style={{ color: "green" }}>
              Indulge in the Tropical Delights of Coconut with Star Harvest Exim
            </h2>
          </div>
          <div>
            <h4
              style={{
                color: "black",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              "At Star Harvest Exim, we specialize in sourcing and delivering
              premium coconuts that bring the taste of the tropics to your
              kitchen."
            </h4>
          </div>
        </div>
        <div className="parallax-container4">
          <div className="parallax-content">
            <h2 style={{ color: "white" }}>GARLICS</h2>
          </div>
        </div>
        <div
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div>
            <h2 style={{ color: "green" }}>
              Unlock the Rich Flavors of Garlic with Star Harvest Exim
            </h2>
          </div>
          <div>
            <h4
              style={{
                color: "black",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              "At Star Harvest Exim, we take pride in sourcing and delivering
              the finest garlic varieties from around India".
            </h4>
          </div>
        </div>
        <div className="parallax-container5">
          <div className="parallax-content">
            <h2 style={{ color: "white" }}>ONIONS</h2>
          </div>
        </div>
        <div
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div>
            <h2 style={{ color: "green" }}>
              The Flavorful Foundation of Your Dishes
            </h2>
          </div>
          <div>
            <h4
              style={{
                color: "black",
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              "Discover the incredible versatility and savory depth that onions
              bring to your culinary creations with Star Harvest Exim."
            </h4>
          </div>
        </div>
        <div className="parallax-container6">
          <div className="parallax-content">
            <h2 style={{ color: "white" }}>PEANUTS</h2>
          </div>
        </div>
        <div
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div>
            <h2 style={{ color: "green" }}>
              Experience the Crunchy Deliciousness of Peanuts
            </h2>
          </div>
          <div>
            <h4
              style={{
                color: "black",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              "At Star Harvest Exim, we specialize in sourcing and delivering
              top-quality Peanuts renowned for their crispiness and delicious
              taste."
            </h4>
          </div>
        </div>
        <div className="parallax-container7">
          <div className="parallax-content">
            <h2 style={{ color: "white" }}>BLACK SESAME</h2>
          </div>
        </div>
        <div
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div>
            <h2 style={{ color: "green" }}>
              Discover the hidden gems of nutrition and flavor with our black
              sesame products
            </h2>
          </div>
          <div>
            <h4
              style={{
                color: "black",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              "Black sesame seeds are a versatile ingredient in both sweet and
              savory dishes. you're choosing the best for your culinary
              creations."
            </h4>
          </div>
        </div>
        <div className="parallax-container8">
          <div className="parallax-content">
            <h2 style={{ color: "white" }}>WHITE SESAME</h2>
          </div>
        </div>
        <div
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div>
            <h2 style={{ color: "green" }}>
              Delightful nutty flavor to your dishes
            </h2>
          </div>
          <div>
            <h4
              style={{
                color: "black",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              "Elevate your culinary creations with the pure goodness of our
              white sesame seeds. Sourced from the finest fields, these seeds
              are renowned for their quality and versatility.".
            </h4>
          </div>
        </div>
      
      </div>
      <div className="product-button">
        <Button
          className="route-button"
          onClick={exploreClick}
          style={{ background: "green", color: "white", width: "10rem" }}
        >
          View all Products
        </Button>
      </div>
    </div>
  );
};

export default Products;
