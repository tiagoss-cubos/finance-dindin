import React, { useEffect } from "react";
import "./styles.css";
import { formatToMoney } from "../../utils/formatter";

const Resume = ({ transactions }) => {
  const [resume, setResume] = React.useState({
    credit: 0,
    debit: 0,
    balance: 0,
  });

  useEffect(() => {
    const sumCredit = transactions.reduce((acum, item) => {
      return item.type === "credit" ? acum + Number(item.value) : acum + 0;
    }, 0);

    const sumDebit = transactions.reduce((acum, item) => {
      return item.type === "debit" ? acum + Number(item.value) : acum + 0;
    }, 0);

    const balance = sumCredit - sumDebit;

    setResume({
      credit: sumCredit,
      debit: sumDebit,
      balance,
    });
  }, [transactions]);

  return (
    <div className="container-resumo ">
      <h3>Resumo</h3>
      <div>
        <span>Entradas</span>
        <strong className="in">{formatToMoney(resume.credit)}</strong>
      </div>
      <div>
        <span>Saídas</span>
        <strong className="out">{formatToMoney(resume.debit)}</strong>
      </div>
      <div className="horizontal-line"></div>
      <div>
        <span>Saldo </span>
        <strong className="balance">{formatToMoney(resume.balance)}</strong>
      </div>
    </div>
  );
};

export default Resume;
