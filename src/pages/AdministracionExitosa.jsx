import React from 'react'
import {Link} from "./Administrar"

function AdministracionExitosa() {
    return (
      <div className="administracion-container">
        <p>Su producto se ha cargado con éxito</p>
        <button className="administracion-boton">
          <Link to="/home"> ok</Link>
        </button>
      </div>
    );
  }
  
  export default AdministracionExitosa;