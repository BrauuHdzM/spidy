import React, { useState, useEffect } from 'react' ;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import spidyAdminBar from '../images/spidyAdminBar.svg';
import SpidyAdmin from '../images/SpidyAdmin.png';
import Button from 'react-bootstrap/Button';

function AdminBar(props) {
 
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand ><img src={spidyAdminBar}></img><font color="#222529">spidybaradmiinaaaaaaaaaa</font></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
          
              </Nav>
              <Nav>
            <Button variant="outline-light" onClick={handleShow}>
        Cerrar sesión
      </Button>

      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {AdminBar} ;
