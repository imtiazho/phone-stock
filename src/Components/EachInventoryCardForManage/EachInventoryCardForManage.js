import React from "react";
import "./EachInventoryCardForManage.css";
import { Link } from "react-router-dom";

const EachInventoryCardForManage = ({ shoe }) => {
  const { _id, name, pairImage } = shoe;
  const handleDelete = (e) => {
    const url = `http://localhost:5000/manageInventory/${_id}`;
    fetch(url, {
      method: "DELETE",
    });
  };
  return (
    <div className="each-inventory-card">
      <img src={pairImage} alt="" />
      <h3 className="manage-inventory-heading">{name}</h3>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default EachInventoryCardForManage;
