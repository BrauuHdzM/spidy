import React,{ useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SpidyBar from '../images/SpidyBar.svg';
import SpidyAdmin from '../images/SpidyAdmin.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/App.css';

import { Link} from 'react-router-dom';

function NavBar(props) {
 
  
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const inputRef = useRef(null);

  

  const handleClick = () => {
    if(inputRef.current.value=='123456'){
    
    setShow(false)
    handleShow1(true)
   
  } 
else{

  setShow(false)
}

};

  const handleClose = () => {
  
    setShow(false)
  };


  const handleShow = () => setShow(true);

  const handleClose1 = () => {
   
    props.logIn()
    setShow1(false)
   
    
  };




  const handleShow1 = () => setShow1(true);


  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img src={SpidyBar}></img><font color="#222529">Spiiy</font></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Link className="nav-link" to="/InformacionArana">Información arácnida</Link>
            <Link className="nav-link" to="/Mapa">Mapa</Link>
            <Link className="nav-link" to="/Detectar">Escaner</Link>
            <Link className="nav-link" to="/Nosotros">Contacto</Link>
          
              </Nav>
              <Nav>
            <button class="loginhide color" onClick={handleShow}><font color="#22252A">,</font></button>

      <Modal show={show} onHide={handleClose} center styles={{ overlay: { background: "#e13743" } }} >
        <Modal.Header closeButton>
        <div class="mt-2 mb-2 ms-3 me-2 ">
          <Modal.Title>  </Modal.Title>
          </div>
        </Modal.Header>
        
        <Modal.Body>
        <Form>
        <div class="mt-1 mb-2.5 ms-4 me-4 ">
  
      <Form.Group className="mb-3" >
        <Form.Control type="password" placeholder="ID Key" ref={inputRef} id="message" />
      </Form.Group>
      <div class="text-center">
       <Button variant="danger" id="escaner" onClick={handleClick}>
            Ok
          </Button>
          
          
          </div>
      </div>
          </Form>
          
          
          
          </Modal.Body>
   
      </Modal>  
    
      <Modal show={show1} onHide={handleClose1} center styles={{ overlay: { background: "#e13743" } }} >
      
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
            <div className="mb-3" >
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@spidy.com"
                autoFocus
              />
          </div>
         
          <div className="mb-3" >
        <Form.Label>Contraseña </Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
        </div>
        <Link to="/AdminPanel"> <div class="text-center">
     <Button variant="danger" id="escaner" onClick={handleClose1}>
         Iniciar sesión 
          </Button>
          
          </div></Link> 
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
