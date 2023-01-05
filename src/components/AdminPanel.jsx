
import React,{useState } from 'react';
import BarChart from "./BarChart";
import { UserData } from "./Data";
import {ReporteG } from "./ReporteGeneral";
import Container from 'react-bootstrap/Container';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PieChart from "./PieChart";
import { FaFileDownload } from "react-icons/fa";
import { Button } from 'react-bootstrap';
export const AdminPanel = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.especie),
    datasets: [
      {
        label: "Cantidad de registros",
        data: UserData.map((data) => data.cr),
        backgroundColor: [
         
          "#cd0c36",
          "#000000",
          "#ee4242",
          "#fd7b7b",
          "#565656",
          "#989898",
          "#ffffff",
          "#670f22",
        ],
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
        <BarChart chartData={userData} />
      
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
    <PDFDownloadLink document={<ReporteG />} fileName="ReporteGeneral.pdf">
    <p><a>Descargar reporte general </a></p>
    </PDFDownloadLink>
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
