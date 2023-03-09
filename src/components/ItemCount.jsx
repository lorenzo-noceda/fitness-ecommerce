import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const ItemCount = ({ stock = 0, initial = 1 }) => {
  let [count, setCount] = useState(initial);

  const decreaseCounter = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increaseCounter = (stock) => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <p className="text-center h6">Stock disponible: {stock} unidades</p>
      <div className="add-to-cart">
        <ButtonGroup aria-label="Counter" className="me-3">
          <Button variant="dark" onClick={() => increaseCounter(stock)}>
            +
          </Button>
          <Button variant="dark">{count}</Button>
          <Button variant="dark" onClick={() => decreaseCounter()}>
            -
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            variant="outline-primary"
            className="px-3 text-center"
            disabled={count == 0 || initial > stock || count < initial}
            onClick={() => {
              if (count <= stock && stock >= initial && count >= initial) {
                setCount(0);
              }
            }}
          >
            Agregar al carrito
          </Button>
        </ButtonGroup>
      </div>
      <p className="compra-minima">
        {initial > 1 ? `-Compra minima: ${initial} unidades-` : ""}
      </p>
    </div>
  );
};

export default ItemCount;
