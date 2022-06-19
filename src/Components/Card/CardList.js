import React from "react";
import "./Card.css";
import { Card, Col,Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardList({ id, name, image, category,visit }) {
  return (
    <Col xs="12" md="6" className="mb-3">
     <Link to={"/Portfolio/"+id} className="nav-link">
                
             
      <Card className="cardList" style={{ width: "100%" }}>
        <Card.Img variant="top" src={image} />
        <Row>
        <Col >
          <div className="cardTitle">{category}</div>
          <div className="cardTxt">{name}</div>
          
        </Col>
        <Col className="cardTxtRight "><p>visited:{visit}</p></Col>
        </Row>
      </Card>
      </Link>
    </Col>
  );
}

export default CardList;
