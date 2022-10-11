import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Header from './component/Header/Header';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Footer from './component/Footer/Fotter';
import Producto from './pages/Producto';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carrusel from './pages/Carrusel';
import { DataProvider} from "./context/DataContext"; 
import Ciudad from './pages/Ciudad';
import Reserva from "./pages/Reserva";
import ProtectedRoutes from "./component/protectedRoutes/ProtectedRoutes";
import ReservaExitosa from "./pages/ReservaExitosa";
import Administrar from './pages/Administrar';

function App() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("token"));

  return (
    <DataProvider>
      <BrowserRouter>
      <Header isLogged={isLogged} setIsLogged={setIsLogged} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
          <Route path="/registro" element={<Registro />} />
          <Route path='/administrar' element={<Administrar />} />
          <Route path="/producto/:id" element={<Producto/>}></Route>
          <Route path="/carrusel/:id" element={<Carrusel/>}></Route>
          <Route path="/ciudad/:id" element={<Ciudad/>}></Route>
          <Route element={<ProtectedRoutes isLogged={isLogged} />}>
            <Route path="/reserva/:id" element={<Reserva />}></Route>
          </Route>
          <Route path="/reservaExitosa" element={<ReservaExitosa />}></Route>
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
