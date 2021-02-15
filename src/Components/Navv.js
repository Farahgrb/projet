import React from "react";
import { Navbar, Nav } from "react-bootstrap"
import { Link  } from "react-router-dom"
export default function Navv() {
  return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Clothes Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="Mr-auto">
          <Link className="ml-5" to="/">Home</Link>
          <Link className="ml-5" to="/men">Men</Link>
          <Link className="ml-5" to="/women">Women</Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}