import React from "react";
import { useState } from "react";

export default function AddTransaction() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");

  const onAddTransaction = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div
        className=" transaction-details flex  flex-col justify-between 
       mr-11 my-2 border-2 border-solid rounded-lg border-black w-1/4 py-10"
      >
        <form
          className="transaction-form flex  flex-col justify-around items-start 
        px-24 pt-24 pb-32 h-96 w-full"
          onSubmit={onAddTransaction}
        >
          <h3 className="font-bold text-xl text-gray-600 line-height-1.6">
            Add New Transaction
          </h3>

          <label className="text-black line-height-1.6" htmlFor="text">
            Title
          </label>

          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className=" bg-gray-800 text-white font-serif rounded-lg"
            type="text"
            placeholder="Title"
          />

          <label htmlFor="amount">Amount</label>

          <input
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            className="  amount bg-gray-800 text-white font-serif rounded-lg"
            type="number"
            placeholder="Amount"
          />

          <label htmlFor="text">Type</label>

          <input
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
            className=" bg-gray-800 text-white font-serif rounded-lg"
            type="text"
            placeholder="Type"
          />
          <button type="submit" className="bg-blue-800 w-1/4">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
// }
