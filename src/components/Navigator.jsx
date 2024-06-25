import { Link } from 'react-router-dom';
import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigator = () => {
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-black' to="/" as={Link}>🏠Home</Nav.Link>
            <Nav.Link className='text-black' to="/contacto" as={Link}>📒Contacto</Nav.Link>
          </Nav>
          <Navbar.Brand className='text-black' to="/" as={Link}>🍰Happy Cake</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigator
