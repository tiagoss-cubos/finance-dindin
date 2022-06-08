import React from "react";
import "./styles.css";
import TableHeader from "./TableHeader";
import editIcon from "../../assets/edit-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";
import ConfirmChoose from "../ConfirmChoose";
import {
  formatToMoney,
  formatToDate,
  formatToDay,
} from "../../utils/formatter";

const TransationsList = ({
  transactions,
  setCurrentTransaction,
  reload,
  setReload,
}) => {
  const [idItemDelete, setIdItemDelete] = React.useState(null);

  async function handleDeleteItem() {
    await fetch(`http://localhost:3334/transactions/${idItemDelete}`, {
      method: "DELETE",
    });

    setIdItemDelete(null);
    setReload(!reload);
  }

  return (
    <div className="table">
      <TableHeader />
      <div className="table-body">
        {transactions.map((item) => (
          <div className="table-line" key={item.id}>
            <div className="line-items">{formatToDate(item.date)}</div>
            <div className="line-items">{formatToDay(item.week_day)}</div>
            <div className="line-items">{item.description}</div>
            <div className="line-items">{item.category}</div>
            <div
              className="line-items"
              style={{ color: item.type === "credit" ? "blue" : "red" }}
            >
              {formatToMoney(item.value)}
            </div>
            <div className="line-items">
              <img
                className="action-button"
                src={editIcon}
                alt="edit-icon"
                onClick={() => setCurrentTransaction(item)}
              ></img>
              <img
                src={deleteIcon}
                alt="delete-icon"
                className="action-button"
                onClick={() => setIdItemDelete(item.id)}
              ></img>
              <ConfirmChoose
                show={item.id === idItemDelete}
                setClose={() => setIdItemDelete(null)}
                message="Apagar item?"
                handleConfirm={() => handleDeleteItem()}
              ></ConfirmChoose>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransationsList;
