import '../styles/App.css';
import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar';
import { Inicio } from './Inicio';
import { Nosotros } from './Nosotros';
import { Mapa } from './Mapa';
import { Detectar } from './Detectar';
import { AdminBar } from './AdminBar';
import { CameraCapture } from './CameraCapture';
import { AdminPanel } from './AdminPanel';
import { InformacionArana } from './InformacionArana';
import { Escanear } from './Escanear';

import GridLoader from "react-spinners/GridLoader";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {

    setLoading(false)
    setTimeout(() => {

      setLoading(false)
    }, 60000)

  }, [])

  const [IsAdmin, setIsAdmin] = useState(false);

  const logIn = () => {

    setIsAdmin(true);


  }
  const logout = () => {

    setIsAdmin(false);

  }


  return (

    <Router>
      <div>
        {IsAdmin ? <AdminBar logout={logout} ></AdminBar> : <NavBar logIn={logIn} />}
      </div>

      {
        loading ?

          <GridLoader color="#d63636" loading={loading} size={150} />

          :
          <div className='container'>

            <hr />
            <Routes>
              <Route path="/InformacionArana" element={<InformacionArana />}>
              </Route>
              <Route path="/Nosotros" element={<Nosotros />}>
              </Route>
              <Route path="/Detectar" element={<Detectar />}>
              </Route>
              <Route path="/Escanear" element={<Escanear />}>
              </Route>
              <Route path="/CameraCapture" element={<CameraCapture />}>
              </Route>
              <Route path="/Mapa" element={<Mapa />}>
              </Route>
              <Route path="/" element={<Inicio />}>
              </Route>
              <Route path="/AdminPanel" element={<AdminPanel IsAdmin={IsAdmin} />}>
              </Route>

            </Routes>
          </div>
      }


    </Router>
  );
}


export default App;
