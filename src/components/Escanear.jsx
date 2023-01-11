import React from 'react'
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'

export const Escanear = (props) => {
  var imgGlobal = null;

  const handleFileChange = (e) => {
    imgGlobal = document.getElementById('imagen');
    imgGlobal.src = URL.createObjectURL(e.target.files[0]);
    props.setFileP(imgGlobal)
    props.setImage(e.target.files[0])

  };


  return (
    <>
      <Form.Group controlId="formFile" className="mb-3">
      <p className='text-center'>
        <h1 className='text-center'><font color="white">Subir una imagen</font></h1>
      <Image id="imagen" width="300" height="300" fluid /></p>

        <Form.Label><p><font color="white">De preferencia busca que tu imagen sea lo más clara posible</font></p></Form.Label>
        <Form.Control type="file" size="lg" onChange={handleFileChange} />
      </Form.Group>
      
      <br />
    
      <button onClick={props.predict} id="escaner">
      <font color="white">   Analizar</font>
      </button>
    </>
  );
}