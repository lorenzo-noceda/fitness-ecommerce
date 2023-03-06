import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Item
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            initial={product.initial}
            stock={product.stock}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
