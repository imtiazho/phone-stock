import React from "react";
import "./Home.css";
import TopBanner from "../TopBanner/TopBanner";
import HomeInventory from "../HomeInventory/HomeInventory";
import Ads from "../Ads/Ads";
import GeneralService from "../GeneralService/GeneralService";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <HomeInventory></HomeInventory>
      <Ads></Ads>
      <GeneralService></GeneralService>
    </div>
  );
};

export default Home;
