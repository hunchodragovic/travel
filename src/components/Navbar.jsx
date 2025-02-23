import React, { Component } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Planet</h1>
      <ul className="nav-menu">
        <li>
          <Link></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
