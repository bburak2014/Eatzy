import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import CarousalSlider from "../Components/CarouselSlider/CarousalSlider";
import {
  Container,
  Col,
  Row,
  Card,
  InputGroup,
  FormControl,
  Nav,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import "../Assets/Css/Home.css";
import { GoSearch } from "react-icons/go";

function Home() {
  return (
    <Container className=" homeContainer">
    <Helmet> 
      <title>Eatzy</title>
      <meta name="description"
      content="Get info for all your favourite products "
      />
       <meta name="keywords"
      content="products,gift"
      />
      </Helmet>
      <Row>
        <Col xs="12" md="8" className="mt-5">
          <img
            className="imagehome"
            src="image/home.jpg"
            width={"100%"}
            alt="home"
          />
          <Container>
            <Row>
              <h2 className="mt-5 text-left">
                How to succesful photography business
              </h2>
            </Row>
            <Row>
              <p className="mt-5 text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum.
              </p>
            </Row>
            <Row>
              <div className="textReadMore">
                <div className="textReadMoreChild">___Read More</div>
                <div className="textReadMoreChild">
                  <span className="m-1">
                    <FaFacebookF />{" "}
                  </span>{" "}
                  <span className="m-1">
                    <FaTwitter />{" "}
                  </span>
                </div>
              </div>
            </Row>
          </Container>
        </Col>
        <div className="dividerCntrlContainer d-block d-md-none">
          <div className="dividerContainer "></div>
        </div>
        <Col xs="12" md="4" className="mt-5">
          <div className="homeFlex">
            <Card className=" cardHome" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Search</Card.Title>
                <InputGroup className="mb-3">
                  <FormControl
                    style={{ color: "gray" }}
                    placeholder="Type Here..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    <GoSearch />
                  </InputGroup.Text>
                </InputGroup>
              </Card.Body>
            </Card>
          </div>
          <div className="homeFlex mt-3">
            <Card className=" cardHome " style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Categories</Card.Title>
                <Nav variant="pills" className="flex-column pt-3">
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Entertainment</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">Business</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-3">Adventure</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-4">Decorating</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-5">Travelling</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-6">Shopping</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
          </div>
          <div className="homeFlex mt-3">
          <CarousalSlider/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
