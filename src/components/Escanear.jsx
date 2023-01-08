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
        <Form.Label>Seleccione una imagen</Form.Label>
        <Form.Control type="file" size="lg" onChange={handleFileChange} />
      </Form.Group>
      <Image id="imagen" fluid />
      <br />
      <button onClick={props.predict} className="btn bg-transparent">
        <a className="btnmore primary">
          <span>Analizar</span>
        </a>
      </button>

    </>
  );
}