import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ItemCount from "./ItemCount";

const Item = ({ name, id, price, image, initial, stock }) => {
  const onAdd = (quantity) => {
    const totalPrice = quantity * price;

    console.log(
      quantity == 1
        ? `Seleccionaste ${quantity} unidad. En total es ${totalPrice}`
        : `Seleccionaste ${quantity} unidades. En total es ${totalPrice}`
    );
  };
  return (
    <Col>
      <Card key={id}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <p className="card-price">💸{price}</p>
          <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
