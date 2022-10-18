import './App.css';
import { NavBar } from './components/NavBar';
import { Inicio } from './components/Inicio';
import { Nosotros } from './components/Nosotros';
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
  

  return (
   
    <Router>
      <div>
      <NavBar />
      </div>
     
     
      
      <div className='container'>
    
      
      
     
      <hr />
      <Routes>
        <Route path="/InformacionArana" element= {<InformacionArana />}>
        </Route>
        <Route path="/Nosotros" element= {<Nosotros />}>
        </Route>
        <Route path="/Escanear" element= {<Escanear />}>
        </Route>
        <Route path="/" element= {<Inicio />}>
        </Route>
       </Routes> 
      </div>
    
    </Router>
  );
}


export default App;
