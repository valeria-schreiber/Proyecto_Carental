import React from "react";
import { Link } from "react-router-dom";
import "../styles/reservaExitosa.css";
import carSuccess from "../assets/img/carSuccess.png";

function ReservaExitosa() {
  return (
    <div className="rexitosa-container">
      <img src={carSuccess} alt="" className="rexitosa-img" />
      <h2>Muchas gracias!</h2>
      <p>Su reserva se ha realizado con éxito</p>
      <button className="rexitosa-boton">
        <Link to="/home"> ok</Link>
      </button>
    </div>
  );
}

export default ReservaExitosa;
