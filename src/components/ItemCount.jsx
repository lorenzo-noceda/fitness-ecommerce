import React, { useState, useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartProvider";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  let { cart } = useContext(CartContext);
  let [counter, setCounter] = useState(initial);

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const increaseCounter = () => {
    if (counter < stock) {
      setCounter(counter + 1);
      if (counter == 0) {
        setCounter(initial);
      }
    }
  };

  const addToCart = () => {
    if (counter <= stock && stock >= initial && counter >= initial) {
      onAdd(counter);
      setCounter(0);
    }
  };

  return (
    <div>
      <p className="text-center h6">Stock disponible: {stock} unidades</p>
      <div className="add-to-cart">
        <ButtonGroup aria-label="Counter" className="me-3">
          <Button variant="dark" onClick={() => increaseCounter()}>
            +
          </Button>
          <Button variant="dark">{counter}</Button>
          <Button variant="dark" onClick={() => decreaseCounter()}>
            -
          </Button>
        </ButtonGroup>
        <Button
          variant="success"
          className="px-3 text-center"
          disabled={counter == 0 || initial > stock || counter < initial}
          onClick={() => {
            addToCart();
          }}
        >
          Agregar al carrito
        </Button>
      </div>
      <p className="compra-minima">
        {initial > 1 && `-Compra minima: ${initial} unidades-`}
      </p>
      {cart.length >= 1 && (
        <div className="text-center">
          <Link to="/cart">
            <Button variant="outline-primary mt-3 px-4">Ir al carrito</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
