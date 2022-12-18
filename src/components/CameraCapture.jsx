import React, { useRef, useState, useEffect} from 'react';


export const CameraCapture = ()=>{
    const [stream, setStream] = useState(null);
    const [photo, setPhoto] = useState(null);
  
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        setStream(stream);
        document.querySelector('video').srcObject = stream;
      });
    }, []);
  
    function takePhoto() {
      const canvas = document.querySelector('canvas');
      const context = canvas.getContext('2d');
      const video = document.querySelector('video');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      setPhoto(canvas.toDataURL('image/jpeg'));
    }
  
    return (
      <div>
        <video autoPlay/>
        <canvas width={320} height={240} />
        <button onClick={takePhoto}>Take photo</button>
        {photo && <img src={photo} alt="photo" />}
      </div>
    );
  }

//export default CameraCapture;