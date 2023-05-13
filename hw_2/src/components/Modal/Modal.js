import React from 'react'
import style from './Modal.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'

const Modal = ({ handleShow, setNewTask, handleAddTask }) => {
  return (
    <>
        <div onClick={handleShow} className={style.modalWrapper}></div>
        <div className={style.modalContent}>
          <Input onChange={(event) => setNewTask(event.target.value)} name={'task'} placeholder={'Text...'}/>
          <Button handleClick={handleAddTask}><p>Add text</p></Button>
        </div>
    </>
  )
}

export default Modal