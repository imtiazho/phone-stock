import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EachInventoryCardForManage from "../EachInventoryCardForManage/EachInventoryCardForManage";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/shoes")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);

  
  return (
    <div className="manage-inventory-sec">
      <h1>Manage All Products</h1>
      <div className="manage-inventory-container">
        {shoes.map((shoe) => (
          <EachInventoryCardForManage
            key={shoe._id}
            shoe={shoe}
          ></EachInventoryCardForManage>
        ))}
      </div>
      <Link to='/addNewPro'>Add Product</Link>
    </div>
  );
};

export default ManageInventory;
