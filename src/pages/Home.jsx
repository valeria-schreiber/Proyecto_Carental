import SearchHeader from "../component/SearchHeader/SearchHeader";
import "../styles/home.css";
import { CardHome } from "../component/CardCategorias/CardHome.jsx";
import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <div className="search-header">
        <SearchHeader />
      </div>

      <div className="cards-container">
        <CardHome />
      </div>
    </Fragment>
  );
};

export default Home;
