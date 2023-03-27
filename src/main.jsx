import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDrJnn7mKVXWXdbu_VetBf18FLkq1g8DSM",
  authDomain: "fitness-ecommerce.firebaseapp.com",
  projectId: "fitness-ecommerce",
  storageBucket: "fitness-ecommerce.appspot.com",
  messagingSenderId: "964289323973",
  appId: "1:964289323973:web:6a9da9c645a83b3dd461ac",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
