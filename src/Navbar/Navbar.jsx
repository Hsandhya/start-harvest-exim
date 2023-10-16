import "./Navbar.css";
import Home from "../Home/Home";
import { Button, Drawer, FloatButton } from "antd";
import { ArrowUpOutlined, MenuOutlined } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import RouterAboutUs from "../RouterComponents/RouterAboutUs";
import RouterContactUs from "../RouterComponents/RouterContactUs";
import RouterCertificates from "../RouterComponents/RouterCertificates";
import RouterProducts from "../RouterComponents/RouterProducts";
import NotFound from "../RouterComponents/NotFound";
import logo from "../assets/logoIcon.png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const drawerOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Router>
        <header className="nav-header">
          <img className="logo" src={logo} alt="logo" style={{ width: "3%" }} />
          <nav>
            <ul className="nav_links">
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  className="nav-link"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  activeClassName="active"
                  className="nav-link"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  activeClassName="active"
                  className="nav-link"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/certificates"
                  activeClassName="active"
                  className="nav-link"
                >
                  Certificates
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  activeClassName="active"
                  className="nav-link"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <header className="nav-header-mobile">
          <div>
            <img
              className="logo"
              src={logo}
              alt="logo"
              style={{ width: "3%" }}
            />
          </div>
          <div>
            <Button style={{ marginTop: "5px" }} onClick={drawerOpen}>
              <MenuOutlined />
            </Button>
          </div>
          <Drawer
            className="menu-drawer"
            style={{ backgroundColor: "#F7FFF6" }}
            title="Menu"
            placement="right"
            width={200}
            onClose={onClose}
            open={open}
            closeIcon={true}
          >
            <nav>
              <ul className="nav_links">
                <li>
                  <NavLink
                    to="/"
                    exact
                    activeClassName="active"
                    className="nav-link"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about-us"
                    activeClassName="active"
                    className="nav-link"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    activeClassName="active"
                    className="nav-link"
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/certificates"
                    activeClassName="active"
                    className="nav-link"
                  >
                    Certificates
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact-us"
                    activeClassName="active"
                    className="nav-link"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Drawer>
        </header>
        <Routes>
          <Route path="/products" element={<RouterProducts />} />
          <Route path="/about-us" element={<RouterAboutUs />} />
          <Route path="/contact-us" element={<RouterContactUs />} />
          <Route path="/certificates" element={<RouterCertificates />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navbar;
