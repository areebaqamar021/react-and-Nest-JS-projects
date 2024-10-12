import { useState } from "react"

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] =useState('');

    const addTask = () => {
        if(input.trim() === ''){
            return;
        }
       setTasks([...tasks, input])
       setInput(''); 
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
