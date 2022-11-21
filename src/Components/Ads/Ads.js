import React from "react";
import "./Ads.css";
import img1 from "../../assets/images/ads-1.jpg";
import img2 from "../../assets/images/ads-2.jpg";

const Ads = () => {
  return (
    <div className="Ads">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
    </div>
  );
};

export default Ads;
