import { Link } from 'react-router-dom';

// ...
export const Detectar = ()=>{
    return (
        <div>
            <Link to="/Escanear"><button>Subir imagen</button></Link>
            <Link to="/CameraCapture"><button>Tomar Foto</button></Link>
        </div>
      );
    

}