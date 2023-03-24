import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ name, image, id, price, initial, stock, onAdd }) => {
  return (
    <>
      <Card key={id} className="my-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <p className="card-price">💸{price}</p>
          <hr />
          <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        </Card.Body>
      </Card>
      <div className="text-center">
        <Link to="/catalogue">
          <Button variant="outline-light text-dark font-italic my-3">
            Volver al catalogo
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ItemDetail;
