import React, { useEffect, useState } from "react";
import { Button, Carousel, FloatButton } from "antd";
import "./home.css";

import homeImage1 from "../assets/1.png";
import homeImage2 from "../assets/2.png";
import homeImage3 from "../assets/3.png";
import MhomeImage1 from "../assets/13.png";
import MhomeImage2 from "../assets/14.png";
import MhomeImage3 from "../assets/12.png";
import About from "../About/About";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
import { ArrowUpOutlined } from "@ant-design/icons";
const contentStyle = {
  height: "840px",
  color: "#fff",
  lineHeight: "60px",
  textAlign: "center",
  background: "#fff",
};

const contentStyleM = {
  margin: 0,
  height: "10%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const function1 = () => {
  console.log("function1 triggered......................!");
};

const Home = () => {
  const [visible, setVisible] = useState(false);

  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 120) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      {visible && (
        <FloatButton
          onClick={scrollToTop}
          icon={<ArrowUpOutlined />}
        ></FloatButton>
      )}

      <div className="home-layout">
        <Carousel autoplay effect="fade">
          <div>
            <h3 style={contentStyle}>
              <img
                onClick={function1}
                className="carousel-image3"
                src={homeImage3}
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                onClick={function1}
                className="carousel-image2"
                src={homeImage1}
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                onClick={function1}
                className="carousel-image3"
                src={homeImage2}
                alt=""
              />
            </h3>
          </div>
        </Carousel>
      </div>
      <div className="home-layout-mobile">
        <Carousel afterChange={onChange} autoplay>
          <div>
            <h3 style={contentStyleM}>
              <img style={{ width: "100%" }} src={MhomeImage2} alt="" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyleM}>
              <img style={{ width: "100%" }} src={MhomeImage1} />
            </h3>
          </div>
          <div>
            <h3 style={contentStyleM}>
              <img style={{ width: "100%" }} src={MhomeImage3} />
            </h3>
          </div>
        </Carousel>
      </div>
      <About />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
