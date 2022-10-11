import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import Cards from '../component/CardCategorias/Cards'
import { DataContext } from '../context/DataContext'


const Ciudad = () => {
    const {productos} = useContext(DataContext)
    let idC = useParams()
    let idCity = parseInt(idC.id);
    let autoCity = productos.filter(p => p.ciudad.id === idCity)
       
    let sinAutos = false;
        if (autoCity.length > 0) {
            sinAutos = true;
        }else {
            sinAutos = false;
        }
  return (
      sinAutos ? (
    <div> 
        <div style={{marginTop:"12rem", alignContent:"center"}} >
        <h1>Vehiculos disponibles en :{autoCity[0].ciudad.ciudad} </h1>
        </div>
        <Cards autos ={ autoCity}/>
    </div>
     ) : ( 
        <div style={{margin:"10rem 15rem"}} >
           <Link to="/home"> 
               <h1> No hay Autos para esta ciudad</h1>
             </Link>
        </div>
     )
    
    
        
  )
}

export default Ciudad