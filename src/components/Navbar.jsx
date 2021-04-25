import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";

function NavBar({ quantity }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <Link to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <input
                className="nav-links"
                type="text"
                id="header-search"
                placeholder="Search Products"
                name="s"
              />
            </li>
            <li className="nav-item">
              <button className="nav-links" type="submit">
                Search
              </button>
            </li>
          </ul>
          <div className="cart-icon">
            <Link to="/cart">
              <i className="fas fa-shopping-cart fa-2x"></i>
              <div className="notification">{quantity}</div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
