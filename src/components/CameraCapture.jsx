import React, { useRef, useState, useEffect } from 'react';

export const CameraCapture = (props) => {
  const [stream, setStream] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, }).then(stream => {
      setStream(stream);
      document.querySelector('video').srcObject = stream;
    });
  }, []);

  useEffect(() => {
    const image = new Image(224, 224);
    image.src = photo;
    var imgGlobal = document.getElementById('imagen');
    imgGlobal.src = photo;
    props.setFileP(image);
  }, [photo]);

  function takePhoto() {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    const video = document.querySelector('video');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    setPhoto(canvas.toDataURL('image/jpeg'));
    canvas.toBlob(function (blob) {
      props.setImage(blob)
    });

  };

  return (
    <div>
      <video autoPlay />
      <canvas width={224} height={224} />
      <button onClick={takePhoto}>Take photo</button>
      <button onClick={props.predict}>Detectar</button>
      <img src="" alt="" id="imagen"></img>

    </div>
  );
}
