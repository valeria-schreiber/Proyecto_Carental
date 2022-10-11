import React, { useState, useContext } from "react";
import "../styles/registro.css";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { DataContext } from "../context/DataContext";



function Registro() {
  const [showSuccess, setshowSuccess] = useState(null);
  const { setSendUser, sendUsuario } = useContext(DataContext);
  const navigate = useNavigate();
 

  const Success = () => {
    if(showSuccess === true) {
   alert(" Se ha registrado exitosamente");
   navigate("/login");}
   else{ 
    alert("No se pudo registrar, vuelva a intentarlo mas tarde")
    navigate("/login");
   }
}

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      ciudad: "",
      rol: {
        id: 2,
      },
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nombre Obligatorio"),
      lastName: Yup.string().required("Apellido Obligatorio"),
      email: Yup.string()
        .email("Ingrese un e-mail que se valido")
        .required("e-mail Obligatorio"),
      password: Yup.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("Campo Obligatorio"),
      // .matches(/^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{6,}$/,
      // "La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula, un número y un carácter especial")
      ciudad: Yup.string().required(),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      setshowSuccess(true);
      sendUsuario(values);
      console.log(values);
    },
  });

  return (
    <div className="registro-container">
      <form onSubmit={formik.handleSubmit}>
        {showSuccess ? (
          <Success />
        ) : (
          <>
            <h1
              className="titulo-registro"
              style={{ backgroundColor: "#eff5f2", textAlign: "center" }}
            >
              Crear cuenta
            </h1>
            <div className="registro-partes">
              <div className="registro-partes1">
                <label>Nombre</label>
                <input
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.name && (
                  <span style={{ color: "red" }}>{formik.errors.name}</span>
                )}
              </div>
              <div className="registro-partes2">
                <label>Apellido</label>
                <input
                  type="text"
                  name="lastName"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                {formik.errors.lastName && (
                  <span style={{ color: "red" }}>{formik.errors.lastName}</span>
                )}
              </div>
              <div className="registro-partes"></div>
              <label>Correo electrónico</label>
              <input
                type="text"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              )}
            </div>
            <div className="registro-partes">
              <label>Contraseña</label>
              <input
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password && (
                <span style={{ color: "red" }}>{formik.errors.password}</span>
              )}
            </div>
            <div className="registro-partes">
              <label>Confirmar contraseña</label>
              <input
                name="pass"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.pass}
              />
              {formik.errors.pass && (
                <span style={{ color: "red" }}>{formik.errors.pass}</span>
              )}
            </div>
            <div className="registro-partes">
              <label>Ciudad</label>
              <input
                name="ciudad"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.ciudad}
              />
              {formik.errors.ciudad && (
                <span style={{ color: "red" }}>{formik.errors.ciudad}</span>
              )}
            </div>
          </>
        )}
        <div className="registro-partes">
          <br />
          <button type="submit">Crear cuenta</button>
          <div className="registro-ultimaParte">
            <h6>¿Ya tienes una cuenta? </h6>
            <Link
              to="/login"
              style={{
                color: "#66a181",
                fontWeight: "bolder",
                fontSize: "20px",
              }}
            >
              Inicia sesión
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Registro;
