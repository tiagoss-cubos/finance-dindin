import React from "react";
import Header from "../../components/Header";
import ModalStorgeTransations from "../../components/ModalStorgeTransations";
import Resume from "../../components/Resume";
import TransationsList from "../../components/TransationsList";
import "./styles.css";

function Main() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
      <Header></Header>
      <main>
        <TransationsList />
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
