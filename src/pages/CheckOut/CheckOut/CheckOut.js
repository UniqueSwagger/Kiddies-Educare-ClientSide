import React from "react";
import CartListItem from "../../../components/CartListItem/CartListItem";
import StripePayment from "../../../components/StripePayment/StripePayment";
import useProducts from "../../../hooks/useProducts";

const CheckOut = () => {
  const { addedProducts } = useProducts();

  return (
    <div className="mt-20 px-12">
      <div className="grid grid-cols-2">
        <div>
          {addedProducts.length ? (
            addedProducts.map((addedProduct) => (
              <CartListItem
                key={addedProduct._id}
                addedProduct={addedProduct}
              />
            ))
          ) : (
            <h2>Your Cart is empty</h2>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CheckOut;
