import React from "react";
const CheckOutItem = ({ addedProduct }) => {
  const { cartQuantity, price, image, title } = addedProduct;
  return (
    <div className="d-flex align-items-center">
      <img className="w-32 me-3" src={image} alt="" />
      <div>
        <small className=" d-block">{title}</small>
        <small className="text-muted">Item price ${price}</small>
        <div className="d-flex align-items-center justify-between my-2">
          <h5 className="mb-0">${(price * cartQuantity).toFixed(2)}</h5>
          <div className="cart-quantity-icon">{cartQuantity}</div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItem;
