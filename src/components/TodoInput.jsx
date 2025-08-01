import React from 'react'
import { useState } from 'react'
import '../App.css'



const TodoInput = ({onAdd}) => {
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    };
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Enter task' 
        value={text} 
        onChange={(e) => setText(e.target.value)} />

        <button id='sbtn' type='submit'>Add Task</button>
    </form>
  )
}

export default TodoInput