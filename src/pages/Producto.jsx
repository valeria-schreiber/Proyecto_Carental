import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ImgProducto from "../component/Producto/ImgProducto";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Calendar from "react-calendar";
import "../styles/Producto.css";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Producto({ setIsLogged }) {
  const { productoCategoria } = useContext(DataContext);
  const parametro = useParams();
  let idParam = parseInt(parametro.id);
  const obj = productoCategoria.filter((pro) => pro.id === idParam);

  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    navigate(`/reserva/${obj[0].id}`);
  };

  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date < new Date();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header className="header-prod">
        <div className="header-prod-izq">
          <h3 className="titulo-principal">{obj[0].nombre}</h3>
          <h6 className="caracteristicas-producto">
            {obj[0].categoria.descripcion}
          </h6>
        </div>
        <Link to={"/home"} className=" nav-prod-icon">
          <ArrowBackIosIcon style={{ color: "white" }} />
        </Link>
      </header>
      <div className="prod">
        <ImgProducto prod={obj} className="img-producto" />
        <div>
          <h3 className="title-producto">{obj[0].nombre}</h3>
          <p className="descripcion-producto">{obj[0].descripcion} </p>
        </div>
      </div>
      <div>
        <h3 className="titulo-caracteristicas">
          Características del automovil
        </h3>
        <ul className="lista-caracteristicas">
          {obj[0].caracteristica.map((caract) => (
            <li key={caract.id}> {caract.nombre}</li>
          ))}
        </ul>
      </div>

      <div className="content">
        <h3 className="titulo-fechas">Fechas disponibles</h3>
        <Calendar
          className="producto-calendario"
          defaultView="month"
          showDoubleView={true}
          selectRange={true}
          tileDisabled={tileDisabled}
        />
        <button onClick={handlerSubmit} className="boton-producto">
          Iniciar Reserva
        </button>
      </div>

      <h3 className="h3-ter">Qué tenés que saber</h3>
      <section className="terminos-container">
        <div className="llegada">
          <h6 className="terminos-partes">LLEGADA CON RETRASO</h6>
          <p className="p-terminos">
            {" "}
            Si hacés una reserva y no te presentás a la hora pactada tenemos una
            tolerancia de espera de 59 minutos, una vez pasados se considera no
            show y la reserva queda cancelada.
          </p>
        </div>
        <div className="salud">
          <h6 className="terminos-partes">SALUD Y SEGURIDAD</h6>
          <p className="p-terminos">
            {" "}
            El auto es desinfectado después de cada alquiler, sobre todo las
            superficies que más se tocan, como asientos, palanca de cambios,
            picaportes y volante.
          </p>
        </div>
        <div className="cancelacion">
          <h6 className="terminos-partes">CANCELACIÓN DE RESERVA</h6>

          <p className="p-terminos">
            {" "}
            Podes cancelar tu reserva en el momento que lo desees con un cargo
            adicional dependiendo del monto total de la reserva y adicionalmente
            un 4% de cargos administrativos.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Producto;
