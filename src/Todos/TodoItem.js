export default function TodoItem({
  taskValue,
  taskId,
  handleMarkComplete,
  handleDeleteItem,
  isCompleted,
}) {
  const taskStyle = {
    textDecorationLine: isCompleted === true ? "line-through" : "none",
    color: isCompleted === true ? "blue" : "purple",
    fontWeight: "bold",
    fontSize: "20px",
    color:"white"
  };
  return (
    <>
      <div
        className="text-center   p-2 w-120  m-2 bg-gray-600 
	
        border-2 border-solid max-w-lg  border-blue-200  px-5 py-3 "
      >
        <h1 className="text-center  " style={taskStyle}>
          {taskValue}
        </h1>

        <div className="flex font-serif font-bold mx-auto bg-white ">
          <input
            type="checkbox"
            onClick={() => handleMarkComplete(taskId)}
            className="   "
          />
          Mark Complete
          <button
            type="button"
            onClick={() => handleDeleteItem(taskId)}
            className="border-2 border-solid border-blue-200 bg-blue-800 cursor-pointer text-white
            font-bold py-3 px-5 rounded-lg drop-shadow-2xl mx-auto block hover:bg-red-700 
        "
          >
            Delete X
          </button>
        </div>
      </div>
    </>
  );
}
