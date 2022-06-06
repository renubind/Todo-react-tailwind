import React from "react";
// import { useState } from "react";

export default function Balance() {
  // const[balance,setBalance]=useState(0);
  // const[income,setIncome]=useState(0);
  // const[expense,setExpense]=useState(0);
  return (
    <>
      <div className="flex  justify-center  my-10">
        <div
          className=" mx-10 border-2 border-solid border-green-800 font-bold
      text-black text-lg bg-green-400  w-1/5 h-20 rounded-lg"
        >
          <h3>Your Balance</h3>
          <p>0.0</p>
        </div>

        <div
          className=" mx-10 border-2 border-solid border-blue-900
    font-bold text-black text-lg bg-blue-200 w-1/6 rounded-lg"
        >
          <h3>Your Income</h3>
          <p>0.0</p>
        </div>

        <div
          className=" mx-10 border-2 border-solid border-purple-900
     font-bold text-black text-lg bg-purple-600  w-1/6 rounded-lg"
        >
          <h3>Your Expense</h3>
          <p>0.0</p>
        </div>
      </div>
    </>
  );
}
