import React from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ quantity }) => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="form-holder">
        <form action="/" method="get">
          <input
            type="text"
            id="header-search"
            placeholder="Search Items"
            name="s"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <Link to="/cart">
        <i className="fas fa-shopping-cart fa-2x"></i>
      </Link>
      <p>Amount: {quantity}</p>
    </div>
  );
};

export default Navbar;
