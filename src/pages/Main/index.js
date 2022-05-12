import React from "react";
import Header from "../../components/Header";
import ModalStorgeTransations from "../../components/ModalStorgeTransations";
import Resume from "../../components/Resume";
import TransationsList from "../../components/TransationsList";
import "./styles.css";

function Main() {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="App">
      <Header></Header>
      <main>
        <TransationsList />
        <div>
          <Resume />
          <button className="btn-add-register">Adicionar Registro</button>
        </div>
      </main>
      {open && <ModalStorgeTransations setOpen={setOpen} />}
    </div>
  );
}

export default Main;
