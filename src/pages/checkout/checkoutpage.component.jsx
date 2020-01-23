import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";
import StripeButtonComponent from "../../components/stripe-button/stripe-button.component";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>
      <span>TOTAL: R$ {total},00</span>
    </TotalContainer>
    {total > 0 && (
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVC: 123
      </WarningContainer>
    )}
    {total > 0 && <StripeButtonComponent price={total} />}
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps, null)(CheckoutPage);
