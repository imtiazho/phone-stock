import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleInventory.css";

const SingleInventory = () => {
  const { id } = useParams();
  const [shoe, setShoe] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/shoe/${id}`)
      .then((res) => res.json())
      .then((data) => setShoe(data));
  }, [id]);

  const addStockHandle = (e) => {
    e.preventDefault();
    const newQuantity = shoe.quantity + parseInt(e.target.quantity.value);

    const updatedProduct = {
      quantity: newQuantity
    }

    fetch(`http://localhost:5000/shoe/${id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
  };

  const decreaseStockHandle = (e) => {
    e.preventDefault();
    const newQuantity = shoe.quantity - 1;

    const updatedProduct = {
      quantity: newQuantity
    }

    fetch(`http://localhost:5000/shoeStockDecrease/${id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
  };


  return (
    <div className="singleProduct">
      <div className="lh-s">
        <h1>Product Details of {shoe.name}</h1>
        <img src={shoe.pairImage} alt="" />
        <h3>{shoe.name}</h3>
        <p>{shoe.shortDesc}</p>
        <h4>Price: ${shoe.price}</h4>
        <p>Supplier: {shoe.supplier}</p>
        <p>Available: {shoe.quantity} Pis</p>
      </div>

      <div className="rh-s">
        <form onSubmit={addStockHandle} className="add-form">
          <h2>Add Quantity</h2>
          <input placeholder="Enter Quantity" name="quantity" type="text" />
          <input type="submit" value="Add" />
        </form>

        <div className="deliver-package">
          <button onClick={decreaseStockHandle} className="deliver-btn">Deliver One Successfully</button>
          <p>
            <span>*</span> Click this button to reduce the quantity by one when
            you order a Product
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleInventory;
