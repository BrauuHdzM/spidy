
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
import axios from 'axios';
import { FaFileDownload } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


export const AdminPanel = (props) => {

  const barra = useRef(null);
  const pastel = useRef(null);
  const [spdmost, setspdmost] = useState('');
  const [prc, setprc] = useState('');
  const [reg, setreg] = useState('');
  const [negative, setnegative] = useState('');
  const [img, setimg] = useState({ pataslargas });
  const [img2, setimg2] = useState({ pataslargas });
  const [result, setResult] = useState([]);
  const [satisG, setsatisG] = useState([]);
  const [satisA, setsatisA] = useState([]);
  useEffect(() => {
    axios.post("/admin/adminData")
      .then((response) => {
        setResult(JSON.parse(JSON.stringify(response.data)));

      })
    axios.post("/admin/satisfaccionG")
      .then((response) => {
        setsatisG(JSON.parse(JSON.stringify(response.data)));
      })
    axios.post("/admin/totalEncuestas")
      .then((response) => {
        let auxreg = (JSON.parse(JSON.stringify(response.data)).map((row) => row.encuestas));
        setreg(auxreg);
      })
<<<<<<< HEAD

      
=======
      axios.post("/admin/satisfaccionA")
      .then((response) => {
        setsatisA(JSON.parse(JSON.stringify(response.data)));
      })
>>>>>>> 588ec28e37da3bfe60d70e04dbe7d4d8dfaf9a28

  }, [])

  useEffect(() => {
    console.log(props.IsAdmin);
  }, [props.IsAdmin])


  const handleClick = () => {
    console.log("zapata");
    console.log(spdmost);
    /*guardando el estado de las graficas para imprimirlas como imagenes*/
    const chart = barra.current;
    /*convirtiendo la grafica a imagen png*/
    setimg(chart.toBase64Image('image/png', 1));
    const chart2 = pastel.current;
    setimg2(chart2.toBase64Image('image/png', 1));
    setShow(true);
  }


  const [show, setShow] = useState(false);


  const getData = () => {
    /*no le se mucho a js pero si este mapeo se lo asignaba directamente a negative y
    prc explotaba la grafica asi que lo deje asi, intente inicializarlos de muchas formas
    como const pero pues así jalaron , una disculpa si se ve feo ): */
    let auxN = satisG.map((row) => row.Negativa);
    let auxP = satisG.map((row) => row.Positiva);

    setnegative(auxN);
    setprc(auxP);
    console.log(reg);
    /*Hayando a la araña con más registros en el sistema*/
    console.log("Papapapapa")
    let res = Math.max.apply(Math, result.map(function (o) { return o.CantidadEncuestas; }))
    let obj = result.find(function (o) { return o.CantidadEncuestas == res; })
    console.log(obj.species);
    setspdmost(obj.species + " con " + obj.CantidadEncuestas + " registros");
    /*Asignando los valores de la consulta de los registros por araña a la grafica de barras*/
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
    setuserDataPastel2({
      labels: satisA.map((row) => row.species),
      datasets: [
        {
          label: "Cantidad de registros",
          data: satisA.map((row) => row.PromedioEncuestas),
          backgroundColor: ["#cd0c36", "#000000", "#ee4242", "#fd7b7b", "#565656", "#989898", "#ffffff", "#670f22",],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    });

    setuserDataPastel({

      labels: [
        'Opiniones Positivas',
        'Opiniones Negativas'
      ],
      datasets: [{
        label: 'Porcentaje de encuestados',
        data: [auxP, auxN],
        backgroundColor: [
          '#cd0c36',
          "#000000",
        ],
        borderColor: "black",
        borderWidth: 1,
      }]
    });
  }


  const handleClose = () => {
    setShow(false)
  };

  const [userDataPastel, setuserDataPastel] = useState({
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
  const [userDataPastel2, setuserDataPastel2] = useState({
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
                  <button onClick={getData} class="btnmore primary" ><font color="black"><p>Presione para inciar graficación</p></font></button>
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
                      <Pie data={userDataPastel} ref={pastel} /></p>
                    <p>El sistema cuenta con un {prc}% de aprobación de los usuarios</p>
                  </div>

                </div>

              </Col>

              <Col>
                <div className='admindiv'>
                  <h1 class="text-center" >Satisfacción por araña</h1>
                  <div className='piechartdiv'>
                    <p class="text-center"> <Pie data={userDataPastel2} /></p>
                    <p>Donde 3 equivale a la puntuación máxima y 1 a la puntuación mínima</p>
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
                  <p className='text-center'>
                    <button onClick={handleClick} class="btnmore primary" ><font color="black"><p>Ver reporte general de la aplicación </p></font></button>
                    </p>
                  </div>
                  
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
