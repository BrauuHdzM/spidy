
import Carousel from 'react-bootstrap/Carousel';
import portada1 from '../images/portada1.jpg';
import portada2 from '../images/portada2.jpg';
import portada3 from '../images/portada3.jpg';
import Button from 'react-bootstrap/Button';

import Prueba2HomeSp from '../images/Prueba2HomeSp.png';

export const Inicio = () => {

  return (
    
    <>
   <div class="container">
   <div class="row mt-4">
   <div class="col-md-4"> 
   </div>
   <img src={Prueba2HomeSp} class="img-responsive"  id="imgHome" ></img>
   
   </div>
   </div>
   
 
   
    <div id="text-over-img ">
      
        <h2 class="text-center"><font color="white">¿Te preocupa la araña que encontraste hoy en tu casa?</font></h2>
        <h2 class="text-center"><font color="white">¿Me puede hacer daño?</font></h2>
        <br></br>

        <div class="text-center">
        <Button id="escaner" size="md" href="/Escanear">
          ¡Prueba la aplicación aquí!
        </Button>
        </div>

      </div><br></br>
      
   
    
      </>
    
  )
}
