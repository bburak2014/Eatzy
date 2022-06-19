import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <Container className="cardPNF">
      <Row>
        <Col xs="12">
          <h1 className="text-center text-danger">404 Error</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default PageNotFound;
