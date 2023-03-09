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
          <Link to="/category/Proteina">
            <Dropdown.Item href="#/" className="btn btn-light fs-5">
              Proteina
            </Dropdown.Item>
          </Link>
          <Link to="/category/Creatina">
            <Dropdown.Item href="#/" className="btn btn-light fs-5 my-2">
              Creatina
            </Dropdown.Item>
          </Link>
          <Link to="/category/Snacks">
            <Dropdown.Item href="#/" className="btn btn-light fs-5 ">
              Snacks
            </Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default NavDropdown;
