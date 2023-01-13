import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import spidyAdminBar from '../images/spidyAdminBar.svg';
import SpidyAdmin from '../images/SpidyAdmin.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function AdminBar(props) {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const red = () => {

    props.logout()
  };

  return (
    <Navbar bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand ><img src={spidyAdminBar} height="40"
          className="d-inline-block align-top"></img><font color="#222529">spidy</font></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Link to="/">  <Button variant="outline-light" onClick={red}>
              Cerrar sesión
            </Button></Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { AdminBar };
