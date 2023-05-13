import React from 'react'
import style from './ButtonAction.module.css'

const ButtonAction = ({ children, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>{children}</button>
  )
}

export default ButtonAction