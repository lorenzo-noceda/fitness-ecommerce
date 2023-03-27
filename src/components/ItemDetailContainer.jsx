import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../context/ShoppingCartProvider";
import Loading from "./Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  let [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  let { addProduct } = useContext(CartContext);

  const onAdd = (quantity) => {
    addProduct(product, quantity);
  };

  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();
      const oneItem = doc(db, "suplementos", `${id}`);
      getDoc(oneItem)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const docs = snapshot.data();
            console.log(product);
            setProduct(docs);
          }
        })
        .catch((err) => console.log(err));

      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
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
  );
};

export default ItemDetailContainer;
