
import React,{useState } from 'react';
import BarChart from "./BarChart";
import { UserData } from "./Data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const AdminPanel = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.especie),
    datasets: [
      {
        label: "Cantidad de registro",
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
        <div  id='admindiv'>
         <font color="white"> <h1>Registros totales en el sistema</h1></font>
        <BarChart chartData={userData} />
      </div>
      </Col>
     
      </Row>
      <Row>
      <font color="white">
      <div> <h1>Estadísticas de satisfacción</h1></div>
      <Col>
      <h2>Satisfacción general del sistema</h2>
      
      
      </Col>

      <Col>
      <h2>Satisfacción por araña</h2>
      
      
      </Col>
      </font>
      </Row>
      <Row>
<Col>
<h2>Descargas</h2>
      
</Col>
<Col>
<h2>Generación de reportes</h2>
      
</Col>
      </Row>

    </Container>
      </>
    
  )
}
