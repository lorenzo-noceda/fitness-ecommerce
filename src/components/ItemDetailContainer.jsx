import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../src/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return <ItemDetail products={products} />;
};

export default ItemDetailContainer;
