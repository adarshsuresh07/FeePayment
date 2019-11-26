import React from "react";
import Style from './css/Confirmation.module.css';
import { getTokens, paidcheck } from '../utils';
import StripeCheckout from "react-stripe-checkout";
import Axios from "axios";

const Stripebtn = (props) => {
  const publishableKey = "pk_test_wTTXyqf2hnUFHYwdqxpidAqs00m5hLO9OT";
   
  const onToken = token => {
    const body = {
      amount: props.amount,
      token: token
  };
  let config = {
    headers: {
      Authorization: 'bearer '+getTokens()
    },
  };
  Axios.post("http://localhost:3001/payment", body, config)
  .then(response => {
    console.log(response);
    alert("Payment Success");
    paidcheck(true);
  })
  .catch(error => {
    console.log("Payment Error: ", error);
    alert("Payment Error");
  });
  };

  return (
    <StripeCheckout
      label="Pay"
      name="CET Fee Payment"
      panelLabel="Pay"
      allowRememberMe={false}
      amount={props.amount*100} 
      currency="INR"
      token={onToken}
      stripeKey={publishableKey}
      image="https://www.coolbet.com/assets/images/welcome/bonus-sports-image.jpg"
      billingAddress={false}>
      <button className={Style.button5} type="Submit"> Confirm </button>   
    </StripeCheckout>
  );
};

export default Stripebtn;