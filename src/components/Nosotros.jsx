import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsPinMapFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Card } from 'react-bootstrap';
import { Placeholder } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";

export const Nosotros = () => {

  return (
    <>
    <div>
      <h5>Información de contacto de los programadores </h5>
      <br></br><br></br>
    </div>
    <div>
    <Table responsive variant="default">
      <thead>
        <tr>
          <th>Nombre</th>
          <th class="text-end">Contacto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Marco Antonio Bernal Trani</td>
          <div class="text-end">
          <Button href="" target="_blank" variant="outline-dark">GitHub</Button>{' '}&nbsp;
          <Button href="" target="_blank" variant="outline-info">LinkedIn</Button>{' '}&nbsp;
          </div>
        </tr>
        <tr>
          <td>Roberto Mauricio Beltran Vargas</td>
          <div class="text-end">
          <Button href="" target="_blank" variant="outline-dark">GitHub</Button>{' '}&nbsp;
          <Button href="" target="_blank" variant="outline-info">LinkedIn</Button>{' '}&nbsp;
          </div>
        </tr>
        <tr>
          <td>Daniela Enriquez Ballesteros</td>
          <div class="text-end">
          <Button href="" target="_blank" variant="outline-dark">GitHub</Button>{' '}&nbsp;
          <Button href="" target="_blank" variant="outline-info">LinkedIn</Button>{' '}&nbsp;
          </div>
        </tr>
        <tr>
          <td>Braulio Hernandez Minutti</td>
          <div class="text-end">
          <Button href="https://github.com/BrauuHdzM" target="_blank" variant="outline-dark">GitHub</Button>{' '}&nbsp;
          <Button href="https://www.linkedin.com/in/braulio-hern%C3%A1ndez-minutti-994574218" target="_blank" variant="outline-info">LinkedIn</Button>{' '}&nbsp;
          </div>
        </tr>
      </tbody>
    </Table>
    <br></br><br></br>
    </div>

    <div>
      <h5>Contáctanos en el siguiente formulario</h5> <br></br>
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
