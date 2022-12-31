import React from 'react'
import * as tf from '@tensorflow/tfjs';
import aver from '../images/tarantulamexicana.jpg';
import { fetch, bundleResourceIO } from '@tensorflow/tfjs';
import { useState } from 'react';
import { ChangeEvent } from 'react';

export const Escanear = () => {
  const [fileP, setFileP] =  useState(null);
  var imgGlobal = null;


  const handleFileChange = (e) => {
    imgGlobal = document.getElementById('imagen');
    imgGlobal.src = URL.createObjectURL(e.target.files[0]);
    setFileP(imgGlobal)

  };
  
  function preprocessImg() {
    let tensor = tf.browser.fromPixels(fileP).resizeNearestNeighbor([224, 224]).toFloat();
    let offset = tf.scalar(127.5);
    return tensor.sub(offset).div(offset).expandDims();
  }



  async function loadModel(){
      console.log("Aplicación inicia")
      const tfReady = await tf.ready();
      const model = await tf.loadGraphModel("/model.json");
      console.log("Modelo cargado")
      if (model != null && fileP != null) {
      let tensor = preprocessImg();
      var prediccion = model.predict(tensor).dataSync();
      var mayorIndice = prediccion.indexOf(Math.max.apply(null, prediccion));
      console.log(mayorIndice);
      //const prediction = model.predict(image).dataSync();
      console.log("Resultado dado")
      }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} multiple />
      <img src="" alt="" id="imagen"></img>
      <button onClick={loadModel}>Analizar</button>
      <div id="resultado"></div>
    </div>
  );
}