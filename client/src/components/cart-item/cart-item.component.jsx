import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemDetailsName,
  CartItemImage
} from "./cart-item.styles";

const CartItemComponent = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="name" />
    <ItemDetailsContainer>
      <ItemDetailsName>{name}</ItemDetailsName>
      <ItemDetailsName>
        {quantity} x R${price}
      </ItemDetailsName>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItemComponent;
