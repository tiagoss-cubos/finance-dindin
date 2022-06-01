import React, { useEffect } from "react";
import Header from "../../components/Header";
import ModalStorgeTransations from "../../components/ModalStorgeTransations";
import Resume from "../../components/Resume";
import TransationsList from "../../components/TransationsList";
import "./styles.css";

function Main() {
  const [open, setOpen] = React.useState(false);
  const [transactions, setTransactions] = React.useState([]);

  useEffect(() => {
    handleLoadTransactions();
  }, []);

  async function handleLoadTransactions() {
    const response = await fetch("http://localhost:3334/transactions", {
      method: "GET",
    });

    const data = await response.json();
    setTransactions(data);
  }
  return (
    <div className="App">
      <Header></Header>
      <main>
        <TransationsList transactions={transactions} />
        <div>
          <Resume />
          <button className="btn-add-register" onClick={() => setOpen(true)}>
            Adicionar Registro
          </button>
        </div>
      </main>
      <ModalStorgeTransations open={open} setOpen={setOpen} />
    </div>
  );
}

export default Main;
