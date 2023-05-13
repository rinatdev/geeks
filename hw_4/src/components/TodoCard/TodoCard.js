import React, { useState } from 'react'
import style from './TodoCard.module.css'
import Input from '../Input/Input'
import ButtonAction from '../ButtonAction/ButtonAction'

const TodoCard = ({ task, handleDone, handleDelete, handleSelectEdit, isEdit, handleEdit }) => {

  const [newTitle, setNewTitle ] = useState(task.task)

  const handleNewTitle = (task) => {
    setNewTitle(task)
  }

  if(isEdit){
    return <div className={style.todoCardEdit}>
      <Input onChange={(event) => handleNewTitle(event.target.value)} value={newTitle} placeholder={'Edit...'}/>
      <ButtonAction onClick={() => handleEdit({...task, task: newTitle })}>Save</ButtonAction>
      <ButtonAction onClick={() => handleEdit({...task})}>Cancel</ButtonAction>
    </div>
  }else{

    return (
      <>
        <div className={ task.completed ? `${style.todoCard} ${style.done}`: style.todoCard}>
            <h3>{task.task}</h3>
            <div>
              <ButtonAction onClick={() => handleDone(task.id)}>Done</ButtonAction>
              <ButtonAction onClick={() => handleSelectEdit(task.id)}>Edit</ButtonAction>
              <ButtonAction onClick={() => handleDelete(task.id)}>Delete</ButtonAction>
            </div>
        </div>
      </>
    )
  }
}

export default TodoCard