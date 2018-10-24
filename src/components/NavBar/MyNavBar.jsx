import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class MyNavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "rgba(58, 41, 48, 0.8)" }}
      >
        <li className="nav-link navbar-brand">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/Bio">
                  About Me
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/Projects">
                  My Work
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="/contactInfo">
                  How To Reach Me
                </Link>
              </div>
            </li>
            <li className="nav-item" />
          </ul>

          <li className="nav-link navbar-brand">
            <Link className="link" to="/Bio">
              About Me
            </Link>
          </li>

          <li className="nav-link navbar-brand">
            <Link className="link" to="/contactInfo">
              How To Reach Me
            </Link>
          </li>

          <li className="nav-item dropdown nav-link navbar-brand">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/Bio">
                About Me
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/Projects">
                My Work
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/contactInfo">
                How To Reach Me
              </Link>
            </div>
          </li>

          <li className="nav-link navbar-brand">
            <Link className="link" to="/Projects">
              My Work
            </Link>
          </li>
        </div>
      </nav>
    );
  }
}

export default MyNavBar;
