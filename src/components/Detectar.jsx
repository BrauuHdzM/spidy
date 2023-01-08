import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import { Escanear } from './Escanear';
import { CameraCapture } from './CameraCapture';
//import App from './App';

// ...
export const Detectar = ()=>{
    const [option, setOption] = useState(false);//false => render module  Escanear | true => render module CameraCapture

    




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
                {option?<CameraCapture/>:<Escanear/>}
            </div>
            
        </div>
      );
    

}