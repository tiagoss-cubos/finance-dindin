import React, { useEffect } from "react";
import Header from "../../components/Header";
import ModalStorgeTransations from "../../components/ModalStorgeTransations";
import Resume from "../../components/Resume";
import TransationsList from "../../components/TransationsList";
import "./styles.css";

function Main() {
  const [open, setOpen] = React.useState(false);
  const [transactions, setTransactions] = React.useState([]);
  const [currentTransaction, setCurrentTransaction] = React.useState(false);
  const [reload, setReload] = React.useState(false);

  useEffect(() => {
    handleLoadTransactions();
  }, [reload]);

  useEffect(() => {
    if (currentTransaction) {
      setOpen(true);
    }
  }, [currentTransaction]);

  useEffect(() => {
    if (!open) {
      handleLoadTransactions();
    }
    if (!open && currentTransaction) {
      setCurrentTransaction(false);
    }
    // eslint-disable-next-line
  }, [open]);

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
        <TransationsList
          transactions={transactions}
          setCurrentTransaction={setCurrentTransaction}
          reload={reload}
          setReload={setReload}
        />
        <div>
          <Resume transactions={transactions} />
          <button className="btn-add-register" onClick={() => setOpen(true)}>
            Adicionar Registro
          </button>
        </div>
      </main>
      <ModalStorgeTransations
        open={open}
        setOpen={setOpen}
        currentTransaction={currentTransaction}
      />
    </div>
  );
}

export default Main;
