import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = props =>
  <nav className = "navbar navbar-default">
    <div className = "container-fluid">
      <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">
            NYT-React
          </Link>
      </div>
      <div class="collapse navbar-collapse navbar-ex1-collapse">
          <ul class="nav navbar-nav navbar-right">
              <li>
                  <Link to="/search">
                    Search
                  </Link>
              </li>
              <li>
                  <Link to="/saved">
                    Saved Articles
                  </Link>
              </li>
          </ul>
      </div>
    </div>
  </nav>

export default Navbar;