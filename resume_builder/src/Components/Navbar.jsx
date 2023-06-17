import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { LinkContainer } from "react-router-bootstrap";
import logo from "../Assests/logo.jpg";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: "5vh" }}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} style={{ width: 50, height: 50 }} />
            <span style={{ marginLeft: "7px" }}>
              Make My <span style={{ color: "green" }}>Resume</span>
            </span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/make_resume">
              <Nav.Link>Make Resume</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
