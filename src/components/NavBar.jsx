import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";

const NavBar = () => {
  return (
    <nav className="navbar navbar-toggler sticky-top text-white bg-dark rounded-0">
      <Link to="/">
        <div className="d-flex">
          <span className="material-symbols-outlined me-2">fitness_center</span>
          <h2 className="navbar-brand text-white font-italic spacing-2px">
            PROTESHOP
          </h2>
        </div>
      </Link>
      <div className="me-4 d-flex">
        <Link to="/catalogue">
          <button className="btn btn-dark btn-outline-light me-3 px-4 fs-5 ">
            Catalogo
          </button>
        </Link>
        <NavDropdown />
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
