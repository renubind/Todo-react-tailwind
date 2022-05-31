import { useState } from "react";
export default function AddNewTodo({ handleAddNewTodo, handleDeleteAll }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddNewTodo(todo);
    setTodo("");
  };
  const handleTodo = (event) => {
    setTodo(event.target.value);
  };

  return (
    <>
      <h1 className=" font-extrabold text-6xl text-center text-black ">
        Todos
      </h1>
     
        <form  className="flex justify-start" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Todo List"
            value={todo}
            onChange={handleTodo}
            className="border-2 rounded-lg  w-96 h-12 bg-black text-white "
          />
          <button
            className="border-2 border-solid border-blue-200 bg-black cursor-pointer text-white
font-bold py-3 px-5 rounded-lg drop-shadow-2xl mx-auto block hover:bg-blue-900
"
            type="submit"
          >
            Add Todo
          </button>
          <button
            className="border-2 border-solid border-blue-200  bg-black cursor-pointer text-white p-6
        font-bold py-3 px-5 rounded-lg drop-shadow-2xl mx-auto block hover:bg-red-700 
        "
            type="button"
            onClick={handleDeleteAll}
          >
            Delete All X
          </button>
        </form>
    
    </>
  );
}
