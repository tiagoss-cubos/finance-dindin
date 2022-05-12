import React from "react";
import closeIcon from "../../assets/close-icon.svg";
import "./styles.css";

const defaultValuesForm = {
  value: 0,
  category: "",
  date: "",
  description: "",
};

const ModalStorgeTransations = ({ setOpen }) => {
  const [activeButton, setActiveButton] = React.useState("credit");
  const [form, setForm] = React.useState(defaultValuesForm);

  function handleChange(target) {
    setForm({ ...form, [target.name]: [target.value] });
  }

  return (
    <div className="modal">
      <div className="modal-content modal-storage">
        <img className="close-icon" src={closeIcon} alt="close icon"></img>
        <h2>Adicionar Registro</h2>
        <div className="container-buttons">
          <button
            className={`btn-empty ${activeButton === "credit" && "btn-credit"}`}
            onClick={() => setActiveButton("credit")}
          >
            Entrada
          </button>
          <button
            className={`btn-empty ${activeButton === "debit" && "btn-debit"}`}
            onClick={() => setActiveButton("debit")}
          >
            Saída
          </button>
        </div>
        <form>
          <div>
            <label>Valor</label>
            <input
              type="number"
              name="value"
              value={form.value}
              onChange={(event) => handleChange(event.target)}
            ></input>
          </div>
          <div>
            <label>Categoria</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={(event) => handleChange(event.target)}
            ></input>
          </div>
          <div>
            <label>Data</label>
            <input
              type="text"
              name="date"
              value={form.date}
              onChange={(event) => handleChange(event.target)}
            ></input>
          </div>
          <div>
            <label>Descrição</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={(event) => handleChange(event.target)}
            ></input>
          </div>
          <div className="container-btn-insert ">
            <button className="btn-confirm-insert ">Confirmar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalStorgeTransations;
