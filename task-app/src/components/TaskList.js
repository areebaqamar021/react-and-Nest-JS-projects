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
      setTasks('');
      setEditIndex(null);
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
      <button onClick={addTask}>
        Add
      </button>
      </div>
      <ul>
          {tasks.map((t, index) => (
            <li key={index} className="bg-gray-50 p-3 mb-2 rounded">
              {t}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TaskList;
