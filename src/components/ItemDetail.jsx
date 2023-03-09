import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ products }) => {
  const { id } = useParams();
  let productFound = products.filter((product) => product.id == id);

  return (
    <>
      {productFound.map((product) => (
        <Card key={product.id} className="my-3">
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <p className="card-price">💸{product.price}</p>
            <hr />
            <ItemCount stock={product.stock} initial={product.initial} />
          </Card.Body>
        </Card>
      ))}
      ;
    </>
  );
};

export default ItemDetail;
