import React from "react";
import "./styles.css";

const Resume = () => {
  return (
    <div className="container-resumo ">
      <h3>Resumo</h3>
      <div>
        <span>Entradas</span>
        <strong className="in">R$ 200,00</strong>
      </div>
      <div>
        <span>Saídas</span>
        <strong className="out">R$ 70,50</strong>
      </div>
      <div className="horizontal-line"></div>
      <div>
        <span>Saldo </span>
        <strong className="balance">R$ 129,50</strong>
      </div>
    </div>
  );
};

export default Resume;
