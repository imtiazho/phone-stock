import React from "react";
import "./EachInventoryCard.css";
import { Link } from "react-router-dom";

const EachInventoryCard = ({ shoe }) => {
  const { name, pairImage, price, supplier, quantity, shortDesc } =
    shoe;
  return (
    <div className="each-inventory-card">
      <img src={pairImage} alt="" />
      <h3>{name}</h3>
      <p>{shortDesc.length > 100 ? shortDesc.slice(0, 100) + "..." : shortDesc}</p>
      <h4>Price: ${price}</h4>
      <p>Supplier: {supplier}</p>
      <p>Available: {quantity} pis</p>

      <Link className="update-btn">Update</Link>
    </div>
  );
};

export default EachInventoryCard;
