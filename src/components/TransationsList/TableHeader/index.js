import React from "react";
import "./styles.css";

const TableHeader = () => {
  return (
    <div className="table-header">
      <div className="column-title">Data</div>
      <div className="column-title">Dia da semana</div>
      <div className="column-title">Descrição</div>
      <div className="column-title">Categoria</div>
      <div className="column-title">Valor</div>
      <div className="column-title">Extra</div>
    </div>
  );
};

export default TableHeader;
