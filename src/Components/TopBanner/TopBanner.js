import React from "react";
import "./TopBanner.css";
import { Link } from "react-router-dom";

const TopBanner = () => {
  return (
    <div className="topBanner">
      <div className="topbanner-container">
        <h1>
          The Best Phone Dealer <br /> In Town
        </h1>

        <p>
          Nevertheless, they’re wise words, and by all accounts date to long
          before most marketing and business luminaries were saying anything of
          the sort about mobile.
        </p>

        <Link to="/about">Learn More</Link>
      </div>
    </div>
  );
};

export default TopBanner;
