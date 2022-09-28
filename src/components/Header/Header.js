import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-bg navbar-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/home">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 ms-auto mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/order">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/order">
                Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/order-review">
                Order Review
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/manage-inventrory">
                Manage Inventory
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
