import React from "react";
import notfound from "../assets/notfound.png";
import "./RouterComponent.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const history = useNavigate(); // Create a history object

  const handleExploreClick = () => {
    history("/products");
  };
  return (
    <div className="notfound" style={{ height: "91vh" }}>
      <div>
        <div className="notfount-text">
          <Button onClick={handleExploreClick}>Expore Now</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
