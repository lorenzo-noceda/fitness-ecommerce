import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="spinner-div">
      <Spinner animation="border" role="status"></Spinner>
      <span>Cargando productos desde la base de datos...</span>
    </div>
  );
};

export default Loading;
