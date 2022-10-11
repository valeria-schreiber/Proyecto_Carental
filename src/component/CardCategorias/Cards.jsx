import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../../styles/cards.css";

const Cards = ({ autos }) => {
  return (
    <div className="cards-container">
      <h3 className="titulo-recomendaciones">Recomendaciones por categoría</h3>
      {autos.map((auto) => (
        <Card
          key={auto.id}
          style={{
            width: "40rem",
            height: "15rem",
            paddingBottom: "10px",
            backgroundColor: "#fbfdfc",
          }}
        >
          <div className="cards-main-container">
            <div>
              <Card.Img
                variant="top"
                src={auto.imagen[0]?.url}
                style={{ width: "23rem", height: "15rem" }}
              />
            </div>
            <div>
              <Card.Body>
                <Card.Title className="card-titulo">{auto.nombre}</Card.Title>
                <Card.Text className="card-texto" style={{ fontSize: "11px" }}>
                  {auto.descripcion}
                </Card.Text>
                <button className="recomendaciones-boton">
                  <Link to={`/producto/${auto.id}`}>Ver mas</Link>
                </button>
              </Card.Body>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
