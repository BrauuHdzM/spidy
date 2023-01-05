
import React,{useState } from 'react';
import BarChart from "./BarChart";
import { UserData } from "./Data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PieChart from "./PieChart";
import { FaFileDownload } from "react-icons/fa";
export const AdminPanel = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.especie),
    datasets: [
      {
        label: "Cantidad de registros",
        data: UserData.map((data) => data.cr),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#50AF95",
          "#f3ba2f",
          "#ecf0f1",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
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
<h1>Descargas</h1>
<i><FaFileDownload size="4em" /><p><a>Haga click aquí para descargar el dataset completo</a></p></i>

</div>
</Col>
<Col>
<div  className='admindiv'>
<h1 class="text-center">Generación de reportes</h1>
<p><a>Descargar reporte general </a></p>
<p><a>Descargar reporte personalizado</a></p>
</div>   
</Col>

      </Row>

    </Container>
    <br></br>  <br></br>
      </>
    
  )
}
