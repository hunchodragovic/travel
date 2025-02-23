import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Planet Voyage</h1>
      <div className="menu-icons">
        <i
          className={clicked ? "fas fa-times" : "fas fa-bars"}
          onClick={() => setClicked(!clicked)}
        ></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className={item.cName}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
