import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  let [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "suplementos");
    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(docs);
      })
      .catch((err) => console.log(err));
  }, []);

  if (category) {
    products = products.filter((product) => product.category == category);
  }

  return products.length == 0 ? (
    <Loading />
  ) : (
    <div className="min-vh-100">
      <h2 className="text-center font-italic lead fs-3 my-3">{greeting}</h2>
      <ItemList className="vh-100" products={products} />
    </div>
  );
};

export default ItemListContainer;
