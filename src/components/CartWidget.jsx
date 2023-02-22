import React from "react";

const CartWidget = () => {
  return (
    <div className="px-5">
      <button className="btn btn-dark btn-outline-light btn-sm">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>3</span>
      </button>
    </div>
  );
};

export default CartWidget;
