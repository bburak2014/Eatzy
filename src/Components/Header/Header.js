import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import logo from "../../Assets/image/logo.png";

function Header() {
  return (
    <>
      <Navbar expand="lg">
        <Container className="headerContainer">
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto justify-content-center top-fixed"
              style={{ width: "100%" }}
            >
              <Link to="/" className="nav-link">
                {" "}
                Home
              </Link>
              <Link to="/Portfolio" className="nav-link">
                {" "}
                Portfolio
              </Link>

              <Link to="/" className="nav-link">
                {" "}
                About Us
              </Link>
              <Link to="/" className="nav-link">
                {" "}
                Pages
              </Link>
              <Link to="/" className="nav-link">
                {" "}
                Blog
              </Link>
              <Link to="/" className="nav-link">
                {" "}
                Contact
              </Link>
              <Link to="/" className="nav-link">
                {" "}
                <GoSearch />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="dividerCntrl">
          <div className="divider"></div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
