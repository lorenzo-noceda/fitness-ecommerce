import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../src/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  if (category) {
    products = products.filter((product) => product.category == category);
  }

  return (
    <>
      <h2 className="text-center font-italic lead fs-3 my-3">{greeting}</h2>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
