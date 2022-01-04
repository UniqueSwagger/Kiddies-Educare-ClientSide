import React from "react";
import CheckOutItem from "../../../components/CheckOutItem/CheckOutItem";
import StripePayment from "../../../components/StripePayment/StripePayment";
import useProducts from "../../../hooks/useProducts";

const CheckOut = () => {
  const { addedProducts } = useProducts();
  console.log(addedProducts);
  const totalAddedProductsPrice = addedProducts.reduce((acc, item) => {
    return acc + item.cartQuantity * item.price;
  }, 0);

  return (
    <div className="mt-20 px-12">
      <div className="grid grid-cols-2">
        <div>
          <div>
            {addedProducts.length ? (
              addedProducts.map((addedProduct) => (
                <CheckOutItem
                  key={addedProduct._id}
                  addedProduct={addedProduct}
                />
              ))
            ) : (
              <h2>Your Cart is empty</h2>
            )}
          </div>
          <div className="text-2xl bg-teal-600 text-white text-center p-2 w-52 mx-auto mt-4">
            Total Amount: ${totalAddedProductsPrice}
          </div>
        </div>
        <div>
          <StripePayment price={totalAddedProductsPrice} />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
