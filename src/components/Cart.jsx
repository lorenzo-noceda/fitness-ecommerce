import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const Cart = () => {
  return (
    <Container className="mb-5 pt-4">
      <Form>
        <h2 className="text-center lead fs-2">Ordenes de compra</h2>

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
        <Form.Group className="my-4">
          <Form.Check
            type="checkbox"
            label="Me interesa recibir novedades por e-mail"
            className="my-4"
          />
        </Form.Group>
        <Form.Group className="my-4">
          <Form.Label>Sugerencia</Form.Label>
          <textarea
            className="form-control"
            placeholder="Ingrese alguna sugerencia para que podamos brindarle un mejor servicio"
          ></textarea>
        </Form.Group>
        <Button variant="primary fs-5 px-4" type="submit">
          Comprar
        </Button>
      </Form>
    </Container>
  );
};

export default Cart;
