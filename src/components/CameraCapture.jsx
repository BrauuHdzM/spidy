import React, { useRef, useState, useEffect} from 'react';
import * as tf from '@tensorflow/tfjs';
import axios from 'axios';

export const CameraCapture = ()=>{
    const [stream, setStream] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [fileP, setFileP] =  useState(null);
    const [result, setResult] = useState(null);
    const [image, setImage] = useState(null);
    const [IAmodelo, setIAmodelo] = useState(null);

    useEffect(() => {
        const loadModelAsync = async ()=>{
          const tfReady = await tf.ready();
          const model = await tf.loadGraphModel("./model.json");
          console.log("Modelo cargado")
          setIAmodelo(model);
        }
        loadModelAsync()
      
    }, []);
  
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' },  }).then(stream => {
        setStream(stream);
        document.querySelector('video').srcObject = stream;
      });
    }, []);

    useEffect(() => {
      console.log(photo)
      const image = new Image(224,224);
      image.src = photo;
      var imgGlobal = document.getElementById('imagen');
      imgGlobal.src = photo;
      setFileP(image);
    ;
    }, [photo]);
  
    function takePhoto() {
      const canvas = document.querySelector('canvas');
      const context = canvas.getContext('2d');
      const video = document.querySelector('video');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      setPhoto(canvas.toDataURL('image/jpeg'));
      canvas.toBlob(function(blob) {
        setImage(blob)
      });
      //setImage(canvas.toDataURL())
      
    }

    function preprocessImg() {
      let tensor = tf.browser.fromPixels(fileP).resizeNearestNeighbor([224, 224]).toFloat();
      let offset = tf.scalar(127.5);
      return tensor.sub(offset).div(offset).expandDims();
    }
  
  
  
    async function loadModel(){
      console.log(fileP.src)
        console.log("Aplicación inicia")
        if(IAmodelo == null){
          console.log("Modelo es null")
        }else if(fileP == null){
          console.log("Photo es null")
          alert("Photo es null")
        }else{
          let tensor = preprocessImg();
          var prediccion = IAmodelo.predict(tensor).dataSync();
          console.log(prediccion);
          var mayorIndice = prediccion.indexOf(Math.max.apply(null, prediccion));
          console.log(mayorIndice);
          alert(mayorIndice)
          //const prediction = model.predict(image).dataSync();
          setResult(mayorIndice)
          savePrediction(mayorIndice)
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
        <video autoPlay/>
        <canvas width={224} height={224} />
        <button onClick={takePhoto}>Take photo</button>
        <button onClick={loadModel}>Detectar</button>
        <img src="" alt="" id="imagen"></img>
        
      </div>
    );
  }

//export default CameraCapture;