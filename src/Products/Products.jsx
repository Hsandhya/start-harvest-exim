import React from "react";
import "./Products.css";
import line1 from "../assets/line.png";
import line2 from "../assets/line2.png";
import image1 from "../assets/peanuts-618547_1280.jpg";
import image2 from "../assets/pexels-kindel-media-7456550.jpg";
import image3 from "../assets/pexels-nick-collins-1392585.jpg";
import image4 from "../assets/pexels-samer-daboul-1652002.jpg";
import image5 from "../assets/pexels-sarath-raj-4095301.jpg";
import image6 from "../assets/pexels-tamanna-rumee-7988015.jpg";

const Products = () => {
  return (
    <div>
      <div className="product-top">
        <h3 style={{ textAlign: "center" }}>
          {" "}
          <img style={{ width: "15%" }} src={line2} alt="" /> Our Products{" "}
          <img style={{ width: "15%" }} src={line1} alt="" />
        </h3>
        <h1 style={{color:'green'}}>Healthy products for day-to-day life</h1>
      </div>
      <div className="product-content">
        <div class="card">
          <div class="imgbox">
            <img src={image1} alt="" />
          </div>
          <div>
            <span className="content-text">Ground Nuts</span>
          </div>

          <div class="content">
            <h2 style={{fontSize:'15px'}}>Experience the Crunchy Deliciousness of Groundnuts</h2>
            <p style={{fontSize:'13px',fontWeight:'500'}}>
            At Star Harvest Exim, we specialize in sourcing and delivering top-quality groundnuts renowned for their crispiness and delicious taste.
            </p>
          </div>

        </div>
        <div class="card">
          <div class="imgbox">
          <img src={image2} alt="" />
          </div>
          <div>
            <span className="content-text">Onions</span>
          </div>

          <div class="content">
            <h2 style={{fontSize:'15px'}}>The Flavorful Foundation of Your Dishes</h2>
            <p style={{fontSize:'13px',fontWeight:'500'}}>
            Discover the incredible versatility and savory depth that onions bring to your culinary creations with Star Harvest Exim.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="imgbox">
          <img src={image3} alt="" />
          </div>
          <div>
            <span className="content-text">Garlics</span>
          </div>

          <div class="content">
            <h2 style={{fontSize:'15px'}}>Unlock the Rich Flavors of Garlic with Star Harvest Exim</h2>
            <p style={{fontSize:'13px',fontWeight:'500'}}>
            At Star Harvest Exim, we take pride in sourcing and delivering the finest garlic varieties from around the world.
            </p>
          </div>
        </div>
      </div>
      <div style={{marginTop:'5rem'}} className="product-content">
        <div class="card">
          <div class="imgbox">
          <img src={image4} alt="" />
          </div>
          <div>
            <span className="content-text">Coconuts</span>
          </div>

          <div class="content">
            <h2 style={{fontSize:'15px'}}>Indulge in the Tropical Delights of Coconut with Star Harvest Exim</h2>
            <p style={{fontSize:'13px',fontWeight:'500'}}>
            At Star Harvest Exim, we specialize in sourcing and delivering premium coconuts that bring the taste of the tropics to your kitchen. 
            </p>
          </div>
        </div>
        <div class="card">
          <div class="imgbox">
          <img src={image5} alt="" />
          </div>
          <div>
            <span className="content-text">Cashews</span>
          </div>

          <div class="content">
            <h2 style={{fontSize:'15px'}}>Discover the Delightful Crunch of Premium Cashews </h2>
            <p style={{fontSize:'13px',fontWeight:'500'}}>
            At Star Harvest Exim, we specialize in sourcing and delivering top-quality cashews that are perfect for snacking, cooking, and adding a touch of luxury to your dishes.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="imgbox">
          <img src={image6} alt="" />
          </div>
          <div>
            <span className="content-text">Turmerics</span>
          </div>

          <div class="content">
            <h2 style={{fontSize:'15px'}}>Experience the Vibrant Flavors of Turmeric with Star Harvest Exim</h2>
            <p style={{fontSize:'13px',fontWeight:'500'}}>
            At Star Harvest Exim, we take pride in sourcing and delivering high-quality turmeric that will add a burst of flavor to your culinary creations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
