import React, {useState, useContext, useEffect} from 'react'
import { DataContext } from "../context/DataContext";
import Select from "react-select";
import "../styles/Administrar.css";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {AdministrarImag} from '../component/AdministrarImag/AdministrarImag';
import { useNavigate } from 'react-router-dom';



const Administrar = () => {
  const {envio} = useContext(DataContext);
  const { 
    sendProducto,
    caracteristicas,
    categorias,
    ciudad,
  } = useContext(DataContext);
  const [modalShow, setModalShow] = useState(false);
  const [showSuccess, setshowSuccess] = useState(null);
  const [ prod, setProd ] = useState({
  
    nombre: "",
    precio: "",
    descripcion: "",
    disponible: "",
    categoria: "",
    caracteristica: "",
    imagen: "",
    ciudad: "",
    })

  
    const navigate = useNavigate();

    
    const Success = () => {
      if(showSuccess === true) {
        if(envio === 201){
     alert(" El producto se ha registrado exitosamente");
     navigate("/home");}
      else{ 
      alert("No se pudo registrar el producto, vuelva a intentarlo mas tarde");
      navigate("/home");}
          }else{ 
        alert("No se pudo registrar el producto, vuelva a intentarlo mas tarde");
        navigate("/home");}  
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
          setshowSuccess(true);
          sendProducto(prod);
          
          console.log(envio);
      }

    const handleCat = (e)=> {
          setProd(
          {...prod,
            categoria: { id: e.value },}
          )
    }
    
    const handleCiudad = (e) =>{
      setProd(
        {...prod,
          ciudad: { id: e.value }
      })
    }

    const handleDisponible = (e) => {
      setProd(
        {...prod,
        disponible: e.value}
      )
    }

    const handleCheck = (e) => {
      
      setProd(
      {...prod,
        caracteristica: [...prod.caracteristica, {id: e.target.value}]}  
      )
      
    }

    const handleChange = (e) => {
      setProd(
        {...prod, 
        nombre: e.target.value}
        )
      }

    const handlePrice = (e) => {
        setProd(
          {...prod,
          precio: parseFloat(e.target.value)}
        )
      }

    const handleChangeDes = (e) => {
      setProd(
        {...prod, 
        descripcion: e.target.value}
        )
      }

    useEffect(() => {
      console.log(prod);
    }, [prod]);

  return (
    <>
    <h1 className="title-page">Administracion de Productos</h1>
    <div className="administrar-container">
    <form onSubmit={handleSubmit}>
      {showSuccess ? (
      <Success />
      ) : (
      <>
          <h1
              className="descipcion-registro"
              style={{ backgroundColor: "#eff5f2", textAlign: "center" }}
            >
              Crear Producto
            </h1>
          <div className="Administrar-producto">
          <div className="Administrar-partes2">
            <label>Nombre</label>
            <input 
              type="text"
              name="nombre" 
              onChange={handleChange}
              required
              />
          </div>
          <div className="Administrar-partes2">
            <label>Precio</label>
            <input 
              type="text"
              name="precio" 
              onChange={handlePrice}
              required
              />
          </div>

          <label>Categoria</label>
          <Select 
            options={categorias.map((caracteristica) => (
                         {
              label: caracteristica.descripcion,
              value: caracteristica.id
            }))}
            required
            onChange={handleCat}
            />
             <label>Ciudad</label>
            <Select
            options={ciudad.map((city) => ({
              label: city.ciudad,
              value: city.id
            }))}
            required
             onChange={handleCiudad}
            />
            <div className="Administrar-partes2">
            <label>Domicilio</label>
           <input
           type= "textarea"
           name = "domicilio"
            />
           </div>
            <label>Disponible</label>
            <Select
            options= {[{label: "Disponible", value: true},
                       {label: "No disponible", value: false}]}
            onChange={handleDisponible}
            required
            />
          <div className="Administrar-partes2">
            <label>Descripcion</label>
            <input 
              type="textarea"
              rows={3}
              name="descripcion"
              onChange={handleChangeDes}
              required
              />
          </div>
          
          <label>Caracteristicas</label>
          <div className='caracteristicas-list'>
            {caracteristicas.map((car) => (
              <label>
              <input key={car.id} type="checkbox" name="id" value={car.id} onChange={handleCheck}/>
              {car.nombre}
              </label>
              ))}
              <br />
            </div>
            <div>
            <br />
            
              <Button onClick={() => setModalShow(true)} style={{marginLeft:"5rem"}}>
                <AddCircleOutlineIcon />
               Agregar Imagen
              </Button>
              <>
              <AdministrarImag
              show={modalShow}
              onHide={() => setModalShow(false)}
              setProd = {setProd}
              prod = {prod}
            />
            </>
              <br />
              <br />
              <label>Politicas de Producto</label>
          <br/>
          <br />
          <label>Normas de la casa</label>
          <input 
            type= "textarea"
            name="normas" 
          />
          <label>Salud y seguridad</label>
          <input 
            type= "textarea" 
            name="salud"
          />
          <label>Politicas de cancelacion</label>
          <input 
            type= "textarea" 
            name="cancelacion"
          /> 
       </div>    
        <div className='button-crear'>
            <Button type='submit' 
            >Crear</Button>
        </div>
        </div>
      </>
       )
      }
    </form> 
    </div>
    
    </> 
    
     
      );
    }
export default Administrar;
