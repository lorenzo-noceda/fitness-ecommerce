import React, { useContext } from "react";
import { Form, Button, ButtonGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartProvider";

const Cart = () => {
  const {
    cart,
    clearCart,
    removeProduct,
    addProduct,
    totalProducts,
    totalPrice,
  } = useContext(CartContext);

  return (
    <Container className="mb-5 pt-4">
      <h1 className="text-center lead fs-1 mb-5">Carrito</h1>
      {cart.map((prod) => (
        <>
          <hr />
          <div
            key={prod.id}
            className="d-flex justify-content-center align-items-center text-center"
          >
            <div style={{ width: "200px" }}>
              <h5 className="text-center">{prod.name}</h5>
              <img src={prod.image} className="cart-img" alt="cart-img" />
              <p className="mt-3 mb-1">Cantidad: {prod.quantity}</p>
              <p className="h6">Total: 💸{prod.price * prod.quantity}</p>
            </div>
            <div>
              <ButtonGroup aria-label="Counter" className="mb-3 d-block">
                <Button variant="dark" onClick={() => addProduct(prod, 1)}>
                  +
                </Button>
                <Button variant="dark">{prod.quantity}</Button>
                <Link to={totalProducts == 1 ? "/catalogue" : ""}>
                  <Button
                    variant="dark cart-minus-btn"
                    onClick={() => {
                      prod.quantity == 1
                        ? removeProduct(prod.id)
                        : addProduct(prod, -1);
                    }}
                  >
                    -
                  </Button>
                </Link>
              </ButtonGroup>
              <Link to={cart.length == 1 && "/catalogue"}>
                <Button variant="danger" onClick={() => removeProduct(prod.id)}>
                  Eliminar producto
                </Button>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <Link to="/catalogue">
              <Button variant="outline-light text-dark font-italic my-3">
                Seguir comprando
              </Button>
            </Link>
          </div>
        </>
      ))}
      <h4 className="my-3">Total: 💸{totalPrice}</h4>
      <hr />
      <h2 className="indent lead fs-2 mb-4 mt-5">Ordenes de compra</h2>
      <Form>
        <Form.Group className="my-4">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre completo" />
        </Form.Group>
        <Form.Group className="my-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su correo electronico"
          />
        </Form.Group>
        <Button variant="success fs-5 px-4">Comprar</Button>
        <Link to="/catalogue">
          <Button variant="danger fs-5 mx-3" onClick={() => clearCart()}>
            Limpiar carrito
          </Button>
        </Link>
      </Form>
    </Container>
  );
};

export default Cart;
