import React from 'react'
import '../App.css'


const TodoItem = ({task,onDelete}) => {
  return (
   <li>
       <span>{task.text}</span>
    <button id='dbtn' onClick={() => onDelete(task.id)}>Delete</button>
   </li>
  )
}

export default TodoItem