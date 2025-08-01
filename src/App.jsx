import { useState } from 'react'
import React from 'react'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import './App.css'

function App() {
const [tasks, setTasks] = useState([]);
const addTask = (text) => {
    const newTask = { id: Date.now(), text };
    setTasks([...tasks, newTask]);
};
const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
};
  return (
    <div>
      <h1>To-Do List</h1>
      <TodoInput onAdd={addTask} />
      <ul>
        {tasks.map(task => (
          <TodoItem key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </ul>
      {tasks.length === 0 && <p>No tasks available</p>}
    </div>
  )
}

export default App
