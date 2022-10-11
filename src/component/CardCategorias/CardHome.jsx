import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import "../../styles/cardHome.css";
import { DataContext } from "../../context/DataContext";
import { CardCategorias } from "./CardCategorias";

export const CardHome = () => {
  const { categorias, productoCategoria, obtenerProductosPorCatId } = useContext(DataContext);

  const handlerCategoria = (e) => {
    obtenerProductosPorCatId(e);
    
  };
  

  return (
    <>
      <div className="cardHome-titulo">
        <h3>Buscar por categoría</h3>
      </div>
      <div className="card-home-container">
        {categorias.map((producto) => (
          <div key={producto.id} className="cards-container">
            <Card
              style={{
                width: "17em",
                height: "25rem",
                boxShadow: "2px 2px #E0E0E0",
              }}
            >
              <Card.Img
                className="card-home-img"
                variant="top"
                src={producto.urlImagen}
                style={{
                  width: "100%",
                  clipPath: "ellipse(100% 100% at 60% 0%)",
                  //clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
                }}
              />
              <Card.Body>
                <Card.Title
                  className="card-home-title"
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  {producto.descripcion}
                </Card.Title>
                <Card.Text className="card-text-home">
                  {producto.titulo}
                </Card.Text>
                <Button
                  className="card-home-button"
                  style={{
                    background: "#75aa8d",
                    border: "#66a181",
                    position: "absolute",
                    bottom: "15px",
                    left: "35%",
                  }}
                  onClick={() => handlerCategoria(producto.id)}
                >
                  Ver mas
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {<CardCategorias
      autoCat={productoCategoria}
    />}
    </>
  );
};
