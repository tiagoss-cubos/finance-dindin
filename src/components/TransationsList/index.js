import React from "react";
import "./styles.css";
import TableHeader from "./TableHeader";
import editIcon from "../../assets/edit-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";

const TransationsList = () => {
  return (
    <div className="table">
      <TableHeader />
      <div className="table-body">
        <div className="table-line">
          <div className="line-items">01/09/21</div>
          <div className="line-items">Quarta</div>
          <div className="line-items">Venda dos brigadeiros</div>
          <div className="line-items">Pix</div>
          <div className="line-items">R$ 100,00</div>
          <div className="line-items">
            <img src={editIcon} alt="edit-icon"></img>
            <img src={deleteIcon} alt="delete-icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransationsList;
