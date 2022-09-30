import React from 'react'
import Table from 'react-bootstrap/Table';
import imagenprueba from '../images/imagenprueba.jpg';
import viudanegraimg from '../images/viudanegra.jpg';
import arañasaltadoraimg from '../images/arañasaltadora.jpg';
import arañadepastoimg from '../images/arañapasto.jpg';
import reclusapardaimg from '../images/reclusaparda.jpg';
import deinopisimg from '../images/Deinopis.jpg';
import nephilaimg from '../images/nephila.jpg';
import vagabundaimg from '../images/arañavagabunda.jpg';
import cangrejogiganteimg from '../images/cangrejogigante.jpg';
import tarantulamexicanaimg from '../images/tarantulamexicana.jpg';
import tarantularodillas from '../images/tarantularodillas.jpg';
import arañajardinimg from '../images/arañajardin.jpg';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export const InformacionArana = () => {
  return (
    <Row xs={1} md={4} className="g-4">
          <Col>
              <Accordion defaultActiveKey="0" flush>
                  <Card className="text-center">
                      <Card.Img variant="top" src={imagenprueba} width="250" height="200" />
                      <Accordion.Header as={Card.Header} eventKey="0">
                          <Card.Title>Tarántula</Card.Title>
                      </Accordion.Header>
                          <Accordion.Body>
                                <p className="text-center">Con grandes colmillos, ocho patas peludas y una apariencia general que es aterradora y linda, 
                                las tarántulas son una de las especies de arañas más reconocibles, y con razón. 
                                Son las arañas más grandes del mundo, con las especies más grandes de California alcanzando extensiones 
                                de patas adultas de 4.5 pulgadas. Se pueden encontrar varias especies de tarántulas en todo el mundo 
                                en una amplia gama de hábitats, desde selvas tropicales hasta praderas y desde bosques templados 
                                hasta desiertos.</p>
                          </Accordion.Body>
                  </Card>
              </Accordion>
        </Col>

        <Col>
        <Accordion defaultActiveKey="0" flush>
                  <Card className="text-center">
                      <Card.Img variant="top" src={viudanegraimg} width="250" height="200"/>
                      <Accordion.Header as={Card.Header} eventKey="0">
                          <Card.Title>Viuda Negra</Card.Title>
                      </Accordion.Header>
                          <Accordion.Body>
                                <p className="text-center">La araña viuda negra (género Latrodectus) tiene un cuerpo negro y brillante con una forma de reloj 
                                de arena rojo en la zona ventral. La picadura de esta araña es venenosa. El género de arañas, 
                                al cual pertenece la viuda negra tiene la mayor cantidad de especies tóxicas conocidas. .</p>
                          </Accordion.Body>
                  </Card>
              </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
                  <Card className="text-center">
                      <Card.Img variant="top" src={arañasaltadoraimg} width="250" height="200"/>
                      <Accordion.Header as={Card.Header} eventKey="0">
                          <Card.Title>Araña saltadora</Card.Title>
                      </Accordion.Header>
                          <Accordion.Body>
                                <p className="text-center">Phidippus audax es una araña saltadora común de América del Norte. En su país de origen se conoce como 
                                "Daring Jumping Spider" (del inglés "araña saltadora atrevida") o "Bold Jumping Spider" (del inglés "araña
                                 saltadora descarada") . El tamaño promedio de los adultos varía entre 13 a 20 mm de longitud.
                                Estas arañas son normalmente negras con un patrón de manchas y rayas en su abdomen y las patas. A menudo, 
                                estas manchas son de color naranja en los individuos jóvenes, tornándose blanco en la araña madura.
                                Pertenece al género Phidippus, un grupo de arañas saltadoras, perfectamente identificables tanto por su 
                                tamaño relativamente grande y sus quelíceros iridiscente. En el caso de P. audax, estos quelíceros son 
                                de un verde o azul metálico brillante. </p>
                          </Accordion.Body>
                  </Card>
              </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
                  <Card className="text-center">
                      <Card.Img variant="top" src={arañadepastoimg } width="250" height="200"/>
                      <Accordion.Header as={Card.Header} eventKey="0">
                          <Card.Title>Araña de pasto</Card.Title>
                      </Accordion.Header>
                          <Accordion.Body>
                                <p className="text-center">Especie de araña araneomorfa licósida, cuyas integrantes son denominadas comúnmente arañas lobo o 
                                corredoras de jardín. Habita en regiones templadas a templado-cálidas del Cono Sur de Sudamérica.
                                Cuenta con glándulas venenosas que producen sustancias activas como la serotonina, la histamina, hialuronidasa 
                                y proteasas, las que son tóxicas a nivel celular. Sus fuertes y gruesos quelíceros logran penetrar la piel humana 
                                e inocular el veneno, dejan una herida claramente visible en el afectado, el cual siente un punzante e 
                                intenso dolor en el área mordida tomando una tonalidad rojiza. </p>
                          </Accordion.Body>
                  </Card>
              </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
                  <Card className="text-center">
                      <Card.Img variant="top" src={reclusapardaimg } width="250" height="200"/>
                      <Accordion.Header as={Card.Header} eventKey="0">
                          <Card.Title>Reclusa parda </Card.Title>
                      </Accordion.Header>
                          <Accordion.Body>
                                <p className="text-center">Es una especie de araña que pertenece al género Loxosceles de la familia Sicariidae. Es una araña con 
                                un potente veneno necrótico y es una de las dos arañas (junto a la viuda negra) de importancia médica 
                                en América del Norte. Tiene un color morado con café muy claro, y su aspecto es más bien pequeño, algo menor 
                                que la araña de los rincones (Loxosceles laeta), su prima sudamericana. Para su identificación definitiva es 
                                imprescindible examinar los ojos. Aunque la mayoría de las arañas tienen ocho ojos, las especies del género 
                                Loxosceles tienen seis ojos dispuestos en pares (díadas) con un par mediano y dos pares laterales. 
                                Sólo algunas otras especies de arañas tienen tres pares de ojos dispuestos de esta manera, como por 
                                ejemplo los escitódidos. Las reclusas Loxosceles no tienen patrones de coloración evidentes en el abdomen 
                                ni las patas, y las patas carecen de pelos.​ El abdomen está cubierto de pelos cortos finos que, cuando se 
                                ve sin aumento, dan la apariencia de ser piel suave. </p>
                          </Accordion.Body>
                  </Card>
              </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
                  <Card className="text-center">
                      <Card.Img variant="top" src={ deinopisimg } width="250" height="200"/>
                      <Accordion.Header as={Card.Header} eventKey="0">
                          <Card.Title>Deinopis </Card.Title>
                      </Accordion.Header>
                          <Accordion.Body>
                                <p className="text-center">Es un género de arañas lanzadoras de redes que fue descrito por primera vez por WS MacLeay en 1839. 
                                Su distribución es ampliamente tropical y subtropical. Atrapan a sus presas usando una "red" especialmente hilada. 
                                El nombre se deriva del griego δεινός ( deinos ), que significa "temeroso", y opis , que significa "apariencia", 
                                en referencia a sus rostros de ogro. </p>
                          </Accordion.Body>
                  </Card>
              </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
                  <Card className="text-center">
                      <Card.Img variant="top" src={ nephilaimg } width="250" height="200"/>
                      <Accordion.Header as={Card.Header} eventKey="0">
                          <Card.Title>Nephila </Card.Title>
                      </Accordion.Header>
                          <Accordion.Body>
                                <p className="text-center">Es un género de arañas araneomorfas perteneciente a la familia Araneidae desde 2017 (Dimitrov et al., 2017), 
                                fecha en la que fue transferida desde la familia Nephilidae, y conocidas como arañas de seda de oro debido al
                                 color de la seda que producen. Los hilos de rosca de su telaraña brillan como el oro a la luz del sol. 
                                 El macho es cerca de 1/5 del tamaño de la araña hembra. Las arañas de seda de oro exhiben comportamiento 
                                 muy interesante. Con frecuencia, la hembra reconstruye la mitad de su tela cada mañana. Teje los elementos 
                                 radiales, después se tejen los elementos circulares. Cuando ha terminado de tejer, vuelve y completa los boquetes. Además, las arañas jóvenes muestran un movimiento vibratorio cuando son acechadas por un depredador.
                                 Este género de araña no es venenosa pero los síntomas habituales de la mordedura son: dolor local, enrojecimiento 
                                 y ampolla, estas suelen desaparecen en un intervalo aproximado de 24 horas. Su seda de araña es estudiada por 
                                 su alta resistencia, tanto que en Indonesia se utiliza en la elaboración de prendas de vestir. </p>
                          </Accordion.Body>
                  </Card>
              </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
                  <Card className="text-center">
                      <Card.Img variant="top" src={ vagabundaimg } width="250" height="200"/>
                      <Accordion.Header as={Card.Header} eventKey="0">
                          <Card.Title>Araña vagabunda </Card.Title>
                      </Accordion.Header>
                          <Accordion.Body>
                                <p className="text-center">La hembra mide entre 11-15 mm; el macho 8-11 mm. No hay dimorfismo sexual en el color. Su coloración es bastante 
                                tenue, siendo una mezcla de marrón y tonos de tierra tostada. Aunque la mayoría de las agelénidas tienen mucho 
                                pelo en sus patas, estas arañas posee patas casi lisas. Cabe aclarar que es bastante difícil identificar a 
                                estas arañas, tarea que puede llegar a requerir de un microscopio. </p>
                          </Accordion.Body>
                  </Card>
              </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
                  <Card className="text-center">
                      <Card.Img variant="top" src={ cangrejogiganteimg } width="250" height="200"/>
                      <Accordion.Header as={Card.Header} eventKey="0">
                          <Card.Title>Cangrejo gigante </Card.Title>
                      </Accordion.Header>
                          <Accordion.Body>
                                <p className="text-center">Son de color parduzco y unas cazadoras nocturnas excelentes. Se mueven a ambos lados con gran agilidad. 
                                En ocasiones atacan a lagartijas. El caparazón del prosoma y el opistosoma son aplanados y las patas llegan 
                                a medir hasta 15 cm. Tienen 8 ojos del mismo tamaño, 4 de los cuales están orientados hacia adelante desde el 
                                borde del caparazón. </p>
                          </Accordion.Body>
                  </Card>
              </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
                  <Card className="text-center">
                      <Card.Img variant="top" src={ tarantulamexicanaimg } width="250" height="200"/>
                      <Accordion.Header as={Card.Header} eventKey="0">
                          <Card.Title>Tarántula mexicana </Card.Title>
                      </Accordion.Header>
                          <Accordion.Body>
                                <p className="text-center">Es una especie terrestre emparentada con la famosa tarántula mexicana de rodillas rojas (Brachypelma smithi), 
                                siendo también una tarántula muy popular en cautiverio. En los años 90 se utilizaba como un método de tortura, 
                                hacían que la tarántula mexicana de piernas rojas los mordieran en sus genitales, es considerada la especie más 
                                emblemática de todas las tarántulas debido a su belleza y docilidad. Es por esto que esta especie presenta una 
                                gran demanda como mascota, lo que provocó su explotación a nivel local y mundial, extrayéndola sin control de 
                                su medio natural. </p>
                          </Accordion.Body>
                  </Card>
              </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
                  <Card className="text-center">
                      <Card.Img variant="top" src={ tarantularodillas } width="250" height="200"/>
                      <Accordion.Header as={Card.Header} eventKey="0">
                          <Card.Title>Tarántula de rodillas blancas </Card.Title>
                      </Accordion.Header>
                          <Accordion.Body>
                                <p className="text-center">Es una araña migalomorfa de unos 8 cm y que puede alcanzar 20 cm de legspan (largo comprendido entre la primera pata 
                                de un lado hasta la cuarta pata del lado opuesto). Al contrario de muchas otras tarántulas terrestres, esta se ve 
                                colorida debido a sus pelos blancos brillantes alrededor de las articulaciones de sus piernas. Su cuerpo es de 
                                color negro con cerdas largas de color rojo en el opistosoma. </p>
                          </Accordion.Body>
                  </Card>
              </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0" flush>
                  <Card className="text-center">
                      <Card.Img variant="top" src={ arañajardinimg } width="250" height="200"/>
                      <Accordion.Header as={Card.Header} eventKey="0">
                          <Card.Title>Araña de jardín </Card.Title>
                      </Accordion.Header>
                          <Accordion.Body>
                                <p className="text-center">Es una especie de araña araneomorfa perteneciente a la familia de los araneidos. Comúnmente conocida como araña 
                                negra y amarilla del jardín o araña escritora (porque su estabilimento es parecido a la escritura), aparece con 
                                frecuencia en 48 estados de Estados Unidos, Hawái, el sur de Canadá, México, y América Central. Tienen marcas 
                                distintivas de color amarillo y negro en el abdomen y el cefalotórax en su mayoría blanco. Los machos miden 
                                de 5 a 9 mm y las hembras de 19 a 28 mm. Al igual que otros miembros de Argiope se considera inocuos para 
                                los seres humanos. </p>
                          </Accordion.Body>
                  </Card>
              </Accordion>
        </Col>
        
    
    </Row>
  )
}
