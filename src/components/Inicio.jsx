import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imagenprueba from '../images/imagenprueba.jpg';
import portada1 from '../images/portada1.jpg';
import portada2 from '../images/portada2.jpg';
import portada3 from '../images/portada3.jpg';
import prueba2 from '../images/prueba2.jpg';
import Button from 'react-bootstrap/Button';
import { BsTypeH2 } from 'react-icons/bs';
import GridLoader from "react-spinners/GridLoader";


export const Inicio = () => {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{

   setLoading(false)
   setTimeout(()=>{

    setLoading(false)
   },8000)

  },[])
  return (
    
    <>
    {
  loading?
<div>
<GridLoader color="#d63636" loading={loading} size={150} />
</div>
  :
      
<div>
    <Carousel variant='light'>
      <Carousel.Item>
      <a href="/Escanear">
        <img
          className="d-block w-100"
          src={portada1}
          alt="First slide" />
        <Carousel.Caption>
          <h3>¿Te preocupó la araña que viste?</h3>
          <p>Escanea tu preocupación aquí</p>
        </Carousel.Caption>
       </a> 
      </Carousel.Item>

      <Carousel.Item>
        <a href="/InformacionArana">
        <img
          className="d-block w-100"
          src={portada2}
          alt="Second slide" />
        <Carousel.Caption>
          <h3>¿Cuáles son especies de arañas peligrosas?</h3>
          <p>Descubrelo aquí</p>
        </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="/Nosotros">
        <img
          className="d-block w-100"
          src={portada3}
          alt="Third slide" />
        <Carousel.Caption>
          <h3>¿Tienes alguna duda o sugerencia?</h3>
          <p>Contáctanos aquí</p>
        </Carousel.Caption>
        </a>
      </Carousel.Item>

    </Carousel><br></br><br></br>
    <div style={{ height: '30vh' }}>
        <h2 class="text-center"><font color="white">¿Te preocupa la araña que encontraste hoy en tu casa?</font></h2>
        <h2 class="text-center"><font color="white">¿Me puede hacer daño?</font></h2>
        <br></br>
        
        <div class="text-center">
        <Button variant="primary" size="md" href="/Escanear">
          ¡Prueba la aplicación aquí!
        </Button>
        </div>

      </div><br></br><div>
        <br></br>
        <div class>
        <h5 class="text-center"><font color="white">Acerca de este proyecto</font></h5>
        </div>
        <p class="text-justify"><font color="white">Pues este proyecto nace de que el compa de Ingeniería de software dijo sorprendanme y pues
          pues aquí está, nacido de la creatividad de spiderman o algo asi, pero es trabajo honesto jeje.
          Espero que les guste y que les sirva de algo, si no pues no se que decirles, pero bueno, ahora toca aprende
          a usar Tensorflow y a hacer un modelo de machine learning para que reconozca las arañas, pero eso es para otro día.
          </font>
        </p>
      </div>
      </div>
      }

      </>
    
  )
}
