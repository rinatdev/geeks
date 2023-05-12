import React from 'react'
import style from './Modal.module.css'

const Modal = () => {
  return (
    <>
        <div className={style.modalWrapper}></div>
        <div className={style.modalContent}></div>
    </>
  )
}

export default Modal