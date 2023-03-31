import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../context/ShoppingCartProvider";
import Loading from "./Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  let [product, setProduct] = useState([]);
  let { addProduct } = useContext(CartContext);

  const onAdd = (quantity) => {
    addProduct(product, quantity);
  };

  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "suplementos", `${id}`);
    getDoc(oneItem)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const doc = { id: snapshot.id, ...snapshot.data() };
          setProduct(doc);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return product.image == undefined ? (
    <Loading />
  ) : (
    <div className="min-vh-100">
      <ItemDetail
        name={product.name}
        id={product.id}
        image={product.image}
        price={product.price}
        stock={product.stock}
        initial={product.initial}
        description={product.description}
        onAdd={onAdd}
      />
    </div>
  );
};

export default ItemDetailContainer;
