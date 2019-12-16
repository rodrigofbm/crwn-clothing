import React from "react";
import "./cart-item.scss";

const CartItemComponent = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="name" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x R${price}
      </span>
    </div>
  </div>
);

export default CartItemComponent;
