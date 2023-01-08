import * as tf from '@tensorflow/tfjs';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Escanear } from './Escanear';
import { CameraCapture } from './CameraCapture';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import imagenprueba from '../images/imagenprueba.jpg';
import pataslargas from '../images/pataslargas.jpg';
import eremobatespng from '../images/eremobatesfondob.jpg';
import viudanegrapng from '../images/viudanegrafb.jpg';
import violinistapng from '../images/violinistafb.jpeg';
import cebrapng from '../images/cebrafb.jpg';
import lincepng from '../images/lincefb.jpg';
import amaupng from '../images/amaufb.jpg';


export const Detectar = () => {
    const [option, setOption] = useState(false);//false => render module  Escanear | true => render module CameraCapture
    const [model, setModel] = useState(null);
    const [image, setImage] = useState(null);
    const [fileP, setFileP] = useState(null);
    const [idPrediction, setIdPrediction] = useState(null);
    const [result, setResult] = useState(null);

    const [infoSpider, setInfoSpider] = useState({
        nombre: '',
        impMedica: '',
        descripcion: '',
        img: null
    });


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const loadModelAsync = async () => {
            const tfReady = await tf.ready();
            const model = await tf.loadGraphModel("./model.json");
            console.log("Modelo cargado")
            setModel(model);
        }
        loadModelAsync();
    }, []);


    function preprocessImg() {
        let tensor = tf.browser.fromPixels(fileP).resizeNearestNeighbor([224, 224]).toFloat();
        let offset = tf.scalar(127.5);
        return tensor.sub(offset).div(offset).expandDims();
    }

    async function predict() {
        console.log("Analizando...")
        if (model == null) {
            console.log("Modelo es null")
        } else if (fileP == null) {
            console.log("Photo es null")
        } else {
            let tensor = preprocessImg();
            var prediccion = model.predict(tensor).dataSync();
            var mayorIndice = prediccion.indexOf(Math.max.apply(null, prediccion));
            console.log(mayorIndice);
            setResult(mayorIndice);
            savePrediction(mayorIndice);
            getInfoSpider(mayorIndice)
            handleShow();
            setImageDisplay("violinista");
        }
    }




    const savePrediction = (mayorIndice) => {

        const formData = new FormData();
        formData.append('image', image);
        formData.append('prediction', mayorIndice);

        axios.post('/predictions/savePrediction', formData).then((response) => {
            setIdPrediction(response.data.ID);
            return response.data.ID;
        });

    };

    const getInfoSpider = (prediction) => {
        const imagenes = [amaupng, cebrapng, eremobatespng, lincepng, pataslargas, imagenprueba, violinistapng, viudanegrapng];
        const data = { idSpider: prediction + 1 };
        axios.get('/predictions/infoSpider', { params: data }).then((response) => {
            console.log(response.data.species);
            setInfoSpider({
                nombre: response.data.species,
                impMedica: response.data.medicallySignificant,
                descripcion: response.data.description,
                img: imagenes[prediction]
            })
        });
    };



    return (
        <div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title><h1>{infoSpider.nombre}</h1><p><i>{infoSpider.impMedica ? <font color="red">Importancia médica</font> : <font color="green">Sin importancia médica</font>}</i></p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="mt-2 mb-2 ms-2 me-2 ">
                        <Row ><Col></Col><Col><img src={infoSpider.img} class="img-fluid" ></img></Col><Col></Col></Row>
                        <Row>
                            <Col>
                                <p className="text-center">{infoSpider.descripcion}</p>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" id="escaner" onClick={handleClose}>
                        Regresar
                    </Button>
                </Modal.Footer>
            </Modal>


            <div className="btn-group">
                <button
                    type="button"
                    className={`btn btn-secondary left-btn ${option === false ? 'active' : ''}`}
                    onClick={() => setOption(false)}>
                    Subir imagen
                </button>
                <button
                    type="button"
                    className={`btn btn-secondary right-btn ${option === true ? 'active' : ''}`}
                    onClick={() => setOption(true)}>
                    Tomar Foto
                </button>
            </div>
            <div className="boxImagePhoto">
                {option ? <CameraCapture setFileP={setFileP} setImage={setImage} predict={predict} /> : <Escanear setFileP={setFileP} setImage={setImage} predict={predict} />}
            </div>

        </div>
    );


}