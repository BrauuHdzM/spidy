import { Link } from 'react-router-dom';
import React from 'react';

// ...
export const Detectar = ()=>{
    return (
        <div>
            <Link to="/Escanear"><button>Subir imagen</button></Link>
            <Link to="/CameraCapture"><button>Tomar Foto</button></Link>
        </div>
      );
    

}