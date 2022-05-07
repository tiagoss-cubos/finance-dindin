import React from "react";
import ArrowDown from "../../../assets/Arrow-down.svg";
import ArrowUp from "../../../assets/Arrow-up.svg";
import "./styles.css";

const TableHeader = () => {
  const [filter, setFilter] = React.useState("date");
  const [order, setOrder] = React.useState("asc");

  function handleChangeType(type) {
    if (filter === type) {
      setOrder(order === "asc" ? "desc" : "asc");
    }
    setFilter(type);
  }

  return (
    <div className="table-header">
      <div
        className="column-title cursor-pointer"
        onClick={() => handleChangeType("date")}
      >
        <span>Data</span>
        {filter === "date" && (
          <img src={order === "asc" ? ArrowUp : ArrowDown} alt="Arrow up"></img>
        )}
      </div>
      <div
        className="column-title cursor-pointer"
        onClick={() => handleChangeType("weekday")}
      >
        <span>Dia da semana</span>
        {filter === "weekday" && (
          <img src={order === "asc" ? ArrowUp : ArrowDown} alt="Arrow up"></img>
        )}
      </div>
      <div className="column-title">
        <span>Descrição</span>
      </div>
      <div className="column-title">
        <span>Categoria</span>
      </div>
      <div
        className="column-title cursor-pointer"
        onClick={() => handleChangeType("value")}
      >
        <span>Valor</span>
        {filter === "value" && (
          <img src={order === "asc" ? ArrowUp : ArrowDown} alt="Arrow up"></img>
        )}
      </div>
      <div className="column-title"></div>
    </div>
  );
};

export default TableHeader;
