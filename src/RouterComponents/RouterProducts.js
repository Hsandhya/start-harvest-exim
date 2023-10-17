import React from "react";
import "./RouterComponent.css";
import image1 from "../assets/bold-peanut.jpg";
import image2 from "../assets/pexels-kindel-media-7456550.jpg";
import image3 from "../assets/pexels-nick-collins-1392585.jpg";
import image4 from "../assets/pexels-samer-daboul-1652002.jpg";
import image5 from "../assets/Cashew.png";
import image6 from "../assets/pexels-tamanna-rumee-7988015.jpg";

import line from "../assets/line.png";
import onion1 from "../assets/onion-1565604_1280.jpg";
import onion2 from "../assets/onion-899102_1280.jpg";
import garlic1 from "../assets/garlic-2097759_1280.jpg";
import garlic2 from "../assets/garlic-3419544_1280.jpg";
import gnuts1 from "../assets/peanuts-1234e.png";
import gnuts2 from "../assets/bold-peanut.jpg";
import coco1 from "../assets/coconut-2675546_1280.jpg";
import coco2 from "../assets/coconut-1771527_1280.jpg";
import turm1 from "../assets/turmeric-3251560_1280.jpg";
import turm2 from "../assets/turmeric-3273907_1280.jpg";
import cnuts1 from "../assets/anacardium-3523449_1280.jpg";
import cnuts2 from "../assets/cashew-1452216_1280.jpg";
import bsame1 from "../assets/black-sesame-6746593_1280.jpg";
import bsame2 from "../assets/food-6080815_1280.jpg";
import wsame1 from "../assets/sesame-1274906_1280.jpg";
import wsame2 from "../assets/sesame-3311532_1280.jpg";

