import React from 'react'
import * as tf from '@tensorflow/tfjs';
import aver from '../images/tarantulamexicana.jpg';
import { fetch, bundleResourceIO } from '@tensorflow/tfjs';
import { useState, useEffect } from 'react';
import { ChangeEvent } from 'react';
import axios from 'axios';

export const Escanear = () => {
  const [fileP, setFileP] = useState(null);
  const [image, setImage] = useState(null);
  const [IAmodelo, setIAmodelo] = useState(null);
  var imgGlobal = null;

  useEffect(() => {
      const loadModelAsync = async ()=>{
        const tfReady = await tf.ready();
        const model = await tf.loadGraphModel("./model.json");
        console.log("Modelo cargado")
        setIAmodelo(model);
      }
      loadModelAsync()
    
  }, []);


  const handleFileChange = (e) => {
    imgGlobal = document.getElementById('imagen');
    imgGlobal.src = URL.createObjectURL(e.target.files[0]);
    setFileP(imgGlobal)
    setImage(e.target.files[0])

  };

  function preprocessImg() {
    let tensor = tf.browser.fromPixels(fileP).resizeNearestNeighbor([224, 224]).toFloat();
    let offset = tf.scalar(127.5);
    return tensor.sub(offset).div(offset).expandDims();
  }



  async function loadModel() {
    console.log("Aplicación inicia")
    //const tfReady = await tf.ready();
    //const model = await tf.loadGraphModel("./model.json");
    
    if (IAmodelo != null && fileP != null) {
      let tensor = preprocessImg();
      var prediccion = IAmodelo.predict(tensor).dataSync();
      var mayorIndice = prediccion.indexOf(Math.max.apply(null, prediccion));
      console.log(mayorIndice);
      savePrediction(mayorIndice);
    }
  }

  const savePrediction = (mayorIndice) => {

    const formData = new FormData();
    formData.append('image', image);
    formData.append('prediction', mayorIndice);

    axios.post('/predictions/savePrediction', formData).then(() => {
      console.log('La imagen se ha guardado con exito');
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <img src="" alt="" id="imagen"></img>
      <button onClick={loadModel}>Analizar</button>
      <div id="resultado"></div>
    </div>
  );
}