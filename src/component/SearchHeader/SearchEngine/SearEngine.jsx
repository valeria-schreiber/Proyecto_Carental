import React, { useContext } from "react";
import Select from "react-select";
import { DataContext } from "../../../context/DataContext";


const SearchEngine = ({ setAutoCiudad }) => {
  const { ciudadSelec } = useContext(DataContext);

  const handlerOpt = (value) => {
    setAutoCiudad(value.value);
  };
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 30,
      minHeight: 28,
    }),
  };

  return (
    <Select
      placeholder="Selecciona una ciudad"
      options={ciudadSelec.map((coche) => ({
        label: coche.ciudad,
        value: coche.id,
      }))}
      onChange={handlerOpt}
      styles={customStyles}
    />
  );
};

export default SearchEngine;
