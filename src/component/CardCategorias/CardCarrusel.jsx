import { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import "../../styles/CardCarrusel.css";

function CardCarrusel() {
  const parametros = useParams();
  let idParam = parseInt(parametros.id);
  const { productos } = useContext(DataContext);
  const imgCaruse = productos.filter((prod) => prod.id === idParam);

  return (
    <div className="carrusel-container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="carrusel-img"
            src={imgCaruse[0].imagen[0].url}
            alt={""}
            dynamicHeight={true}
          />
          <Carousel.Caption>
            <h3>{imgCaruse[0].imagen[0].titulo}</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carrusel-img"
            src={imgCaruse[0].imagen[1].url}
            alt=""
            dynamicHeight={true}
          />

          <Carousel.Caption>
            <h3>{imgCaruse[0].imagen[1].titulo}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carrusel-img"
            src={imgCaruse[0].imagen[2].url}
            alt=""
            dynamicHeight={true}
          />

          <Carousel.Caption>
            <h3>{imgCaruse[0].imagen[2].titulo}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carrusel-img"
            src={imgCaruse[0].imagen[3].url}
            alt="First slide"
            dynamicHeight={true}
          />
          <Carousel.Caption>
            <h3>{imgCaruse[0].imagen[3].titulo}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CardCarrusel;
