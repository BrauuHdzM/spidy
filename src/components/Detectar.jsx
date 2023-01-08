import * as tf from '@tensorflow/tfjs';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Escanear } from './Escanear';
import { CameraCapture } from './CameraCapture';


export const Detectar = () => {
    const [option, setOption] = useState(false);//false => render module  Escanear | true => render module CameraCapture
    const [model, setModel] = useState(null);
    const [image, setImage] = useState(null);
    const [fileP, setFileP] = useState(null);

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
            savePrediction(mayorIndice);
        }
    }


    const savePrediction = (mayorIndice) => {

        const formData = new FormData();
        formData.append('image', image);
        formData.append('prediction', mayorIndice);

        axios.post('/predictions/savePrediction', formData).then((response) => {
            console.log('La imagen se ha guardado con exito. Informacion: ' + response.data.ID);
        });
    };

    return (
        <div>
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