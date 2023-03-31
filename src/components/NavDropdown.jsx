import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavDropdown = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="dark btn-outline-light px-3 fs-5">
          Categorias
        </Dropdown.Toggle>
        <Dropdown.Menu className="text-center">
          <Link to="/category/Proteina" onClick={() => scrollTo(0, 0)}>
            <Dropdown.Item className="btn btn-light fs-5" as="li">
              Proteina
            </Dropdown.Item>
          </Link>
          <Link to="/category/Creatina" onClick={() => scrollTo(0, 0)}>
            <Dropdown.Item className="btn btn-light fs-5 my-2" as="li">
              Creatina
            </Dropdown.Item>
          </Link>
          <Link to="/category/Snacks" onClick={() => scrollTo(0, 0)}>
            <Dropdown.Item className="btn btn-light fs-5" as="li">
              Snacks
            </Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default NavDropdown;
