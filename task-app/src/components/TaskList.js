import { useState } from "react"

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] =useState('');

    const addTask = () => {
        if(input.trim() === ''){
            return;
        }
       setTasks([...tasks, input])
       setTasks(''); 
    }
  return (
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
  )
}

export default TaskList;
