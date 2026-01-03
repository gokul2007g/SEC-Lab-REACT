import React, { use } from 'react'

function App() {
  const[Task, setTask] =useState([]);
  const[text, setText] =useState("");
  const addtask =()=>{
    setTask([...Task, {name:text,complete:false}])
    setText("")
  
  }
  const deleteTask =(indexToDelete)=>{
    setTask(Task.filter((_,i)=>i !== index));
  }
  return (
    <div>
      <h1>To-Do List</h1>
      <input 
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder='Enter Task'/>
      <button onClick={addtask}>Add </button>
      <ul>
        {Tasks.map((task, index)=>(
          <li key={index}>
            <input    type='checkbox'
              checked={task.complete} 
              />
            <span>{task.name}</span>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
