import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function AdministrarImag ({show, onHide, setProd, prod})  {
   
  const [img, setImg] = useState({
      titulo: "",
      url: ""
    }
  )  
   
    const handleImg = (e) => {
      setProd({...prod, imagen: [...prod.imagen, {titulo: img.titulo, url: img.url}]});
      alert("Imagen agregada exitosamente");
      onHide(false);
    }

  return (
    <>
    
    <Modal
      show= {show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Cargar imagenes
        </Modal.Title>
       
      </Modal.Header> 
      
      <Modal.Body>
       
      <label className="add_imagen">
     Titulo</label>
     <input
       type="text"
       className="adminForm-input "
       name="titulo"
       onChange={(e) =>  setImg({...img, titulo: e.target.value})}
     />
     <label>
      URL
     </label>
     <input
      type="text"
      name="url"
      onChange={(e) => setImg({...img, url: e.target.value})}
      />
           
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={(e)=> handleImg(e)} >Agregar</Button>
        <Button onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  </>  

)
}