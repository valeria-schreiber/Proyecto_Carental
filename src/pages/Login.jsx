import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import "../styles/login.css";

function Login(props) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { getLogin, token } = useContext(DataContext);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    // Previene que la pagina se vuelva a cargar
    event.preventDefault();

    getLogin(user);
  };

  //Mensaje de error
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const goHome = () => {
    props.setIsLogged(true);
    navigate("/home");
  };

  // form para el ingreso del insumo.
  const renderForm = (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <h1 style={{ backgroundColor: "#eff5f2", textAlign: "center" }}>
            Iniciar sesión
          </h1>
          <label>Correo electrónico</label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleChange}
          />
          {renderErrorMessage("name")}
        </div>
        <div className="input-container">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleChange}
          />
          {renderErrorMessage("password")}
        </div>
        <div className="button-container">
          <button type="submit">Ingresar</button>
        </div>
        <div>
          ¿Aun no tenes cuenta? <br />
          <span>
            <Link
              to="/registro"
              style={{
                color: "#66a181",
                fontWeight: "bolder",
                fontSize: "20px",
              }}
            >
              Registro
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
  return (
    <div className="login">
      <div className="login-form">
        {localStorage.length > 0 ? goHome() : renderForm}
      </div>
    </div>
  );
}

export default Login;
