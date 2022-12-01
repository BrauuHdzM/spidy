import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsFillTelephoneFill } from "react-icons/bs";
import {FaLinkedinIn } from "react-icons/fa";
import { BsPinMapFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Nani from '../images/Nani.jpg';
import braulio from '../images/braulio.jpg';
import Mau from '../images/Mau.jpg';
import Marco from '../images/Marco.jpg';
import { Card } from 'react-bootstrap';
import { Placeholder } from 'react-bootstrap';

import { Link, animateScroll as scroll } from "react-scroll";

export const Nosotros = () => {

  return (
    <>
    <div>
      <h1><center><font color="white">Información de contacto de los programadores</font> </center></h1>
      <br></br><br></br>
    </div>
   
    <div class="container">
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src={Mau}/>
        </div>
        <div class="team-content">
          <h3 class="name">Mauricio Beltrán</h3>
          <h4 class="title">Web Developer</h4>
        </div>
        <ul class="social">
          <li><a href="" aria-hidden="true"><i><FaLinkedinIn size="1em" /></i></a></li>
          <li><a href="" aria-hidden="true"><i ><AiOutlineMail size="1em" /> </i></a></li>
          <li><a href=""  aria-hidden="true"><i ><BsGithub size="1em"/> </i></a></li>

        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src={Nani}/>
        </div>
        <div class="team-content">
          <h3 class="name">Daniela Enriquez</h3>
          <h4 class="title">UX/UI Designer</h4>
        </div>
        <ul class="social">
          <li><a href="" aria-hidden="true"><i><FaLinkedinIn size="1em" /></i></a></li>
          <li><a href="" aria-hidden="true"><i ><AiOutlineMail size="1em" /> </i></a></li>
          <li><a href=""  aria-hidden="true"><i ><BsGithub size="1em"/> </i></a></li>

        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src={Marco}/>
        </div>
        <div class="team-content">
          <h3 class="name">Marco Bernal</h3>
          <h4 class="title">Web Developer</h4>
        </div>
        <ul class="social">
          <li><a href="" aria-hidden="true"><i><FaLinkedinIn size="1em" /></i></a></li>
          <li><a href="" aria-hidden="true"><i ><AiOutlineMail size="1em" /> </i></a></li>
          <li><a href=""  aria-hidden="true"><i ><BsGithub size="1em"/> </i></a></li>

        </ul>
      </div>
    </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src={braulio}/>
        </div>
        <div class="team-content">
          <h3 class="name">Braulio Hernández</h3>
          <h4 class="title">Web Developer</h4>
        </div>
        <ul class="social">
          <li><a href="" aria-hidden="true"><i><FaLinkedinIn size="1em" /></i></a></li>
          <li><a href="" aria-hidden="true"><i ><AiOutlineMail size="1em" /> </i></a></li>
          <li><a href=""  aria-hidden="true"><i ><BsGithub size="1em"/> </i></a></li>

        </ul>
      </div>
    </div>
  </div>
</div>

    



    <div>
    <font color="white">
    <h1 class="h1-responsive text-center my-4">¡Contáctanos!</h1>
    <p class="text-center w-responsive mx-auto mb-5">Si tienes dudas, quejas o sugerencias no dudes en dejarnos un mensaje, lo responderemos lo más rápido que podamos</p>
    </font>
    </div>

    <div className="d-flex justify-content-around">
      <Card style={{ width: '55rem', backgroundColor: "#d3d3d3"}} border='light'>
      <div class="mt-4 mb-4 ms-4 me-4">
      <Form>
      
      <Form.Group   className="mb-6" controlId="name">
          <Form.Label>Nombre: </Form.Label>
          <Form.Control type="text" placeholder="Tu nombre" />
        </Form.Group>
        <br></br>
        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
          <Form.Label>Tu correo electrónico:</Form.Label>
          <Form.Control type="email" placeholder="name@algo.com" />
        </Form.Group>
        <br></br>
        <Form.Group className="mb-6" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <br></br>
        <Form.Group className="mb-6" controlId="formBasicCheckbox">
    
          <Button id="escaner" size="md" type="submit">
          Enviar
        </Button>
        </Form.Group>
    
      </Form>
      </div>
      </Card>

      <Card style={{ width: '20rem' , backgroundColor: "#d3d3d3" }} border='light'>
      <br></br>
      <br></br>
      <div class="d-flex justify-content-around">
            <ul class="list-unstyled mb-6">
              <br></br>
                <li class="text-center"><BsPinMapFill size="4em"/> 
                    <p>Ciudad de México, México</p>
                </li>

                <li class="text-center"><BsFillTelephoneFill size="4em"/>
                    <p>+52 55 12 34 56 78</p>
                </li>

                <li class="text-center"><AiOutlineMail size="4em"/>
                    <p>spydycontact@spidy.com</p>
                </li>
            </ul>
        </div>
      </Card>
    </div>


    </>
  )
}
