import { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [todo, setTodo] = useState("");

  function handleinputChange(event) {
    setTodo(event.target.value);
  }

  function addTask() {
    setTasks([...tasks, todo]);
    setTodo("");
  }

  function deleteTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index - 1];
      updatedTasks[index - 1] = updatedTasks[index];
      updatedTasks[index] = temp;
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index + 1];
      updatedTasks[index + 1] = updatedTasks[index];
      updatedTasks[index] = temp;
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="mb-4">
        <input
          type="text"
          value={todo}
          onChange={handleinputChange}
          placeholder="Add a new task..."
          className="border border-gray-300 rounded p-2 mr-2 w-64"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>
      <ul className="w-full max-w-md">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="bg-white shadow p-4 mb-2 rounded flex justify-between items-center"
          >
            <span>{task}</span>
            <div className="space-x-2">
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
              <button
                onClick={() => moveTaskUp(index)}
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
              >
                Move Up
              </button>
              <button
                onClick={() => moveTaskDown(index)}
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-700"
              >
                Move Down
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
