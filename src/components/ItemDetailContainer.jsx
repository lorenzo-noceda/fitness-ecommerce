import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../context/ShoppingCartProvider";

const ItemDetailContainer = () => {
  const { id } = useParams();
  let [product, setProduct] = useState([]);
  let { addProduct } = useContext(CartContext);

  useEffect(() => {
    fetch("../src/data.json")
      .then((response) => response.json())
      .then((products) => {
        if (id) {
          setProduct(products.find((product) => product.id == id));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const onAdd = (quantity) => {
    addProduct(product, quantity);
  };

  return (
    <ItemDetail
      name={product.name}
      id={product.id}
      image={product.image}
      price={product.price}
      stock={product.stock}
      initial={product.initial}
      onAdd={onAdd}
    />
  );
};

export default ItemDetailContainer;
