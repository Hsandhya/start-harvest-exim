import React from "react";
import "./navbar.css";
import Home from "../Home/Home";
import About from "../About/About";

const Navbar = () => {
  return (
    <div>
      <header className="nav-header">
        <img className="logo" src="" alt="logo" />
        <nav>
          <ul className="nav_links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Products</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <Home />
      <About />
    </div>
  );
};

export default Navbar;
