import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartProvider";
import { Button } from "react-bootstrap";

const CartWidget = () => {
  let { totalProducts } = useContext(CartContext);

  return (
    <div className="px-4">
      <Button
        variant="dark"
        className="btn-sm p-0"
        disabled={totalProducts == 0}
      >
        <Link
          to="/fitness-ecommerce/cart"
          onClick={() => scrollTo(0, 0)}
          className="btn btn-outline-light btn-sm"
        >
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>{totalProducts}</span>
        </Link>
      </Button>
    </div>
  );
};

export default CartWidget;
