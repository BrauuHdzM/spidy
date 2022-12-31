import React , {useState}from 'react'
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
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const InformacionArana = () => {
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

//se que esto es horrible y espantoso, no se bien react y no supe hacer una funcion pa esto xd , una disculpa <3 

    const [show1,setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);


    const [show2,setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const [show3,setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);



    const [show4,setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);


    const [show5,setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    
    const [show6,setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    
    const [show7,setShow7] = useState(false);
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
            <Card.Img variant="top" src={imagenprueba} />
            <Card.ImgOverlay>
              <Card.Footer><br></br><br></br><center><h2>Tarántula</h2>
        
        <button onClick={handleShow} class="btn bg-transparent">
            
        <a class="btnmore primary">
        <span>Más información</span>
        </a>
            
           </button></center></Card.Footer>
      
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tarántula</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className="text-center">Con grandes colmillos, ocho patas peludas y una apariencia general que es aterradora y linda, 
                                las tarántulas son una de las especies de arañas más reconocibles, y con razón. 
                                Son las arañas más grandes del mundo, con las especies más grandes de California alcanzando extensiones 
                                de patas adultas de 4.5 pulgadas. Se pueden encontrar varias especies de tarántulas en todo el mundo 
                                en una amplia gama de hábitats, desde selvas tropicales hasta praderas y desde bosques templados 
                                hasta desiertos.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      
        </Modal.Footer>
      </Modal>
      </Card.ImgOverlay>

    </Card>
 
        </Col>
        <Col>
       
       <Card className="bg-dark text-white">
         <Card.Img variant="top" src={imagenprueba} />
         <Card.ImgOverlay>
           <Card.Footer><br></br><br></br><center><h2>Eremobates</h2>
     
     <button onClick={handleShow1} class="btn bg-transparent">
         
     <a class="btnmore primary">
     <span>Más información</span>
     </a>
         
         </button></center></Card.Footer>
   
     <Modal show={show1} onHide={handleClose1} centered>
     <Modal.Header closeButton>
       <Modal.Title>Eremobates</Modal.Title>
     </Modal.Header>
     <Modal.Body>
         <p className="text-center">Con grandes aaacolmillos, ocho patas peludas y una apariencia general que es aterradora y linda, 
                             las tarántulas son una de las especies de arañas más reconocibles, y con razón. 
                             Son las arañas más grandes del ssmundo, con las especies más grandes de California alcanzando extensiones 
                             de patas adultas de 4.5 pulgadas. Se pueden encontrar varias especies de tarántulas en todo el mundo 
                             en una amplia gama de hábitats, desde selvas tropicales hasta praderas y desde bosques templados 
                             hasta desiertos.</p>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose1}>
         Close
       </Button>
     </Modal.Footer>
   </Modal>
   </Card.ImgOverlay>

 </Card>

     </Col>   


       
     <Col>
       
       <Card className="bg-dark text-white">
         <Card.Img variant="top" src={imagenprueba} />
         <Card.ImgOverlay>
           <Card.Footer><br></br><br></br><center><h2>Viuda Negra</h2>
     
     <button onClick={handleShow2} class="btn bg-transparent">
         
     <a class="btnmore primary">
     <span>Más información</span>
     </a>
         
         </button></center></Card.Footer>
   
     <Modal show={show2} onHide={handleClose2} centered>
     <Modal.Header closeButton>
       <Modal.Title>Viuda Negra</Modal.Title>
     </Modal.Header>
     <Modal.Body>
         <p className="text-center">Con grandes aaacolmillos, ocho patas peludas y una apariencia general que es aterradora y linda, 
                             las tarántulas son una de las especies de arañas más reconocibles, y con razón. 
                             Son las arañas más grandes del ssmundo, con las especies más grandes de California alcanzando extensiones 
                             de patas adultas de 4.5 pulgadas. Se pueden encontrar varias especies de tarántulas en todo el mundo 
                             en una amplia gama de hábitats, desde selvas tropicales hasta praderas y desde bosques templados 
                             hasta desiertos.</p>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose2}>
         Close
       </Button>
     </Modal.Footer>
   </Modal>
   </Card.ImgOverlay>

 </Card>

     </Col>   


       

     <Col>
       
       <Card className="bg-dark text-white">
         <Card.Img variant="top" src={imagenprueba} />
         <Card.ImgOverlay>
           <Card.Footer><br></br><br></br><center><h2>Violinista</h2>
     
     <button onClick={handleShow3} class="btn bg-transparent">
         
     <a class="btnmore primary">
     <span>Más información</span>
     </a>
         
         </button></center></Card.Footer>
   
     <Modal show={show3} onHide={handleClose3} centered>
     <Modal.Header closeButton>
       <Modal.Title>Violinista</Modal.Title>
     </Modal.Header>
     <Modal.Body>
         <p className="text-center">Con grandes aaacolmillos, ocho patas peludas y una apariencia general que es aterradora y linda, 
                             las tarántulas son una de las especies de arañas más reconocibles, y con razón. 
                             Son las arañas más grandes del ssmundo, con las especies más grandes de California alcanzando extensiones 
                             de patas adultas de 4.5 pulgadas. Se pueden encontrar varias especies de tarántulas en todo el mundo 
                             en una amplia gama de hábitats, desde selvas tropicales hasta praderas y desde bosques templados 
                             hasta desiertos.</p>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose3}>
         Close
       </Button>
     </Modal.Footer>
   </Modal>
   </Card.ImgOverlay>

 </Card>

     </Col>   

       
   
     <Col>   
       <Card className="bg-dark text-white">
         <Card.Img variant="top" src={imagenprueba} />
         <Card.ImgOverlay>
           <Card.Footer><br></br><br></br><center><h2>Patas largas</h2>
     
     <button onClick={handleShow4} class="btn bg-transparent">
         
     <a class="btnmore primary">
     <span>Más información</span>
     </a>
         
         </button></center></Card.Footer>
   
     <Modal show={show4} onHide={handleClose4} centered>
     <Modal.Header closeButton>
       <Modal.Title>Patas largas</Modal.Title>
     </Modal.Header>
     <Modal.Body>
         <p className="text-center">Con grandes aaacolmillos, ocho patas peludas y una apariencia general que es aterradora y linda, 
                             las tarántulas son una de las especies de arañas más reconocibles, y con razón. 
                             Son las arañas más grandes del ssmundo, con las especies más grandes de California alcanzando extensiones 
                             de patas adultas de 4.5 pulgadas. Se pueden encontrar varias especies de tarántulas en todo el mundo 
                             en una amplia gama de hábitats, desde selvas tropicales hasta praderas y desde bosques templados 
                             hasta desiertos.</p>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose4}>
         Close
       </Button>
     </Modal.Footer>
   </Modal>
   </Card.ImgOverlay>

 </Card>

     </Col>   



     <Col>
       
       <Card className="bg-dark text-white">
         <Card.Img variant="top" src={imagenprueba} />
         <Card.ImgOverlay>
           <Card.Footer><br></br><br></br><center><h2>Lince Verde</h2>
     
     <button onClick={handleShow5} class="btn bg-transparent">
         
     <a class="btnmore primary">
     <span>Más información</span>
     </a>
         
         </button></center></Card.Footer>
   
     <Modal show={show5} onHide={handleClose5} centered>
     <Modal.Header closeButton>
       <Modal.Title>Lince Verde</Modal.Title>
     </Modal.Header>
     <Modal.Body>
         <p className="text-center">Con grandes aaacolmillos, ocho patas peludas y una apariencia general que es aterradora y linda, 
                             las tarántulas son una de las especies de arañas más reconocibles, y con razón. 
                             Son las arañas más grandes del ssmundo, con las especies más grandes de California alcanzando extensiones 
                             de patas adultas de 4.5 pulgadas. Se pueden encontrar varias especies de tarántulas en todo el mundo 
                             en una amplia gama de hábitats, desde selvas tropicales hasta praderas y desde bosques templados 
                             hasta desiertos.</p>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose5}>
         Close
       </Button>
     </Modal.Footer>
   </Modal>
   </Card.ImgOverlay>

 </Card>

     </Col>   

     <Col>
       
       <Card className="bg-dark text-white">
         <Card.Img variant="top" src={imagenprueba} />
         <Card.ImgOverlay>
           <Card.Footer><br></br><br></br><center><h2>Cebra</h2>
     
     <button onClick={handleShow6} class="btn bg-transparent">
         
     <a class="btnmore primary">
     <span>Más información</span>
     </a>
         
         </button></center></Card.Footer>
   
     <Modal show={show6} onHide={handleClose6} centered>
     <Modal.Header closeButton>
       <Modal.Title>Cebra</Modal.Title>
     </Modal.Header>
     <Modal.Body>
         <p className="text-center">Con grandes aaacolmillos, ocho patas peludas y una apariencia general que es aterradora y linda, 
                             las tarántulas son una de las especies de arañas más reconocibles, y con razón. 
                             Son las arañas más grandes del ssmundo, con las especies más grandes de California alcanzando extensiones 
                             de patas adultas de 4.5 pulgadas. Se pueden encontrar varias especies de tarántulas en todo el mundo 
                             en una amplia gama de hábitats, desde selvas tropicales hasta praderas y desde bosques templados 
                             hasta desiertos.</p>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose6}>
         Close
       </Button>
     </Modal.Footer>
   </Modal>
   </Card.ImgOverlay>

 </Card>

     </Col>   

     <Col>
       
       <Card className="bg-dark text-white">
         <Card.Img variant="top" src={imagenprueba} />
         <Card.ImgOverlay>
           <Card.Footer><br></br><center><h2>Amaurobius Similis</h2>
     
     <button onClick={handleShow7} class="btn bg-transparent">
         
     <a class="btnmore primary">
     <span>Más información</span>
     </a>
         
         </button></center></Card.Footer>
   
     <Modal show={show7} onHide={handleClose7} centered>
     <Modal.Header closeButton>
       <Modal.Title>Amaurobius Similis</Modal.Title>
     </Modal.Header>
     <Modal.Body>
         <p className="text-center">Con grandes aaacolmillos, ocho patas peludas y una apariencia general que es aterradora y linda, 
                             las tarántulas son una de las especies de arañas más reconocibles, y con razón. 
                             Son las arañas más grandes del ssmundo, con las especies más grandes de California alcanzando extensiones 
                             de patas adultas de 4.5 pulgadas. Se pueden encontrar varias especies de tarántulas en todo el mundo 
                             en una amplia gama de hábitats, desde selvas tropicales hasta praderas y desde bosques templados 
                             hasta desiertos.</p>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose7}>
         Close
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
