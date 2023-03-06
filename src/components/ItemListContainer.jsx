import React from "react";
import products from "../data.json";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h2 className="text-center font-italic lead fs-3 my-3">{greeting}</h2>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
