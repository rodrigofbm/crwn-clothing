import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./checkout.styles.scss";

import {
  selectCartItems,
  selectCartItemsTotal
} from "../../redux/cart/cart.selectors";
import CheckoutItemomponent from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>

      <div className="header-block">
        <span>Description</span>
      </div>

      <div className="header-block">
        <span>Quantity</span>
      </div>

      <div className="header-block">
        <span>Price</span>
      </div>

      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItemomponent key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: R$ {total},00</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps, null)(CheckoutPage);
