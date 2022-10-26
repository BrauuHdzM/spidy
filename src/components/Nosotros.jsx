import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsFillTelephoneFill } from "react-icons/bs";
import {FaLinkedinIn } from "react-icons/fa";
import { BsPinMapFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import gato1 from '../images/gato1.jpg';
import gato2 from '../images/gato2.jpg';
import gato3 from '../images/gato3.jpg';
import mono from '../images/mono.jpg';
import { Card } from 'react-bootstrap';
import { Placeholder } from 'react-bootstrap';

import { Link, animateScroll as scroll } from "react-scroll";

export const Nosotros = () => {

  return (
    <>
    <div>
      <h5><font color="white">Información de contacto de los programadores</font> </h5>
      <br></br><br></br>
    </div>
    <section>
    <div class="container">

    <div class="row mt-4">
    <div class="col-md-4">    		
            <div class="card profile-card-3">
    		        <div class="background-block">
    		            <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background"/>
    		        </div>
    		        <div class="profile-thumb-block">
    		            <img src={gato2} alt="profile-image" class="profile"/>
    		        </div>
    		        <div class="card-content">
                    <h2>Marco Antonio Bernal Trani<small>Software Engineer</small></h2>
                    <div class="icon-block"><a href="#"><i><FaLinkedinIn size="1em" /></i></a><a href="#"> <i ><AiOutlineMail size="1em" /> </i></a><a href="#"> <i ><BsGithub size="1em"/> </i></a></div>
                    </div>
                </div>
          </div>
               
             
          <div class="col-md-4">     
            <div class="card profile-card-3">
    		        <div class="background-block">
    		            <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background"/>
    		        </div>
    		        <div class="profile-thumb-block">
    		            <img src={gato1} alt="profile-image" class="profile"/>
    		        </div>
    		        <div class="card-content">
                    <h2> Mauricio Beltran Vargas<small>Software Engineer</small></h2>
                    <div class="icon-block"><a href="#"><i><FaLinkedinIn size="1em" /></i></a><a href="#"> <i ><AiOutlineMail size="1em" /> </i></a><a href="#"> <i ><BsGithub size="1em"/> </i></a></div>
                    </div>
                </div>
                </div>

          </div>
          <div class="row mt-4">     
                <div class="col-md-4">     
            <div class="card profile-card-3">
    		        <div class="background-block">
    		            <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background"/>
    		        </div>
    		        <div class="profile-thumb-block">
    		            <img src={mono} alt="profile-image" class="profile"/>
    		        </div>
    		        <div class="card-content">
                    <h2>Braulio Hernandez Minutti<small>Carrusel</small></h2>
                    <div class="icon-block"><a href="#"><i><FaLinkedinIn size="1em" /></i></a><a href="#"> <i ><AiOutlineMail size="1em" /> </i></a><a href="#"> <i ><BsGithub size="1em"/> </i></a></div>
                    </div>
                </div>
                
            </div>

                
             
            <div class="col-md-4">    
            <div class="card profile-card-3">
    		        <div class="background-block">
    		            <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background"/>
    		        </div>
    		        <div class="profile-thumb-block">
    		            <img src={gato3} alt="profile-image" class="profile"/>
    		        </div>
    		        <div class="card-content">
                    <h2>Daniela Enriquez Ballesteros<small>Vagabunda</small></h2>
                    <div class="icon-block"><a href="#"><i><FaLinkedinIn size="1em" /></i></a><a href="#"> <i ><AiOutlineMail size="1em" /> </i></a><a href="#"> <i ><BsGithub size="1em"/> </i></a></div>
                    </div>
                </div>
           


    		</div>
      </div>
      </div>
</section>






    <div>
      <h5><font color="white">Contáctanos en el siguiente formulario</font></h5> <br></br>
    </div>

    <div className="d-flex justify-content-around">
      <Card style={{ width: '50rem' }} border='light'>
      <div>
      <Form>
        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
          <Form.Label>Tu correo electrónico:</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <br></br>
        <Form.Group className="mb-6" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <br></br>
        <Form.Group className="mb-6" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Soy humano" />
        </Form.Group>
        <br></br>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      </div>
      </Card>

      <Card style={{ width: '20rem' }} border='light'>
      <div class="d-flex justify-content-around">
            <ul class="list-unstyled mb-6">
              <br></br>
                <li class="text-center"><BsPinMapFill size="2em"/> 
                    <p>Ciudad de México, México</p>
                </li>

                <li class="text-center"><BsFillTelephoneFill size="2em"/>
                    <p>55 12 34 56 78</p>
                </li>

                <li class="text-center"><AiOutlineMail size="2em"/>
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div>
      </Card>
    </div>


    </>
  )
}
