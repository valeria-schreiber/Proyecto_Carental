import Cards from "./Cards";
import React from "react";
import "../../styles/cardCategory.css";

export const CardCategorias = ({ autoCat }) => {
  return (
    <div className="cards-container">
      <Cards autos={autoCat} />
    </div>
  );
};
