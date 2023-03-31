import React, { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartProvider";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendOrder = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { clearCart, cart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const db = getFirestore();

  const orderCollection = collection(db, "ordenes");

  const order = {
    costumer: {
      name,
      email,
    },
    items: cart.map((prod) => ({
      name: prod.name,
      price: prod.price,
      quantity: prod.quantity,
      totalPrice: prod.price * prod.quantity,
    })),
    totalPrice,
  };

  const handleSubmit = () => {
    if (
      name != "" &&
      email != "" &&
      email.includes("@") &&
      email.includes(".com")
    ) {
      addDoc(orderCollection, order).then(({ id }) => {
        scrollTo(0, 0);
        Swal.fire({
          icon: "success",
          html: `<h4>La operación se realizó exitosamente!</h4><p>Su orden de compra es:</p><h5>${id}</h5>`,
        }).then(() => {
          Swal.fire({
            html: `<h4>Muchas gracias por confiar en <i>ProteShop</i>💪</h4>`,
            imageUrl:
              "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61iaYVAiQUL._AC_UF894,1000_QL80_.jpg",
          });
          clearCart();
          navigate("/catalogue");
        });
      });
    } else {
      toast.error("Campos invalidos", {
        position: "bottom-center",
        autoClose: 2000,
        pauseOnHover: false,
        theme: "colored",
      });
    }
  };

  const clearCartQuestion = () => {
    Swal.fire({
      icon: "warning",
      text: "¿Está seguro que desea limpiar el carrito?",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
    })
      .then((result) => {
        if (result.isConfirmed) {
          clearCart();
          navigate("/catalogue");
          Swal.fire({
            icon: "success",
            text: "El carrito fue limpiado",
          });
        }
      })
      .then(() => scrollTo(0, 0))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2 className="indent lead fs-2 mb-4 mt-5">Orden de compra</h2>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="my-4">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            placeholder="Nombre completo"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Label className="mt-3">Email</Form.Label>
          <Form.Control
            placeholder="Correo Electrónico"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="success fs-5 px-4"
          type="submit"
          onClick={() => handleSubmit()}
        >
          Comprar
        </Button>
        <Button variant="danger fs-5 mx-3" onClick={() => clearCartQuestion()}>
          Limpiar carrito
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default SendOrder;
