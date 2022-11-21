import React, { useEffect, useState } from "react";
import EachInventoryCard from "../EachInventoryCard/EachInventoryCard";
import "./HomeInventory.css";

const HomeInventory = () => {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/shoes")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);
  return (
    <div className="home-inventory">
      <h1>Some Latest Brand</h1>

      <div className="home-inventory-container">
        {shoes.slice(0, 6).map((shoe) => (
          <EachInventoryCard key={shoe._id} shoe={shoe}></EachInventoryCard>
        ))}
      </div>
    </div>
  );
};

export default HomeInventory;
