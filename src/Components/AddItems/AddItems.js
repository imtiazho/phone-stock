import React from "react";
import './AddItems.css'

const AddItems = () => {
  const addProductHandle = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const color = e.target.color.value;
    const shortDesc = e.target.shortDesc.value;
    const pairImage = e.target.pairImage.value;
    const price = e.target.price.value;
    const supplier = e.target.supplier.value;
    const quantity = e.target.quantity.value;

    const product = {
      name: name,
      color: color,
      shortDesc: shortDesc,
      pairImage: pairImage,
      price: price,
      supplier: supplier,
      quantity: quantity,
    };

    fetch("http://localhost:5000/shoes", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
};
  return (
    <div className="add-new-form">
      <h2>Add a new Product</h2>
      <form
        onSubmit={addProductHandle}
        className="form-container form-container-add"
      >
        <input name="name" placeholder="Name" type="text" />
        <input name="color" placeholder="Color" type="text" />
        <input name="shortDesc" placeholder="Description" type="text" />
        <input name="pairImage" placeholder="Image Host Link" type="text" />
        <input name="price" placeholder="Price" type="text" />
        <input name="supplier" placeholder="Supplier" type="text" />
        <input name="quantity" placeholder="Quantity" type="text" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddItems;
