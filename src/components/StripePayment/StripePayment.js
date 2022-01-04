import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "../PaymentForm/PaymentForm.css";
import CardCheckOut from "../PaymentForm/CardCheckOut";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51Jx0AjCvip3LZhpPnP8CGuCjzE0Hqk5xX5VmWDpbwqRzxRZFH2zPIHhIYB0dzsyOngL2aDDU6TriwpbHNygxKcJs0044m9oakv"
);

const StripePayment = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: 10 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div className="">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CardCheckOut />
        </Elements>
      )}
    </div>
  );
};

export default StripePayment;
