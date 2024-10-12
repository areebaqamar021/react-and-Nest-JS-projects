import { useState } from "react"

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setinput] =useState('');

    const addTask = () => {
        if(input.trim() === ''){
            return;
        }
       setTasks([...tasks, input])
       setTasks(''); 
    }
  return (
    <div>
      <form>
        <input type="text" name="task" />
        <button>Add Task</button>
      </form>
    </div>
  )
}

export default TaskList;
