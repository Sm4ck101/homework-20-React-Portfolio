import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap"
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Michael Martinez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navigation />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
