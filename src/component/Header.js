import React from "react";

export default function Header() {
  return (
    <div
      className=" header flex flex-col justify-center border-2 border-solid border-black
     w-2/2 h-16 mx-40 text-center my-10 mt-16 rounded-lg"
    >
      <h1 className="font-bold  m-0 text-3xl"> Hi Richard</h1>
      <h3>
        Welcome back to your{" "}
        <a href="w3school.com" target="_blank">
          Money Manager
        </a>
      </h3>
    </div>
  );
}
