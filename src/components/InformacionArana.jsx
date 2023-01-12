import React, { useState } from 'react'

import imagenprueba from '../images/imagenprueba.jpg';
import viudanegraimg from '../images/viudanegra.jpg';
import pataslargas from '../images/pataslargas.jpg';
import eremobates from '../images/eremobates.jpg';
import violinista from '../images/violinista.jpeg';
import linceverde from '../images/linceverde.jpg';
import tarantulapng from '../images/tarantulatransp.png';
import eremobatespng from '../images/eremobatesfondob.jpg';
import viudanegrapng from '../images/viudanegrafb.jpg';
import violinistapng from '../images/violinistafb.jpeg';
import cebrapng from '../images/cebrafb.jpg';
import lincepng from '../images/lincefb.jpg';
import patonapng from '../images/pataslargasfb.jpg';
import amaupng from '../images/amaufb.jpg';
import amauris from '../images/amauris.jpg';
import cebra from '../images/cebra.jpeg';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const InformacionArana = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //se que esto es horrible y espantoso, no se bien react y no supe hacer una funcion pa esto xd , una disculpa <3 

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);


  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);



  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);


  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);


  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);


  const [show7, setShow7] = useState(false);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);


  return (

    <>
      <div>
        <h1><center><font color="white">Arañas más identificadas por Spidy</font> </center></h1>
        <br></br><br></br>
      </div>
      <Row xs={1} md={4} className="g-4">
        <Col>

          <Card className="bg-dark text-white">
            <Card.Img variant="top" src={imagenprueba} width="250" height="250" />
            <Card.ImgOverlay>
              <Card.Footer><br></br><br></br><center><h2>Tarántula</h2>

                <button onClick={handleShow} class="btn bg-transparent">

                  <a class="btnmore primary">
                    <span>Más información</span>
                  </a>

                </button></center></Card.Footer>

              <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title><h1>Tarántula</h1><p><i><font color="red">Brachypelma smithi</font></i></p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div class="mt-2 mb-2 ms-2 me-2 ">
                    <Row >
                      <Col>
                        <img src={tarantulapng} class="img-fluid" ></img>
                      </Col>
                      <Col>
                        <p className="text-end">Con grandes colmillos, ocho patas peludas y una apariencia general que es aterradora y linda,
                          las tarántulas son una de las especies de arañas más reconocibles, y con razón.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="text-center">
                          Son las arañas más grandes del mundo, con las especies más grandes de California alcanzando extensiones
                          de patas adultas de 4.5 pulgadas.
                          Se pueden encontrar varias especies de tarántulas en todo el mundo
                          en una amplia gama de hábitats, desde selvas tropicales hasta praderas y desde bosques templados
                          hasta desiertos.</p>
                      </Col>
                    </Row></div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" id="escaner" onClick={handleClose}>
                    Regresar
                  </Button>

                </Modal.Footer>
              </Modal>
            </Card.ImgOverlay>

          </Card>

        </Col>
        <Col>

          <Card className="bg-dark text-white">
            <Card.Img variant="top" src={eremobates} width="250" height="250" />
            <Card.ImgOverlay>
              <Card.Footer><br></br><br></br><center><h2>Eremobates</h2>

                <button onClick={handleShow1} class="btn bg-transparent">

                  <a class="btnmore primary">
                    <span>Más información</span>
                  </a>

                </button></center></Card.Footer>

              <Modal show={show1} onHide={handleClose1} centered>
                <Modal.Header closeButton>
                  <Modal.Title><h1>Eremobates</h1><p><i><font color="red">Eremobates aztecus</font></i></p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div class="mt-2 mb-2 ms-2 me-2 ">
                    <Row >
                      <Col>
                        <img src={eremobatespng} class="img-fluid" ></img>
                      </Col>
                      <Col>
                        <p className="text-end">De aproximadamente 2 pulgadas de largo, estos arácnidos son de rápido movimiento
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="text-center">
                          Tienen la proporción más grande entre el tamaño de la mandíbula y el cuerpo de cualquier animal.
                          Tienen una mordedura notablemente poderosa. A menudo cazan de noche, tienen problemas de visión y
                          navegan principalmente mediante el uso de un par de pedipalpos. Son criaturas solitarias.
                        </p>
                      </Col>
                    </Row></div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" id="escaner" onClick={handleClose1}>
                    Regresar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.ImgOverlay>

          </Card>

        </Col>



        <Col>

          <Card className="bg-dark text-white">
            <Card.Img variant="top" src={viudanegraimg} width="250" height="250" />
            <Card.ImgOverlay>
              <Card.Footer><br></br><br></br><center><h2>Viuda Negra</h2>

                <button onClick={handleShow2} class="btn bg-transparent">

                  <a class="btnmore primary">
                    <span>Más información</span>
                  </a>

                </button></center></Card.Footer>

              <Modal show={show2} onHide={handleClose2} centered>
                <Modal.Header closeButton>
                  <Modal.Title><h1>Viuda Negra</h1><p><i><font color="red">Latrodectus mactans</font></i></p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div class="mt-2 mb-2 ms-2 me-2 ">
                    <Row >
                      <Col>
                        <img src={viudanegrapng} width="170" height="170" class="img-fluid" ></img>
                      </Col>
                      <Col>
                        <p className="text-end">Tiene un cuerpo negro y brillante con una forma de reloj de arena rojo en la zona ventral.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="text-center">
                          La picadura de esta araña es venenosa. El género de arañas, al cual pertenece la viuda negra
                          tiene la mayor cantidad de especies tóxicas conocidas.
                        </p>
                      </Col>
                    </Row></div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" id="escaner" onClick={handleClose2}>
                    Regresar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.ImgOverlay>

          </Card>

        </Col>




        <Col>

          <Card className="bg-dark text-white">
            <Card.Img variant="top" src={violinista} width="250" height="250" />
            <Card.ImgOverlay>
              <Card.Footer><br></br><br></br><center><h2>Violinista</h2>

                <button onClick={handleShow3} class="btn bg-transparent">

                  <a class="btnmore primary">
                    <span>Más información</span>
                  </a>

                </button></center></Card.Footer>

              <Modal show={show3} onHide={handleClose3} centered>
                <Modal.Header closeButton>
                  <Modal.Title><h1>Violinista/Araña de rincón</h1><p><i><font color="red">Loxosceles laeta</font></i></p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div class="mt-2 mb-2 ms-2 me-2 ">
                    <Row >
                      <Col>
                        <img src={violinistapng} class="img-fluid" ></img>
                      </Col>
                      <Col>
                        <p className="text-end">La araña violinista es una especie nocturna que se adapta a cualquier ecosistema.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="text-center">
                          Puede provocar la muerte debido a que su veneno disuelve los tejidos, causa muerte celular,
                          contiene poderosas enzimas que destruyen todo lo que tiene proteínas y su efecto es 10 veces
                          más poderoso que la quemadura con ácido sulfúrico.
                          Por eso, los especialistas del sector salud recomiendan que, ante la mordedura de esta araña,
                          se actúe rápidamente aplicando hielo y vendaje compresivo frío sobre la herida y, de ser posible,
                          lavando la zona con agua y jabón, además de acudir al Centro de Salud más cercano.
                        </p>
                      </Col>
                    </Row></div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" id="escaner" onClick={handleClose3}>
                    Regresar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.ImgOverlay>

          </Card>

        </Col>



        <Col>
          <Card className="bg-dark text-white">
            <Card.Img variant="top" src={pataslargas} width="250" height="250" />
            <Card.ImgOverlay>
              <Card.Footer><br></br><br></br><center><h2>Patas largas</h2>

                <button onClick={handleShow4} class="btn bg-transparent">

                  <a class="btnmore primary">
                    <span>Más información</span>
                  </a>

                </button></center></Card.Footer>

              <Modal show={show4} onHide={handleClose4} centered>
                <Modal.Header closeButton>
                  <Modal.Title><h1>Patas largas / Tigre</h1><p><i><font color="red">Scytodes globula</font></i></p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div class="mt-2 mb-2 ms-2 me-2 ">
                    <Row >
                      <Col>
                        <img src={patonapng} class="img-fluid" ></img>
                      </Col>
                      <Col>
                        <p className="text-end">Las hembras tienen una longitud corporal de 9 mm; los machos son ligeramente más pequeños.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="text-center">
                          Sus patas son de 5 a 6 veces de la longitud de su cuerpo (llegando a 7 cm de envergadura en las
                          hembras). Acostumbra a vivir en el techo de las habitaciones, cuevas, garajes o las bodegas,
                          lo que le da uno de sus nombres comunes. Se consideran beneficiosas en algunas partes de mundo
                          porque se alimenta de insectos y arácnidos molestos dentro de las casas
                        </p>
                      </Col>
                    </Row></div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" id="escaner" onClick={handleClose4}>
                    Regresar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.ImgOverlay>

          </Card>

        </Col>



        <Col>

          <Card className="bg-dark text-white">
            <Card.Img variant="top" src={linceverde} width="250" height="250" />
            <Card.ImgOverlay>
              <Card.Footer><br></br><br></br><center><h2>Lince Verde</h2>

                <button onClick={handleShow5} class="btn bg-transparent">

                  <a class="btnmore primary">
                    <span>Más información</span>
                  </a>

                </button></center></Card.Footer>

              <Modal show={show5} onHide={handleClose5} centered>
                <Modal.Header closeButton>
                  <Modal.Title><h1>Lince Verde</h1><p><i><font color="red">Peucetia viridans</font></i></p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div class="mt-2 mb-2 ms-2 me-2 ">
                    <Row >
                      <Col>
                        <img src={lincepng} class="img-fluid" ></img>
                      </Col>
                      <Col>
                        <p className="text-end">Es una araña pequeña de color verde.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="text-center">
                          Vive cazando sus presas sobre la vegetación de diversos ecosistemas de zonas abiertas,
                          a bosques templados y zonas urbanas.
                        </p>
                      </Col>
                    </Row></div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" id="escaner" onClick={handleClose5}>
                    Regresar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.ImgOverlay>

          </Card>

        </Col>

        <Col>

          <Card className="bg-dark text-white">
            <Card.Img variant="top" src={cebra} width="250" height="250" />
            <Card.ImgOverlay>
              <Card.Footer><br></br><br></br><center><h2>Cebra</h2>

                <button onClick={handleShow6} class="btn bg-transparent">

                  <a class="btnmore primary">
                    <span>Más información</span>
                  </a>

                </button></center></Card.Footer>

              <Modal show={show6} onHide={handleClose6} centered>
                <Modal.Header closeButton>
                  <Modal.Title><h1>Cebra</h1><p><i><font color="red">Salticus scenicus</font></i></p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div class="mt-2 mb-2 ms-2 me-2 ">
                    <Row >
                      <Col>
                        <img src={cebrapng} class="img-fluid" ></img>
                      </Col>
                      <Col>
                        <p className="text-end">Es de color negro con rayas de color blanco crema de las patas las cuales le dan el nombre de cebra.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="text-center">
                          La hembra es más grande que el macho. Tiene en sus patas un “arma secreta”
                          que le permite adherirse a cualquier tipo de superficies.
                        </p>
                      </Col>
                    </Row></div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" id="escaner" onClick={handleClose6}>
                    Regresar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.ImgOverlay>

          </Card>

        </Col>

        <Col>

          <Card className="bg-dark text-white">
            <Card.Img variant="top" src={amauris} width="250" height="250" />
            <Card.ImgOverlay>
              <Card.Footer><br></br><center><h2>Amaurobius Similis</h2>

                <button onClick={handleShow7} class="btn bg-transparent">

                  <a class="btnmore primary">
                    <span>Más información</span>
                  </a>

                </button></center></Card.Footer>

              <Modal show={show7} onHide={handleClose7} centered>
                <Modal.Header closeButton>
                  <Modal.Title><h1>Amaurobius Similis</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div class="mt-2 mb-2 ms-2 me-2 ">
                    <Row >
                      <Col>
                        <img src={amaupng} class="img-fluid" ></img>
                      </Col>
                      <Col>
                        <p className="text-end">Todos los miembros de la familia Amaurobiidae son nocturno.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="text-center">
                          Tejido en un embudo, un peine en una textura deshilachado con un calamistrum, una fila de pelos
                          tiesos en las piernas traseras. Como Velcro, gancho hebilla de insectos atrapado en la tela
                          de pelo, que permite la captura de presas mucho más grandes que la araña sí mismo.
                        </p>
                      </Col>
                    </Row></div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" id="escaner" onClick={handleClose7}>
                    Regresar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.ImgOverlay>

          </Card>

        </Col>
      </Row>

      <br></br> <br></br>

    </>

  )
}
