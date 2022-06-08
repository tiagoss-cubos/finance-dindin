import React from "react";
import "./styles.css";

const ConfirmChoose = ({ show, setClose, message, handleConfirm }) => {
  return (
    <>
      {show && (
        <div className="container-confirm">
          <div className="arrow-up"></div>
          <span>{message}</span>
          <button
            className="btn-actions-confirm btn-actions-confirm--blue"
            onClick={() => handleConfirm()}
          >
            Sim
          </button>
          <button
            className="btn-actions-confirm btn-actions-confirm--red"
            onClick={() => setClose(false)}
          >
            Não
          </button>
        </div>
      )}
    </>
  );
};

export default ConfirmChoose;
