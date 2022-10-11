import React, { useContext } from 'react'
import CardCarrusel from '../component/CardCategorias/CardCarrusel'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const Carrusel = () => {
  const {productos} = useContext(DataContext)
    const parametros = useParams()
    let idh = parametros.id
    idh = parseInt(idh)

  return (
    <div>
      <CardCarrusel element ={productos.filter(id => id.id === idh )}/>
    </div>
  )
}

export default Carrusel