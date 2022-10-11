import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Calendar from "react-calendar";
import "../styles/reserva.css";
import { DataContext } from "../context/DataContext";
import { useEffect } from "react";
import location from "../assets/img/icons/location.png";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-datepicker";
import { useJwt } from "react-jwt";

function Reserva() {
  const dayjs = require("dayjs");
  const { productoCategoria, sendReserva } = useContext(DataContext);
  const parametros = useParams();
    let parametro = parseInt(parametros.id);
  const { decodedToken, isExpired } = useJwt(localStorage.getItem("token"));
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [reserva, setReserva] = useState({
    hora : "",
    fecha_inicial: "",
    fecha_final: "",
    productos_id: parametro, 
    usuario_id: decodedToken?.idusers
    })
  const navigate = useNavigate();
  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date < new Date();
  };
 

  const auto = productoCategoria.filter((pro) => pro.id === parametro);
  console.log(dayjs(date[0]).format("YYYY-MM-DD"));
  console.log(dayjs(date[1]).format("YYYY-MM-DD"));
  console.log(startDate);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Confrimar Reserva")
    navigate("/reservaExitosa")
    sendReserva(reserva)

  }
  const handleSel = (e)=>{

    setReserva({...reserva,
    hora: startDate,
    fecha_inicial: dayjs(date[0]).format("YYYY-MM-DD"),
    fecha_final: dayjs(date[1]).format("YYYY-MM-DD")
  });
  }
  useEffect(() => {
    
    console.log(reserva);
  }, [reserva])
  
  

  return (
    <div className="reserva-container">
      <header className="header-reserva">
        <div className="header-reserva-izq">
          <h3 className="reserva-nombre">{auto[0].nombre}</h3>
          <h6 className="categoria-reserva">{auto[0].categoria.descripcion}</h6>
        </div>
        <Link to={`/producto/${auto[0].id}`}>
          <ArrowBackIosIcon style={{ color: "white" }} className="arrow" />
        </Link>
      </header>

      <div className="reserva-body">
      <form className="bloque-inputs" onSubmit={handleSubmit}>
        <div className="reserva-body-container">
          <div className="reserva-body-container-1">
            <h2 className="bloque-inputs-titulo">Completá tus datos</h2>
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={decodedToken?.name}
                className="reserva-dato"
              />
              <label>Apellido</label>
              <input
                type="text"
                name="apellido"
                className="reserva-dato"
                value={decodedToken?.lastName}
              />
              <label>Correo electrónico</label>
              <input
                type="email"
                name="email"
                className="reserva-dato"
                value={decodedToken?.sub}
              />
              <label>Ciudad</label>
              <input
                type="text"
                name="nombre"
                className="reserva-dato"
                value={auto[0].ciudad.ciudad}
              />

            <section className="sec-calendar">
              <h2 className="bloque-titulo-calendario">
                Seleccioná tu fecha de reserva
              </h2>
              <Calendar
                defaultView="month"
                showDoubleView={true}
                selectRange={true}
                tileDisabled={tileDisabled}
                className="reserva-calendario"
                onChange={setDate}
                defaultValue={date}
              />
            </section>
            <section className="hora-llegada">
              <h2 className="titulo-hora-llegada">Tu horario de llegada</h2>
              <div className="body-hora-llegada">
                <label>Indicá tu horario estimado de llegada</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(dayjs(date).get('hour'))}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={60}
                  timeCaption="seleccionar hora de llegada"
                  dateFormat="h:mm aa"
                  required={true}
                  dropdownMode={true}
                />
              </div>
            </section>
          </div>

          <div className="reserva-body-container-2">
            <section className="bloque-detalle-reserva">
              <h2 className="detalle-reserva-titulo">Detalle de reserva</h2>
              <img
                src={auto[0].categoria.urlImagen}
                alt=""
                className="imagen-auto"
              />
              <div className="detalle-reserva-2parte">
                <h2 className="detalle-reserva-titulo-2">{auto[0].nombre}</h2>
                <h5>{auto[0].categoria.descripcion}</h5>
                <div className="location-img-container">
                  <img src={location} alt="" className="location-img" />
                  <span>{auto[0].ciudad.ciudad}</span>
                </div>

                <label className="check-in">Check-in</label>
                <input
                  type="text"
                  value={dayjs(date[0]).format("YYYY/MM/DD")}
                  
                  
                  
                />
                <label>Check-out</label>
                <input
                  type="text"
                  value={dayjs(date[1]).format("YYYY/MM/DD")}
                 
                />

                <div className="boton-confirmar-reserva-container">
                  <button className="boton-confirmar-reserva" type="submit" onClick={(e)=>handleSel(e)}>
                     Confirmar reserva 
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </form>
        <div className="reserva-body-container-3">
          <h3 className="reserva-terminos">Qué tenés que saber</h3>
          <section className="terminos-container">
            <div>
              <h6 className="terminos-partes">LLEGADA CON RETRASO</h6>
              <span className="reserva-llegada">
                Si hacés una reserva y no te presentás a la hora pactada tenemos
                una tolerancia de espera de 59 minutos, una vez pasados se
                considera no show y la reserva queda cancelada.
              </span>
            </div>
            <div>
              <h6 className="terminos-partes">SALUD Y SEGURIDAD</h6>
              <span className="reserva-llegada">
                El auto es desinfectado después de cada alquiler, sobre todo las
                superficies que más se tocan, como asientos, palanca de cambios,
                picaportes y manubrio.
              </span>
            </div>
            <div>
              <h6 className="terminos-partes">CANCELACIÓN DE RESERVA</h6>
              <span className="reserva-llegada">
                Podes cancelar tu reserva en el momento que lo desees con un
                cargo adicional dependiendo del monto total de la reserva y
                adicionalmente un 4% de cargos administrativos.
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Reserva;
