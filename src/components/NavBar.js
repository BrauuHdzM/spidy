import React, { useState } from 'react' ;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SpidyBar from '../images/SpidyBar.svg';
import SpidyAdmin from '../images/SpidyAdmin.png';
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
            <Nav.Link href="/Escanear">Escaner</Nav.Link>
            <Nav.Link href="/Nosotros">Contacto</Nav.Link>
          
              </Nav>
              <Nav>
            <Button variant="outline-light" onClick={handleShow}>
        SpidyAdmin
      </Button>

      <Modal show={show} onHide={handleClose} center styles={{ overlay: { background: "#e13743" } }} >
      <div class="logindiv">
        <Modal.Header closeButton>
      
        <div class="mt-2 mb-2 ms-3 me-2 ">
    
          <Modal.Title> <center><img src={SpidyAdmin} class="img-fluid" ></img></center> </Modal.Title>
          </div>
        </Modal.Header>
        </div>
        <Modal.Body>
        <Form>
        <div class="mt-1 mb-2.5 ms-4 me-4 ">
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
      <div class="text-center">
          <Button variant="danger" id="escaner" onClick={handleClose}>
            Iniciar sesión 
          </Button>
          </div>
      </div>
          </Form>
          
          
          
          </Modal.Body>
        <Modal.Footer>
        <div class="text-center">
        <i><p>Este es un apartado exclusivo para administradores de Spidy, dudas o comentarios spidyadmin@spidy.com</p></i>
        </div>
        </Modal.Footer>
      </Modal>  
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {NavBar} ;
