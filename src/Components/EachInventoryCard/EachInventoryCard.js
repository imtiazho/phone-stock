import React from "react";
import "./EachInventoryCard.css";
import { Link } from "react-router-dom";

const EachInventoryCard = ({ shoe }) => {
  const { _id, name, pairImage, price, supplier, quantity, shortDesc } = shoe;
  return (
    <div className="each-inventory-card">
      <img src={pairImage} alt="" />
      <h3>{name}</h3>
      <p>
        {shortDesc.length > 38 ? shortDesc.slice(0, 38) + "..." : shortDesc}
      </p>
      <h4>Price: ${price}</h4>
      <p>Supplier: {supplier}</p>
      <p>Available: {quantity} Pis</p>

      <Link to={`/inventory/${_id}`} className="update-btn">
        Update
      </Link>
    </div>
  );
};

export default EachInventoryCard;
