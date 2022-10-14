import React from 'react'
import * as tf from '@tensorflow/tfjs';
import aver from '../images/tarantulamexicana.jpg';
import { fetch, bundleResourceIO } from '@tensorflow/tfjs';
import { useState } from 'react';

  var modelo = null;
  var imgGlobal = null;

  function preprocessImg(img) {
    let tensor = tf.browser.fromPixels(img).resizeNearestNeighbor([224, 224]).toFloat();
    let offset = tf.scalar(127.5);
    return tensor.sub(offset).div(offset).expandDims();
  }

  //Crea objeto imagen al cargar imagen
  function loadFile() {
    let imgGlobal = new Image();
    imgGlobal.src= aver;
    //imgGlobal.src=document.getElementById('img');
    //imgGlobal.src = URL.createObjectURL(event.target.files[0]);
  };

  async function loadModel(){
      let image = new Image(224,224);
      image.src = document.getElementById('img');
      console.log("Aplicación inicia")
      const tfReady = await tf.ready();
      const model = await tf.loadGraphModel("/model.json");
      console.log("Modelo cargado")
      if (model != null && image != null) {
      let tensor = preprocessImg(image);
      var prediccion = model.predict(tensor).dataSync();
      var mayorIndice = prediccion.indexOf(Math.max.apply(null, prediccion));
      console.log(mayorIndice);
      //const prediction = model.predict(image).dataSync();
      console.log("Resultado dado")
      }
  }

  


  export const Escanear = () => {
  return (
    <>
    <div>
      <h1>Escaner proximamente</h1>
    </div>
    
    <div>
      Imagen a escanear: 
      <input type="file" id="img" onChange={ loadFile() } />
          <br></br>
      <input type="submit" onClick={loadModel} />
        
    </div>
      </>
  )
  }
