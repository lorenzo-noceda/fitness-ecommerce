import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "suplementos");
    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data());
        setProducts(docs);
      })
      .catch((err) => console.log(err));

    setLoading(false);
  }, []);

  if (category) {
    products = products.filter((product) => product.category == category);
  }

  return loading ? (
    <Loading />
  ) : (
    <div className="min-vh-100">
      <h2 className="text-center font-italic lead fs-3 my-3">{greeting}</h2>
      <ItemList className="vh-100" products={products} />
    </div>
  );
};

export default ItemListContainer;
