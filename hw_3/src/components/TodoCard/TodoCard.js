import React from 'react'
import style from './TodoCard.module.css'

const TodoCard = ({ task, handleDone, handleDelete }) => {
  return (
    <div className={ task.completed ? `${style.todoCard} ${style.done}`: style.todoCard}>
        <h3>{task.task}</h3>
        <button onClick={() => handleDone(task.id)}>Done</button>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  )
}

export default TodoCard