import { useState } from "react"

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const addTask = () => {
        if(input.trim() === ''){
            return;
        }
       setTasks([...tasks, input])
       setInput(''); 
    }

    const updateTask = () => {
      if(input.trim() === '' || editIndex === null) return;
      const updatedTasks = tasks.map((t, index) =>
        index === editIndex ? input : t
      );  
      setTasks(updatedTasks);
      setInput('');
      setEditIndex(null);
    }

    const startEditTasks = (index) => {
      setInput(tasks[index]);
      setEditIndex(index);
    }

    const deleteTask = (index) => {
      tasks[index] = null;

      const updatedTasks = tasks.filter(input => input !== null);
      setTasks(updatedTasks)
    }

  return (
    <div>
        <div>
      <input 
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Enter a Task"
      />
      {editIndex !== null ? (
        <button onClick={updateTask}>Update Task</button>
      ) : (
        <button onClick={addTask}>
        Add
      </button>
      )

      }
  
      </div>
      <ul>
          {tasks.map((t, index) => (
            <li key={index} className="bg-gray-50 p-3 mb-2 rounded">
              <span>{t}</span>
              <button className="ml-2" onClick={() => startEditTasks(index)}>Edit</button>
              <button className="ml-2" onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TaskList;
