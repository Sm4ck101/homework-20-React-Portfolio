import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Nav className="ml-auto">
      <LinkContainer to="/">
        <Nav.Link>About Me</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/portfolio">
        <Nav.Link>Portfolio</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/resume">
        <Nav.Link>Resume</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
        <Nav.Link>Contact</Nav.Link>
      </LinkContainer>
    </Nav>
  );
};

export default Navigation;
