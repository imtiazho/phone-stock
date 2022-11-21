import React from "react";
import "./TopBanner.css";
import { Link } from "react-router-dom";

const TopBanner = () => {
  return (
    <div className="topBanner">
      <div className="topbanner-container">
        <h1>
          The Best Shoes Dealer <br /> In Town
        </h1>

        <p>
          Athletic shoes are made for sports such as running, walking, or
          others. Some athletic shoes are designed with specific features for
          specific activities, for example, roller skates, ice skates, and
          climbing shoes all provide additional elements designed for their
          respective sport.
        </p>

        <Link to="/about">Learn More</Link>
      </div>
    </div>
  );
};

export default TopBanner;
