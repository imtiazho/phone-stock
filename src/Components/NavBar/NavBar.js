import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import auth from "../../Firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);

  const signoutHandle = () => {
    signOut(auth)
  }
  return (
    <div className="NavBar">
      <div className="nav-container">
        <h3>Shoes Deal</h3>

        <div className="nav-items">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>

          { user &&
            <>
              <Link to="/myItems">My Items</Link>
              <Link to="/addItems">Add Items</Link>
            </>
          }
          {user ? (
            <Link onClick={signoutHandle} to="/login">Sign Out</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
