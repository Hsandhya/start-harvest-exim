import React from "react";
import { Carousel } from "antd";
import "./home.css";

import homeImage1 from "../assets/1.png";
import homeImage2 from "../assets/2.png";
import homeImage3 from "../assets/3.png";
const contentStyle = {
  height: "840px",
  color: "#fff",
  lineHeight: "60px",
  textAlign: "center",
  background: "#fff",
};

const function1 =()=>
{
  console.log("function1 triggered......................!");
}

const Home = () => {
  return (
    <div>
      <Carousel autoplay effect="fade">
        <div>
          <h3 style={contentStyle}>
            <img onClick={function1} className="carousel-image3" src={homeImage3} alt="" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img onClick={function1} className="carousel-image2" src={homeImage1} alt="" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img onClick={function1} className="carousel-image3" src={homeImage2} alt="" />
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
