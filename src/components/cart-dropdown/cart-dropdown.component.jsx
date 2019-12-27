import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  CartDropdownContainer,
  EmpityMessageContainer,
  CartItemsContainer,
  CheckoutButton
} from "./cart-dropdown.styles";

const CartDropdownComponent = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmpityMessageContainer>Your cart is empity</EmpityMessageContainer>
      )}
    </CartItemsContainer>
    <CheckoutButton
      onClick={() => {
        history.push("checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CheckoutButton>
  </CartDropdownContainer>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdownComponent));
