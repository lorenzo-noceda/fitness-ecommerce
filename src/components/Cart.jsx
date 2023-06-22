import React, { useContext } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartProvider";
import SendOrder from "./SendOrder";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeProduct, addProduct, totalPrice } =
    useContext(CartContext);

  const navigate = useNavigate();

  const removeProductQuestion = (id) => {
    Swal.fire({
      icon: "warning",
      text: "¿Está seguro que desea eliminar el producto?",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
    })
      .then((result) => {
        if (result.isConfirmed) {
          removeProduct(id);
          cart.length == 1 && navigate("/fitness-ecommerce/catalogue");
          Swal.fire({
            icon: "success",
            text: "El producto fue eliminado",
          });
        }
      })
      .then(() => scrollTo(0, 0))
      .catch((err) => console.log(err));
  };

  return (
    <Container className="mb-5 pt-4">
      <h1 className="text-center lead fs-1 mb-5">Carrito</h1>
      {cart.map((prod) => (
        <div key={prod.id} className="text-center">
          <hr />
          <div className="d-flex justify-content-center align-items-center">
            <div className="w-200">
              <h5>{prod.name}</h5>
              <img src={prod.image} className="cart-img" alt="cart-img" />
              <p className="mt-3 mb-1 fs-5">Cantidad: {prod.quantity}</p>
              <h5>Subtotal: 💸{prod.price * prod.quantity}</h5>
            </div>
            <div>
              <ButtonGroup aria-label="Counter" className="mb-3 d-block">
                <Button variant="dark" onClick={() => addProduct(prod, 1)}>
                  +
                </Button>
                <Button variant="dark">{prod.quantity}</Button>
                <Button
                  variant="dark cart-minus-btn"
                  onClick={() => {
                    prod.quantity == 1
                      ? removeProductQuestion(prod.id)
                      : addProduct(prod, -1);
                  }}
                >
                  -
                </Button>
              </ButtonGroup>
              <Button
                variant="danger"
                onClick={() => removeProductQuestion(prod.id)}
              >
                Eliminar producto
              </Button>
            </div>
          </div>
          <div className="text-center">
            <Link to="/fitness-ecommerce/catalogue">
              <Button variant="outline-light text-dark font-italic my-3">
                Seguir comprando
              </Button>
            </Link>
          </div>
        </div>
      ))}
      <h2 className="my-3">Total: 💸{totalPrice}</h2>
      <hr />
      <SendOrder />
    </Container>
  );
};

export default Cart;
