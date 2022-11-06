import './App.css';
import React, { useEffect, useState } from 'react'
import { NavBar } from './components/NavBar';
import { Inicio } from './components/Inicio';
import { Nosotros } from './components/Nosotros';
import { Mapa } from './components/Mapa';

import GridLoader from "react-spinners/GridLoader";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { InformacionArana } from './components/InformacionArana';
import { Escanear } from './components/Escanear';

function App() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{

   setLoading(false)
   setTimeout(()=>{

    setLoading(false)
   },60000)

  },[])

  return (
   
    <Router>
       
      <div>
      <NavBar />
      </div>
     
     
      {
  loading?

<GridLoader color="#d63636" loading={loading} size={150} />

  :
      <div className='container'>
    
      <hr />
      <Routes>
        <Route path="/InformacionArana" element= {<InformacionArana />}>
        </Route>
        <Route path="/Nosotros" element= {<Nosotros />}>
        </Route>
        <Route path="/Escanear" element= {<Escanear />}>
        </Route>
        <Route path="/Mapa" element= {<Mapa />}>
        </Route>            
        <Route path="/" element= {<Inicio />}>
        </Route>
             
       </Routes>  
      </div> 
      }
    
       
    </Router>
  );
}


export default App;
