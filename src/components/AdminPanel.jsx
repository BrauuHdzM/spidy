
import React,{useRef,useState } from 'react';
import { Bar } from "react-chartjs-2";
import { UserData } from "./Data";
import {ReporteG } from "./ReporteGeneral";
import Container from 'react-bootstrap/Container';
import pataslargas from '../images/pataslargas.jpg';
import { PDFDownloadLink, PDFViewer,Document, Page } from '@react-pdf/renderer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PieChart from "./PieChart";
import { FaFileDownload } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

export const AdminPanel = () => {

  const barra=useRef(null);

  const [img, setimg] =useState({pataslargas});
  const handleClick = () => {
    console.log("zapata");
  const chart = barra.current;
  setimg (chart.toBase64Image('image/png', 1));
  console.log(img)
  setShow(true);
  } 
  
  const [show, setShow] = useState(false);


  

  const handleClose = () => {
    setShow(false)
  };
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.especie),
    datasets: [
      {
        label: "Cantidad de registros",
        data: UserData.map((data) => data.cr),
        backgroundColor: ["#cd0c36", "#000000","#ee4242","#fd7b7b", "#565656","#989898","#ffffff","#670f22", ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });


  


  return (
    
    <>

<Container>
      <Row>
        <Col>
       
        <div  className='admindiv'>
     
       <h1 class="text-center">Registros totales en el sistema</h1>
       <Bar data={userData} ref={barra} />;
      
      </div>
      </Col>
     
      </Row>
      <br></br><br></br>
      <Row>
      

      <Col>
      <div  className='admindiv'>
      <h1 class="text-center">Satisfacción general del sistema</h1>
      <div className='piechartdiv' >
      <PieChart chartData={userData} />
      </div>
      </div>
      </Col>

      <Col>
      <div  className='admindiv'>
      <h1 class="text-center" >Satisfacción por araña</h1>
      <div className='piechartdiv'>
      <PieChart chartData={userData} />
      </div>
      </div>
      </Col>
      
      </Row>
      <br></br><br></br>
      <Row>
     
<Col>
<div  className='admindiv'>
<h1  class="text-center">Descargas</h1>
<Button className="btn btn-dark text-center">
<p class="text-center"><i><FaFileDownload size="2em" /><a>Haga click aquí para descargar el dataset completo</a></i></p>
</Button>
</div>
</Col>
<Col>
<div  className='admindiv'>
<h1 class="text-center">Generación de reportes</h1>

<div>

<Modal show={show} onHide={handleClose}    
      aria-labelledby="contained-modal-title-vcenter" size="lg"
      centered >
        <Modal.Header closeButton>
    
          <Modal.Title>  <h1> Reporte general de la aplicación</h1> </Modal.Title>
        
        </Modal.Header>
      
        <Modal.Body>
        <PDFDownloadLink document={<ReporteG imgbarras={img}/>} fileName="ReporteGeneral.pdf">
    <p className='text-center'>Descargar reporte general</p>
    </PDFDownloadLink>
    <p className='text-center'>
       <PDFViewer height="500em" width="600em">
      <ReporteG imgbarras={img}/>
          </PDFViewer>
          </p>
          </Modal.Body>
          </Modal>




  <Button onClick={handleClick}> Ver reporte general de la aplicación </Button>
  
    
   
  </div>
<p><a>Descargar reporte personalizado</a></p>
</div>   
</Col>

      </Row>

    </Container>
    <br></br>  <br></br>
      </>
    
  )
}
