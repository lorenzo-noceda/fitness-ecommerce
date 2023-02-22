import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h2 className="text-center font-italic lead my-3">{greeting}</h2>
    </>
  );
};

export default ItemListContainer;
