import React from "react";
import "./RouterComponent.css";
import line from "../assets/line.png";
import onion1 from "../assets/onion-1565604_1280.jpg";
import onion2 from "../assets/onion-899102_1280.jpg";
import garlic1 from "../assets/garlic-2097759_1280.jpg";
import garlic2 from "../assets/garlic-3419544_1280.jpg";
import gnuts1 from "../assets/delicious-4803127_1280.jpg";
import gnuts2 from "../assets/food-3055647_1280.jpg";
import coco1 from "../assets/coconut-2675546_1280.jpg";
import coco2 from "../assets/coconut-1771527_1280.jpg";
import turm1 from "../assets/turmeric-3251560_1280.jpg";
import turm2 from "../assets/turmeric-3273907_1280.jpg";
import cnuts1 from "../assets/anacardium-3523449_1280.jpg";
import cnuts2 from "../assets/cashew-1452216_1280.jpg";

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
      <div
        style={{
          display: "flex",
          padding: "1rem",
          justifyContent: "space-around",
        }}
      >
        <div class="gallery">
          <img src={onion1} alt="a wolf" />
          <img src={onion2} alt="a lioness" />
        </div>
        <div className="right-pane">
          <h4>
            ONIONS <img style={{ width: "8%" }} src={line} />
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
          <img src={gnuts1} alt="a wolf" />
          <img src={gnuts2} alt="a lioness" />
        </div>
        <div className="right-pane">
          <h4>
            GROUND NUTS <img style={{ width: "8%" }} src={line} />
          </h4>
          <h2>Experience the Crunchy Deliciousness of Groundnuts</h2>
          <p>
            "At Star Harvest Exim, we specialize in sourcing and delivering
            top-quality groundnuts renowned for their crispiness and delicious
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
          <img src={garlic1} alt="a wolf" />
          <img src={garlic2} alt="a lioness" />
        </div>
        <div className="right-pane">
          <h4>
            GARLICS <img style={{ width: "8%" }} src={line} />
          </h4>
          <h2>Unlock the Rich Flavors of Garlic with Star Harvest Exim</h2>
          <p>
            "At Star Harvest Exim, we take pride in sourcing and delivering the
            finest garlic varieties from around the world."{" "}
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
          <img src={turm1} alt="a wolf" />
          <img src={turm2} alt="a lioness" />
        </div>
        <div className="right-pane">
          <h4>
            TURMERICS <img style={{ width: "8%" }} src={line} />
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
          <img src={coco1} alt="a wolf" />
          <img src={coco2} alt="a lioness" />
        </div>
        <div className="right-pane">
          <h4>
            COCONUTS <img style={{ width: "8%" }} src={line} />
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
          <img src={cnuts1} alt="a wolf" />
          <img src={cnuts2} alt="a lioness" />
        </div>
        <div className="right-pane">
          <h4>
            CASHEW NUTS <img style={{ width: "8%" }} src={line} />
          </h4>
          <h2>Discover the Delightful Crunch of Premium Cashews</h2>
          <p>
            "At Star Harvest Exim, we specialize in sourcing and delivering
            top-quality cashews that are perfect for snacking, cooking, and
            adding a touch of luxury to your dishes."
          </p>
        </div>
      </div>
    </div>
  );
};

export default RouterProducts;
