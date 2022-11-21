import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="nav-container">
        <h3>Shoes Deal</h3>

        <div className="nav-items">
          <Link to="/">Home</Link>
          <Link to="blog">Blog</Link>
          <Link to="about">About</Link>

          {
            <>
              <Link to="myItems">My Items</Link>
              <Link to="addItems">Add Items</Link>
              {0 ? (
                <Link to="login">Sign Out</Link>
              ) : (
                <Link to="login">Login</Link>
              )}
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;
