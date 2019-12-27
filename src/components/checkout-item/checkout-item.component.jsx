import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  removeItem,
  addItem
} from "../../redux/cart/cart.actions";
import {
  CheckoutItemContainer,
  CheckoutItemImage,
  CheckoutItemPrice,
  CheckoutItemQuantity,
  CheckoutItemName,
  RemoveButton
} from "./checkout-item.styles";

const CheckoutItemComponent = ({
  cartItem,
  clearItemFromCart,
  addItem,
  removeItem
}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <CheckoutItemImage>
        <img src={imageUrl} alt={name} />
      </CheckoutItemImage>

      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </CheckoutItemQuantity>
      <CheckoutItemPrice>{price}</CheckoutItemPrice>
      <RemoveButton onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: cartItem => dispatch(clearItemFromCart(cartItem)),
  addItem: cartItem => dispatch(addItem(cartItem)),
  removeItem: cartItem => dispatch(removeItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItemComponent);
