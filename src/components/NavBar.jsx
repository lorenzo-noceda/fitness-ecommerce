import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-toggler sticky-top text-white bg-dark b-radius-0">
      <div className="d-flex">
        <span className="material-symbols-outlined me-2">fitness_center</span>
        <h1 className="navbar-brand text-white font-italic spacing-2px">
          PROTESHOP
        </h1>
      </div>
      <div className="me-4">
        <button className="btn btn-dark btn-outline-light mx-2">BOTON 1</button>
        <button className="btn btn-dark btn-outline-light mx-2">BOTON 2</button>
        <button className="btn btn-dark btn-outline-light mx-2">BOTON 3</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
