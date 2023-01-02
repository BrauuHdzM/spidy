import React, { useState } from 'react' ;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SpidyBar from '../images/SpidyBar.svg';
import SpidyAdmin from '../images/SpidyAdmin.png';
import Button from 'react-bootstrap/Button';




function AdminBar() {
 
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validar=()=>{
    //props.logIn();
 
   console.log("holadios")
   //return <Link to="/AdminDashboard"  />
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img src={SpidyBar}></img><font color="#222529">Spiiy</font></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/InformacionArana">AdminBar</Nav.Link>
         
          
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
