import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButtonComponent = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_QGztT8ZDnLssu3xelztP8ywU00MbvpwIe1";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(resp => {
        alert("Payment successful");
      })
      .catch(err => {
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card."
        );
        console.error(err);
      });
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
