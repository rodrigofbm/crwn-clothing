import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeButtonComponent = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_QGztT8ZDnLssu3xelztP8ywU00MbvpwIe1";

  const onToken = token => {
    console.log("onToken: ", token);
    alert("Payment successfull");
  };

  return (
    <StripeCheckout
      currency="BRL"
      label="Pay Now"
      name="CRWN Clothing LTD"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is R$${price},00`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButtonComponent;
