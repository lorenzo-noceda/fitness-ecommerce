import React from "react";
import { Container, Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Item
            id={product.id}
            name={product.name}
            image={product.image}
            category={product.category}
            key={product.id}
          />
        ))}
      </Row>
    </Container>
  );
};

export default React.memo(ItemList);
