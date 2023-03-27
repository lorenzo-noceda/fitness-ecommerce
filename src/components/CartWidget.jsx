import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartProvider";

const CartWidget = () => {
  let { totalProducts } = useContext(CartContext);

  return (
    <div className="px-5">
      <button
        className="btn btn-dark btn-sm p-0"
        disabled={totalProducts == 0}
        onClick={() => scrollTo(0, 0)}
      >
        <Link to="/cart" className="btn btn-outline-light btn-sm">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>{totalProducts}</span>
        </Link>
      </button>
    </div>
  );
};

export default CartWidget;
