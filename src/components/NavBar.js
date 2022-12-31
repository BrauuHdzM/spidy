import React, { useState } from 'react' ;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SpidyBar from '../images/SpidyBar.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img src={SpidyBar}></img><font color="#222529">Spiiy</font></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/InformacionArana">Información arácnida</Nav.Link>
            <Nav.Link href="/Mapa">Mapa</Nav.Link>
            <Nav.Link href="/Detectar">Escaner</Nav.Link>
            <Nav.Link href="/Nosotros">Contacto</Nav.Link>
          
              </Nav>
              <Nav>
            <Button variant="outline-light" onClick={handleShow}>
        Login administrador
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Administrador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@spidy.com"
                autoFocus
              />
            </Form.Group>
         
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña </Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
          </Form>
          
          
          
          </Modal.Body>
        <Modal.Footer>
      
          <Button variant="primary" onClick={handleClose}>
            Iniciar sesión
          </Button>
        </Modal.Footer>
      </Modal>  
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {NavBar} ;
