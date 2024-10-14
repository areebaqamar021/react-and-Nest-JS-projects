import { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (input.trim() === "") {
      return;
    }
    setTasks([...tasks, input]);
    setInput("");
  };

  const updateTask = () => {
    if (input.trim() === "" || editIndex === null) return;
    const updatedTasks = tasks.map((t, index) =>
      index === editIndex ? input : t
    );
    setTasks(updatedTasks);
    setInput("");
    setEditIndex(null);
  };

  const startEditTasks = (index) => {
    setInput(tasks[index]);
    setEditIndex(index);
  };

  const deleteTask = (index) => {
    tasks[index] = null;

    const updatedTasks = tasks.filter((input) => input !== null);
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-lg mx-auto p-5">
      <div className="flex items-center mb-4">
        <input
          className="border border-gray-300 p-2 rounded-lg flex-1"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a Task"
        />
        {editIndex !== null ? (
          <button
            className="ml-2 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
            onClick={updateTask}
          >
            Update Task
          </button>
        ) : (
          <button
            className="ml-2 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
            onClick={addTask}
          >
            Add
          </button>
        )}
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li
            key={index}
            className="bg-gray-100 p-3 mb-2 rounded-lg flex justify-between items-center"
          >
            <span className="text-lg">{t}</span>
            <div className="flex-shrink-0 flex space-x-2">
              <button
                className="mr-2 bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-lg"
                onClick={() => startEditTasks(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
