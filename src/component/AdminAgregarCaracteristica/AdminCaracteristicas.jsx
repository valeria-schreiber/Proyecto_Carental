import React, {useState} from 'react'
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import Administrar from '../../pages/Administrar';

const AdminCaracteristicas = () => {
    const {caracteristicas} = useContext(DataContext)
    const [carac, setCarac] = useState("");

  return (
    <div>
        <h2>Agregar caracteristica</h2>
        {caracteristicas && caracteristicas.map(cta => <Administrar title = {cta.title}/>)}
         <label className="add-caract">
          Nombre
          <input
            type="text"
            className="adminForm-input "
            onChange={e => setCarac(e.target.value)}
          />
        </label>
        <button
        type="button"
        onClick={() => caracteristicas.push({title: carac})}>

        </button>
    </div>
  )
}
export default AdminCaracteristicas;