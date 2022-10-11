import React, { useState } from "react";
import DateRange from "./DateRange/DateRange";
import SearchEngine from "./SearchEngine/SearEngine";
import "../../styles/search-header.css";
import { Link } from "react-router-dom";

const SearchHeader = () => {
  const [autoCiudad, setAutoCiudad] = useState([]);

  return (
    <div className="header-cont">
      <h2 className="header-h2">Busca las últimas ofertas en autos</h2>
      <div className="inputs">
        <div className="option-container">
          <SearchEngine setAutoCiudad={setAutoCiudad} />
        </div>

        <div className="range-container">
          <DateRange />
        </div>
        <Link to={`/ciudad/${autoCiudad}`}>
          <button className="search-button">Buscar</button>
        </Link>
      </div>
    </div>
  );
};

export default SearchHeader;
