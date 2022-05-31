import { useState } from "react";
import { nanoid } from "nanoid";
import AddNewTodo from "./AddNewTodo";
import TodoList from "./TodoList";
import FilteredData from "./FilteredData";
export default function Todo() {
  const initialTasks = [
    { id: "001a", task: "task1", isCompleted: false, isDeleted: false },
    { id: "001b", task: "task2", isCompleted: false, isDeleted: false },
    { id: "001c", task: "task3", isCompleted: false, isDeleted: false },
  ];

  const [alltodo, setAllTodo] = useState(initialTasks);
  const [showFilteredData, setShowFilteredData] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const handleViewDeletedTask = () => {
    setShowFilteredData(true);
    const tasks = alltodo.filter((element) => element.isDeleted === true);
    setFilteredData(tasks);
  };

  const handleViewAllTask = () => {
    setShowFilteredData(true);
    setFilteredData(alltodo);
  };

  const handleDeleteItem = (todoId) => {
    const itemList = alltodo.map((element) => {
      if (element.id === todoId) {
        const deleteItemList = { ...element, isDeleted: true };
        return deleteItemList;
      }
      return element;
    });
    setAllTodo(itemList);
  };

  const handleMarkComplete = (todoId) => {
    const newItemList = alltodo.map((element) => {
      if (element.id === todoId) {
        const newValue = { ...element, isCompleted: true };
        return newValue;
      }
      return element;
    });
    setAllTodo(newItemList);
  };

  const handleNewTodo = (newTodo) => {
    let newTodoObj = {
      id: nanoid(5),
      task: newTodo,
      isCompleted: false,
      isDeleted: false,
    };
    const newTodoList = [...alltodo, newTodoObj];
    setAllTodo(newTodoList);
  };
  const handleDeleteTodo = () => {
    setAllTodo([]);
  };

  return (
    <>
      <AddNewTodo
        handleAddNewTodo={handleNewTodo}
        handleDeleteAll={handleDeleteTodo}
      />
<div className="text-center flex flex-row justify-center" >
      <div className="flex justify-center text-center h-16">
        <button
          className="border-2 border-solid border-blue-200 bg-blue-700 cursor-pointer text-white
            font-bold py-3 px-5 rounded-lg drop-shadow-2xl mx-auto block hover:bg-black 
        "
          onClick={() => setShowFilteredData(false)}
        >
          Active Todo
        </button>

        <button
          className="border-2 border-solid border-blue-200 bg-red-700 cursor-pointer text-white
font-bold py-3 px-5 rounded-lg drop-shadow-2xl mx-auto block
"
          onClick={handleViewDeletedTask}
        >
          All Deleted Todo X
        </button>

        <button
          className="border-2 border-solid border-blue-200 bg-blue-700 cursor-pointer text-white
font-bold py-3 px-5 rounded-lg drop-shadow-2xl mx-auto block hover:bg-black 
"
          onClick={handleViewAllTask}
        >
          All Task
        </button>
     </div>
     </div>
      
        {showFilteredData === true ? (
          <FilteredData filteredData={filteredData} />
        ) : (
          <TodoList
            handleMarkComplete={handleMarkComplete}
            handleDeleteItem={handleDeleteItem}
            AllTodo={alltodo}
          />
        )}
      
    </>
  );
}
