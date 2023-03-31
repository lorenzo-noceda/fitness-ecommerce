import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import NavDropdown from "./NavDropdown";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark sticky-top" expand="md">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <span className="material-symbols-outlined me-2">fitness_center</span>
          <span id="logo-title">PROTESHOP</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fs-5">
            <Link to="/" onClick={() => scrollTo(0, 0)}>
              <Button variant="dark btn-outline-light nav-btns">Home</Button>
            </Link>
            <Link to="/catalogue" onClick={() => scrollTo(0, 0)}>
              <Button variant="dark btn-outline-light nav-btns">
                Catalogo
              </Button>
            </Link>
            <NavDropdown />
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
