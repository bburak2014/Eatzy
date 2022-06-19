import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { ImTwitter, ImFacebook2, ImInstagram } from "react-icons/im";
import { Button } from "react-bootstrap";
import logo from "../../Assets/image/logo.png";

function Footer() {
  return (
    <>
      <div className="footer-basic">
        <img src={logo} width={100} alt="logo" />
        <footer>
          <div className="social">
            <Button className="trns">
              <ImInstagram />
            </Button>
            <Button className="trns">
              <MdEmail />
            </Button>
            <Button className="trns">
              <ImTwitter />
            </Button>
            <Button className="trns">
              <ImFacebook2 />
            </Button>
          </div>
          <ul className="list-inline d-none d-md-block ">
            <li className="list-inline-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/About">About Us</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/Pages">Pages</Link>
            </li>

            <li className="list-inline-item">
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/Blog">Blog</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <ul className="list-inline d-block d-md-none ftr ">
            <li className="list-inline-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/About">About Us</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/Pages">Pages</Link>
            </li>

            <li className="list-inline-item">
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/Blog">Blog</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <p className="copyright">Eatzy © 2018</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