const RouterProducts = () => {
  return (
    <div className="router-main">
      <div className="image-class" style={{ height: "100%" }}>
        <div className="inner-text">
          <div>
            <h2>OUR PRODUCTS</h2>
          </div>
        </div>
      </div>
      <div className="Rproduct-web">
        <div
          style={{
            display: "flex",
            padding: "1rem",
            justifyContent: "space-around",
          }}
        >
          <div class="gallery">
            <img alt='Star Harvest Exim logo' src={onion1} />
            <img alt='Star Harvest Exim logo' src={onion2}/>
          </div>
          <div className="right-pane">
            <h4>
              ONIONS <img alt='Star Harvest Exim logo' style={{ width: "8%" }} src={line} />
            </h4>
            <h2>The Flavorful Foundation of Your Dishes</h2>
            <p>
              "Discover the incredible versatility and savory depth that onions
              bring to your culinary creations with Star Harvest Exim."{" "}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "1rem",
            justifyContent: "space-around",
            flexDirection: "row-reverse",
          }}
        >
          <div class="gallery">
            <img alt='Star Harvest Exim logo' src={gnuts1} />
            <img alt='Star Harvest Exim logo' src={gnuts2}/>
          </div>
          <div className="right-pane">
            <h4>
              PEANUTS <img alt='Star Harvest Exim logo' style={{ width: "8%" }} src={line} />
            </h4>
            <h2>Experience the Crunchy Deliciousness of Peanuts</h2>
            <p>
              "At Star Harvest Exim, we specialize in sourcing and delivering
              top-quality peanuts renowned for their crispiness and delicious
              taste. "{" "}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "1rem",
            justifyContent: "space-around",
          }}
        >
          <div class="gallery">
            <img alt='Star Harvest Exim logo' src={garlic1} />
            <img alt='Star Harvest Exim logo' src={garlic2} />
          </div>
          <div className="right-pane">
            <h4>
              GARLICS <img alt='Star Harvest Exim logo' style={{ width: "8%" }} src={line} />
            </h4>
            <h2>Unlock the Rich Flavors of Garlic with Star Harvest Exim</h2>
            <p>
              "At Star Harvest Exim, we take pride in sourcing and delivering
              the finest garlic varieties from around India."{" "}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "1rem",
            justifyContent: "space-around",
            flexDirection: "row-reverse",
          }}
        >
          <div class="gallery">
            <img alt='Star Harvest Exim logo' src={turm1}  />
            <img alt='Star Harvest Exim logo' src={turm2} />
          </div>
          <div className="right-pane">
            <h4>
              TURMERICS <img alt='Star Harvest Exim logo' style={{ width: "8%" }} src={line} />
            </h4>
            <h2>
              Experience the Vibrant Flavors of Turmeric with Star Harvest Exim
            </h2>
            <p>
              "At Star Harvest Exim, we take pride in sourcing and delivering
              high-quality turmeric that will add a burst of flavor to your
              culinary creations."
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "1rem",
            justifyContent: "space-around",
          }}
        >
          <div class="gallery">
            <img alt='Star Harvest Exim logo' src={coco1} />
            <img alt='Star Harvest Exim logo' src={coco2} />
          </div>
          <div className="right-pane">
            <h4>
              COCONUTS <img alt='Star Harvest Exim logo' style={{ width: "8%" }} src={line} />
            </h4>
            <h2>
              Indulge in the Tropical Delights of Coconut with Star Harvest Exim
            </h2>
            <p>
              "At Star Harvest Exim, we specialize in sourcing and delivering
              premium coconuts that bring the taste of the tropics to your
              kitchen."
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "1rem",
            justifyContent: "space-around",
            flexDirection: "row-reverse",
          }}
        >
          <div class="gallery">
            <img alt='Star Harvest Exim logo' src={cnuts1} />
            <img alt='Star Harvest Exim logo' src={cnuts2} />
          </div>
          <div className="right-pane">
            <h4>
              CASHEW NUTS <img alt='Star Harvest Exim logo' style={{ width: "8%" }} src={line} />
            </h4>
            <h2>Discover the Delightful Crunch of Premium Cashews</h2>
            <p>
              "At Star Harvest Exim, we specialize in sourcing and delivering
              top-quality cashews that are perfect for snacking, cooking, and
              adding a touch of luxury to your dishes."
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "1rem",
            justifyContent: "space-around",
          }}
        >
          <div class="gallery">
            <img alt='Star Harvest Exim logo' src={bsame2} />
            <img alt='Star Harvest Exim logo' src={bsame1} />
          </div>
          <div className="right-pane">
            <h4>
              BLACK SESAME <img alt='Star Harvest Exim logo' style={{ width: "8%" }} src={line} />
            </h4>
            <h2>
              Discover the hidden gems of nutrition and flavor with our black
              sesame products
            </h2>
            <p>
              "Black sesame seeds are a versatile ingredient in both sweet and
              savory dishes. When you choose our black sesame products, you're
              choosing the best for your culinary creations."
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "1rem",
            justifyContent: "space-around",
            flexDirection: "row-reverse",
          }}
        >
          <div class="gallery">
            <img alt='Star Harvest Exim logo' src={wsame1} />
            <img alt='Star Harvest Exim logo' src={wsame2} />
          </div>
          <div className="right-pane">
            <h4>
              WHITE SESAME <img alt='Star Harvest Exim logo' style={{ width: "8%" }} src={line} />
            </h4>
            <h2>
              Elevate your culinary creations with the pure goodness of our
              white sesame seeds
            </h2>
            <p>
              "Our white sesame seeds add a delightful nutty flavor to your
              dishes. Whether you're baking, cooking, or garnishing, these seeds
              are a must-have in your pantry."
            </p>
          </div>
        </div>
      </div>
      <div className="Rproduct-mobile">
        <div className="Rproduct-content">
          <div class="Rcard">
            <div class="Rimgbox">
              <img alt='Star Harvest Exim logo' src={image1} />
            </div>
            <div>
              <span className="Rcontent-text">Ground Nuts</span>
            </div>

            <div class="Rcontent">
              <h2 style={{ fontSize: "15px" }}>
                Experience the Crunchy Deliciousness of Groundnuts
              </h2>
              <p style={{ fontSize: "13px", fontWeight: "500" }}>
                At Star Harvest Exim, we specialize in sourcing and delivering
                top-quality groundnuts renowned for their crispiness and
                delicious taste.
              </p>
            </div>
          </div>
        </div>
        <div className="Rproduct-content">
          <div class="Rcard">
            <div class="Rimgbox">
              <img alt='Star Harvest Exim logo' src={image2} />
            </div>
            <div>
              <span className="Rcontent-text">Onions</span>
            </div>

            <div class="Rcontent">
              <h2 style={{ fontSize: "15px" }}>
                The Flavorful Foundation of Your Dishes
              </h2>
              <p style={{ fontSize: "13px", fontWeight: "500" }}>
                Discover the incredible versatility and savory depth that onions
                bring to your culinary creations with Star Harvest Exim.
              </p>
            </div>
          </div>
        </div>
        <div className="Rproduct-content">
          <div class="Rcard">
            <div class="Rimgbox">
              <img alt='Star Harvest Exim logo' src={image3}/>
            </div>
            <div>
              <span className="Rcontent-text">Garlics</span>
            </div>

            <div class="Rcontent">
              <h2 style={{ fontSize: "15px" }}>
                Unlock the Rich Flavors of Garlic with Star Harvest Exim
              </h2>
              <p style={{ fontSize: "13px", fontWeight: "500" }}>
                At Star Harvest Exim, we take pride in sourcing and delivering
                the finest garlic varieties from around India.
              </p>
            </div>
          </div>
        </div>
        <div className="Rproduct-content">
          <div class="Rcard">
            <div class="Rimgbox">
              <img alt='Star Harvest Exim logo' src={image4}/>
            </div>
            <div>
              <span className="Rcontent-text">Coconuts</span>
            </div>

            <div class="Rcontent">
              <h2 style={{ fontSize: "15px" }}>
                Indulge in the Tropical Delights of Coconut with Star Harvest
                Exim
              </h2>
              <p style={{ fontSize: "13px", fontWeight: "500" }}>
                At Star Harvest Exim, we specialize in sourcing and delivering
                premium coconuts that bring the taste of the tropics to your
                kitchen.
              </p>
            </div>
          </div>
        </div>
        <div className="Rproduct-content">
          <div class="Rcard">
            <div class="Rimgbox">
              <img alt='Star Harvest Exim logo' src={image5} />
            </div>
            <div>
              <span className="Rcontent-text">Cashews</span>
            </div>

            <div class="Rcontent">
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
        </div>
        <div className="Rproduct-content">
          <div class="Rcard">
            <div class="Rimgbox">
              <img alt='Star Harvest Exim logo' src={image6} />
            </div>
            <div>
              <span className="Rcontent-text">Turmerics</span>
            </div>

            <div class="Rcontent">
              <h2 style={{ fontSize: "15px" }}>
                Experience the Vibrant Flavors of Turmeric with Star Harvest
                Exim
              </h2>
              <p style={{ fontSize: "13px", fontWeight: "500" }}>
                At Star Harvest Exim, we take pride in sourcing and delivering
                high-quality turmeric that will add a burst of flavor to your
                culinary creations.
              </p>
            </div>
          </div>
        </div>
        <div className="Rproduct-content">
          <div class="Rcard">
            <div class="Rimgbox">
              <img alt='Star Harvest Exim logo' src={wsame2}/>
            </div>
            <div>
              <span className="Rcontent-text">White Sesame</span>
            </div>

            <div class="Rcontent">
              <h2 style={{ fontSize: "15px" }}>
                Elevate your culinary creations with the pure goodness of our
                white sesame seeds
              </h2>
              <p style={{ fontSize: "13px", fontWeight: "500" }}>
                Our white sesame seeds add a delightful nutty flavor to your
                dishes, these seeds are a must-have in your pantry.
              </p>
            </div>
          </div>
        </div>
        <div className="Rproduct-content">
          <div class="Rcard">
            <div class="Rimgbox">
              <img alt='Star Harvest Exim logo' src={bsame2} />
            </div>
            <div>
              <span className="Rcontent-text">Black Sesame</span>
            </div>

            <div class="Rcontent">
              <h2 style={{ fontSize: "15px" }}>
                Discover the hidden gems of nutrition and flavor with our black
                sesame products
              </h2>
              <p style={{ fontSize: "13px", fontWeight: "500" }}>
                Black sesame seeds are a versatile ingredient in both sweet and
                savory dishes. you're choosing the best for your culinary
                creations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouterProducts;
