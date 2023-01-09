
import React, { useRef, useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { UserData } from "./Data";
import { ReporteG } from "./ReporteGeneral";
import Container from 'react-bootstrap/Container';
import pataslargas from '../images/pataslargas.jpg';
import { PDFDownloadLink, PDFViewer, Document, Page } from '@react-pdf/renderer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PieChart from "./PieChart";
import axios from 'axios';
import { FaFileDownload } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Pie } from "react-chartjs-2";

export const AdminPanel = (props) => {

  const barra = useRef(null);
  const pastel = useRef(null);
  const [spdmost, setspdmost] = useState('Eremobates');
  const [prc, setprc] = useState('88');
  const [img, setimg] = useState({ pataslargas });
  const [img2, setimg2] = useState({ pataslargas });
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.post("/admin/adminData")
      .then((response) => {
        setResult(JSON.parse(JSON.stringify(response.data)));

      })


  }, [])

  useEffect(() => {
    console.log(props.IsAdmin);
  }, [props.IsAdmin])


  const handleClick = () => {
    console.log("zapata");
    console.log(spdmost);
    const chart = barra.current;
    setimg(chart.toBase64Image('image/png', 1));
    const chart2 = pastel.current;
    setimg2(chart2.toBase64Image('image/png', 1));


    console.log(img)
    console.log(img2)

    setShow(true);
  }


  const [show, setShow] = useState(false);


  const getData = () => {
    setUserData({
      labels: result.map((row) => row.species),
      datasets: [
        {
          label: "Cantidad de registros",
          data: result.map((row) => row.CantidadEncuestas),
          backgroundColor: ["#cd0c36", "#000000", "#ee4242", "#fd7b7b", "#565656", "#989898", "#ffffff", "#670f22",],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    });

    /*
  
      axios.post("/predictions/adminData").then((response)=>{
        const diosayuda=JSON.stringify(response.data); 
        console.log(diosayuda);
       
  
  
  
        });
        */
  }


  const handleClose = () => {
    setShow(false)
  };
  const [userData, setUserData] = useState({
    labels: UserData.map((row) => row.species),
    datasets: [
      {
        label: "Cantidad de registros",
        data: UserData.map((row) => row.CantidadEncuestas),
        backgroundColor: ["#cd0c36", "#000000", "#ee4242", "#fd7b7b", "#565656", "#989898", "#ffffff", "#670f22",],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });


  return (<>{props.IsAdmin}
    {
      (!props.IsAdmin) ?
        <h1 className='noLogged'>Requiere iniciar sesión para acceder a esta página.{props.IsAdmin}</h1>
        :
        <>

          <Container>
            <Row>
              <Col>

                <div className='admindiv'>

                  <h1 class="text-center">Registros totales en el sistema</h1>
                  <Button onClick={getData}>Presione para inciar graficación</Button>
                  <Bar data={userData} ref={barra} />;

                </div>
              </Col>

            </Row>
            <br></br><br></br>
            <Row>


              <Col>
                <div className='admindiv'>
                  <h1 class="text-center">Satisfacción general del sistema</h1>
                  <div className='piechartdiv' >
                    <p class="text-center">
                      <Pie data={userData} ref={pastel} /></p>
                  </div>
                </div>
              </Col>

              <Col>
                <div className='admindiv'>
                  <h1 class="text-center" >Satisfacción por araña</h1>
                  <div className='piechartdiv'>
                    <p class="text-center"> <PieChart chartData={userData} /></p>
                  </div>
                </div>
              </Col>

            </Row>
            <br></br><br></br>
            <Row>

              <Col>
                <div className='admindiv'>
                  <h1 class="text-center">Descargas</h1>

                  <Button className="btn btn-dark text-center" href='/admin/descargarImagenes'>
                    <p class="text-center"><i><FaFileDownload size="2em" /><a>Haga click aquí para descargar el dataset completo</a></i></p>
                  </Button>



                </div>
              </Col>
              <Col>
                <div className='admindiv'>
                  <h1 class="text-center">Generación de reportes</h1>

                  <div>

                    <Modal show={show} onHide={handleClose}
                      aria-labelledby="contained-modal-title-vcenter" size="lg"
                      centered >
                      <Modal.Header closeButton>

                        <Modal.Title>  <h1 class='text-center'> Reporte general de la aplicación</h1> </Modal.Title>

                      </Modal.Header>

                      <Modal.Body>
                        <PDFDownloadLink document={<ReporteG imgbarras={img} spidermost={spdmost} imgpastel={img2} porcentaje={prc} />} fileName="ReporteGeneral.pdf">
                          <p className='text-center'>Descargar reporte general</p>
                        </PDFDownloadLink>
                        <p className='text-center'>
                          <PDFViewer height="500em" width="600em">
                            <ReporteG imgbarras={img} spidermost={spdmost} imgpastel={img2} porcentaje={prc} />
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
    }


  </>
  )
}
