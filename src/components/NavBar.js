import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SpydyLogo from '../images/SpydyLogo.svg';
function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img src={SpydyLogo}></img><font color="#222529">Spiyuyyyyssss</font></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/InformacionArana">Información arácnida</Nav.Link>
            <Nav.Link href="/Mapa">Mapa</Nav.Link>
            <Nav.Link href="/Escanear">Escaner</Nav.Link>
            <Nav.Link href="/Nosotros">Contacto</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {NavBar} ;
