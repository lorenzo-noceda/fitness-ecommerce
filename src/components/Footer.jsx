import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="footer">
          <a
            className="text-dark"
            target="_blak"
            href="https://github.com/LorenzoN19"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="text-dark"
            target="_blak"
            href="https://www.linkedin.com/in/lorenzo-noceda-a223261a1/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className="text-dark"
            target="_blak"
            href="mailto:lorenzonoceda7@gmail.com"
          >
            <i className="fa-regular fa-envelope"></i>
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="bg-dark text-light text-center py-2">
          © Copyright - All rights reserved 2023
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
