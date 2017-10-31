import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props =>
    <nav className="navbar navbar-inverse">
    <div className="container-fluid">
        <div className="navbar-header">
        <Link className="navbar-brand" to="/">Mongo Scraper</Link>
        </div>
        <ul className="nav navbar-nav">
        <li 
          className={window.location.pathname === "/" ? "active": ""}
        >
          <Link to="/">Home</Link>
        </li>
        <li className={window.location.pathname === "/save" ? "active" : ""}
        >
          <Link to="/saved">Saved Articles</Link>
        </li>
        <li><a className="btn btn-danger scrape-new">SCRAPE NEW ARTICLES!</a></li>
        </ul>
    </div>
    </nav>

export default Navbar;