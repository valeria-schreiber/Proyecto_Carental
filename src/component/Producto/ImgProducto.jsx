import React from "react";
import "../../styles/imgProducto.css";
import { Link } from "react-router-dom";

const ImgProducto = ({ prod }) => {
  return (
    <>
      <div id="galery">
        <div className="prod-container">
          <div className="row gx-1">
            <div className="left-side col-md-6">
              <img src={prod[0].imagen[0].url} alt="" />
            </div>
            <div className="rigth-side col-md-6 ">
              <img src={prod[0].imagen[1].url} alt="" />
              <img src={prod[0].imagen[2].url} alt="" />

              <img src={prod[0].imagen[3].url} alt="" />
              <img src={prod[0].imagen[4].url} alt="" />
            </div>
          </div>
        </div>
        <div className="img-prod-div">
          <button className="img-prod-link">
            <Link
              to={`/carrusel/${prod[0].id}`}
              style={{
                color: "#66a181",
                fontWeight: "normal",
              }}
            >
              Ver mas
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ImgProducto;
