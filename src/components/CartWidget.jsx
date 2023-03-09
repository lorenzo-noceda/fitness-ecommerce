import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="px-5">
      <Link to="/cart">
        <button className="btn btn-dark btn-outline-light btn-sm">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>3</span>
        </button>
      </Link>
    </div>
  );
};

export default CartWidget;
