import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ name, id, category, image }) => {
  return (
    <Col key={id}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Categoria: {category}</Card.Text>
          <hr />
          <Link to={`/catalogue/${id}`}>
            <Button className="d-block mx-auto px-4 py-1 fs-5">Detalles</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
