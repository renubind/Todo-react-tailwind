import React from "react";

export default function TransactionList() {
  const onDeleteTransaction = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="history-transactions flex flex-col justify-center my-2 border-2 border-solid  rounded-lg border-black w-1/4 py-10">
        <h1 className="transaction-header font-bold">History</h1>
        <div className=" h-full rounded-lg">
          <ul className="transactions-table">
            <li className="table-header flex justify-start items-center px-10 border-2 border-solid border-gray-300">
              <p className="table-header-cell mx-10 font-bold">Title</p>
              <p className="table-header-cell mx-10 font-bold">Amount</p>
              <p className="table-header-cell mx-10 font-bold">Type</p>
            </li>
          </ul>
        </div>

        <li className="table-row">
          <p className="transaction-text">title</p>
          <p className="transaction-text">Rs amount</p>
          <p className="transaction-text">type</p>
          <div className="delete-container">
            <button
              className="delete-button"
              type="button"
              onClick={onDeleteTransaction}
            >
              <img
                className="delete-img"
                src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                alt="delete"
              />
            </button>
          </div>
        </li>
      </div>
    </>
  );
}
